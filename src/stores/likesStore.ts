// likesStore.ts - manages the state and logic related to 
// liking individual poems and saving the list to a separate modal window
//

import { map } from "nanostores";
import { persistentAtom } from "@nanostores/persistent";

// Define a TypeScript type for a poem that can be liked
export type likedPoem = {
  id: string;      // Unique identifier for the poem
  title: string;   // Title of the poem
  author: string;  // Author of the poem
};

// Create a persistent atom to store the serialized liked poems
const likedPoemsStorage = persistentAtom<string>(
  "liked_poems",    // Key used to store the data in localStorage
  JSON.stringify({}), // Initial value is an empty object serialized as a JSON string
);

// Create a map to manage the collection of liked poems
// The map’s key is the poem's id and the value is the poem object itself
export const likedPoems = map<Record<string, likedPoem>>(
  JSON.parse(likedPoemsStorage.get()), // Initialize the map with data from persistent storage
);

// Subscribe to changes in the likedPoems map
// When the map is updated, also update the persistent storage with the new state
likedPoems.subscribe((newData) => {
  likedPoemsStorage.set(JSON.stringify(newData));
});

// Function to add a poem to the liked poems list
export function addLikedPoem(poem: likedPoem) {
  likedPoems.setKey(poem.id, poem);  // Add or update the poem in the map
  console.log(
    `added poem to liked poems list! ${Object.keys(likedPoems.get()).length}`,
  );  // Log the action and the current number of liked poems
}

// Function to remove a poem from the liked poems list by its id
export function removeLikedPoem(poemId: string) {
  likedPoems.setKey(poemId, undefined as unknown as likedPoem);  // Remove the poem from the map (sets it to undefined)
  console.log(`removed poem from liked poems list!`);  // Log the removal action
}

