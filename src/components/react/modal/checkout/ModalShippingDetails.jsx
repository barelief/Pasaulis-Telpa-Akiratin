
import React, { useState } from 'react';
import { useStore } from '@nanostores/react';
import {
  customerName,
  customerEmail,
  shippingAddress,
  updateCheckoutDetails

} from '../../../../stores/checkoutStore';
import Modal from './ModalBase';


const ModalShippingDetails = () => {
  const storedName = useStore(customerName);  // Get the stored customer name
  const storedEmail = useStore(customerEmail);  // Get the stored customer email
  const storedAddress = useStore(shippingAddress);  // Get the stored shipping address

  // Local state to handle form inputs
  const [name, setName] = useState(storedName);
  const [email, setEmail] = useState(storedEmail);
  const [address, setAddress] = useState(storedAddress);

  // Render nothing if the current modal is not 'customerDetails'

  // Handle form submission, update the store with customer details, and move to the next modal
  const handleSubmit = () => {
    updateCheckoutDetails({ name, email, address });
    // openReviewOrderModal();  // Open the review order modal
  };


  return (
    <Modal title="Siuntos informacija" current="customerDetails" prev="itemSelection" next="reviewOrder" nextMethod={handleSubmit}>
      <div >
        <form id="checkoutForm">

          <div className="mb-5">
            <label forhtml="phone" className="block text-sm font-medium text-gray-701">Vardas</label>
            <input type="text" id="phone" className="mt-2 block w-full p-2 border border-gray-300 rounded-md" required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Name"
            />
          </div>

          <div className="mb-4">
            <label forrtml="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input type="email" id="email" className="mt-1 block w-full p-2 border border-gray-300 rounded-md" required value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email" />
          </div>

          <div className="mb-4">
            <label forhtml="shippingInfo" className="block text-sm font-medium text-gray-700">Siuntimo adresas</label>
            <textarea id="shippingInfo" rows="4" className="mt-1 block w-full p-2 border border-gray-300 rounded-md" placeholder="Įrašykite savo arba paštomato adresą, į kurį norite gaunti siuntą" required value={address}
              onChange={(e) => setAddress(e.target.value)}

            ></textarea>
          </div>
        </form>
      </div>
    </Modal>
  );
};

export default ModalShippingDetails;

