import React from 'react'
import Navigation from '../components/navigation/Navigation'
import Button from '../components/button/Button'

const About = () => {

    const sayHello = () => {
        alert('Hello')
    }

    return (
        <>
            <h1>About</h1>
            <Navigation />
            <Button onClick={sayHello}>Next</Button>
        </>
    )
}

export default About

