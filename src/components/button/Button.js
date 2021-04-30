import React from 'react'
import './button.scss'

const Button = props => {

    const {
        children,
        onClick,
        type = 'button'
    } = props

    return (
        <button className='a-btn' onClick={onClick} type={type}>{ children }</button>
    )

}

export default Button