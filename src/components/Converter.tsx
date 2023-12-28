import { useState } from 'react'

function Converter() {
    //****Variables that will change on change
    const [unitType, setUnitType] = useState([""]);
    const [convertFrom, setConvertFrom] = useState("");
    const [convertTo, setConvertTo] = useState("");

    //****List of unit types
    const lengthtypes = ["Centimeter", "Inch", "Feet"]
    const temptypes = ["Celsius", "Kelvin", "Fahrenheit"]
    // const distanttypes = ["Meter", "Kilometer", "Mile", "Foot", "Inch"]
    // const timetypes = ["Second", "Minute", "Hour", "Day", "Week", "Month", "Year"]
    // const weighttypes = ["Kilogram", "Gram", "Metric Ton", "Pound", "Ounce"]
    // const volumetypes = ["US Gallon", "US Quart", "US Pint", "US Cup", "Imperial Gallon", "Imperial Quart", "Imperial Pint", "Imperial Cup"]

    const allUnitTypes = [temptypes, lengthtypes]


    //****On Change function that detects when a new measurement type is selected
    const MeasurementChanged = (e:any) => {
        let index = parseInt(e.target.value)
        setUnitType(allUnitTypes[index])
    }

    //*************************** CONVERSIONS ***************************/
    let display = document.querySelector("#display")
    let secondInput = document.querySelector("#unit_input_2")

    const newValueDetected = (e:any) => {
        let valueToConvert = e.target.value;
    }

    //**************************************************************** */


    return (
        <div className="Converter Center Column">
            <select id="Measurements" onChange={MeasurementChanged}>
                <option value="" disabled selected>Measurement Type</option>
                <option value="0">Temperature</option>
                <option value="1">Length</option>
            </select>
            <div className="Inputs Center">
                <div className="Input_Container Center Row">
                    <select id="unit_picker_1" onChange={(e) => {setConvertFrom(e.target.value)}}>
                        <option value="" disabled selected>Unit</option>
                        {unitType.map(option => (
                            <option value={option}>{option}</option>
                        ))}
                    </select>
                    <input id="unit_input_1" type="number" onChange={newValueDetected}/>
                </div>
                <button id="switch">Switch</button>
                <div className="Input_Container Center Row">
                    <select id="unit_picker_2" onChange={(e) => {setConvertTo(e.target.value)}}>
                        <option value="" disabled selected>Unit</option>
                        {unitType.map(option => (
                            <option value={option}>{option}</option>
                        ))}
                    </select>
                    <input id="unit_input_2" type="number" disabled/>
                </div>
            </div>
            <p id="display">x (units) is equal to y (units)</p>
        </div>
    )
}

export default Converter