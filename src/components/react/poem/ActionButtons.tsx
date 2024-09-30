// single poem action buttons to like, translate, copy to clipbaord 
//
//
import { useState } from 'react';
import HeartIcon from "./HeartIcon.tsx";

interface ActionButtonsProps {
  isLiked: boolean;
  handleLike: () => void;
  handleTranslation: () => void;
  copyPoemToClipboard: () => void;
  lang: "lithuanian" | "polish";
}

const ActionButtons = ({ isLiked, handleLike, handleTranslation, copyPoemToClipboard, lang }: ActionButtonsProps) => {
  const [copySuccess, setCopySuccess] = useState(false);
  const languageSymbols = {
    lithuanian: "LT",
    polish: "PL",
  };
  const copyPoemToClipboardClick = () => {
    // Call the parent’s handleTranslation function
    copyPoemToClipboard();
    setCopySuccess(true); // Set the copy success state to true

    // Reset the state back to false after 2 seconds
    setTimeout(() => setCopySuccess(false), 2000);
  }

  return (
    <div className="py-3 text-center md:text-left inline-flex items-center">
      <span onClick={handleLike} className={`text-2xl pr-2 cursor-pointer select-none ${isLiked ? "text-black" : "text-gray-300"}`}>
        <HeartIcon isLiked={isLiked} />
      </span>
      <span onClick={handleTranslation} className="text-sm px-2 cursor-pointer select-none font-mono">{languageSymbols[lang]}</span>
      <span onClick={copyPoemToClipboardClick} className="text-xl pl-2 cursor-pointer select-none">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24">
          <g fill="none" stroke="#000000">
            <path d="M14 7c0-.932 0-1.398-.152-1.765a2 2 0 0 0-1.083-1.083C12.398 4 11.932 4 11 4H8c-1.886 0-2.828 0-3.414.586S4 6.114 4 8v3c0 .932 0 1.398.152 1.765a2 2 0 0 0 1.083 1.083C5.602 14 6.068 14 7 14"></path>
            <rect width="10" height="10" x="10" y="10" rx="2"></rect>
          </g>
        </svg>
      </span>

      {
        copySuccess ? (
          <span className="text-sm px-2 cursor-pointer select-none font-mono text-gray-500"> <small>nukopijuota</small> </span>
        ) : (
          <></>
        )
      }
    </div>
  )
};

export default ActionButtons;
