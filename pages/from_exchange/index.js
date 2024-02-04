import {useEffect} from "react";

function FromExchange() {

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

                    <div className="bannerParallex backfromexchange-breadcrumb">
                        <div className="bannerParallexShadow">
                            <div className="bannerParallexInner">
                                <h1>Back from exchange</h1>
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
                                                        <li className="no-children"><a href="#back"><span
                                                            className="Title">DO YOU WANT TO GO BACK?</span></a><a
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
                                            <div id="back" className="blockContents">
                                                <h2>DO YOU WANT TO GO BACK?</h2>
                                            </div>
                                        </div>

                                        <div id="wYZ4EU4HMY790NHA" className="mwPageBlock Content">
                                            <div className="blockContents">

                                            </div>
                                        </div>

                                        <p>
                                            Might sound as a cliché, but finishing Erasmus is as you just finished a
                                            really
                                            good book or binged watched a series and now you are not sure what to do
                                            with
                                            your life. If you felt that, feel free to contact us and join us and we
                                            promise
                                            you, we will bring back the Erasmus to your life! You can become a core team
                                            member, a volunteer, or a student buddy. By doing that, you can also join
                                            all of
                                            our events and trips, meet the Erasmus students and make new friends. Let
                                            the
                                            new adventures begin!
                                        </p>
                                        <p>
                                            Visit the Contact page and make sure to write to us. If you would like to be
                                            a
                                            buddy, find out more about what the Buddy System is and how it functions on
                                            the
                                            Buddy System page.
                                        </p>

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

export default FromExchange;
