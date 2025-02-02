import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <nav>
            <div className="navbar-container">
                {/* ☰ Menu buttons (display on mobile screen only) */}
                <button className="mobile-menu-button" onClick={toggleMobileMenu}>
                    ☰
                </button>

                <div className={`nav-links ${isMobileMenuOpen ? 'active' : ''}`}>
                    <Link to="/">Home</Link>
                    <span> | </span>
                    <Link to="/page2">Page 2</Link>
                    <span> | </span>
                    <Link to="/quizzes">Quizzes</Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;