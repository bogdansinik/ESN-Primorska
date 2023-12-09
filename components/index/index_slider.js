import {Fragment, useEffect} from "react";
import Link from "next/link";

function Slider() {

    useEffect(() => {

        $(document).ready(function () {

            var owl = $("#owl-demo");

            owl.owlCarousel({

                autoPlay: 5000,

                navigation: true,

                pagination: false,

                singleItem: true,

                transitionStyle: "fade",

                autoHeight: true,

                lazyLoad: false

            });

        });
    });

    return (
        <Fragment>
            <div id="wEOFPG6UGR80QWFW" className="mwPageBlock Gallery">
                <div className="blockContents">
                    <div className="slider">
                        <div id="owl-demo" className="owl-carousel owl-theme">

                            <div className="sliderItem">
                                <div className="sliderItemImage"
                                     style={{
                                         background: 'url(/images/slider1.jpg) center center no-repeat',
                                         backgroundSize: 'cover'
                                     }}>
                                </div>
                                <div className="caption">
                                    <div className="captionContainer">
                                        <div className="captionInner">
                                            <h3>Our team</h3>
                                            <p>Learn more about us</p>
                                            <div className="button">
                                                <p><Link href="/about"><a>Meet the team</a></Link></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="sliderItem">
                                <div className="sliderItemImage"
                                     style={{
                                         background: 'url(/images/slider2.jpg) center center no-repeat',
                                         backgroundSize: 'cover'
                                     }}>
                                </div>
                                <div className="caption">
                                    <div className="captionContainer">
                                        <div className="captionInner">
                                            <h3>Jože Primorec</h3>
                                            <p>The heart-stealer of our team</p>
                                            <div className="button">
                                                <p><a href="#">Meet Jože</a></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="sliderItem">
                                <div className="sliderItemImage"
                                     style={{
                                         background: 'url(/images/slider33.JPG) center center no-repeat',
                                         backgroundSize: 'cover'
                                     }}>
                                </div>
                                <div className="caption">
                                    <div className="captionContainer">
                                        <div className="captionInner">
                                            <h3>Jožefying</h3>
                                            <p>Welcome to the exciting world of ESN Primorska!</p>
                                            <div className="button">
                                                <p><a href="#">Learn More</a></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

        </Fragment>
    );
}

export default Slider;