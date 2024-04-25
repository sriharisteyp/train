import logo from "../img/logo.jpeg";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="grid grid-cols-2">
                    <div>
                        <h3>RouteMinder Private Limited</h3>
                        <p className="address">#208, 2nd Floor,<br /> RouteMinder ,<br /> example Nagar Road, Maradu,<br /> Kakkanad,<br /> Kerala, India - 682304</p>
                    </div>
                    <div className="footer-links">
                        <h3>Company</h3>
                        <ul>
                            <li><a href="/about">About Us</a></li>
                            <li><a href="#">Contact Us</a></li>
                        </ul>
                    </div>
                    <div className="grid grid-cols-1">
                        <h3>Contact</h3>
                        <p className="contact-info">
                            <a href="tel:+918281176376">+91 123-4567-890</a> | <a href="mailto:hello@RouteMinder.com">hello@RouteMinder.com</a>
                        </p>
                    </div>
                </div>
                <div className="text-center">

                    <p className="terms">
                        <p className="copyright">c 2024, Hleta Private Limited. All rights reserved</p>
                        <a href="#">Terms of Service</a> | <a href="/PrivacyPolicy">Privacy Policy</a>
                    </p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
