import "./list.scss";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import { format } from "date-fns";
import { DateRange } from "react-date-range";
import SearchItem from "../../components/searchItem/SearchItem";
import useFetch from "../../hooks/useFetch";

const List = () => {
  const location = useLocation();
  const [destination, setDestination] = useState(location.state.destination);
  const [date, setDate] = useState(location.state.date);
  const [openDate, setOpenDate] = useState(false);
  const [options, setOptions] = useState(location.state.options);
  const [min, setMin] = useState(undefined);
  const [max, setMax] = useState(undefined);

  const { data, loading, error, reFetch } = useFetch(
    `http://localhost:8800/api/properties?city=${destination}&min=${min || 0}&max=${max || 9999}`
  );

  const handleClick = () => {
    reFetch();
  };

  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div className="listContainer">
        <div className="listWrapper">
          <div className="listSearch">
            <h1 className="listSearch__title">Search</h1>
            <div className="listSearch__item">
              <label>Destination</label>
              <input placeholder={destination} type="text" />
            </div>
            <div className="listSearch__item">
              <label>Check-in Date</label>
              <span
                className="listSearch__itemDate"
                onClick={() => setOpenDate(!openDate)}
              >{`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(
                date[0].endDate,
                "MM/dd/yyyy"
              )}`}</span>
              {openDate && (
                <DateRange
                  onChange={(item) => setDate([item.selection])}
                  minDate={new Date()}
                  ranges={date}
                />
              )}
            </div>
            <div className="listSearch__item">
              <label>Options</label>
              <div className="listSearch__options">
                <div className="listSearch__optionItem">
                  <span className="listSearch__optionText">
                    Min price <small>per night</small>
                  </span>
                  <input
                    type="number"
                    onChange={(e) => setMin(e.target.value)}
                    className="listSearch__optionInput"
                  />
                </div>
                <div className="listSearch__optionItem">
                  <span className="listSearch__optionText">
                    Max price <small>per night</small>
                  </span>
                  <input
                    type="number"
                    onChange={(e) => setMax(e.target.value)}
                    className="listSearch__optionInput"
                  />
                </div>
                <div className="listSearch__optionItem">
                  <span className="listSearch__optionText">Adult</span>
                  <input
                    type="number"
                    min={1}
                    className="listSearch__optionInput"
                    placeholder={options.adult}
                  />
                </div>
                <div className="listSearch__optionItem">
                  <span className="listSearch__optionText">Children</span>
                  <input
                    type="number"
                    min={0}
                    className="listSearch__optionInput"
                    placeholder={options.children}
                  />
                </div>
                <div className="listSearch__optionItem">
                  <span className="listSearch__optionText">Room</span>
                  <input
                    type="number"
                    min={1}
                    className="listSearch__optionInput"
                    placeholder={options.room}
                  />
                </div>
              </div>
            </div>
            <button className="listSearch__button" onClick={handleClick}>
              Search
            </button>
          </div>
          <div className="listResult">
            {loading ? (
              "loading"
            ) : (
              <>
                {data.map((item) => (
                  <SearchItem item={item} key={item._id} />
                ))}
              </>
            )}
            <SearchItem />
          </div>
        </div>
      </div>
    </div>
  );
};

export default List;
