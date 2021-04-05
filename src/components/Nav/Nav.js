import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <div>
            <nav>
                <ul>
                    <li>
                        <Link to="/login">Login</Link>
                    </li>
                    <li>
                        <Link to="/register">Register</Link>
                    </li>
                    <li>
                        <Link to="/portfolio">Portfolio</Link>
                    </li>
                    <li>
                        <Link to="/portfolio/add">Add To Portfolio</Link>
                    </li>
                    <li>
                        <Link to="/stocks/search">Search Stocks</Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Nav;
