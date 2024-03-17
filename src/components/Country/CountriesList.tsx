import { useContext } from "react";
import { changeModeContext } from "src/context/changeModeContext";
import { Border } from "src/modals/types";

const CountriesList = ({ borderName }: Border) => {
  const { theme } = useContext(changeModeContext);

  return (
    <>
        <button
          className={
            theme === "dark"
              ? "country__details--button country__details--button--dark"
              : "country__details--button"
          }
          type="button"
          data-testid="border"
        >
          {borderName}
        </button>
    </>
  );
};

export default CountriesList;
