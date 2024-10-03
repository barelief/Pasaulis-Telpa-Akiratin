import React, { useState } from "react";
import { useStore } from "@nanostores/react";
import { likedPoems } from "../../stores/likesStore";

const ToggleFlyoutLikes: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const likedPoemsStore = useStore(likedPoems);
  const likedPoemsList = Object.values(likedPoemsStore);

  const toggleLikes = () => {
    setIsOpen(!isOpen);
  };

  const scrollToPoem = (e: React.MouseEvent<HTMLAnchorElement>, poemId: number) => {
    e.preventDefault();
    const targetElement = document.getElementById(`poem${poemId}`);
    if (targetElement) {
      const elementPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - 60; // Adjust 60px offset
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="relative inline-block">
      <a
        href="#likes"
        className="text-gray-700 hover:text-red-500 transition-colors duration-300"
        onClick={(e) => {
          e.preventDefault();
          toggleLikes();
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 256 256"
        >
          <path
            fill="#000000"
            d="M178 40c-20.65 0-38.73 8.88-50 23.89C116.73 48.88 98.65 40 78 40a62.07 62.07 0 0 0-62 62c0 70 103.79 126.66 108.21 129a8 8 0 0 0 7.58 0C136.21 228.66 240 172 240 102a62.07 62.07 0 0 0-62-62m-50 174.8c-18.26-10.64-96-59.11-96-112.8a46.06 46.06 0 0 1 46-46c19.45 0 35.78 10.36 42.6 27a8 8 0 0 0 14.8 0c6.82-16.67 23.15-27 42.6-27a46.06 46.06 0 0 1 46 46c0 53.61-77.76 102.15-96 112.8"
          ></path>
        </svg>
      </a>
      {likedPoemsList.length > 0 && (
        <span className="absolute top-0 right-0 inline-flex items-center justify-center h-4 w-4 bg-white border border-black text-black font-sans text-[0.6rem] rounded-full -mt-2 -mr-2">
          {likedPoemsList.length}
        </span>
      )}

      {isOpen && (
        <div className="absolute right-0 mt-2 w-52 bg-white shadow-lg border border-gray-200 rounded-lg p-4 overflow-auto h-[400px]">
          <h3 className="text-sm font-bold">Patikę eilėrasčiai</h3>
          {likedPoemsList.length === 0 ? (
            <p className="text-xs text-gray-600">
              Nėra patikusių eilėrasčių. Paspauskite „like“ eilėrasčio apačioje,
              kad jis atsirastų šiame sąraše.
            </p>
          ) : (
            <ul className="text-xs text-gray-700 list-disc ml-3">
              {likedPoemsList.map((poem) => (
                <li key={poem.id} className="py-1">
                  <a
                    href={`#poem${poem.id}`}
                    onClick={(e) => scrollToPoem(e, poem.id)}
                  >„{poem.title}“ {poem.author}</a>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  );
};

export default ToggleFlyoutLikes;
