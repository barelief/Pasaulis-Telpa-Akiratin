
// ReviewOrderModal.jsx component displays the final order review before confirmation
//
import { useStore } from '@nanostores/react';
import {
  cartItemQty,
  shippingLocation,
  shippingPrice,
  customerName,
  customerEmail,
  shippingAddress,
} from '../../../../stores/checkoutStore';
import { resetLastModal } from '../../../../stores/modalStore';
import Modal from './ModalBase';
import CostSummary from './CostSummary'
import confetti from 'canvas-confetti'; // Import the canvas-confetti library

const ModalReviewOrder = () => {
  const qty = useStore(cartItemQty);  // Retrieve the current cart item quantity
  const location = useStore(shippingLocation);  // Retrieve the current shipping location
  const price = useStore(shippingPrice);  // Retrieve the current shipping price
  const name = useStore(customerName);  // Retrieve the current customer name
  const email = useStore(customerEmail);  // Retrieve the current customer email
  const address = useStore(shippingAddress);  // Retrieve the current shipping address

  // Function to reset modal state and confirm order
  function reset() {
    resetLastModal();  // Reset the last active modal
    cartItemQty.set(0);  // Reset cart item quantity to 0
    alert('Užsakymas patvirtintas!');  // Notify user that the order is confirmed

    // Launch confetti animation
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 }
    });
  }

  return (
    <Modal
      title="Peržiūrėkite savo užsakymą"
      current="reviewOrder"
      prev="customerDetails"
      next="null"
      nextMethod={reset}
      nextButton="Patvirtinti užsakymą"
    >
      {/* Display customer details */}
      <p className="mb-3"><strong>Vardas:</strong> {name}</p>
      <p className="mb-3"><strong>El. paštas:</strong> {email}</p>
      <p className="mb-5"><strong>Pristatymo adresas:</strong> {address}</p>

      {/* Display order summary */}
      <div className="mt-6">
        <CostSummary />
      </div>
    </Modal>
  );
};

export default ModalReviewOrder;

