import {useEffect} from "react";

function ExchangePreparation() {

    useEffect(() => {

        $(".sidebarLeft .sidebarMenu a").on('click', function (event) {

            if (this.hash !== "") {
                event.preventDefault();

                var hash = this.hash;

                var topOffset = ($(hash).offset().top) - 150;

                $('html, body').animate({
                    scrollTop: topOffset
                }, 500)
            }
        })

    })

    return (
        <div className="mwPageArea">

            <div id="wSCKM1MFXRYVSVM5" className="mwPageBlock File">
                <div className="blockContents">

                    <div className="bannerParallex preparation-breadcrumb">
                        <div className="bannerParallexShadow">
                            <div className="bannerParallexInner">
                                <h1>Exchange preparation</h1>
                            </div>
                        </div>
                    </div>

                </div>
            </div>


            <div className="mwPageBlock">
                <div className="blockContents">
                    <div className="contentAreaWhite">
                        <div className="mainContentArea">
                            <div className="sidebar left">
                            <div className="sidebarLeft">
                                    <div className="sidebarMenu">
                                        <div className="mwPageArea">
                                            <div id="wG7TC3YCLOPHAEHN" className="mwPageBlock Content">
                                                <div className="blockContents"><h5>
                                                    Quick Links
                                                </h5></div>
                                            </div>
                                            <div id="wM9AJIW6Z58MXKM2" className="mwPageBlock Menu">
                                                <div className="blockContents">
                                                    <ul id="mtBgfgvYI">
                                                        <li className="no-face no-children"><a className="arrow"></a>
                                                        </li>
                                                        <li className="no-children"><a href="#erasmus"><span
                                                            className="Title">ARE YOU THINKING ABOUT ERASMUS?</span></a><a
                                                            className="arrow"></a>
                                                        </li>

                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="Clear"></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="sidebarRight">
                                    <div className="mwPageArea">

                                        <div id="w6IRX4FVIMV3ZFKC" className="mwPageBlock Content">
                                            <div id="erasmus" className="blockContents">
                                                <h2>ARE YOU THINKING ABOUT ERASMUS?</h2>
                                            </div>
                                        </div>

                                        <div id="wYZ4EU4HMY790NHA" className="mwPageBlock Content">
                                            <div className="blockContents">
                                                <p> If you would like to go on Erasmus and you are not sure where to start, you
                                                    can always reach out to us or the international office of your faculty. If you
                                                    have any doubts, you can join some of our events, meet the Erasmus students and see
                                                    how they like their exchange. Maybe they could also suggest you a place and a
                                                    university that would be good for you.
                                                </p>
                                                <p>
                                                    Check out the events page and the photos of the past events to get the idea
                                                    of which possibilities you have if you go to a university that is part of the ESN
                                                    network.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                    

                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default ExchangePreparation;
