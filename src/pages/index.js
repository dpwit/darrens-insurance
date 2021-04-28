import React from 'react'
import { Link } from 'gatsby'

const Home = () => {

    return (
        <>
            <h1>Darrens Insurance</h1>
            <Link to='/about/'>About</Link>
            <Link to='/contact/'>Contact</Link>
        </>
    )
}

export default Home

