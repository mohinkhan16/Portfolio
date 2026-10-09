import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.email || !formData.message) return;

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setSubmitted(false), 5000);
    }, 800);
  };

  return (
    <section className="section section-alt" id="contact">
      <div className="section-header">
        <h2>
          Get In <span className="highlight">Touch</span>
        </h2>
        <div className="underline-bar"></div>
        <p className="section-subtitle">
          Have a project in mind, an internship opportunity, or want to say hello? Let's talk!
        </p>
      </div>

      <div className="container" style={{ maxWidth: '1050px' }}>
        <div className="contact-grid">
          {/* Left Column: Info + Map */}
          <div className="contact-info">
            <div className="contact-item">
              <i className="fa-solid fa-location-dot"></i>
              <div>
                <strong>Location</strong>
                <p>Bhavnagar, Gujarat, India</p>
              </div>
            </div>

            <a href="tel:+919638955041" className="contact-item text-decoration-none">
              <i className="fa-solid fa-phone"></i>
              <div>
                <strong>Phone / Mobile</strong>
                <p>+91 9638955041</p>
              </div>
            </a>

            <a href="mailto:mohinpathan2004@gmail.com" className="contact-item text-decoration-none">
              <i className="fa-solid fa-envelope"></i>
              <div>
                <strong>Email Address</strong>
                <p>mohinpathan2004@gmail.com</p>
              </div>
            </a>

            <a
              href="https://wa.me/919638955041"
              target="_blank"
              rel="noreferrer"
              className="contact-item text-decoration-none"
            >
              <i className="fa-brands fa-whatsapp"></i>
              <div>
                <strong>WhatsApp Instant Chat</strong>
                <p>Chat directly with Mohin</p>
              </div>
            </a>

            {/* Google Map */}
            <div className="map-container mt-2">
              <iframe
                title="Bhavnagar Location Map"
                src="https://maps.google.com/maps?q=Bhavnagar,%20Gujarat,%20India&t=&z=13&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="220"
                style={{ border: 0, borderRadius: '12px' }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
          </div>

          {/* Right Column: Form */}
          <div className="contact-form-wrapper">
            <h3 className="fw-bold mb-2 text-dark">Send a Direct Message</h3>
            <p className="text-muted small mb-4">
              Feel free to fill out the form below. I will respond to your inquiry as soon as possible.
            </p>

            {submitted && (
              <div className="alert-custom-success mb-4">
                <i className="fa-solid fa-circle-check me-2 fs-5"></i>
                <div>
                  <strong>Message Sent Successfully!</strong>
                  <div className="small">Thank you for reaching out, I will reply shortly.</div>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label className="form-label" htmlFor="name">Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="e.g. John Doe"
                  className="form-control-custom"
                  required
                />
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="email">Your Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="e.g. john@example.com"
                  className="form-control-custom"
                  required
                />
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="subject">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="e.g. Job Opportunity / Project Discussion"
                  className="form-control-custom"
                />
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Write your message here..."
                  className="form-control-custom"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="btn-primary w-100 justify-content-center"
                disabled={loading}
              >
                {loading ? (
                  <>
                    <i className="fa-solid fa-spinner fa-spin me-2"></i> Sending...
                  </>
                ) : (
                  <>
                    <i className="fa-solid fa-paper-plane me-2"></i> Send Message
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
