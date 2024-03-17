import "./App.css";

function ColourBlind(props) {

    const handleColourBlindChange = (event) => {
        const newPreference = event.target.value;
        props.setColourBlind(newPreference);

        localStorage.removeItem('colourBlindType');
        localStorage.setItem('colourBlindType', newPreference);
    };

    return (
        <div className="colour-blind">
        <select className="w-auto h-10 border-2 border-gray-300 rounded-md outline-none cursor-pointer" onChange={handleColourBlindChange} value={props.colourBlindType}>
            <option selected value='Normal'>None</option>
            <option value='cone-monochromacy'>cone-monochromacy</option>
            <option value='rod-monochromacy'>rod-monochromacy</option>
            <option value='protanopia'>protanopia</option>
            <option value='deuteranopia'>deuteranopia</option>
            <option value='tritanopia'>tritanopia</option>
        </select>
        </div>
    );
}

export default ColourBlind;
