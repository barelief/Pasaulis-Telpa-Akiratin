
import React from 'react';

import { useState, useEffect, useRef } from "react";
import PoemTitle from "./poem/PoemTitle.tsx";
import PoemBody from "./poem/PoemBody.tsx";
import ActionButtons from "./poem/ActionButtons";
import { addLikedPoem, removeLikedPoem } from "../../stores/likesStore.ts";
import type { Poem } from '../../types/poem'

interface FoldedDivProps {
  poem: Poem;  // Here we define that we expect a Poem type
}

type Language = "lithuanian" | "polish";

// Mapping for language switch
const languageSwitch: Record<Language, Language> = {
  lithuanian: "polish",
  polish: "lithuanian",
};

const FoldedDiv = React.memo(({ poem }: FoldedDivProps) => {
  const [isFolded, setIsActive] = useState(true);
  const [lang, setLang] = useState<Language>("lithuanian"); const [divHeight, setDivHeight] = useState(0);
  const divRef = useRef<HTMLDivElement>(null);
  const [isLiked, toggleLike] = useState(false);

  const foldedHeight = 39;
  const divStyle = {
    default: "p-1 px-3 transition-all overflow-hidden duration-500 ease-out ",
    unfolded: "bg-white ml-2 -mr-2 mt-2",
    folded: "",
  };

  const toggleLang = () => {
    setLang((prevLang) => languageSwitch[prevLang]);
  };

  //language switcher routines
  const languageSymbols = {
    lithuanian: "LT",
    polish: "PL",
  } as const;

  const currentSymbol = languageSymbols[lang];

  const handleClick = () => setIsActive(!isFolded);

  useEffect(() => {
    if (divRef.current && !isFolded) {
      setDivHeight(divRef.current.scrollHeight);
    }
  }, [isFolded, divHeight]);

  const handleLike = () => {
    if (isLiked) {
      removeLikedPoem(poem.id.toString());
    } else {
      addLikedPoem({
        id: poem.id.toString(),
        title: poem.title,
        author: poem.author,
      });
    }
    toggleLike(!isLiked);
  };

  const body = lang === 'lithuanian' ? poem.body : poem.body_pl ?? "";
  const title = lang === 'lithuanian' ? poem.title : poem.title_pl ?? "";

  const handleTranslation = () => {
    console.log(`translating `);
    toggleLang();
  }
  const copyPoemToClipboard = () => {
    // Check if navigator.clipboard is available
    if (!navigator.clipboard) {
      console.error("Clipboard API not supported in this browser.");
      alert("Clipboard API is not supported in this browser.");
      return;
    }

    navigator.clipboard.writeText(body)
      .then(() => {
        console.log("Poem copied to clipboard!");
      })
      .catch((err) => {
        console.error("Failed to copy to clipboard:", err);
      });
  }

  return (
    <div
      id={`poem${poem.id}`}
      ref={divRef}
      style={{ height: isFolded ? `${foldedHeight}px` : `${divHeight}px` }}
      className={`${divStyle.default} ${isFolded ? divStyle.folded : divStyle.unfolded}`}
    >
      <PoemTitle title={title} author={poem.author} isFolded={isFolded} isLiked={isLiked} onClick={handleClick} />
      <PoemBody body={body} author={poem.author} />
      <ActionButtons isLiked={isLiked} handleLike={handleLike} handleTranslation={handleTranslation} copyPoemToClipboard={copyPoemToClipboard}
        lang={lang} />    </div>
  );
});

export default FoldedDiv;

