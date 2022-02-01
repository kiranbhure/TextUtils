import React, {useState} from 'react'


export default function TextForms(props) {
        const handleOnChange = (event) =>{
        // console.log("On change");
        setText(event.target.value);
    }
    const handleUpClick =()=>{
        // console.log("Uppercase was clicked: " + text);
        setText(text.toUpperCase());
        props.showAlert('Converted to UpperCase', 'success');
    }
    const handleLoClick =()=>{
        setText(text.toLowerCase());
        props.showAlert('Converted to LowerCase', 'success');

    }
    const handleClrClick =()=>{
        let newText = "";
        setText(newText);
        props.showAlert('TextArea has been cleared', 'success');
    }
    const handleCopy = () =>{
        let text = document.getElementById('myBox');
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert('Copied to Clipboard', 'success');
    }
    const handleExtraSpaces = () =>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert('Extra spaces has been removed', 'success');
    }

    const [text, setText] = useState("")
    return (
        <>
        <div style={{color:props.mode === 'dark'?'white':'#042743'}}>
            <h2>{props.hedding}</h2>
            <div className="mb-3">
                <label htmlFor="myBox" className="form-label"></label>
                <textarea className="form-control" style={{backgroundColor:props.mode === 'dark'?'gray':'white', color: props.mode === 'dark'?'white':'#042743'}} value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
            </div>
            <button className="btn btn-success mx-1" onClick={handleUpClick}>Convert To UpperCase</button>
            <button className="btn btn-success mx-1" onClick={handleLoClick}>Convert To UpperCase</button>
            <button className="btn btn-danger mx-1" onClick={handleClrClick}>Clear Text</button>
            <button className="btn btn-danger mx-1" onClick={handleCopy}>Copy</button>
            <button className="btn btn-danger mx-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
        </div>
        <div className="container my-3" style={{color:props.mode === 'dark'?'white':'#042743'}}>
        <h2>Your Text Summery</h2>
        <p>{(text.split(" ").length)-1} Wordsand {text.length} Characters</p>
        <h3>Preview</h3>
        <p>{text.length > 0 ? text:'Enter something in the textbox above to preview here'}</p>
        </div>
        </>
    )
};
