import Header from "./Header";
import Footer from "./Footer";
import { ReactNode } from "react";

const Layout = ({ children }: { children: ReactNode }) => {
    return (
        <div className="flex flex-col h-screen w-11/12 mx-auto py-2">
            <header>
                <Header />
            </header>
            <main className="flex-1 mt-2">{children}</main>
            <footer>
                <Footer />
            </footer>
        </div>
    );
};

export default Layout;
