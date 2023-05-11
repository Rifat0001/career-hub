
import { Outlet } from 'react-router-dom';
import Headers from './components/Headers/Headers';
import Footer from './components/Footer';

const Layout = () => {
    return (
        <div>
            <Headers></Headers>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Layout;