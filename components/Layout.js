// components/Layout.js
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar /> {/* Include the Navbar */}
      <main>{children}</main> {/* This will render the page content */}
      <Footer /> {/* Include the Footer */}
    </div>
  );
};

export default Layout;
