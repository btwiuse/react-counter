import React, { useState } from "react";
import { Dialog } from "@headlessui/react";

export default function FormModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setIsOpen(false);
      setSubmitted(false);
      setFormData({ name: "", email: "", message: "" });
    }, 2000);
  };

  return (
    <div className="demo-container">
      <div className="demo-header">
        <h2>Modal with Form</h2>
        <p>Interactive modal containing a form submission</p>
      </div>
      
      <button className="demo-button" onClick={() => setIsOpen(true)}>
        Open Form Modal
      </button>

      <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="modal-overlay">
        <div className="modal-backdrop" aria-hidden="true" />
        
        <div className="modal-container">
          <Dialog.Panel className="modal-panel">
            <Dialog.Title className="modal-title">Contact Us</Dialog.Title>
            
            <Dialog.Description className="modal-description">
              Fill out the form below and we'll get back to you soon.
            </Dialog.Description>

            {!submitted ? (
              <form onSubmit={handleSubmit} className="modal-form">
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    rows="4"
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    required
                  />
                </div>

                <div className="modal-actions">
                  <button
                    type="button"
                    className="button-secondary"
                    onClick={() => setIsOpen(false)}
                  >
                    Cancel
                  </button>
                  <button type="submit" className="button-primary">
                    Submit
                  </button>
                </div>
              </form>
            ) : (
              <div className="modal-content success-message">
                <p>✓ Form submitted successfully!</p>
              </div>
            )}
          </Dialog.Panel>
        </div>
      </Dialog>
    </div>
  );
}
