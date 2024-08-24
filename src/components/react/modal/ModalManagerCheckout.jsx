// CheckoutModalManager.jsx
// Component that manages which modal to display during the checkout process

import { useStore } from '@nanostores/react';
import { activeModal } from '../../../stores/modalStore';
import ModalShippingDetails from './checkout/ModalShippingDetails.jsx';
import ModalReviewOrder from './checkout/ModalReviewOrder.jsx';
import ModalCart from './checkout/ModalCart.jsx'

// Component that manages which modal to display during the checkout process
const CheckoutModalManager = () => {
  // Get the current active modal from the store
  const currentModal = useStore(activeModal);
  // Switch statement to determine which modal to render
  switch (currentModal) {
    case 'itemSelection':
      return <ModalCart />;
    case 'customerDetails':
      return <ModalShippingDetails />;
    case 'reviewOrder':
      return <ModalReviewOrder />;
    default:
      return null;  // Render nothing if no valid modal is active
  }
};

export default CheckoutModalManager;
