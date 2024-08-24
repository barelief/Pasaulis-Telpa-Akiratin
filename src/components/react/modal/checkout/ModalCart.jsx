
// ModalCart.jsx -- Displays shopping cart where users can select quantity and shipping location to estimate the final price

import { useState } from "react";
import { useStore } from "@nanostores/react";
import Modal from "./ModalBase";
import CostSummary from './CostSummary';
import {
  cartItemQty, // Store for the quantity of items in the cart
  addCartItemQty, // Function to increase cart item quantity
  subtractCartItemQty, // Function to decrease cart item quantity
  shippingPrice, // Store for the shipping price
  shippingLocation, // Store for the shipping location
  updateCheckoutDetails, // Function to update checkout details in the store
} from "../../../../stores/checkoutStore";
import { locations } from './shipping_locations'; // List of available shipping locations
import thumb from '../../../../assets/images/textures/thumb_lt.png'; // Thumbnail image for the product

// Function to reset the cart quantity to 0
function resetCart() {
  cartItemQty.set(0); // Sets the cart item quantity to 0 in the store
}

// Function to increase the quantity of items in the cart
function addCartItem() {
  addCartItemQty(); // Calls the function to increase the cart item quantity
}

// Function to decrease the quantity of items in the cart
function removeCartItem() {
  subtractCartItemQty(); // Calls the function to decrease the cart item quantity
}


const ModalCart = () => {
  // Get the current quantity and shipping price from the store
  const storedQty = useStore(cartItemQty); // Retrieves the quantity of items in the cart from the store
  const storedShippingPrice = useStore(shippingPrice); // Retrieves the current shipping price from the store
  const storedLocation = useStore(shippingLocation); // Retrieves the current shipping location from the store

  // Local state to manage the selected shipping value
  const [selectedShippingValue, setSelectedValue] = useState(storedShippingPrice);

  // Handle changes in shipping location and update the price accordingly
  const handleLocationChange = (e) => {
    const selectedValue = e.target.value; // Get the selected shipping location value from the event

    // Find the selected location details from the locations list
    const selectedLocation = locations.find(loc => loc.value == selectedValue);
    setSelectedValue(selectedValue); // Update local state with the new shipping value

    // Update checkout details with the new location and price
    updateCheckoutDetails({ location: selectedLocation.label, price: selectedLocation.value });
  };

  return (
    <div className="flex items-center justify-center bg-gray-100">
      {/* Modal component wraps the entire cart content */}
      <Modal
        current="itemSelection" // Indicates the current modal view
        prev={null} // Previous view (if applicable)
        next="customerDetails" // Next view to navigate to
        buttonsHidden={storedQty > 0 ? "" : true} // Hide buttons if the cart quantity is zero
      >
        <div className="flex flex-col items-center sm:flex-row sm:items-start space-y-4 sm:space-y-0 sm:space-x-4">
          {/* Product Thumbnail */}
          <img src={thumb.src} alt="Pasaulis telpa akiratin" className="w-24 h-36 object-cover rounded-md" />

          <div className="text-center sm:text-left">
            <h3 className="text-lg font-semibold">Pasaulis telpa akiratin</h3>
            <p className="text-gray-600 text-sm">Poezijos rinktinė</p>

            <div className="mt-4 flex items-center justify-center sm:justify-start space-x-2">
              {/* Decrease quantity button */}
              <button className="px-3 py-1 bg-gray-200 text-gray-700 rounded-lg" onClick={removeCartItem}>-</button>

              {/* Display current quantity */}
              <span className="px-4 py-1 text-lg font-semibold">{storedQty}</span>

              {/* Increase quantity button */}
              <button className="px-3 py-1 bg-gray-200 text-gray-700 rounded-lg" onClick={addCartItem}>+</button>
            </div>
          </div>
        </div>

        {storedQty > 0 ? (
          <>
            {/* Shipping Location Selector */}
            <label>
              <select
                className="w-full p-2 pt-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={selectedShippingValue} // Controls the currently selected option
                onChange={handleLocationChange} // Updates state and store on change
              >
                {locations.map(loc => (
                  <option key={loc.value} value={loc.value}>
                    {loc.description}
                  </option>
                ))}
              </select>
            </label>

            {/* Display cost summary based on selected shipping location */}
            <CostSummary />
          </>
        ) : (
          // Message displayed when the cart is empty
          <div className="w-full text-center mt-4">Krepšelis tuščias</div>
        )}
      </Modal>
    </div>
  );
};

export default ModalCart;

