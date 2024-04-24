import logo from "../img/logo.jpeg";

const Header = () => {
    return (
        <div>
            <header>
                <h1><img src={logo} alt="train" /></h1>
                <div className="center">
                    <a href="">Tickets</a>
                    <a href="">Destination</a>
                    <a href="">Travel Information</a>
                    <a href="">About Us</a>
                </div>
                <div className="right">
                    <h4><a href="/register">Create Account</a></h4>
                    <h4><button><a href="/login">Sign In</a></button></h4>
                </div>
            </header>
        </div>
    );
}

export default Header;
