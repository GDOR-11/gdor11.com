import lightModeIcon from "../assets/light-mode-icon.svg";
import darkModeIcon from "../assets/dark-mode-icon.svg";

export default function ThemeButton(props: {
    theme: "dark" | "light",
    setTheme: React.Dispatch<React.SetStateAction<"dark" | "light">>
}) {
    const handleClick = () => {
        if (props.theme === "dark") {
            localStorage.setItem("theme", "light");
            props.setTheme("light");
        } else {
            localStorage.setItem("theme", "dark");
            props.setTheme("dark");
        }
    }
    return <button onClick={handleClick} className="dark:text-white">
        <img
            className="h-8 dark:h-6 dark:mx-1 cursor-pointer"
            src={props.theme === "light" ? lightModeIcon : darkModeIcon}
        />
    </button>;
}
