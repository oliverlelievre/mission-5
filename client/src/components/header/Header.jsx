import {
  faBed,
  faCalendarDays,
  faCar,
  faPerson,
  faPlane,
  faTaxi,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./header.scss";
import { DateRange } from "react-date-range";
import { useState } from "react";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { format } from "date-fns";
import { useNavigate } from "react-router-dom";

const Header = ({ type }) => {
  const [destination, setDestination] = useState("");
  const [openDate, setOpenDate] = useState(false);
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);
  const [openOptions, setOpenOptions] = useState(false);
  const [options, setOptions] = useState({
    adult: 1,
    children: 0,
    room: 1,
  });

  const navigate = useNavigate();

  const handleOption = (name, operation) => {
    setOptions((prev) => {
      return {
        ...prev,
        [name]: operation === "i" ? options[name] + 1 : options[name] - 1,
      };
    });
  };

  const handleSearch = () => {
    navigate("/properties", { state: { destination, date, options } });
  };

  return (
    <div className="header">
      <div
        className={
          type === "list"
            ? "header__container listMode"
            : "header__container"
        }
      >
        <div className="header__list">
          <div className="header__list-item active">
            <FontAwesomeIcon icon={faBed} className="header__icon" />
            <span className="header__text">Stays</span>
          </div>
          <div className="header__list-item">
            <FontAwesomeIcon icon={faPlane} className="header__icon" />
            <span className="header__text">Flights</span>
          </div>
          <div className="header__list-item">
            <FontAwesomeIcon icon={faCar} className="header__icon" />
            <span className="header__text">Car rentals</span>
          </div>
          <div className="header__list-item">
            <FontAwesomeIcon icon={faBed} className="header__icon" />
            <span className="header__text">Attractions</span>
          </div>
          <div className="header__list-item">
            <FontAwesomeIcon icon={faTaxi} className="header__icon" />
            <span className="header__text">Airport taxis</span>
          </div>
        </div>
        {type !== "list" && (
          <>
            <h1 className="header__title">
              A lifetime of discounts? It's Genius.
            </h1>
            <p className="header__desc">
              Get rewarded for your travels – unlock instant savings of 10% or
              more with a free Lamabooking account
            </p>
            <button className="header__btn">Sign in / Register</button>
            <div className="header__search">
              <div className="header__search-item">
                <FontAwesomeIcon icon={faBed} className="header__icon" />
                <input
                  type="text"
                  placeholder="Where are you going?"
                  className="header__search-input"
                  onChange={(e) => setDestination(e.target.value)}
                />
              </div>
              <div className="header__search-item">
                <FontAwesomeIcon
                  icon={faCalendarDays}
                  className="header__icon"
                />
                <span
                  onClick={() => setOpenDate(!openDate)}
                  className="header__search-text"
                >{`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(
                  date[0].endDate,
                  "MM/dd/yyyy"
                )}`}</span>
                {openDate && (
                  <DateRange
                    editableDateInputs={true}
                    onChange={(item) => setDate([item.selection])}
                    moveRangeOnFirstSelection={false}
                    ranges={date}
                    className="date"
                    minDate={new Date()}
                  />
                )}
              </div>
              <div className="header__search-item">
                <FontAwesomeIcon icon={faPerson} className="header__icon" />
                <span
                  onClick={() => setOpenOptions(!openOptions)}
                  className="header__search-text"
                >{`${options.adult} adult · ${options.children} children · ${options.room} room`}</span>
                {openOptions && (
                  <div className="options">
                    <div className="options__item">
                      <span className="options__text">Adult</span>
                      <div className="options__counter">
                        <button
                          disabled={options.adult <= 1}
                          className="options__counter-button"
                          onClick={() => handleOption("adult", "d")}
                        >
                          -
                        </button>
                        <span className="options__counter-number">
                          {options.adult}
                        </span>
                        <button
                          className="options__counter-button"
                          onClick={() => handleOption("adult", "i")}
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <div className="options__item">
                      <span className="options__text">Children</span>
                      <div className="options__counter">
                        <button
                          disabled={options.children <= 0}
                          className="options__counter-button"
                          onClick={() => handleOption("children", "d")}
                        >
                          -
                        </button>
                        <span className="options__counter-number">
                          {options.children}
                        </span>
                        <button
                          className="options__counter-button"
                          onClick={() => handleOption("children", "i")}
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <div className="options__item">
                      <span className="options__text">Room</span>
                      <div className="options__counter">
                        <button
                          disabled={options.room <= 1}
                          className="options__counter-button"
                          onClick={() => handleOption("room", "d")}
                        >
                          -
                        </button>
                        <span className="options__counter-number">
                          {options.room}
                        </span>
                        <button
                          className="options__counter-button"
                          onClick={() => handleOption("room", "i")}
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              <div className="header__search-item">
                <button className="header__btn" onClick={handleSearch}>
                  Search
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Header;
