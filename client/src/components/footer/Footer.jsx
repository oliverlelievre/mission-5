import "./footer.scss";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__lists">
        <ul className="footer__list">
          <li className="footer__listItem">Countries</li>
          <li className="footer__listItem">Regions</li>
          <li className="footer__listItem">Cities</li>
          <li className="footer__listItem">Districts</li>
          <li className="footer__listItem">Airports</li>
          <li className="footer__listItem">Properties</li>
        </ul>
        <ul className="footer__list">
          <li className="footer__listItem">Homes</li>
          <li className="footer__listItem">Apartments</li>
          <li className="footer__listItem">Resorts</li>
          <li className="footer__listItem">Villas</li>
          <li className="footer__listItem">Hostels</li>
          <li className="footer__listItem">Guest houses</li>
        </ul>
        <ul className="footer__list">
          <li className="footer__listItem">Unique places to stay</li>
          <li className="footer__listItem">Reviews</li>
          <li className="footer__listItem">Unpacked: Travel articles</li>
          <li className="footer__listItem">Travel communities</li>
          <li className="footer__listItem">Seasonal and holiday deals</li>
        </ul>
        <ul className="footer__list">
          <li className="footer__listItem">Car rental</li>
          <li className="footer__listItem">Flight Finder</li>
          <li className="footer__listItem">Restaurant reservations</li>
          <li className="footer__listItem">Travel Agents</li>
        </ul>
        <ul className="footer__list">
          <li className="footer__listItem">Customer Service</li>
          <li className="footer__listItem">Partner Help</li>
          <li className="footer__listItem">Careers</li>
          <li className="footer__listItem">Sustainability</li>
          <li className="footer__listItem">Press center</li>
          <li className="footer__listItem">Safety Resource Center</li>
          <li className="footer__listItem">Investor relations</li>
          <li className="footer__listItem">Terms & conditions</li>
        </ul>
      </div>
      <div className="footer__text">Copyright © 2022 Lamabooking.</div>
    </div>
  );
};

export default Footer;
