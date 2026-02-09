import React, { useState } from "react";
import { Dialog } from "@headlessui/react";

export default function UserInputModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [result, setResult] = useState("");
  const [resolvePromise, setResolvePromise] = useState(null);

  // This is the getUserInput function that returns a Promise
  const getUserInput = () => {
    return new Promise((resolve) => {
      setResolvePromise(() => resolve);
      setInputValue("");
      setIsOpen(true);
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (resolvePromise) {
      resolvePromise(inputValue);
      setResolvePromise(null);
    }
    setIsOpen(false);
  };

  const handleCancel = () => {
    if (resolvePromise) {
      resolvePromise(null);
      setResolvePromise(null);
    }
    setIsOpen(false);
  };

  const demonstrateGetUserInput = async () => {
    setResult("Waiting for user input...");
    const userText = await getUserInput();
    
    if (userText) {
      setResult(`You entered: "${userText}"`);
    } else {
      setResult("User cancelled the input");
    }
  };

  return (
    <div className="demo-container">
      <div className="demo-header">
        <h2>getUserInput() Pattern</h2>
        <p>Async/await pattern for getting user input via modal</p>
      </div>

      <div className="demo-content">
        <p className="demo-description">
          This demonstrates how to use <code>await getUserInput()</code> to 
          show a modal and wait for user input using Promises.
        </p>
        
        <button className="demo-button" onClick={demonstrateGetUserInput}>
          Call getUserInput()
        </button>

        {result && (
          <div className="result-box">
            <strong>Result:</strong> {result}
          </div>
        )}

        <div className="code-example">
          <pre>{`const getUserInput = () => {
  return new Promise((resolve) => {
    // Show modal and wait for user action
    setIsOpen(true);
    setResolvePromise(() => resolve);
  });
};

// Usage:
const userText = await getUserInput();
console.log(userText); // User's input`}</pre>
        </div>
      </div>

      <Dialog open={isOpen} onClose={handleCancel} className="modal-overlay">
        <div className="modal-backdrop" aria-hidden="true" />
        
        <div className="modal-container">
          <Dialog.Panel className="modal-panel">
            <Dialog.Title className="modal-title">
              Enter Your Text
            </Dialog.Title>
            
            <Dialog.Description className="modal-description">
              Type something below. This value will be returned by the 
              getUserInput() promise when you click Submit.
            </Dialog.Description>

            <form onSubmit={handleSubmit} className="modal-form">
              <div className="form-group">
                <label htmlFor="userInput">Your Input</label>
                <input
                  type="text"
                  id="userInput"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder="Enter some text..."
                  autoFocus
                  required
                />
              </div>

              <div className="modal-actions">
                <button
                  type="button"
                  className="button-secondary"
                  onClick={handleCancel}
                >
                  Cancel
                </button>
                <button type="submit" className="button-primary">
                  Submit
                </button>
              </div>
            </form>
          </Dialog.Panel>
        </div>
      </Dialog>
    </div>
  );
}
