import React, { useState } from "react";
import PropTypes from 'prop-types';
import '../css/TextForm.css';


export default function TextForm(props) {


    function handleUpclick() {
        // console.log("uppercase was clicked");
        let newText = text.toUpperCase();

        settext(newText);
        props.showAlert("The text has been converted to Uppercase", "primary");
    }
    function handleDownclick() {
        // console.log("uppercase was clicked");
        let newText = text.toLowerCase();

        settext(newText);
        props.showAlert("The text has been converted to Lowercase", "primary");
    }
    function handleclearText() {
        // console.log("uppercase was clicked");
        let newText = "";

        settext(newText);
        props.showAlert("The text has been converted to cleared", "warning");
    }
    function handlecopyText() {
        // console.log("uppercase was clicked");
        // text.select();
        navigator.clipboard.writeText(text);
        props.showAlert("The text has been converted to copied to clipboard", "primary");

    }

    function handleOnchange(event) {
        // console.log("on change fired");
        settext(event.target.value)
    }
    const [text, settext] = useState('');


    return (
        <>
            <div className="big-container">

                <div className="container">
                    <h3 className={`text-${props.colorText}`}>{props.heading}</h3>
                    <div className="mb-3">

                        <textarea
                            className={`form-control bg-${props.mode} text-${props.colorText}`} id="myBox" rows="8" value={text}
                            onChange={handleOnchange} placeholder="Enter text here"
                        ></textarea>
                    </div>
                    <button disabled={text.length === 0} className="btn btn-primary my-1" onClick={handleUpclick}>Convert to Uppercase</button>
                    <button disabled={text.length === 0} className="btn btn-primary mx-2 my-1" onClick={handleDownclick}>Convert to Lowercase</button>
                    <button disabled={text.length === 0} className="btn btn-primary mx-2 my-1" onClick={handleclearText}>Clear Text</button>
                    <button disabled={text.length === 0} className="btn btn-primary mx-2 my-1" onClick={handlecopyText}>Copy Text</button>
                </div>
                <div className={`container my-3 text-${props.colorText}`}>
                    <h3>Your Text Summary</h3>

                    <p id="mynumber">

                    </p>
                    {text.split(/\s+/).filter((element) => { return element.length !== 0 }).length} words and {text.length - (text.length - text.replaceAll(' ', '').length)} characters
                    <p>
                        {parseFloat(0.008 * text.split(/\s+/).filter((element) => { return element.length !== 0 }).length).toFixed(2)} Minutes to read
                    </p>
                    <h3>Preview</h3>
                    <p id="preview">{text.length > 0 ? text : "Nothing to preview here"}</p>
                </div>
            </div>
        </>
    );
}
TextForm.propTypes = {
    heading: PropTypes.string.isRequired,

}