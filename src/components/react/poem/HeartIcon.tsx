// ♥ icon in svg, that is swithcing from gray to black 
//
interface HeartIconProps {
  isLiked: boolean;
}

const HeartIcon = ({ isLiked }: HeartIconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24">
    <path
      fill={isLiked ? "#000000" : "#c0c0c0"}
      d="m12 21.35l-1.45-1.32C5.4 15.36 2 12.27 2 8.5C2 5.41 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.08C13.09 3.81 14.76 3 16.5 3C19.58 3 22 5.41 22 8.5c0 3.77-3.4 6.86-8.55 11.53z"
    ></path>
  </svg>
);

export default HeartIcon;

