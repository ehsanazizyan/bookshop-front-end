import Header from "./Header";
import Footer from "./Footer";
import { ReactNode } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Layout = ({ children }: { children: ReactNode }) => {
    return (
        <div className="flex flex-col min-h-screen w-11/12 mx-auto py-2">
            <header className="sticky top-0 z-50">
                <Header />
            </header>
            <main className="flex-1 mt-2 mb-2">{children}</main>
            <footer>
                <Footer />
            </footer>
            <ToastContainer />
        </div>
    );
};

export default Layout;
