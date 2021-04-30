import React from 'react'
import {Link} from 'gatsby'

const Navigation = () => {

    return (
        <>
            <Link to='/'>Home</Link>
            <Link to='/about/'>About</Link>
            <Link to='/contact/'>Contact</Link>
        </>
    )

}

export default Navigation