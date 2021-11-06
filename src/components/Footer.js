import React from 'react';
import { Button } from './Button';
import './Footer.css'

function Footer() {
    return (
        <div className="footer-container">
            <section className="footer-subscription">
                <p className="footer-subscription-heading">
                    Join the newsletter to get more articles at your doorstep.
                </p>
                <p className="footer-subscription-text">
                    You can unsubscribe anytime.
                </p>
                <form>
                    <input type="email" name="email" placeholder="Your Email" className="footer-input"/>
                    <Button buttonStyle='btn--outline'>Subscribe!</Button>
                </form>
            </section>
        </div>
    )
}

export default Footer;
