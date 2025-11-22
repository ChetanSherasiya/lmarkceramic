import { useState } from "react";
import "../../pages/Contact/Contact.scss";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    fname: "",
    lname: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Thank you for contacting us! We’ll get back to you soon.");
    setFormData({ fname: "", lname: "", email: "", message: "" });
  };

  return (
    <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-6">
            <div className="form-group">
              <label className="text-black" for="fname">First name</label>
              <input
                type="text"
                name="fname"
                className="form-control"
                value={formData.fname}
                onChange={handleChange}
                required />
            </div>
          </div>
          <div className="col-6">
            <div className="form-group">
              <label className="text-black" for="lname">Last name</label>
              <input
                type="text"
                name="lname"
                className="form-control"
                value={formData.lname}
                onChange={handleChange} />
            </div>
          </div>
        </div>
        <div className="form-group">
          <label className="text-black" for="email">Email address</label>
          <input
            type="email"
            name="email"
            className="form-control"
            value={formData.email}
            onChange={handleChange}
            required />
        </div>
        <div className="form-group mb-5">
          <label className="text-black" for="message">Message</label>
          <textarea
            name="message"
            className="form-control"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <button type="submit" className="btn btn-primary">Send Message</button>
      </form>
  );
};

export default ContactForm;
