// checkouStore.ts - manages the state and logic related to the checkout proces
import { persistentAtom } from '@nanostores/persistent'

// Persistent atoms for checkout details
export const shippingLocation = persistentAtom<string>('shippingLocation', '');
export const shippingPrice = persistentAtom<string>('shippingPrice', '0.0');
export const customerName = persistentAtom<string>('customerName', '');
export const customerEmail = persistentAtom<string>('customerEmail', '');
export const shippingAddress = persistentAtom<string>('shippingAddress', '');

interface CheckoutDetails {
  qty?: number;
  location?: string;
  price?: string;
  name?: string;
  email?: string;
  address?: string;
}

// Unified function to update checkout details, 
// update only what was defined in the forms
export const updateCheckoutDetails = (details: CheckoutDetails) => {
  if (details.qty !== undefined) {
    cartItemQty.set(String(details.qty));
  }
  if (details.location !== undefined) {
    shippingLocation.set(details.location);
  }
  if (details.price !== undefined) {
    shippingPrice.set(details.price);
  }
  if (details.name !== undefined) {
    customerName.set(details.name);
  }
  if (details.email !== undefined) {
    customerEmail.set(details.email);
  }
  if (details.address !== undefined) {
    shippingAddress.set(details.address);
  }
};

// ----------------
// Shopping cart (cart modal) functions below
// ----------------

// Persistent atom to track how many books the user has selected
export const cartItemQty = persistentAtom<string>('cartItemQty', '1');  // Default quantity is 1

// book price
const UNIT_PRICE: number = 8.99;

// max allower units
const MAX_UNITS: number = 20;

// total price for selected amount 
export function totalPrice() {
  return Number(cartItemQty.get()) * UNIT_PRICE;
}

// total price with shipment
export function finalPrice() {
  return totalPrice() + Number(shippingPrice.get());
}

// Function to add to cart item quantity
export function addCartItemQty(amount: number = 1) {
  const currentQty = Number(cartItemQty.get() ? cartItemQty.get() : "0"); // ensure cartIetemQty exist in localStorage
  const newQty = currentQty + amount;

  if (newQty > MAX_UNITS) {
    alert
    console.log(`Cannot add ${amount} items. It would exceed the limit of ${MAX_UNITS}`);
    alert('Palikite kitiems! 😏');
  } else {
    cartItemQty.set(String(newQty));
    console.log(`Added ${amount} item(s), new quantity is ${newQty}.`);
  }
}

// Function to subtract from cart item quantity
export function subtractCartItemQty(amount: number = 1) {
  const currentQty = Number(cartItemQty.get()); // Ensure the current quantity is treated as a number
  const newQty = currentQty - amount;
  cartItemQty.set(String(newQty > 0 ? newQty : 0)); // Prevent negative quantity
}
