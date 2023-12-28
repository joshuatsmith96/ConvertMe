import { useState } from 'react'

function Converter() {
    //Variables that will change on change
    const [unitType, setUnitType] = useState([""]);


    //List of unit types
    const lengthtypes = ["Centimeter", "Inch", "Feet"]
    const distanttypes = ["Meter", "Kilometer", "Mile", "Foot", "Inch"]
    const temptypes = ["Celsius", "Kelvin", "Fahrenheit"]
    const timetypes = ["Second", "Minute", "Hour", "Day", "Week", "Month", "Year"]
    const weighttypes = ["Kilogram", "Gram", "Metric Ton", "Pound", "Ounce"]
    const volumetypes = ["US Gallon", "US Quart", "US Pint", "US Cup", "Imperial Gallon", "Imperial Quart", "Imperial Pint", "Imperial Cup"]

    const allUnitTypes = [lengthtypes, distanttypes, temptypes, timetypes, weighttypes, volumetypes]


    //On Change function that detects when a new measurement type is selected
    const MeasurementChanged = (e:any) => {
        let index = parseInt(e.target.value)
        setUnitType(allUnitTypes[index])
    }


    return (
        <div className="Converter Center Column">
            <select id="Measurements" onChange={MeasurementChanged}>
                <option value="" disabled selected>Measurement Type</option>
                <option value="0">Length</option>
                <option value="1">Distance</option>
                <option value="2">Temperature</option>
                <option value="3">Time</option>
                <option value="4">Weight</option>
                <option value="5">Volume</option>
            </select>
            <div className="Inputs Center">
                <div className="Input_Container Center Row">
                    <select id="unit_picker_1">
                        <option value="" disabled selected>Unit</option>
                        {unitType.map(option => (
                            <option value={option}>{option}</option>
                        ))}
                    </select>
                    <input id="unit_input_1" type="number" />
                </div>
                <button id="switch">Switch</button>
                <div className="Input_Container Center Row">
                    <select id="unit_picker_2">
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