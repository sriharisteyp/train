"use client";

import Head from 'next/head';

const ContactPage = () => {
    return (
        <div>
            <Head>
                <title>Contact Us</title>
                <meta name="description" content="Contact us for any inquiries or feedback." />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main>
                <div>

                    <h1>Contact Us</h1>
                    <p>Feel free to reach out to us for any inquiries or feedback!</p>
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <h2 >
                        Contact
                    </h2>
                    <p>email <a href="mailto:hello@SparkTech.com">hello@SparkTech.com</a></p>
            <p>Phone <a href="tel:1234567890">+91 123-4567-890</a></p>
                </div>
                <form>
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" name="name" required />
                    <label htmlFor="email">Email:</label>
                    <input type="email" name="email" id="" />
                    <label htmlFor="message">Message:</label>
                    <textarea id="message" name="message" rows="4" required></textarea>
                    <button type="submit">Submit</button>
                </form>
            </main>

            <style jsx>{`
        main {
          padding: 20px;
          background:#202122;
          display: flex;
          width: 100%;
          padding-left:155px;
        }
        form {
          display: flex;
          flex-direction: column;
          max-width: 400px;
          margin-left: 500px;
          color:black;
        }
        label {
          margin-bottom: 5px;
          color:white;
        }
        input, textarea {
          margin-bottom: 10px;
          padding: 5px;
          font-size: 16px;
            background:#202122;
            color:white
            outline:none;
            border-bottom: 1px solid white;
        }
        input{
            border-bottom: 1px solid white;
            height:30px;
            background:#202122;
            display:block;
            color:white;
            outline:none;
        }
        button {
          padding: 10px 20px;
          font-size: 16px;
          background-color: #0070f3;
          color: white;
          border: none;
          cursor: pointer;
        }
      `}</style>
        </div>
    );
}

export default ContactPage;
