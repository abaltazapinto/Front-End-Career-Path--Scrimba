import React from "react"

export default function Pad(props) {
    const [on, setOn] = React.useState(props.on)
    
    return (
        <button 
            style={{backgroundColor: props.color}}
            className={on ? "on" : undefined}
            onClick={props.toggle}
        ></button>
    )
}