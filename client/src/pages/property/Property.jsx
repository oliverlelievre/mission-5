import "./property.scss";
import React, { useState, useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleArrowLeft,
  faCircleArrowRight,
  faCircleXmark,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { useLocation, useNavigate } from "react-router-dom";
// import { SearchContext } from "../../context/SearchContext";
import { AuthContext } from "../../context/AuthContext";
import useFetch from "../../hooks/useFetch";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import MailList from "../../components/mailList/MailList";
import ContactModal from "../../components/ContactModal/ContactModal";
import Footer from "../../components/footer/Footer";
// import Reserve from "../../components/reserve/Reserve";

const Property = () => {
  const location = useLocation();
  const id = location.pathname.split("/")[2];
  const [slideNumber, setSlideNumber] = useState(0);
  const [open, setOpen] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  const { data, loading, error } = useFetch(
    `http://localhost:8800/api/properties/find/${id}`
  );
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  // const { dates, options } = useContext(SearchContext);

  // const MILLISECONDS_PER_DAY = 1000 * 60 * 60 * 24;
  // const dayDifference = (date1, date2) => {
  //   const timeDiff = Math.abs(date2.getTime() - date1.getTime());
  //   const diffDays = Math.ceil(timeDiff / MILLISECONDS_PER_DAY);
  //   return diffDays;
  // };

  // const days = dates && dates[0] ? dayDifference(dates[0].endDate, dates[0].startDate) : 0;

  const handleOpen = (i) => {
    setSlideNumber(i);
    setOpen(true);
  };

  const handleMove = (direction) => {
    let newSlideNumber;

    if (direction === "l") {
      newSlideNumber = slideNumber === 0 ? 5 : slideNumber - 1;
    } else {
      newSlideNumber = slideNumber === 5 ? 0 : slideNumber + 1;
    }

    setSlideNumber(newSlideNumber);
  };

  const handleClick = () => {
    setOpenModal(true);
  };

  return (
    <div className="property">
      <Navbar className="property__navbar" />
      <Header type="list" className="property__header" />
      {loading ? (
        <p className="property__loading">Loading...</p>
      ) : (
        <div className="property__container">
          {open && (
            <div className="property__slider">
              <FontAwesomeIcon
                icon={faCircleXmark}
                className="property__close"
                onClick={() => setOpen(false)}
              />
              <FontAwesomeIcon
                icon={faCircleArrowLeft}
                className="property__arrow"
                onClick={() => handleMove("l")}
              />
              <div className="property__sliderWrapper">
                <img
                  src={data.photos[slideNumber]}
                  alt=""
                  className="property__sliderImg"
                />
              </div>
              <FontAwesomeIcon
                icon={faCircleArrowRight}
                className="property__arrow"
                onClick={() => handleMove("r")}
              />
            </div>
          )}
          <div className="property__wrapper">
            <button className="property__bookNow" onClick={handleClick}>
              Book a viewing or Enquire!
            </button>
            <h1 className="property__propertyTitle">{data.name}</h1>
            <div className="property__propertyAddress">
              <FontAwesomeIcon icon={faLocationDot} />
              <span>{data.address}</span>
            </div>
            <span className="property__propertyDistance">
              Excellent location – {data.distance}m from center
            </span>
            <span className="property__propertyPriceHighlight">
              Book a stay over ${data.roomPrice} at this property and get a
              Available Now!
            </span>
            <div className="property__propertyImages">
              {data.photos?.map((photo, i) => (
                <div className="property__propertyImgWrapper" key={i}>
                  <img
                    onClick={() => handleOpen(i)}
                    src={photo}
                    alt=""
                    className="property__propertyImg"
                  />
                </div>
              ))}
            </div>
            <div className="property__propertyDetails">
              <div className="property__propertyDetailsTexts">
                <h1 className="property__propertyTitle">{data.title}</h1>
                <p className="property__propertyDesc">{data.description}</p>
              </div>
              <div className="property__propertyDetailsPrice">
                <h1>Listed {data.createdAt} </h1>
                <span>
                  Located in the real heart of Krakow, this property has an
                  excellent location score of 9.8!
                </span>
                <h2>
                  <b>${data.roomPrice}</b>
                </h2>
                <button onClick={() => setOpenModal(true)}>Book a viewing or Enquire</button>
                <ContactModal isOpen={openModal} onClose={() => setOpenModal(false)} id={id} />
              </div>
            </div>
          </div>
          <MailList className="property__mailList" />
          <Footer className="property__footer" />
        </div>
      )}
    </div>
  );
};

export default Property;

