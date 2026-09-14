import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import './Typography.css';

const Layout = ({ children }) => {
    const { pathname } = useLocation();
    const isOverview = pathname === '/overview' || pathname === '/';

    useEffect(() => {
        window.scrollTo(0, 0); // Ensure page starts at top on navigation
    }, []);

    return (
        <div className="site-shell flex flex-col min-h-screen">
            <Navbar />
            <main className={`site-main flex-grow${isOverview ? '' : ' site-main--nav-offset'}`}>{children}</main>
            <Footer />
        </div>
    );
};

export default Layout;
