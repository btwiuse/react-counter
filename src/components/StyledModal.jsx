import React, { useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";

export default function StyledModal() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="demo-container">
      <div className="demo-header">
        <h2>Modal with Transitions</h2>
        <p>Animated modal using Transition component for smooth effects</p>
      </div>
      
      <button className="demo-button" onClick={() => setIsOpen(true)}>
        Open Animated Modal
      </button>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="modal-overlay" onClose={() => setIsOpen(false)}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="modal-backdrop" aria-hidden="true" />
          </Transition.Child>

          <div className="modal-container">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="modal-panel styled-panel">
                <div className="styled-header">
                  <Dialog.Title className="modal-title">
                    🎨 Styled Modal
                  </Dialog.Title>
                </div>

                <div className="modal-content">
                  <p>
                    This modal uses the Transition component from @headlessui/react
                    to create smooth enter and exit animations.
                  </p>
                  <p>
                    The backdrop fades in/out while the panel scales and fades
                    simultaneously, creating a polished user experience.
                  </p>
                </div>

                <div className="modal-actions">
                  <button className="button-gradient" onClick={() => setIsOpen(false)}>
                    Close Modal
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </div>
  );
}
