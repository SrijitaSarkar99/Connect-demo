import React from 'react';
import { Button } from './Button';
import './Footer.css'

function Footer() {
    return (
        <div className="footer-container">
            <section className="footer-subscription">
                <p className="footer-subscription-heading">
                    Subscribe to get notification of every publication of your interest.
                </p>
                <p className="footer-subscription-text">
                    You can unsubscribe anytime.
                </p>
                <form>
                    <input type="email" name="email" placeholder="Your Email" className="footer-input"/>
                    <Button buttonStyle='btn--outline'>Subscribe!</Button>
                </form>
                <br/>
            </section>
        </div>
    )
}

export default Footer;
