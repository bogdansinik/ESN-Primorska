import {useEffect} from "react";
import Image from "next/image";
import Link from "next/link";
import placeholder from '../../public/images/placeholder.jpg';
import Joze from '../../public/images/psen_logo.png';
import Emilija from '../../public/images/emilija.jpg';
import Miloje from '../../public/images/miloje.jpeg';
import Lana from '../../public/images/lana.jpeg';
import Jovana from '../../public/images/jovana.jpeg';
import Aleksa from '../../public/images/aleksa.jpeg';
import Jelena from '../../public/images/jelena.jpeg';
function About() {

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
        <div className="container">
            <div className="mwPageArea">

                <div id="wSCKM1MFXRYVSVM5" className="mwPageBlock File">
                    <div className="blockContents">

                        <div className="bannerParallex aboutus-breadcrumb">
                            <div className="bannerParallexShadow">
                                <div className="bannerParallexInner">
                                    <h1>About us</h1>
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
                                                            <li className="no-face no-children"><a
                                                                className="arrow"></a>
                                                            </li>
                                                            <li className="no-children"><a href="#history"><span
                                                                className="Title">History </span></a><a
                                                                className="arrow"></a>
                                                            </li>
                                                            <li className="no-children"><a
                                                                href="#mission"><span
                                                                className="Title">Mission</span></a><a
                                                                className="arrow"></a></li>
                                                            <li className="no-children"><a
                                                                href="#team"><span
                                                                className="Title">Team</span></a><a
                                                                className="arrow"></a></li>
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
                                                <div id="about" className="blockContents">
                                                    <h2>WHO WE ARE AND WHAT WE DO?</h2>
                                                </div>
                                            </div>

                                            <div id="wYZ4EU4HMY790NHA" className="mwPageBlock Content">
                                                <div className="blockContents">

                                                    <p>
                                                        We are a student organization based in Primorska, Slovenia and
                                                        our mission is to
                                                        guide, advise, help and make international student's stay at the
                                                        University of
                                                        Primorska unforgettably amazing!
                                                    </p>
                                                    <p>
                                                        We plan events for both Erasmus students and regular students
                                                        such as social gatherings, creative and educational workshops,
                                                        sports competitions, cultural exchanges, trivia nights, trips
                                                        around Slovenia and so much more!
                                                    </p>
                                                    <p>
                                                        We also make sure Erasmus students in Primorska settle in as
                                                        easily as possible and offer them advice and help on settling
                                                        their visas and documents, accommodation, and general
                                                        orientation around the towns.
                                                    </p>

                                                </div>
                                            </div>

                                            <div className="mwPageBlock Content">
                                                <div id="history" className="blockContents">
                                                    <h2>
                                                        History
                                                    </h2>

                                                    <p>Before becoming ESN Primorska, we were known as Primorska
                                                        Student Exchange Network-PSEN.
                                                        We started off with 4 students with a vision and a stuffed goat
                                                        named Joze, and built the team and organization
                                                        from the ground up with great support provided by the University
                                                        of Primorska, as they saw the potential that we had.
                                                        By the end of the academic semester, we had more than 20 active
                                                        members and had planned several events and trips. </p>
                                                    <p>
                                                        We were, and still are, an organisation made for students by
                                                        students, and we plan to only grow and accomplish much more with
                                                        the years to come!
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="mwPageBlock Content">
                                                <div id="mission" className="blockContents">
                                                    <h2>
                                                        Mission
                                                    </h2>

                                                    <p>
                                                        Our main mission is to make the stay of Erasmus students on the
                                                        Slovenian coast easy, organized and most importantly, memorable!
                                                    </p>
                                                    <p>
                                                        We aid them with finding accommodation, handling their documents
                                                        and visas and give them advice on anything they might be curious
                                                        about or solutions to anything they might need.
                                                    </p>
                                                    <p>
                                                        We also aim to allow local students to meet and befriend Erasmus
                                                        students in order to encourage them to go on their own exchange
                                                        semesters!
                                                        If students are curious about going on an exchange semester, we
                                                        are ready to provide them with help and resources needed.
                                                        <br/>Students ask for it, we happily provide it!
                                                    </p>
                                                </div>
                                            </div>

                                            <div className="mwPageBlock Content">
                                                <div id="team" className="blockContents">
                                                    <h2>
                                                        Team
                                                    </h2>

                                                    <h4>Board</h4>

                                                    <div className="responsive-container-block container1">

                                                        <div className="responsive-container-block">
                                                            <div
                                                                className="responsive-cell-block wk-desk-3 wk-ipadp-3 wk-tab-6 wk-mobile-12 card-container">
                                                                <div className="card">
                                                                    <div className="team-image-wrapper">
                                                                        <Image alt="" className="team-member-image"
                                                                               src={Joze}/>
                                                                    </div>
                                                                    <p style={{textAlign: "center"}} className="text-blk name">
                                                                        Jože<br/>Primorec
                                                                    </p>
                                                                    <p className="text-blk position">
                                                                        Mascot
                                                                    </p>
                                                                    <div className="social-icons">
                                                                        {/* <a href="mailto:joze@esn-primorska.si"
                                                                           style={{fontSize:"large"}}>
                                                                            <span className="fa fa-envelope"/>
                                                                        </a> */}
                                                                        {/* <a href="#"
                                                                           style={{fontSize:"large"}}>
                                                                            <span className="fab fa-LinkedIn"/>
                                                                        </a> */}
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="responsive-cell-block wk-desk-3 wk-ipadp-3 wk-tab-6 wk-mobile-12 card-container">
                                                                <div className="card">
                                                                    <div className="team-image-wrapper">
                                                                        <Image alt="" className="team-member-image"
                                                                               src={Jelena}/>
                                                                    </div>
                                                                    <p style={{textAlign: "center"}} className="text-blk name">
                                                                        Jelena<br/>Pilipović
                                                                    </p>
                                                                    <p className="text-blk position">
                                                                        President
                                                                    </p>
                                                                    <div className="social-icons">
                                                                        <a href="mailto:president@esn-primorska.si"
                                                                           style={{fontSize:"large"}}>
                                                                            <span className="fa fa-envelope"/>
                                                                        </a>
                                                                        {/* <a href="#"
                                                                           style={{fontSize:"large"}}>
                                                                            <span className="fab fa-LinkedIn"/>
                                                                        </a> */}
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="responsive-cell-block wk-desk-3 wk-ipadp-3 wk-tab-6 wk-mobile-12 card-container">
                                                                <div className="card">
                                                                    <div className="team-image-wrapper">
                                                                        <Image alt="" className="team-member-image"
                                                                               src={Miloje}/>
                                                                    </div>
                                                                    <p style={{textAlign: "center"}} className="text-blk name">
                                                                        Miloje<br/>Vacić
                                                                    </p>
                                                                    <p className="text-blk position">
                                                                        Vice President
                                                                    </p>
                                                                    <div className="social-icons">
                                                                        <a href="mailto:vice-president@esn-primorska.si"
                                                                           style={{fontSize:"large"}}>
                                                                            <span className="fa fa-envelope"/>
                                                                        </a>
                                                                        {/* <a href="#"
                                                                           style={{fontSize:"large"}}>
                                                                            <span className="fab fa-LinkedIn"/>
                                                                        </a> */}
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="responsive-cell-block wk-desk-3 wk-ipadp-3 wk-tab-6 wk-mobile-12 card-container">
                                                                <div className="card">
                                                                    <div className="team-image-wrapper">
                                                                        <Image alt="" className="team-member-image"
                                                                               src={Aleksa}/>
                                                                    </div>
                                                                    <p style={{textAlign: "center"}} className="text-blk name">
                                                                        Aleksa<br/>Đorđević
                                                                    </p>
                                                                    <p className="text-blk position">
                                                                        Treasurer
                                                                    </p>
                                                                    <div className="social-icons">
                                                                        <a href="mailto:treasurer@esn-primorska.si"
                                                                           style={{fontSize:"large"}}>
                                                                            <span className="fa fa-envelope"/>
                                                                        </a>
                                                                        {/* <a href="#"
                                                                           style={{fontSize:"large"}}>
                                                                            <span className="fab fa-LinkedIn"/>
                                                                        </a> */}
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="responsive-cell-block wk-desk-3 wk-ipadp-3 wk-tab-6 wk-mobile-12 card-container">
                                                                <div className="card">
                                                                    <div className="team-image-wrapper">
                                                                        <Image alt="" className="team-member-image"
                                                                               src={Lana}/>
                                                                    </div>
                                                                    <p style={{textAlign: "center"}} className="text-blk name">
                                                                        Lana<br/>Jurišić
                                                                    </p>
                                                                    <p className="text-blk position">
                                                                        PR Coordinator
                                                                    </p>
                                                                    <div className="social-icons">
                                                                        <a href="mailto:pr@esn-primorska.si"
                                                                           style={{fontSize:"large"}}>
                                                                            <span className="fa fa-envelope"/>
                                                                        </a>
                                                                        {/* <a href="#"
                                                                           style={{fontSize:"large"}}>
                                                                            <span className="fab fa-LinkedIn"/>
                                                                        </a> */}
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="responsive-cell-block wk-desk-3 wk-ipadp-3 wk-tab-6 wk-mobile-12 card-container">
                                                                <div className="card">
                                                                    <div className="team-image-wrapper">
                                                                        <Image alt="" className="team-member-image"
                                                                               src={Emilija}/>
                                                                    </div>
                                                                    <p style={{textAlign: "center"}} className="text-blk name">
                                                                        Emilija<br/>Toth
                                                                    </p>
                                                                    <p className="text-blk position">
                                                                        Event Coordinator
                                                                    </p>
                                                                    <div className="social-icons">
                                                                        <a href="mailto:event@esn-primorska.si"
                                                                           style={{fontSize:"large"}}>
                                                                            <span className="fa fa-envelope"/>
                                                                        </a>
                                                                        {/* <a href="#"
                                                                           style={{fontSize:"large"}}>
                                                                            <span className="fab fa-LinkedIn"/>
                                                                        </a> */}
                                                                    </div>
                                                                </div>
                                                            </div>
                                                           
                                                            <div className="responsive-cell-block wk-desk-3 wk-ipadp-3 wk-tab-6 wk-mobile-12 card-container">
                                                                <div className="card">
                                                                    <div className="team-image-wrapper">
                                                                        <Image alt="" className="team-member-image"
                                                                               src={Jovana}/>
                                                                    </div>
                                                                    <p style={{textAlign: "center"}} className="text-blk name">
                                                                        Jovana<br/>Lukić
                                                                    </p>
                                                                    <p className="text-blk position">
                                                                        Human Resources
                                                                    </p>
                                                                    <div className="social-icons">
                                                                        <a href="mailto:hr@esn-primorska.si"
                                                                           style={{fontSize:"large"}}>
                                                                            <span className="fa fa-envelope"/>
                                                                        </a>
                                                                        {/* <a href="#"
                                                                           style={{fontSize:"large"}}>
                                                                            <span className="fab fa-LinkedIn"/>
                                                                        </a> */}
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
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default About;

