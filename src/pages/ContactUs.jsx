import React from "react";

const ContactUs = () => {
  return (
    <div className="contactUs-container container">
      <h1 className="main__title">Contact Us</h1>
      <div className="about__block">
        <p className="about__text">
          Success is carried out through teamwork synergy with passionate,
          open-minded people <br></br>
        </p>
        <p>
          Feel free to say hello calling us +1-206-785-16-88 or via email at
          email@google.com either for detailed information, consultation or a
          quick quotation for your next project.
        </p>
      </div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11016323.933427103!2d-122.03372300000001!3d47.615785!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x549071f4eb30938b%3A0xb9bf93bd60529844!2zNzA0IDIyOHRoIEF2ZSBORSwgU2FtbWFtaXNoLCBXQSA5ODA3NCwg0KHQqNCQ!5e0!3m2!1sru!2sru!4v1630935221935!5m2!1sru!2sru"
        width="600"
        height="450"
        allowfullscreen=""
        loading="lazy"
      ></iframe>
      {/* Тут будет форма обратной связи */}
    </div>
  );
};

export default ContactUs;
