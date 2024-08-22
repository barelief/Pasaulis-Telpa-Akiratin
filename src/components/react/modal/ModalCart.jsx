import Modal from "./Modal";
import {
  isCartOpen,
  toggleCart,
  cartItemQty,
  addCartItemQty,
  subtractCartItemQty
} from "../../../stores/commonStore";
import { useStore } from "@nanostores/react";
import thumb from '../../../assets/images/textures/thumb_lt.png'
import { useState } from "react";

function resetCart() {
  cartItemQty.set(0);
}

function addCartItem()
{
  addCartItemQty();
}

function removeCartItem()
{
  subtractCartItemQty();
}






const ModalWindow = () => {
  const qty = useStore(cartItemQty);

  // SHIPPING cost 
  // State to hold the selected option value
  const [selectedValue, setSelectedValue] = useState(3); // Default to the first option's value

  // Function to handle change in select option
  const handleSelectChange = (event) => {
    setSelectedValue(Number(event.target.value));
  };

  // Calculate the total sum
  const totalSum = qty * 8.99 + selectedValue; 
  const showModal = useStore(isCartOpen);

  return (
    <div className="flex items-center justify-center bg-gray-100">
      <Modal
        show={showModal}
        title="Pirkinių krepšelis"
        onClose={toggleCart}
        customClass="poem-body"
      >
   
<div class="max-w-lg mx-auto  bg-white p-6 rounded-lg shadow-lg">
  
  <div class="flex flex-col items-center sm:flex-row sm:items-start space-y-4 sm:space-y-0 sm:space-x-4">
    <img src={thumb.src} alt="Pasaulis telpa akiratin" class="w-24 h-36 object-cover rounded-md" />
    <div class="text-center sm:text-left">
      <h3 class="text-lg font-semibold">Pasaulis telpa akiratin</h3>
      <p class="text-gray-600 text-sm">Poezijos rinktinė</p>
      <div class="mt-4 flex items-center justify-center sm:justify-start space-x-2">
        <button class="px-3 py-1 bg-gray-200 text-gray-700 rounded-lg" onClick={removeCartItem}>-</button>
        <span class="px-4 py-1 text-lg font-semibold">{qty}</span>
        <button class="px-3 py-1 bg-gray-200 text-gray-700 rounded-lg" onClick={addCartItem}>+</button>
      </div>
    </div>
  </div>
   {qty > 0 ? (
          <>

 <div class="mt-6">
    <select class="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500  " onChange={handleSelectChange}
          value={selectedValue}   >
      <option value="3">Pristatymas Lietuvoje 3€</option>
      <option value="7">Pristatymas ES 7€</option>
      <option value="19">Pristatymas pasaulyje 19€</option>
    </select>
  </div>

 <div class="mt-6">
    <p class="text-sm font-medium">Knyg{`${qty>1?'ų':'os'}`} kaina: <span class="text-lg font-semibold">{qty*8.99}€</span></p>
    <p class="text-sm font-medium">Siuntimo kaina: <span class="text-lg font-semibold">{selectedValue}€</span></p>
    <p class="text-sm font-medium">Galutinė suma: <span class="text-lg font-semibold text-blue-600">{totalSum.toFixed(2)}€</span></p>
  </div>
<div class="mt-6">
    <button class="w-full py-3 bg-black text-white font-semibold rounded-full hover:bg-blue-700">
      Eiti į apmokėjimą
    </button>
  </div>

  </>
  ) : (<><div className="w-full text-center mt-4">Krepšelis tusčias</div></>)}
</div>

      </Modal>
    </div>
  );
};

export default ModalWindow;
