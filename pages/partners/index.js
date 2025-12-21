import React, {useEffect} from "react";
import Image from "next/image";

import VinaKoper from "../../public/images/partners/VinaKoper.jpg";
import CajnicaVanilla from "../../public/images/partners/Vanilla.jpg";
import SmashBurger from "../../public/images/partners/SmashBurger.png";
import BarCameral from "../../public/images/partners/BarCameral.jpg";


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

    return (<div>
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
                                                    <li className="no-children"><a href="#locPartners"><span
                                                        className="Title">Local Partners</span></a><a
                                                        className="arrow"></a>
                                                    </li>
                                                    <li className="no-children"><a href="#intPartners"><span
                                                        className="Title">National and International Partners</span></a><a
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
                                            <h5>Will be listed here</h5>

                                            <div className="partners-container">
                                                <div className="partner-card">
                                                    <Image alt="Vina Koper" src={VinaKoper} />
                                                    <div className="partner-name">Vina Koper</div>
                                                    <div className="partner-type">Wine Bar</div>
                                                </div>

                                                <div className="partner-card">
                                                    <Image alt="Urban Bar" src={BarCameral} />
                                                    <div className="partner-name">Urban Bar</div>
                                                    <div className="partner-type">Bar</div>
                                                </div>

                                                <div className="partner-card">
                                                    <Image alt="Blue Coffee House" src={SmashBurger} />
                                                    <div className="partner-name">Blue Coffee House</div>
                                                    <div className="partner-type">Coffee Shop</div>
                                                </div>

                                                <div className="partner-card">
                                                    <Image alt="Blue Coffee House" src={CajnicaVanilla} />
                                                    <div className="partner-name">Blue Coffee House</div>
                                                    <div className="partner-type">Coffee Shop</div>
                                                </div>

                                                {/* Add more partners, they will automatically wrap to the next row */}
                                            </div>
                                        </div>
                                    </div>

                                    <div id="w6IRX4FVIMV3ZFKC" className="mwPageBlock Content">
                                        <div id="intPartners" className="blockContents">
                                            <h2>National and International Partners</h2>
                                        </div>
                                    </div>

                                    <div id="wYZ4EU4HMY790NHA" className="mwPageBlock Content">
                                        <div className="blockContents">
                                            <h5>Will be listed here (if any...)</h5>


                                        </div>
                                    </div>
                                </div>
                            </div>


                        </div>
                    </div>
                </div>
            </div>
        </div>


    </div>)

}

export default Partners;
