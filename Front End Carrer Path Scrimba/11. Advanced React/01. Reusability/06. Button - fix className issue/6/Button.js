import React from "react"
import classnames from "classnames"
export default function Button({children, className, size, ...rest}) {
    let sizeClass = size ? `button-${size}` : ""
    const allClasses = classnames(sizeClass, className)
    
    return (
        <button className={allClasses} {...rest}>
            {children}
        </button>
    )
}