import { useStore } from "@nanostores/react";
import { toggleModal, reopenLastModal } from '../../stores/modalStore'
import { cartItemQty } from "../../stores/checkoutStore";

const ToggleFlyoutCart = () => {
  const qty = Number(useStore(cartItemQty));
  const openModal = () => {
    reopenLastModal();  // Toggles the specified modal
  };

  return (
    <div className="relative inline-block cursor-pointer" onClick={openModal}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 24 24"
      >
        <path
          fill="#000000"
          d="M11.25 18.75c0 .83-.67 1.5-1.5 1.5s-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5s1.5.67 1.5 1.5m5-1.5c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5s1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5m4.48-9.57l-2 8a.75.75 0 0 1-.73.57H8c-.36 0-.67-.26-.74-.62L5.37 5.25H4c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h2c.36 0 .67.26.74.62l.43 2.38H20a.754.754 0 0 1 .73.93m-1.69.57H7.44l1.18 6.5h8.79z"
        ></path>
      </svg>{" "}
      {qty > 0 && (
        <span className="absolute top-0 right-0 inline-flex items-center justify-center h-4 w-4 bg-white border border-black text-black font-sans text-[0.6rem] rounded-full -mt-2 -mr-2">
          {qty}
        </span>
      )}
      {/* This is Modal window*/}
    </div>
  );
};

export default ToggleFlyoutCart;
