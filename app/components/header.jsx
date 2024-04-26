

const Header = () => {
    return (
        <div>
            <header>
                <h1><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSHCyvRTlnZ-Sy6gMIBKaB447dLZBfeUtT4Ijnlr21N1ds1uVB" alt="train" width="70px" height="60px" /></h1>
                <div className="center">
                    <a href="/">Home</a>
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
