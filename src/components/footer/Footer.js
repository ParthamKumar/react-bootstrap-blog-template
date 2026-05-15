import '../../styles/components-css/footer/footer.css';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <div className="footer">
            {/* <div className="footer-container">
                <div className="footer-link">
                    <div className="link-items">
                        <h3>About ArugMint</h3>
                        <p>ArugMint is an AI-powered text-to-image generation platform created as a Final Year Project. It combines cutting-edge AI technology with intuitive design.</p>
                    </div>
                    <div className="link-items">
                        <h3>Quick Links</h3>
                        <Link to='/' className="link">Home</Link>
                        <Link to='/' className="link">Features</Link>
                        <Link to='/' className="link">Architecture</Link>
                        <Link to='/' className="link">Contact</Link>
                    </div>
                </div>
                <div className="footer-link">
                    <div className="link-items">
                        <h3>Connect With Us</h3>
                        <p><strong>Email:</strong> contact@arugmint.com</p>
                        <p><strong>GitHub:</strong> github.com/arugmint</p>
                        <p><strong>Portfolio:</strong> yourportfolio.com</p>
                    </div>
                    <div className="link-items">
                        <h3>Follow Us</h3>
                        <Link to='https://www.linkedin.com/' target='_blank' className="link">LinkedIn</Link>
                        <Link to='https://www.twitter.com/' target='_blank' className="link">Twitter</Link>
                        <Link to='https://www.github.com/' target='_blank' className="link">GitHub</Link>
                        <Link to='/' className="link">Demo</Link>
                    </div>
                </div>
            </div> */}
            <div className="footer-bottom">
                <p>&copy; 2026 ArugMint: Picture the Point. Final Year Project. All rights reserved.</p>
            </div>
        </div>
    );
}

export default Footer;
