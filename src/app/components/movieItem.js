import starIcon from "../assets/star.png";
import deleteIcon from "../assets/delete.png";

export default function MovieItem(props) {
  const rating = [];
  for (let i = 0; i < props.movieRating; i++) {
    rating.push(<img key={i} src={starIcon.src} alt="star" />);
  }

  return (
    <li>
      {props.movieTitle}
      {rating}
      <img src={deleteIcon.src} alt="DeleteBtn" onClick={props.handleClick} />
    </li>
  );
}
