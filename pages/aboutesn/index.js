import Link from "next/link";
import { useEffect } from "react";

function AboutESN() {

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

                    <div className="bannerParallex aboutesn-breadcrumb">
                        <div className="bannerParallexShadow">
                            <div className="bannerParallexInner">
                                <h1>About ESN</h1>
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
                                                        <li className="no-children"><a href="#esn"><span
                                                            className="Title">ERASMUS STUDENT NETWORK</span></a><a
                                                                className="arrow"></a>
                                                        </li>
                                                        <li className="no-children"><a href="#esn_vision"><span
                                                            className="Title">Vision</span></a><a
                                                                className="arrow"></a>
                                                        </li>
                                                        <li className="no-children"><a href="#esn_mission"><span
                                                            className="Title">Mission</span></a><a
                                                                className="arrow"></a>
                                                        </li>
                                                        <li className="no-children"><a href="#esn_values"><span
                                                            className="Title">Values</span></a><a
                                                            className="arrow"></a>
                                                        </li>
                                                        <li className="no-children"><a href="#esn_slovenia"><span
                                                            className="Title">ESN Slovenia</span></a><a
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
                                            <div id="esn" className="blockContents">
                                                <h2>ERASMUS STUDENT NETWORK</h2>
                                            </div>
                                        </div>

                                        <div id="wYZ4EU4HMY790NHA" className="mwPageBlock Content">
                                            <div className="blockContents">

                                                <p>
                                                    <strong>Erasmus Student Network (ESN)</strong> is one of the biggest student associations in Europe. It was born on the 16th October 1989 and legally registered in 1990 for supporting and developing student exchange.
                                                    We are present in more than 1000 Higher Education Institutions from over 40 countries. The network is constantly developing and expanding. We have around 15,000 active members that are in many sections supported by so called buddies mainly taking care of international students. Thus, ESN involves around 40,000 young people offering its services to around 350,000 international students every year.
                                                </p>
                                                <p>
                                                    ESN works for the creation of a more mobile and flexible education environment by supporting and developing the student exchange from different levels and providing an intercultural experience also to those students who cannot access a period abroad ("internationalisation at home").
                                                </p>
                                            </div>
                                        </div>
                                        <div id="wYYEX536WHEYELWF" className="mwPageBlock Embed">
                                            <div className="blockContents">
                                                <div className="Container">
                                                    <iframe width="560" height="315" src="https://www.youtube.com/embed/7C6TV66QuJI"
                                                        title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                        allowFullScreen></iframe>
                                                </div>
                                            </div>
                                        </div>
                                        <div id="wDV24L3PWDA4WNHE" className="mwPageBlock Button">
                                            <div className="blockContents">
                                                <div className="mwBtnCenter">
                                                    <div className="button purpleborder">
                                                        <p><Link href="https://www.esn.org/" target="_blank" className="medium" style={{ background: '{color_1}' }}><a>Click HERE For More Information</a></Link></p>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                        
                                        <div className="mwPageBlock Content">
                                            <div id="esn_vision" className="blockContents">
                                                <h2>
                                                    ESN Vision
                                                </h2>

                                                <p>
                                                    By 2025, ESN will be the global network of the Erasmus Generation, committed to improving international education
                                                     and providing self-development opportunities to two million young people, fostering intercultural understanding 
                                                     and creating positive change in society.  
                                                </p>
                                                    
                                            </div>
                                        </div>
                                        <div className="mwPageBlock Content">
                                            <div id="esn_mission" className="blockContents">
                                                <h2>
                                                    ESN Mission
                                                </h2>

                                                <p>
                                                    Enrichment of society through international students.   
                                                </p>
                                                    
                                            </div>
                                        </div>
                                        <div className="mwPageBlock Content">
                                            <div id="esn_values" className="blockContents">
                                                <h2>
                                                    ESN Values
                                                </h2>

                                                <p>
                                                    The values of Erasmus Student Network that all members stand and work for are: unity in diversity,
                                                    diversity in the unity (we all have different backgrounds, but share one common aim and goal),
                                                    students helping students (we passionately commit ourselves to volunteering for the benefits of others),
                                                    fun in friendship and respect (we enjoy relations based on respect), international dimension of the life
                                                    (we are open-minded, mobile, like to discover and explore, to co-operate and to interact to break borders),
                                                    love for Europe as an area of peace and cultural exchange (we live and benefit from the cultural richness of
                                                    Europe to the utmost), openness with tolerance (we understand and accept others and learn from them),
                                                    cooperation in the integration (we share an holistic view towards internationality).
                                                </p>

                                            </div>
                                        </div>
                                        <div className="mwPageBlock Content">
                                            <div id="esn_slovenia" className="blockContents">
                                                <h2>
                                                    ESN Slovenia
                                                </h2>

                                                <p>
                                                        Link to the website <a href="https://www.esn-slovenia.org/" target="_blank">ESN Slovenia</a>.
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

export default AboutESN;


