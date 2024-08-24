
// CostSummary.jsx - Summarizes and calculates the final cost of the order

import { useStore } from '@nanostores/react';
import { cartItemQty, shippingPrice, totalPrice, finalPrice } from '../../../../stores/checkoutStore';

const CostSummary = () => {
  // Retrieve the current quantity of items in the cart
  const qty = useStore(cartItemQty);

  // Retrieve the current shipping price from the store
  const shipping = useStore(shippingPrice);

  // Function to get the total price for the items in the cart
  function showTotalPrice() {
    return totalPrice();
  }

  // Function to get the final price including the shipping cost
  function showFinalPrice() {
    return finalPrice();
  }

  return (
    <div className="mt-6">
      <p className="text-sm font-medium">
        {/* Display the item(s) price along with the quantity */}
        Knyg{`${qty > 1 ? 'ų' : 'os'}`} kaina:
        <span className="text-lg font-semibold"> {showTotalPrice()}€ ({qty} vnt.)</span>
      </p>
      <p className="text-sm font-medium">
        {/* Display the shipping price */}
        Siuntimo kaina:
        <span className="text-lg font-semibold"> {shipping}€</span>
      </p>
      <p className="text-sm font-medium">
        {/* Display the final price including both items and shipping */}
        Galutinė suma:
        <span className="text-lg font-semibold text-blue-600"> {showFinalPrice().toFixed(2)
        }€</span>
      </p>
    </div>
  );
};

export default CostSummary;

