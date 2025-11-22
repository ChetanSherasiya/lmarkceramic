const ContactInfo = () => {
  return (
    <div className="contact-info">
      <div className="mb-4 d-flex align-items-start">
        <div className="icon me-3 text-primary">
          <i className="fa-solid fa-location-dot"></i>
        </div>
        <p className="mb-0">43 Raymouth Rd, Baltemoer, London 3910</p>
      </div>

      <div className="mb-4 d-flex align-items-start">
        <div className="icon me-3 text-primary">
          <i className="fa-solid fa-envelope"></i>
        </div>
        <p className="mb-0">info@lmarkceramic.com</p>
      </div>
      <div className="d-flex align-items-start">
        <div className="icon me-3 text-primary">
          <i className="fa-solid fa-phone"></i>
        </div>
        <p className="mb-0">+91 98765 43210</p>
      </div>
    </div>
  );
};

export default ContactInfo;
