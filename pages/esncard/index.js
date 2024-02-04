import {useEffect} from "react";
import Image from "next/image";
import  Card from '../../public/images/ESNcard-Filled.png'
import CardBack from '../../public/images/ESNcard Back view 2.png'


function EsnCard() {

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

    return (<div className="mwPageArea">

            <div id="wSCKM1MFXRYVSVM5" className="mwPageBlock File">
                <div className="blockContents">

                    <div className="bannerParallex esncard-breadcrumb">
                        <div className="bannerParallexShadow">
                            <div className="bannerParallexInner">
                                <h1>ESN Card</h1>
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
                                                        <li className="no-face no-children"><a className="arrow"></a></li>

                                                        <li className="no-children"><a href="#aboutESNcard"><span
                                                            className="Title">What is the ESNcard?</span></a><a
                                                            className="arrow"></a>
                                                        </li>

                                                        <li className="no-children"><a href="#eligible"><span
                                                            className="Title">Eligibility </span></a><a
                                                            className="arrow"></a>
                                                        </li>

                                                        <li className="no-children"><a href="#partners"><span
                                                            className="Title">Meet partners</span></a><a
                                                            className="arrow"></a>
                                                        </li>

                                                        <li className="no-children"><a href="#howToGet"><span
                                                            className="Title">How to get one?</span></a><a
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
                                            <div id="aboutESNcard" className="blockContents">
                                                <h2>
                                                    What is ESNcard?
                                                </h2>
                                            </div>
                                        </div>

                                        <div id="wYZ4EU4HMY790NHA" className="mwPageBlock Content">
                                            <div className="blockContents">
                                                <p>
                                                    The ESNcard is the membership card of the Erasmus Student Network (ESN).<br/>
                                                    It is a <strong>proof of membership</strong> in an ESN section and so indirectly of the ESN network.
                                                    The ESNcard is also used as a <strong>discount card</strong> in many cities and countries around Europe.
                                                    It gives the card holder access to all the services offered by ESN and all our partners.
                                                </p>
                                                <p>
                                                    The ESNcard exists since September 2004 and its main objective is to support and give opportunities to international students during and after their exchange period.
                                                    The ESNcard is used annually by over <strong>180 000 students in over 40 countries</strong>, and the numbers are growing every year.
                                                </p>
                                                <p>
                                                    The aim of the ESNcard is to support the international students and trainees and give them access to affordable opportunities during their period abroad.
                                                    With the ESNcard, the user can enjoy plenty of discounts - housing, sport, food, bars, etc.- all over Europe.
                                                </p>

                                                <Image alt="ESNCard" src={Card}/>

                                            </div>
                                        </div>

                                        <div id="w6IRX4FVIMV3ZFKC" className="mwPageBlock Content">
                                            <div id="eligible" className="blockContents">
                                                <h2>
                                                    Who can get it?
                                                </h2>
                                            </div>
                                        </div>

                                        <div id="wYZ4EU4HMY790NHA" className="mwPageBlock Content">
                                            <div className="blockContents">
                                                <p>
                                                    If you belong to one or more of the groups listed below, you are eligible to have a card:
                                                </p>
                                                <ul>

                                                    <li>
                                                        <strong>Erasmus+ programme:</strong>
                                                        <ul>
                                                            <li>Study exchange</li>
                                                            <li>Traineeship/internship/apprenticeship/VET</li>
                                                            <li>Erasmus Mundus Joint masters</li>
                                                        </ul>
                                                    </li>

                                                    <li><strong>European Solidarity Corps (ESC)</strong></li>

                                                    <li><strong>International undergraduate and</strong></li>
                                                    <li><strong>Postgraduate full degree students</strong></li>

                                                    <li>
                                                        <strong>Mobility programme - other:</strong>
                                                        <ul>
                                                            <li>Study exchange</li>
                                                            <li>Traineeship/internship/apprenticeship</li>
                                                        </ul>
                                                    </li>
                                                    <li><strong>ESN Volunteer/Alumni</strong></li>
                                                    <li><strong>Student Buddy</strong></li>
                                                </ul>

                                            </div>
                                        </div>

                                        <div id="w6IRX4FVIMV3ZFKC" className="mwPageBlock Content">
                                            <div id="partners" className="blockContents">
                                                <h2>
                                                    Meet our partners!
                                                </h2>
                                            </div>
                                        </div>

                                        <div id="wYZ4EU4HMY790NHA" className="mwPageBlock Content">
                                            <div className="blockContents">
                                                <p>
                                                    ESN is having partners on the local, national and international level.<br/>
                                                    You can find all of them on the <a href="https://esncard.org/">esncard.org</a> website.
                                                </p>
                                                <p>
                                                    Let's see some of them..
                                                </p>

                                                <Image alt={CardBack} src={CardBack}/>

                                            </div>
                                        </div>

                                        <div id="w6IRX4FVIMV3ZFKC" className="mwPageBlock Content">
                                            <div id="howToGet" className="blockContents">
                                                <h2>
                                                    How to get one?
                                                </h2>
                                            </div>
                                        </div>

                                        <div id="wYZ4EU4HMY790NHA" className="mwPageBlock Content">
                                            <div className="blockContents">
                                                <p>
                                                    If you are eligible for it, you only need those three things:
                                                    <ul>
                                                        <li>ID/Passport</li>
                                                        <li>A photograph</li>
                                                        <li>A document that proves your mobility status</li>
                                                    </ul>
                                                    It's that easy
                                                </p>

                                                <p>
                                                    Just <a href="mailto:info@esn-primorska.si?subject=Ordering the ESNcard">send us an email</a> and we'll be happy to get you one!
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

export default EsnCard;

