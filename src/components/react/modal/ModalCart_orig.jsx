import Modal from "./Modal";
import {
  isCartOpen,
  toggleCart,
  cartItemQty,
} from "../../../stores/commonStore";
import { useStore } from "@nanostores/react";

function resetCart() {
  cartItemQty.set(0);
}
const ModalWindow = () => {
  const showModal = useStore(isCartOpen);
  const qty = useStore(cartItemQty);

  return (
    <div className="flex items-center justify-center bg-gray-100">
      <Modal
        show={showModal}
        title="Pirkinių krepšelis"
        onClose={toggleCart}
        customClass="poem-body"
      >
        <div>
          {qty > 0
            ? `Jūsų krepšelyje ${qty} egzempliorių.`
            : "Jūsų krepšelis tusčias"}
        </div>

        {qty > 0 && (
          <>
            <a
              onClick={resetCart}
              className="cursor-pointer hover:line-through"
            >
              Išvalyti krepšelį
            </a>

            <div className="py-5">
              <button className="btn-round btn  w-full">
                Apmokėti ir gauti knygą!
              </button>
            </div>
           <div className="text-center"><a href={`${import.meta.env.BASE_URL}taisykles`}>Taisyklės</a></div>  
          </>
        )}
      </Modal>
    </div>
  );
};

export default ModalWindow;
