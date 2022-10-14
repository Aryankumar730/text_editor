import React from 'react'
// import PropTypes from 'prop-types';


export default function Alert(props) {
    
    function captialize(word){
        const lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    }


    return (

        <div style={{height: '50px'}}>
        {props.alert &&
            <div className={`alert alert-${props.alert.typ} alert-dismissible fade show`} id="alertMessage" role="alert">
                <strong>{captialize(props.alert.typ)}</strong> : {props.alert.msg}
                
            </div>}
            

           
        </div>
    )
}
