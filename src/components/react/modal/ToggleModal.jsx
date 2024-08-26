import { toggleModal } from '../../../stores/modalStore';

const ToggleModal = ({ modalName }) => {
  // This function is called when the button is clicked
  const handleToggle = () => {
    toggleModal(modalName);  // Toggles the specified modal
  };

  return (
    <button onClick={handleToggle}>
      Toggle {modalName}
    </button>
  );
};

export default ToggleModal;
