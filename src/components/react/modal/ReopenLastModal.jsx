// compoentn button thatmakes last active modal visible
// 
import { reopenLastModal } from '../../../stores/checkoutStore';

const ReopenLastModal = () => {
  // This function is called when the button is clicked
  const handleToggle = () => {
    reopenLastModal();  // Toggles the specified modal
  };

  return (
    <button onClick={handleToggle}>
      Toggle last
    </button>
  );
};

export default ReopenLastModal;
