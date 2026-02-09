import React, { useState } from "react";
import { Dialog } from "@headlessui/react";

export default function DescriptionModal() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="demo-container">
      <div className="demo-header">
        <h2>Modal with Description</h2>
        <p>Modal featuring Dialog.Description for better accessibility</p>
      </div>
      
      <button className="demo-button" onClick={() => setIsOpen(true)}>
        Open Description Modal
      </button>

      <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="modal-overlay">
        <div className="modal-backdrop" aria-hidden="true" />
        
        <div className="modal-container">
          <Dialog.Panel className="modal-panel">
            <Dialog.Title className="modal-title">
              Payment Successful
            </Dialog.Title>
            
            <Dialog.Description className="modal-description">
              Your payment has been processed successfully. A confirmation
              email has been sent to your registered email address.
            </Dialog.Description>

            <div className="modal-content">
              <div className="info-box">
                <p><strong>Transaction ID:</strong> TXN-2024-001234</p>
                <p><strong>Amount:</strong> $99.99</p>
                <p><strong>Date:</strong> {new Date().toLocaleDateString()}</p>
              </div>
            </div>

            <div className="modal-actions">
              <button className="button-primary" onClick={() => setIsOpen(false)}>
                Got it, thanks!
              </button>
            </div>
          </Dialog.Panel>
        </div>
      </Dialog>
    </div>
  );
}
