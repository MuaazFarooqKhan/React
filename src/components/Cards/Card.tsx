import { useContext } from "react";
import { Link } from "react-router-dom";
import { changeModeContext } from "src/context/changeModeContext";
import { Country } from "src/modals/types";

const Card = ({
  name,
  flags,
  population,
  region,
  capital,
  alpha2Code,
}: Country) => {
    // will use for mode change
  const { theme } = useContext(changeModeContext);

  return (
    <div className="cards__infos" data-testid="cards__infos">
      <Link to={`/country/${alpha2Code}`}>
        <div className="cards__flag">
          <img src={flags.png} alt="country flag" aria-label={name} />
        </div>
        <div
          className={
            theme === "dark"
              ? "cards__content cards__content--dark"
              : "cards__content"
          }
        >
          <h3 className="cards__content--title">{name}</h3>
          <div className="cards__content--details">
            <p>
              <span>Population: </span>
              {population.toLocaleString("en-US")}
            </p>
            <p>
              <span>Region: </span>
              {region}
            </p>
            <p>
              <span>Capital: </span>
              {capital}
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Card;
