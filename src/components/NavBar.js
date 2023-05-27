import React from 'react';
import { Link } from 'react-router-dom';

// importing images
import bigHarryPotterLogo from '../img/hp-big-logo.png';


function NavBar() {
    return (
        <>
            {/* <h1>This is the Navbar</h1> */}
            <nav>
                <div id="logo"><Link to="/products"><img src={bigHarryPotterLogo} alt="Big Harry Potter Logo"/></Link>
                </div>
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