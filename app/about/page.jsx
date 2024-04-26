"use client";
import Header from "../components/header";
import Footer from "../components/footer"

const About = () => {
    return (
        <div className="bg">
            <Header />
            <div class="about-section">
                <h1 className="h1">About Us</h1>
                <p>At SparkTech, we believe in the power of teamwork and collaboration. Our dedicated team members are passionate about delivering excellence in everything we do. Get to know the faces behind our company and discover the diverse talents and expertise that drive our success. From creative minds to strategic thinkers, we're here to make a difference. Explore our team below and feel free to reach out to us with any questions or inquiries.

                </p>
                <p>Resize the browser window to see that this page is responsive by the way.</p>
            </div>
            <hr />
            <h2 className="o">Our Team</h2>
            <div class="row">
                <div class="column">
                    <div class="card">
                        <img src="" alt="" className="a" />
                        <div class="container">
                            <h2>Dishna</h2>
                            <p class="title">CEO & Founder</p>
                            <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                            <p>jane@example.com</p>
                            <p><button class="button">Contact</button></p>
                        </div>
                    </div>
                </div>

                <div class="column">
                    <div class="card">
                        <img src="/w3images/team2.jpg" alt="Mike" className="a" />
                        <div class="container">
                            <h2>Sri Hari</h2>
                            <p class="title">CTO & Founder</p>
                            <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                            <p>mike@example.com</p>
                            <p><button class="button">Contact</button></p>
                        </div>
                    </div>
                </div>

                <div class="column">
                    <div class="card">
                        <img src="/w3images/team3.jpg" alt="John" className="a" />
                        <div class="container">
                            <h2>John Doe</h2>
                            <p class="title">COO & Co-Founder</p>
                            <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                            <p>john@example.com</p>
                            <p><button class="button">Contact</button></p>
                        </div>
                    </div>
                </div>

                <div class="column">
                    <div class="card">
                        <img src="/w3images/team3.jpg" alt="John" className="a" />
                        <div class="container">
                            <h2>John Doe</h2>
                            <p class="title">Designer</p>
                            <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                            <p>john@example.com</p>
                            <p><button class="button">Contact</button></p>
                        </div>
                    </div>
                </div>

                <div class="column">
                    <div class="card">
                        <img src="/w3images/team3.jpg" alt="John" className="a" />
                        <div class="container">
                            <h2>John Doe</h2>
                            <p class="title">Designer</p>
                            <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                            <p>john@example.com</p>
                            <p><button class="button">Contact</button></p>
                        </div>
                    </div>
                </div>

                <div class="column">
                    <div class="card">
                        <img src="/w3images/team3.jpg" alt="John" className="a" />
                        <div class="container">
                            <h2>John Doe</h2>
                            <p class="title">Designer</p>
                            <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                            <p>john@example.com</p>
                            <p><button class="button">Contact</button></p>
                        </div>
                    </div>
                </div>

            </div>
            <Footer />

        </div>
    );
}

export default About;
