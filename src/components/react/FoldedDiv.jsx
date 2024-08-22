// the following code folds/unfolds DIV by using tailwind classes
// fold/unfold is a semantic name for resizing the div with css animation
import { useState, useEffect, useRef } from "react";
// import { useStore } from "@nanostores/react";
// import { foldTrigger } from "../../stores/foldStore";
import { addLikedPoem, removeLikedPoem } from "../../stores/commonStore";

const FoldedDiv = (props) => {
  // State to track whether the div is active (unfolded) or not (folded)
  const [isFolded, setIsActive] = useState(true);

  // State to track the height of the div for smooth folding/unfolding
  const [divHeight, setDivHeight] = useState(0);

  // Ref to the div element to measure its height dynamically
  const divRef = useRef(null);

  const [isLiked, toggleLike] = useState(false);

  const foldedHeight = 39;

  // Tailwind CSS classes for different states of the div
  const divStyle = {
    default: "p-1 px-3 transition-all overflow-hidden duration-500 ease-out ",
    unfolded: "bg-white ml-3 mt-5",
    folded: "",
  };

  // extracting some logic out into variables for declutter purposes
  const foldedStyle = isFolded ? divStyle.folded : divStyle.unfolded;
  const arrow = isFolded ? "↓" : "↑";
  const displayAuthor = isFolded ? props.poem.author : "";
  const titleColor = isFolded ? "text-gray-800" : "text-black";

  // Function to handle the click event, toggling the fold/unfold state
  const handleClick = () => {
    setIsActive(!isFolded);
  };

  // Effect to update the div height when the active state changes
  useEffect(() => {
    // Calculate the height of the div only the first time it is unfolded
    if (divRef.current && !isFolded) {
      setDivHeight(divRef.current.scrollHeight);
    }
  }, [isFolded, divHeight]);

  const handleTranslation = () => {
    console.log("translating");
  };

  const copyPoemToClipboard = () => {
    console.log("copied poem to clipboard");
  };

  // Managing liked status using nanostores
  const handleLike = () => {
    if (isLiked) {
      removeLikedPoem(props.poem.id);
    } else {
      addLikedPoem({
        id: props.poem.id,
        title: props.poem.title,
        author: props.poem.author,
      });
    }
    toggleLike(!isLiked);
  };

  const HeartIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 24 24"
    >
      <path
        fill={isLiked ? "#000000" : "#c0c0c0"}
        d="m12 21.35l-1.45-1.32C5.4 15.36 2 12.27 2 8.5C2 5.41 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.08C13.09 3.81 14.76 3 16.5 3C19.58 3 22 5.41 22 8.5c0 3.77-3.4 6.86-8.55 11.53z"
      ></path>
    </svg>
  );

  return (
    <div
      ref={divRef} // Attach the ref to the div element for height calculations
      style={{ height: isFolded ? `${foldedHeight}px` : `${divHeight}px` }}
      className={` ${divStyle.default}
       ${foldedStyle}
      `}
    >
      <div
        onClick={handleClick}
        className={isFolded ? "cursor-zoom-in" : "cursor-zoom-out"}
      >
        <span className={`text-xl poem-title ${titleColor}`}>
          {props.poem.title}
          <span className="text-gray-400 poem-author text-base"> {arrow} </span>
        </span>
        <span className="uppercase text-xs poem-author">
          {`${displayAuthor}`}{" "}
          <span className="px-2">{isLiked ? "♥" : ""}</span>
        </span>
        <pre className="pt-4 pb-4 poem-body">{props.poem.body}</pre>
        <span className="text-sm uppercase poem-author font-bold pt-4 pb-4">
          © {props.poem.author}
        </span>
      </div>

      <div className="py-3 text-center md:text-left inline-flex items-center">
        {" "}
        <span
          onClick={handleLike}
          className={`text-2xl pr-2 cursor-pointer select-none ${isLiked ? "text-black" : "text-gray-300"}`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
          >
            <path
              fill={isLiked ? "#000000" : "#c0c0c0"}
              d="m12 21.35l-1.45-1.32C5.4 15.36 2 12.27 2 8.5C2 5.41 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.08C13.09 3.81 14.76 3 16.5 3C19.58 3 22 5.41 22 8.5c0 3.77-3.4 6.86-8.55 11.53z"
            ></path>
          </svg>
        </span>
        <span
          onClick={handleTranslation}
          className="text-sm px-2 cursor-pointer select-none font-mono"
        >
          PL
        </span>
        <span
          onClick={copyPoemToClipboard}
          className="text-xl pl-2 cursor-pointer select-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
          >
            <g fill="none" stroke="#000000">
              <path d="M14 7c0-.932 0-1.398-.152-1.765a2 2 0 0 0-1.083-1.083C12.398 4 11.932 4 11 4H8c-1.886 0-2.828 0-3.414.586S4 6.114 4 8v3c0 .932 0 1.398.152 1.765a2 2 0 0 0 1.083 1.083C5.602 14 6.068 14 7 14"></path>
              <rect width="10" height="10" x="10" y="10" rx="2"></rect>
            </g>
          </svg>
        </span>
      </div>
    </div>
  );
};

export default FoldedDiv;
