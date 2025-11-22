import { useState } from "react";
import emailjs from "@emailjs/browser";
import "../../pages/Contact/Contact.scss";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    fname: "",
    lname: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState({
    loading: false,
    success: false,
    error: null,
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, success: false, error: null });

    try {
      // EmailJS configuration from environment variables
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;

      // Validate environment variables
      if (!publicKey || !serviceId || !templateId) {
        throw new Error("EmailJS configuration is missing. Please check your .env file.");
      }

      // Prepare template parameters
      const templateParams = {
        from_name: `${formData.fname} ${formData.lname}`,
        from_email: formData.email,
        message: formData.message,
        to_name: "Lmark Ceramic Team",
        year: new Date().getFullYear(),
      };

      // Send email using EmailJS
      await emailjs.send(serviceId, templateId, templateParams, publicKey);

      // Success
      setStatus({ loading: false, success: true, error: null });
      setFormData({ fname: "", lname: "", email: "", message: "" });

      // Reset success message after 5 seconds
      setTimeout(() => {
        setStatus({ loading: false, success: false, error: null });
      }, 5000);
    } catch (error) {
      console.error("EmailJS Error:", error);
      setStatus({
        loading: false,
        success: false,
        error: error.text || error.message || "Failed to send message. Please try again.",
      });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {status.success && (
        <div className="alert alert-success mb-3" role="alert">
          ✓ Thank you for contacting us! We'll get back to you soon.
        </div>
      )}
      {status.error && (
        <div className="alert alert-danger mb-3" role="alert">
          ✗ {status.error}
        </div>
      )}
      
      <div className="row">
        <div className="col-6">
          <div className="form-group">
            <label className="text-black" htmlFor="fname">First name</label>
            <input
              type="text"
              name="fname"
              id="fname"
              className="form-control"
              value={formData.fname}
              onChange={handleChange}
              disabled={status.loading}
              required />
          </div>
        </div>
        <div className="col-6">
          <div className="form-group">
            <label className="text-black" htmlFor="lname">Last name</label>
            <input
              type="text"
              name="lname"
              id="lname"
              className="form-control"
              value={formData.lname}
              onChange={handleChange}
              disabled={status.loading} />
          </div>
        </div>
      </div>
      <div className="form-group">
        <label className="text-black" htmlFor="email">Email address</label>
        <input
          type="email"
          name="email"
          id="email"
          className="form-control"
          value={formData.email}
          onChange={handleChange}
          disabled={status.loading}
          required />
      </div>
      <div className="form-group mb-5">
        <label className="text-black" htmlFor="message">Message</label>
        <textarea
          name="message"
          id="message"
          className="form-control"
          rows="5"
          value={formData.message}
          onChange={handleChange}
          disabled={status.loading}
          required
        ></textarea>
      </div>
      <button type="submit" className="btn btn-primary" disabled={status.loading}>
        {status.loading ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
};

export default ContactForm;

