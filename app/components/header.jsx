

const Header = () => {
    return (
        <div>
            <header>
                <h1><img src="" alt="train" /></h1>
                <div className="center">
                    <a href="/tickets">Tickets</a>
                    <a href="">Destination</a>
                    <a href="">Travel Information</a>
                    <a href="/about">About Us</a>
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
