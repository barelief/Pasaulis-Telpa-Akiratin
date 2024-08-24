// modalStore.ts - stores tha take care of Modal switching logic
//

import { persistentAtom } from '@nanostores/persistent'

// Persistent atom to keep track of the current active modal in the checkout process
export const activeModal = persistentAtom<string>('activeModal', undefined);

// Persistent atom to store the last active modal
export const lastActiveModal = persistentAtom<string>('lastActiveModal', undefined);  // Default to 'itemSelection'

// Function to open a specific modal and update the last active modal
export const openModal = (modalName: string) => {
  lastActiveModal.set(modalName);
  activeModal.set(modalName);
};

// Functions to open specific modals and save the active modal to localStorage
export const openItemSelectionModal = () => {
  openModal('itemSelection');
};

export const openCustomerDetailsModal = () => {
  openModal('customerDetails');
};

export const openReviewOrderModal = () => {
  openModal('reviewOrder');
};

export const closeModal = () => {
  activeModal.set('');
}

export const reopenLastModal = () => {
  const lastModal = String(lastActiveModal.get());
  console.log(lastModal);
  // I write null as strng because it's saved like that in localStorage
  openModal(lastModal === 'null' || lastModal === null || lastModal === 'undefined' ? 'itemSelection' : lastModal)
};

export const resetLastModal = () => {
  openModal('');
}

// Function to toggle a modal open/close
export const toggleModal = (modalName: string) => {
  const currentModal = activeModal.get();
  if (currentModal === modalName) {
    closeModal();  // If the modal is already open, close it
  } else {
    openModal(modalName);  // Otherwise, open the modal
  }
};


