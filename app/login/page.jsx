

const Login = () => {
    return (
        <>
            <section className="darkSection">
                <section className="darkCard">
                    <h2>Login</h2>
                    <p>Login to use RouteMinder</p>
                    <form className="darkForm" action="">
                        <label htmlFor="user">Username :</label>
                        <input type="text" className="darkInput" />
                        <label htmlFor="pass">Password :</label>
                        <input type="password" className="darkInput" />
                        <a href=""><input type="submit" value="Submit" className="darkSubmit" /></a >
                        <p>Don't have an account? <a href="/register" className="darkLink">Register</a>.</p>
                        <p id="authResult">{ }</p>
                    </form >
                </section >
            </section >
        </>
    );
};

export default Login;

