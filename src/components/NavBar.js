import React from 'react';
import {Link} from 'react-router-dom';

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
                    <Link to="/products">Products</Link>
                </li>
                <li>
                    <Link to="/check-out">Check Out</Link>
                </li>
            </ul>
        </nav>
        </>

    );
}

export default NavBar;