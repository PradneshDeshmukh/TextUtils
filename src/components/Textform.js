import React, { useState } from 'react';



export default function Textform(props) {
    const [text, setText] = useState("Enter text here ");

    const handleUcaseClick = ()=>{
        // console.log(" Uppercase was clicked ")
        // setText("You have clicked handleUcaseClick " + text )
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted into uppercase.","success")
      }
      
      const handleLcaseClick = () =>{
        
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted into lowercase.","success")
      }
      const clearText = () =>{
        
        let newText = '';
        setText(newText);
        props.showAlert("Cleared.","success")
      }
      
      const colorText = () => {
        
        var element = document.getElementById("textArea");
        element.style.color = "red";
        // element.style.backgroundColor = "yellow";
        // element.style.fontSize = "20px";
        props.showAlert("Text colored into red.","success")
    
    }
      

    const handleOnChange = (event) =>{

        // console.log("On change ")
        setText(event.target.value)
    }
    
    
    return (
        <>

        <div className="container" style={{backgroundColor:props.mode==='dark'?'#403c5a':'white' , color:props.mode==='dark'?'white':'black'}}>
      <h2>{props.heading}</h2>
  <div className='mb-3' >
    <label htmlFor="exampleFormControlTextarea1" >Enter your text here </label>
    <textarea className="form-control" id="textArea" value={text} rows="8" onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'gray':'white' , color:props.mode==='dark'?'white':'black'}}></textarea>
  </div>

  <button className="btn btn-primary mx-2" onClick={handleUcaseClick}>Convert to Uppercase</button> 
  <button className="btn btn-success mx-2" onClick={handleLcaseClick}>Convert to Lowercase</button> 
  <button className="btn btn-danger mx-2" onClick={colorText}>Color a text</button> 
  <button className="btn btn-primary mx-2" onClick={clearText}>Clear a text</button> 

    </div>
  <div>


    </div>

    <div className="container  my-3" style={{backgroundColor:props.mode==='dark'?'#403c5a':'white' , color:props.mode==='dark'?'white':'black'}}>
        <h2>Your text summery.</h2>
        <p>{text.split("").length} words and {text.length} characters</p>
        <p>{0.008 * text.split("").length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter something to preview."}</p>


    </div>
    </>
  )
}
