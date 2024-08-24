// Base Modal component that can be extended by other components
import { closeModal, openModal, activeModal } from "../../../../stores/modalStore";
import { useStore } from '@nanostores/react';
import { useState } from "react";

const Modal = ({
  title,             // The title of the modal
  children,          // The content to be displayed inside the modal
  customClass,       // Custom CSS class for styling the modal
  current,           // The identifier of the current modal
  next,              // The identifier of the next modal to be opened
  prev,              // The identifier of the previous modal to be opened
  nextMethod,        // Optional method to be executed when the "next" button is pressed
  prevMethod,        // Optional method to be executed when the "previous" button is pressed
  nextButton = "Toliau",  // Label for the "next" button, default is "Toliau"
  prevButton = "Grįžti",  // Label for the "prev" button, default is "Grįžti"
  buttonsHidden = false   // Boolean to control the visibility of the "prev" and "next" buttons
}) => {
  const currentModal = useStore(activeModal);  // Get the current active modal from the store

  if (currentModal !== current) return null;  // Only render if this modal is the active one

  // Close the modal if the background is clicked
  const handleOutsideClick = (e) => {
    if (e.target.id === "modal-background") {
      closeModal();  // Close modal if the clicked element is the background
    }
  };

  // Navigate to the previous modal when "previous" button is pressed
  const previousTarget = () => {
    if (prevMethod) prevMethod();  // Execute the previous method if provided inside child
    openModal(prev);
  };

  // Navigate to the next modal when "next" button is pressed
  const nextTarget = () => {
    if (nextMethod) nextMethod();  // Execute the next method if provided inside child
    openModal(next);
  };

  // Hide the "prev" or "next" button if `buttonsHidden` is true
  const areButtonsHidden = () => {
    return buttonsHidden ? "invisible" : "";
  };

  return (
    <div
      id="modal-background"
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
      onClick={handleOutsideClick}  // Handle clicks outside the modal to close it
    >
      <div
        className={`${customClass} bg-white p-6 mx-6 w-full rounded-lg shadow-lg md:w-1/2 lg:w-1/3 poem-body`}
      >
        <div className="flex relative items-center mb-4">
          {title ? (
            <h2 className="text-lg font-bold mx-auto">{title}</h2>  // Display the modal title if provided
          ) : (
            <div></div>
          )}
          <button
            onClick={closeModal}  // Close the modal when the close button is clicked
            className="absolute right-0 text-2xl font-bold text-gray-500 hover:text-gray-700"
            aria-label="Close"
          >
            &times;
          </button>
        </div>
        <div className="max-w-md mx-auto p-4">
          {children}  {/*  Render the content passed as children */}
          <div className={`flex justify-end space-x-2 pt-4 ${areButtonsHidden()}`}>
            <div>
              <button className="px-4 py-2" onClick={previousTarget}>{prevButton}</button>  {/* "Previous" button */}
            </div>
            <div>
              <button
                type="button"
                className="bg-black text-white px-4 py-2 rounded-md"
                onClick={nextTarget}  // "Next" button triggers the next modal
              >
                {nextButton}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;

