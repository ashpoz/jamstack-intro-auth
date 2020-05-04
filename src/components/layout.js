import React from "react";
import { Link } from "gatsby";
import { IndentityContextProvider } from "react-netlify-identity-widget";

import "./layout.css";

const Layout = ({ children }) => (
    <IndentityContextProvider url="https://jamstack-intro-auth.netlify.com">
        <header>
            <Link to="/">JAMstack App</Link>
        </header>
        <main>{children}</main>
    </IndentityContextProvider>
)

export default Layout;