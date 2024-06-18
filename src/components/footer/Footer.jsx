
import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-section">
                    <h2>Contact Us</h2>
                    <p>Email: support@ecommerce.com</p>
                    <p>Phone: +91 456 7890</p>
                    <p>Address: 123 E-commerce St, Shopsville</p>
                </div>
                <div className="footer-section">
                    <h2>Follow Us</h2>
                    <div className="social-icons">
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-facebook-f"></i>
                        </a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-twitter"></i>
                        </a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-instagram"></i>
                        </a>
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-linkedin-in"></i>
                        </a>
                    </div>
                </div>
                <div className="footer-section">
                    <h2>Quick Links</h2>
                    <ul>
                        <li><a href="/about">About Us</a></li>
                        <li><a href="/shop">Shop</a></li>
                        <li><a href="/faq">FAQ</a></li>
                        <li><a href="/contact">Contact</a></li>
                    </ul>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; 2023 E-commerce. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
