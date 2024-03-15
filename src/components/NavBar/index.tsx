import { useContext } from "react";
import { HiMoon, HiOutlineMoon } from "react-icons/hi";
import { Link } from "react-router-dom";
import { ThemeContext } from "src/context/themeContext";
import "./style.scss";

const NavBar = () => {
    const { theme, toggleMode } = useContext(ThemeContext);

    return (
        <header className={theme === "dark" ? "header header--dark" : "header"}>
            <Link to="/">
                <div>
                    <h2 className="header__title">Where in the world?</h2>
                </div>
            </Link>
            <div className="header__mode">
                <button
                    className={
                        theme === "dark"
                            ? "header__button header__button--dark"
                            : "header__button"
                    }
                    type="button"
                    onClick={toggleMode}
                >
                    {theme === "dark" ? <> <HiMoon /> Dark Mode</> : <><HiOutlineMoon /> Light Mode</>}
                </button>
            </div>
        </header>
    );
};

export default NavBar;
