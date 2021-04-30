import React from 'react'
import { Link } from 'gatsby'
import Button from '../components/button/Button'

const Contact = () => {
    return (
        <>
            <h1>Contact</h1>
            <Link to='/'>Home</Link>
            <Link to='/about/'>About</Link>
            <Button>Contact us</Button>
        </>
    )
}

export default Contact

