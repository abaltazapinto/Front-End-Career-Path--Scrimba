import React from "react"
import Button from "../Button/Button"

export default function MenuButton({ children, toggle, open }) {
    return (
        <Button onClick={toggle}>{children}</Button>
    )
}