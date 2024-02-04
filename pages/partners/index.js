import {useEffect} from "react";

function Partners() {

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
        <div>
            <div id="wSCKM1MFXRYVSVM5" className="mwPageBlock File">
                <div className="blockContents">

                    <div className="bannerParallex partners-breadcrumb">
                        <div className="bannerParallexShadow">
                            <div className="bannerParallexInner">
                                <h1>Partners</h1>
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
                                                        <li className="no-children"><a href="#intPartners"><span
                                                            className="Title">National and International Partners</span></a><a
                                                            className="arrow"></a>
                                                        </li>
                                                        <li className="no-children"><a href="#locPartners"><span
                                                            className="Title">Local Partners</span></a><a
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
                                            <div id="locPartners" className="blockContents">
                                                <h2>Local Partners</h2>
                                            </div>
                                        </div>

                                        <div id="wYZ4EU4HMY790NHA" className="mwPageBlock Content">
                                            <div className="blockContents">
                                                <h5>If you are an incoming exchange student that could use some help and
                                                    also wants to make new friends, be sure to apply for a student buddy
                                                    when you start with your preparations for arrival.</h5>


                                                <p>The buddy can help you arrange the means of transport to the coast.
                                                    Since the buddies are local students, they are the most familiar
                                                    with the public transport in Slovenia. The buddy can also help you
                                                    in the search for an apartment or they can check out the apartments
                                                    that you find. Then, when you arrive he/she can wait for you and
                                                    help you get to the apartment. And finally, they can help you or
                                                    advise you on anything else during your stay. </p>

                                            </div>
                                        </div>

                                        <div id="w6IRX4FVIMV3ZFKC" className="mwPageBlock Content">
                                            <div id="intPartners" className="blockContents">
                                                <h2>National and International Partners</h2>
                                            </div>
                                        </div>

                                        <div id="wYZ4EU4HMY790NHA" className="mwPageBlock Content">
                                            <div className="blockContents">
                                                <h5>If you are an incoming exchange student that could use some help and
                                                    also wants to make new friends, be sure to apply for a student buddy
                                                    when you start with your preparations for arrival.</h5>


                                                <p>The buddy can help you arrange the means of transport to the coast.
                                                    Since the buddies are local students, they are the most familiar
                                                    with the public transport in Slovenia. The buddy can also help you
                                                    in the search for an apartment or they can check out the apartments
                                                    that you find. Then, when you arrive he/she can wait for you and
                                                    help you get to the apartment. And finally, they can help you or
                                                    advise you on anything else during your stay. </p>

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

export default Partners;
