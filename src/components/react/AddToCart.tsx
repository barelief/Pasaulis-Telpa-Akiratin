import { useState } from "react";
import { addCartItemQty } from "../../stores/checkoutStore";

const AddToCart = () => {
  const [quantity, setQuantity] = useState(1);

  const handleSubmit = () => {
    if (quantity > 0) {
      addCartItemQty(quantity);
    }
  };

  return (
    <div className="items-center mx-auto center text-center pb-3">
      <div className="flex items-center space-x-2">
        <input
          type="number"
          className="w-12 p-1 border rounded-md"
          placeholder="vnt."
          min="1"
          value={quantity}
          onChange={(e) => setQuantity(parseInt(e.target.value, 10))}
        />
        <button onClick={handleSubmit} className="px-4 py-2 btn rounded-md">
          Pridėti į krepšelį
        </button>
      </div>
    </div>
  );
};

export default AddToCart;
