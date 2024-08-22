// common state management stores
//
import { atom, map } from "nanostores";
import { persistentAtom } from "@nanostores/persistent";


// Atom to track the quantity of items in the cart
export const cartItemQty = persistentAtom("count", 0);

// Boolena atom that tracks whether cart is open or closed 
export const isCartOpen = atom(false);

// Toggle Cart visibility
export function toggleCart() {
  isCartOpen.set(!isCartOpen.get());
}

type ShippingCosts = {
  unit: number;
  lt: number;
  eu: number;
  world: number;
};

const units:ShippingCosts = { unit: 7, lt: 3, eu: 7, world: 19}

const finalprice = () => 
  {
  // return unitprice * cartitemqty + shippingcost
}

// Type definition for a liked poem
export type likedPoem = {
  id: string;
  title: string;
  author: string;
};

// Persistent atom to store the serialized version of likedPoems
const likedPoemsStorage = persistentAtom<string>(
  "liked_poems",
  JSON.stringify({}),
);

// Map to store liked poems, where the key is the poem's id
export const likedPoems = map<Record<string, likedPoem>>(
  JSON.parse(likedPoemsStorage.get()),
);

// Subscribe to changes in likedPoems and update the persistent storage
likedPoems.subscribe((newData) => {
  likedPoemsStorage.set(JSON.stringify(newData));
});

// Function to add a liked poem
export function addLikedPoem(poem: likedPoem) {
  likedPoems.setKey(poem.id, poem);
  console.log(
    `added poem to liked poems list! ${Object.keys(likedPoems.get()).length}`,
  );
}

// Function to remove a liked poem
export function removeLikedPoem(poemId: string) {
  likedPoems.setKey(poemId, undefined);
  console.log(`removed poem from liked poems list!`);
}

// Function to add to cart item quantity
export function addCartItemQty(amount: number = 1) {
  const currentQty = Number(cartItemQty.get() ? cartItemQty.get() : "0"); // ensure cartIetemQty exist in localStorage
 const newQty = currentQty + amount;

  if (newQty > 20) {
    console.log(`Cannot add ${amount} items. It would exceed the limit of 20.`);
  } else {
    cartItemQty.set(newQty);
    console.log(`Added ${amount} item(s), new quantity is ${newQty}.`);
  }}

// Function to subtract from cart item quantity
export function subtractCartItemQty(amount: number = 1) {
  const currentQty = Number(cartItemQty.get()); // Ensure the current quantity is treated as a number
  const newQty = currentQty - amount;
  cartItemQty.set(newQty > 0 ? newQty : 0); // Prevent negative quantity
}
