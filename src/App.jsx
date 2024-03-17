import { useState } from "react";
import "./App.css";
import ColourBlind from "./ColourBlind";

function App() {
    const colourBlindPreference = localStorage.getItem('colourBlindType');
    const [colourBlindType, setColourBlindType] = useState(colourBlindPreference);

    return (
        <div className="App h-[20rem] w-[10rem] p-2 flex justify-start">
        <ColourBlind colourBlindType={colourBlindType} setColourBlind={setColourBlindType}/>
        </div>
    );
}

export default App;
