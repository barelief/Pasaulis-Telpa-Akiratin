// Poem title that changes depending if it's folded or not
//

interface PoemTitleProps {
  title: string;
  author: string;
  isFolded: boolean;
  isLiked: boolean;
  onClick: () => void;
}

const PoemTitle = ({ title, author, isFolded, isLiked, onClick }: PoemTitleProps) => {
  const arrow = isFolded ? "↓" : "↑";
  const titleColor = isLiked ? "text-black underline" : "text-gray-700";
  const displayAuthor = isFolded ? author : "";

  return (
    <div onClick={onClick} className={isFolded ? "cursor-zoom-in" : "cursor-zoom-out"}>
      <span className="text-xl poem-title">
        <span className={titleColor}>{title}</span>
        <span className="text-gray-400 poem-author text-base"> {arrow} </span>
      </span>
      <span className="uppercase text-xs poem-author">{displayAuthor}</span>
    </div>
  );
};
export default PoemTitle;
