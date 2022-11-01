import Head from "next/head";
import Footer from "./footer";
import Navbar from "./navbar";

function Layout({ children }) {
  return (
    <div>
      <Head>
        <title>CINNAMON</title>
      </Head>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
}

export default Layout;
