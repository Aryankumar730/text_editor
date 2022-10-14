import React from 'react'
// import PropTypes from 'prop-types'


export default function About(props) {
    // function handleDarkmode(){
    //     console.log("dark mode is clicked");

    //     if(myStyle.color === 'black'){
    //         myownStyle(
    //             {
    //                 color : 'white',
    //                 backgroundColor : 'black',
    //                 borderRadius : '15px',
    //             }
    //         )
    //         settext('Enable Light mode');
    //     }
    //     else{
    //         myownStyle({
    //                 color : 'black',
    //                 backgroundColor : 'white',
    //                 borderRadius : '15px',
    //         })  
    //         settext('Enable dark mode');

    //     }
    // }
    
        

    // const [myStyle,myownStyle] = useState({
    //     color : 'black',
    //     backgroundColor : 'white',
    //     borderRadius : '15px',
    // });
    let myStyle = {
            
            borderRadius : '15px',
        }

    // const [text,settext] = useState('Enable dark mode')
    return (
        <div className='container'>
            <h3 className={`my-3 text-${props.colorText}`}>About Us</h3>
            <div className={`accordion bg-${props.mode} text-${props.colorText}`} id="accordionExample" style = {myStyle}>
                <div className={`accordion-item bg-${props.mode}`} style = {myStyle}>
                    <h2 className="accordion-header" id="headingOne">
                        <button className={`accordion-button bg-${props.mode} text-${props.colorText}`}  type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" style = {myStyle}aria-expanded="true" aria-controls="collapseOne">
                            Introduction
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div className={`accordion-body bg-${props.mode} text-${props.colorText}`} style = {myStyle}>
                            <strong>TextFormatter - The text formatting application.</strong> It is an amazing application developed to edit texts and format that according to the users choice and comfort. Further, the edited text can also be copied to the clipboard by the pressing the copy button. 
                        </div>
                    </div>
                </div>
                <div className={`accordion-item bg-${props.mode}`} style = {myStyle}>
                    <h2 className="accordion-header" id="headingTwo">
                        <button className={`accordion-button bg-${props.mode} text-${props.colorText}`} style = {myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            Functionalities
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                        <div className={`accordion-body bg-${props.mode} text-${props.colorText}`} style = {myStyle}>
                             The functionalities of the applicaation includes various parameters.
                             <ol>
                                <li>Conversion of text to uppercase or lowercase.</li>
                                <li>Counting the characters present in the text or words in the text.</li>
                                <li>Copying the text on a button press.</li>
                                <li>Choice of a dark-mode for the screen.</li>
                             </ol>
                        </div>
                    </div>
                </div>
                <div className={`accordion-item bg-${props.mode}`} style = {myStyle}>
                    <h2 className="accordion-header" id="headingThree">
                        <button className={`accordion-button bg-${props.mode} text-${props.colorText}`}  style = {myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            Author
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                        <div className={`accordion-body bg-${props.mode} text-${props.colorText}`} style = {myStyle}>
                        The Application is made by Aryan Kumar. A Computer Science student at the Liverpool John Moores University.
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">

            {/* <button className="btn btn-primary my-2" onClick={handleDarkmode} >{text}</button> */}
            </div>
        </div>
    )
}
About.defaultProps = {
    mode: "light",
    colorText: "light"
  }