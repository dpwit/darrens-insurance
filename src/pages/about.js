import React from 'react'
import { Link } from 'gatsby'
import Button from '../components/button/Button'

const About = () => {

    const sayHello = () => {
        alert('Hello')
    }

    return (
        <>
            <h1>About</h1>
            <Link to='/'>Home</Link>
            <Link to='/contact/'>Contact</Link>
            <Link to='https://www.google.co.uk'>Google</Link>
            <Button onClick={sayHello}>Next</Button>
        </>
    )
}

export default About

