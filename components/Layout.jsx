import React from "react";
import Head from "next/head";
import NavBar from "./navbar";
import Footer from "./footer";

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Head>
        <title>Boat Store</title>
      </Head>

      <header>
        <NavBar />
      </header>

      <main className="main-container">{children}</main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Layout;
