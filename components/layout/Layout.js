import MainNavigation from './MainNavigation';
import {Fragment} from "react";

function Layout(props) {
    return (
        <Fragment>
            <MainNavigation/>
            <div>{props.children}</div>
        </Fragment>
    );
}

export default Layout;
