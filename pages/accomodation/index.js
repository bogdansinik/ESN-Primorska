import Link from "next/link"
import {useEffect} from "react";

function Accomodation() {

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

                    <div className="bannerParallex breadcrumb1">
                        <div className="bannerParallexShadow">
                            <div className="bannerParallexInner">
                                <h1>Accomodation</h1>
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
                                                        <li className="no-children"><a href="#accomodation"><span
                                                            className="Title">WHAT ABOUT ACCOMODATION?</span></a><a
                                                            className="arrow"></a>
                                                        </li>
                                                        <li className="no-children"><a href="#support"><span
                                                            className="Title">SUPPORT FOR MOBILE STUDENTS</span></a><a
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
                                            <div id="accomodation" className="blockContents">
                                                <h2>WHAT ABOUT ACCOMODATION?</h2>
                                            </div>
                                        </div>

                                        <div id="wYZ4EU4HMY790NHA" className="mwPageBlock Content">
                                            <div className="blockContents">
                                                <p>Majority of students live in privately-owned flats in coastal towns.
                                                    In Slovenia
                                                    it is common to share a room with another student. <br/>
                                                    Our organization is trying to source apartments in advance for
                                                    Erasmus students.
                                                    Here you can find a list of available places, however depending on
                                                    the time you
                                                    open it, they may have been occupied: </p>

                                                <p>In order to make sure that only incoming Erasmus students get this
                                                    list, the
                                                    folder is password protected, and you can get a password by sending
                                                    an email
                                                    to <Link
                                                        href="mailto:ac.primorska.exchange@upr.si"><a>ac.primorska.exchange@upr.si</a></Link> and
                                                    introducing yourself. If you manage to secure one
                                                    of the listed offers, don’t forget to contact us back and let us
                                                    know, so we can
                                                    take that place off the list. </p>


                                                <div className="blockContents">
                                                    <p>If you are not interested in the apartments that we have been
                                                        able to find, or
                                                        there are no more beds left, here are some webpages that might
                                                        help you find a
                                                        place: </p>

                                                    <ul>
                                                        <li><Link href="https://www.nepremicnine.net/"><a
                                                            target="_blank">NEPREMICNINE.NET:</a></Link>
                                                            <ul>
                                                                <li>Use English version for basic information, but then
                                                                    switch to
                                                                    Slovene and use Google translate for additional
                                                                    information;
                                                                </li>
                                                                <li>Filter out: <ul>
                                                                    <li>Type of offer = posredovanje: "for rent =
                                                                        oddaja";
                                                                    </li>
                                                                    <li>Region = Regija: "S. Primorska = J.
                                                                        Primorska".
                                                                    </li>
                                                                </ul></li>
                                                            </ul>
                                                        </li>
                                                        <li><Link href="https://www.bolha.com/nepremicnine"><a
                                                            target="_blank">BOLHA.COM:</a></Link>
                                                            <ul>
                                                                <li>Only in Slovene, so use Google translate to see the
                                                                    offer;
                                                                </li>
                                                                <li>Filter out: <ul>
                                                                    <li>Lokacija nepremičnine: "Obalno-kraška";</li>
                                                                    <li>Vrsta ponudbe: Oddam;</li>
                                                                </ul></li>
                                                            </ul>
                                                        </li>
                                                        <li><Link href="https://www.mojcimer.si/"><a
                                                            target="_blank">MOJCIMER:</a></Link>
                                                            <ul>
                                                                <li>Student organisation's website, where students
                                                                    search roommates;
                                                                </li>
                                                                <li>Only in Slovene, so use Google translate.</li>
                                                            </ul>
                                                        </li>
                                                        <li><Link
                                                            href="https://najel.bi/najem-nepremi%C4%8Dnine/najem-%C5%A1tudentske-sobe?page=2"><a
                                                            target="_blank">NAJEL.BI:</a></Link>
                                                            <ul>
                                                                <li>Only in Slovene, so use Google translate;</li>
                                                                <li>Filter out:
                                                                    <ul>
                                                                        <li>Regija: Koper</li>
                                                                    </ul>
                                                                </li>
                                                            </ul>
                                                        </li>
                                                    </ul>
                                                </div>


                                            </div>
                                        </div>

                                        <div id="w6IRX4FVIMV3ZFKC" className="mwPageBlock Content">
                                            <div id="support" className="blockContents">
                                                <h2>SUPPORT FOR MOBILE STUDENTS</h2>
                                            </div>
                                        </div>


                                        <div id="wYYEX536WHEYELWF" className="mwPageBlock Embed">
                                            <div className="blockContents">
                                                <p>University of Primorska offers some direct contacts of the landowners
                                                    to the
                                                    students. The contact list is sent to the students 1-2 months before
                                                    their
                                                    planned arrival.
                                                    <br/>
                                                    For more information contact <Link
                                                        href="mailto:erasmus@upr.si"><a>erasmus@upr.si</a></Link>. </p>

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

export default Accomodation;
