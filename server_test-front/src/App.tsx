import { useEffect, useState } from "react";

function App() {
    const [counter, setCounter] = useState(0);

    const updateCounter = async (increment: boolean = false) => {
        const response = await (await fetch("api", {
            method: increment ? "POST" : "GET"
        })).json();
        setCounter(response.counter);
    };

    useEffect(() => {
        updateCounter();
        const interval = setInterval(updateCounter, 1000);
        return () => clearInterval(interval);
    }, []);

    return <>
        <p className="text-2xl ml-4 mt-6">Hello, world!</p>
        <p className="ml-5 mt-4">
            counter: <span>{counter}</span>
        </p>
        <button
            type="button"
            onClick={() => updateCounter(true)}
            className="ml-5 mt-2 bg-gray-300 px-2 rounded-md cursor-pointer"
        >
            increment
        </button>
    </>;
}

export default App;
