
import { Outlet } from 'react-router-dom';
import Headers from './components/Headers/Headers';

const Layout = () => {
    return (
        <div>
            <Headers></Headers>
            <Outlet></Outlet>
        </div>
    );
};

export default Layout;