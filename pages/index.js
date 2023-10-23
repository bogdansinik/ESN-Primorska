import {Fragment} from "react";
import Slider from "../components/index/index_slider";
import Services from "../components/index/index_services";
import About from "../components/index/index_about";
import IndexGallery from "../components/index/index_gallery";
import IndexTwoColumns from "../components/index/index_two_columns";
import IndexParalax from "../components/index/index_paralax";
import IndexNews from "../components/index/index_news"

function HomePage() {

    return (
        <Fragment>
            <div className="mwPageArea">
                <Slider/>
                <Services/>
                <About/>
                <IndexGallery/>
                <IndexTwoColumns/>
                <IndexNews/>
                <IndexParalax/>
            </div>
        </Fragment>
    );

}

export default HomePage;