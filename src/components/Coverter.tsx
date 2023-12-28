function Converter() {
    return (
        <div className="Converter Center Column">
            <select id="Measurements">
                <option value="" disabled selected>Measurement Type</option>
                <option value="length">Length</option>
                <option value="temperature">Temperature</option>
                <option value="volume">Volume</option>
                <option value="weight">Weight</option>
                <option value="time">Time</option>
            </select>
            <div className="Inputs Center Column">
                <div className="Input_Container Center Row">
                    <select id="unit_picker_1">
                        <option value="" disabled selected>Unit</option>
                    </select>
                    <input id="unit_input_1" type="number" />
                </div>
                <button id="switch">Switch</button>
                <div className="Input_Container Center Row">
                    <select id="unit_picker_2">
                        <option value="" disabled selected>Unit</option>
                    </select>
                    <input id="unit_input_2" type="number" />
                </div>
            </div>
            <p id="display">x (units) is equal to y (units)</p>
        </div>
    )
}

export default Converter