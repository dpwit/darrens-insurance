import React from 'react'
import { Link } from 'gatsby'

const About = () => {
    return (
        <>
            <h1>About</h1>
            <Link to='/'>Home</Link>
            <Link to='https://www.google.co.uk' target='_blank'>Google</Link>
        </>
    )
}

export default About

