import React, { useState } from "react";
import { Dialog } from "@headlessui/react";

export default function BasicModal() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="demo-container">
      <div className="demo-header">
        <h2>Basic Modal</h2>
        <p>A simple modal with title and close button</p>
      </div>
      
      <button className="demo-button" onClick={() => setIsOpen(true)}>
        Open Basic Modal
      </button>

      <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="modal-overlay">
        <div className="modal-backdrop" aria-hidden="true" />
        
        <div className="modal-container">
          <Dialog.Panel className="modal-panel">
            <Dialog.Title className="modal-title">Basic Modal</Dialog.Title>
            
            <div className="modal-content">
              <p>
                This is a basic modal using @headlessui/react. It provides
                accessibility features like focus trapping and keyboard navigation
                out of the box.
              </p>
            </div>

            <div className="modal-actions">
              <button className="button-primary" onClick={() => setIsOpen(false)}>
                Close
              </button>
            </div>
          </Dialog.Panel>
        </div>
      </Dialog>
    </div>
  );
}
