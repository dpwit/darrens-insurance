import React from 'react'
import { Link } from 'gatsby'
import'./main.scss'


const About = () => {
    return (
        <>
            <h1>About</h1>
            <Link to='/'>Home</Link>
            <Link to='/contact/'>Contact</Link>
            <Link to='https://www.google.co.uk'>Google</Link>
        </>
    )
}

export default About

