import { Header } from "../Header/index.jsx";
import { Outlet } from "react-router-dom";
import { Footer } from "../Footer/index.jsx";

/**
 * Layout component that renders the common page structure:
 * Header, dynamic content via Outlet, and Footer.
 *
 * @component
 * @returns {JSX.Element} The layout wrapper with header, content, and footer.
 */
function Layout() {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
