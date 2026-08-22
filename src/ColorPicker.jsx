import { useState } from "react";
import './ColorPicker.css';

function ColorPicker() {
    const [color, setColor] = useState('#000000');

    return (
        <>
            <div className="container">
                <ColorInput color={color} setColor={setColor} />
                <ColorPreview color={color} />
            </div>
        </>
    )
}

function ColorInput({ color, setColor }) {
    return (
        <>
        <div className="color-input">
            <input
            className="input"
                type="color"
                value={color}
                onChange={(e) => setColor(e.target.value)}/>

            <span className="hex-code">HEX-code: {color}</span>
        </div>
        </>
    )
}

function ColorPreview({ color }) {
    return(
            <div className="ball"
            style={{backgroundColor: color}}></div>
    )
}

export default ColorPicker;