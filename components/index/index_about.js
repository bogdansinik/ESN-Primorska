import {Fragment} from "react";
import Image from "next/image";

function About() {
    return (
        <Fragment>
            <div id="w8LPSQ1REBNT3QKE" className="mwPageBlock Include">
                <div className="blockContents">
                    <div className="contentAreaWhite nopad">
                        <div className="mainContentArea">
                            <div className="mwPageArea">
                                <div id="wC4P0LM2O3DRGZ7D" className="mwPageBlock Include">
                                    <div className="blockContents">
                                        <div className="twoCol row home">
                                            <div className="twoColRight col-md-6">
                                                <div className="mwPageArea">
                                                    <div id="wLB0DH54TUA05N21" className="mwPageBlock Content">
                                                        <div className="blockContents"><h2 id="fontsize">
                                                            ESN Primorska
                                                            {"\n"}
                                                            Mission
                                                        </h2>
                                                            <p style={{textAlign: "left"}}>
                                                                To guide, advise, help and make both international and
                                                                local student's stay at the University of Primorska unforgettably amazing!
                                                            </p></div>
                                                    </div>
                                                    <div id="wPGZ5ER9O6ENBIY0" className="mwPageBlock Button">
                                                        <div className="blockContents">
                                                            <div className="mwBtnLeft">
                                                                <div className="button purpleborder">
                                                                    <p><a href="#" className="medium">Learn
                                                                        More</a></p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="Clear"></div>
                                                </div>
                                            </div>
                                            <div className="twoColLeft col-md-6">
                                                <div className="mwPageArea">
                                                    <div id="w4BMK19DK63FRUMA" className="mwPageBlock File">
                                                        <div className="blockContents">
                                                            <div className="mwFileEmbed Image">


                                                                {/*<Image src="/images/about.jpg"*/}
                                                                <Image src="/images/home/test1.png"
                                                                     className="mwFile Image full imgEd"
                                                                     height={595} width={765.67} alt="about-image"/>
                                                            </div>

                                                        </div>
                                                    </div>
                                                    <div className="Clear"></div>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                                <div className="Clear"></div>
                            </div>
                        </div>
                    </div>
                    <div className="Clear"></div>
                </div>
            </div>
        </Fragment>
    )
}

export default About;
