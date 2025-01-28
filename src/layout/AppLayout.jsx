import { Outlet } from "react-router-dom";
import AppHeader from "../components/AppHeader";
import AppFooter from "../components/AppFooter";

function AppLayout () {
    return(
        <>
        <AppHeader />
        <main>
            <div className="container">
                <Outlet />
            </div>
        </main>
        <AppFooter />
        </>
    );
};

export default AppLayout;