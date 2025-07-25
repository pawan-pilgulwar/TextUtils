import React from "react";

export default function Alerts(props) {

    const capatalize = (word) => {
        return word.charAt(0).toUpperCase() + word.slice(1);
    }

  return ( 
    <div style={{height:"50px"}}>
      {props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
        <strong>{capatalize(props.alert.type)}</strong>: {props.alert.msg}
      </div>}
    </div>
  );
}
