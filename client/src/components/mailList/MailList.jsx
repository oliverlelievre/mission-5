import "./mailList.scss";

const MailList = () => {
  return (
    <div className="mail">
      <h1 className="mail__title">Save time, save money!</h1>
      <span className="mail__desc">Sign up and we'll send the best deals to you</span>
      <div className="mail__input-container">
        <input type="text" placeholder="Your Email" className="mail__input" />
        <button className="mail__button">Subscribe</button>
      </div>
    </div>
  );
};

export default MailList;
