import { useState } from "react";
import ThemeButton from "./components/themeButton";

function App() {
    const [theme, setTheme] = useState(localStorage.getItem("theme") as "dark" | "light" ??
        (window.matchMedia("(prefers-color-scheme: dark)") ? "dark" : "light"));

    return <div className="flex flex-col h-screen" data-theme={theme}>
        <header className="h-20 flex justify-between items-center px-6 bg-gray-300 dark:bg-gray-900">
            <p className="dark:text-white">text</p>
            <div className="flex gap-8 items-center">
                <p className="dark:text-white">text</p>
                <ThemeButton theme={theme} setTheme={setTheme} />
            </div>
        </header>
        <main className="flex-grow bg-gray-100 dark:bg-gray-800"></main>
    </div>;
}

export default App;
