const Modal = ({ show, title, onClose, children, customClass }) => {
  if (!show) return null;

  const handleOutsideClick = (e) => {
    // Check if the clicked element is the background
    if (e.target.id === "modal-background") {
      onClose();
    }
  };

  return (
    <div
      id="modal-background"
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 "
      onClick={handleOutsideClick}
    >
      <div
        className={`${customClass} bg-white p-6 rounded-lg shadow-lg w-3/4 md:w-1/2 lg:w-1/3`}
      >
        <div className="flex justify-between items-center">
     
        </div>
        <div className="">{children}</div>
      </div>
    </div>
  );
};

export default Modal;
