import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as faStarBorder } from "@fortawesome/free-regular-svg-icons";

export default function StarRate({ prop }) {
  const { setRating, rating } = prop;
  return (
    <>
      {[...Array(5)].map((_, index) => {
        const currentRate = index + 1;
        return (
          <label key={index}>
            <input
              type="radio"
              name="rate"
              value={currentRate}
              onClick={() => setRating(currentRate)}
              style={{ display: "none" }}
            />
            <FontAwesomeIcon
              icon={currentRate <= rating ? faStar : faStarBorder}
              color="#EA3D32"
            />
          </label>
        );
      })}
    </>
  );
}
