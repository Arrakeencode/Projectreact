import { Outlet, Link } from "react-router-dom";
const Layout = () => {
    return (
        <>
            <nav>
                <ul>
                    <li>
                        <Link to="/Users">Employé</Link>
                    </li>
                    <li>
                        <Link to="/Salaire">Salaire</Link>
                    </li>
                    <li>
                        <Link to="/Cong">Congés</Link>
                    </li>
                </ul>
            </nav>
            <Outlet />
        </>
    )
};
export default Layout;