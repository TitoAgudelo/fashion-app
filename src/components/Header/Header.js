import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';

class Header extends Component {
    render() {
        return (
            <nav className="navbar sticky-top navbar-dark bg-dark">
                <div className="container">
                    <Link className="navbar-brand" to="/">Zalando</Link>
                </div>
            </nav>
        );
    }
}

export default Header;
