import React from 'react';
import {Link} from 'reacr-router-dom';

function NavBar() {
    return (
        <>
        <h1>This is the Navbar</h1>
        <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/">Products</Link>
                </li>
                <li>
                    <Link to="/">Check Out</Link>
                </li>
            </ul>
        </nav>
        </>

    );
}

export default NavBar;