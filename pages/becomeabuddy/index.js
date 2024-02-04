import {useEffect} from "react";
import Link from "next/link";

function BecomeABuddy() {

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

                    <div className="bannerParallex becomeBuddy-breadcrumb">
                        <div className="bannerParallexShadow">
                            <div className="bannerParallexInner">
                                <h1>Become a buddy</h1>
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
                                                        <li className="no-children"><a href="#help"><span
                                                            className="Title">HOW CAN YOU HELP?</span></a><a
                                                            className="arrow"></a>
                                                        </li>
                                                        <li className="no-children"><a
                                                            href="#apply"><span
                                                            className="Title">APPLY NOW</span></a><a
                                                            className="arrow"></a></li>
                                                        <li className="no-children"><a href="#next"><span
                                                            className="Title">WHAT'S NEXT?</span></a><a
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
                                            <div id="help" className="blockContents">
                                                <h5>If you are a student that is already living on the coast, and you
                                                    want to join us, make sure to apply and become a student buddy! The
                                                    only requirements are to speak English, be willing to help and have fun! 
                                                    The new students would indeed appreciate that.</h5>
                                                <br/>
                                                <h2>HOW CAN YOU HELP?</h2>
                                            </div>
                                        </div>

                                        <div id="wYZ4EU4HMY790NHA" className="mwPageBlock Content">
                                            <div className="blockContents">
                                                <p>
                                                    There are no strong obligations and your work is fully voluntary.
                                                    But here are some ways how you can help your assigned incoming
                                                    student:
                                                </p>
                                                <ul className="buddy-list">
                                                    <li className="buddy-list-item">
                                                        Contact them and ask them how you could assist them
                                                    </li>
                                                    <li className="buddy-list-item">
                                                        Offer help in finding transport to and in Slovenia
                                                    </li>
                                                    <li className="buddy-list-item">
                                                        Offer help in finding accommodation
                                                    </li>
                                                    <li className="buddy-list-item">
                                                        Wait for the students when they arrive
                                                    </li>
                                                    <li className="buddy-list-item">
                                                        Show them around the city
                                                    </li>
                                                    <li className="buddy-list-item">
                                                        Accompany them to the administrative unit
                                                    </li>
                                                    <li className="buddy-list-item">
                                                        Make friends and have fun together
                                                    </li>
                                                </ul>

                                            </div>
                                        </div>

                                        <div id="w6IRX4FVIMV3ZFKC" className="mwPageBlock Content">
                                            <div id="apply" className="blockContents"><h2>
                                                APPLY NOW
                                            </h2></div>
                                        </div>

                                        <div id="wYZ4EU4HMY790NHA" className="mwPageBlock Content">

                                            <div className="blockContents">

                                                <p>The application is done through the Papaya application. 
                                                    A Papaya profile is extremely easy to set up and can be accessed either 
                                                    through a <Link href="https://bit.ly/papayaESN"><a>web browser</a></Link> or 
                                                    downloaded via <Link href="https://bit.ly/papayaESNiOS"><a>Apple App Store</a></Link> or <Link href="https://bit.ly/papayaESNandroid"><a>Google Play Store</a></Link>. 
                                                    The user can log in with Facebook, Apple or Google or register 
                                                    through email and password. If the user logs in with Facebook, Apple
                                                    or Google, they will be directly prompted to the profile editing page. 
                                                    If the user opts for registering through email and password, 
                                                    they will be redirected to a registration page on which they will be 
                                                    able to select the closest ESN section (ESN Primorska in our case), 
                                                    their country of origin and other basic information. </p>
                                                <p>Following this registration, the local Papaya admin has to confirm the account 
                                                    creation in a timely manner (the admin can either accept or deny the request,
                                                    the user will be notified via email in either case). After first accessing Papaya,
                                                    to complete their profile, the user has to fill in fields with information that
                                                    was not acquired previously (e.g. from Facebook). Finally, the user can land in the 
                                                    homepage and proceed to the last step. In the homepage, the user can subscribe to the 
                                                    Buddy System project, this is done by simply selecting the desired project, 
                                                    clicking on the “I WANT TO OFFER MY HELP” tab and proceeding further with filling 
                                                    in other data required by the project. Once the subscription is completed, the user 
                                                    can sit back, relax and wait to meet their assigned exchange student(s)!</p>

                                            </div>

                                        </div>

                                        <div className="mwPageBlock Content">
                                            <div id="next" className="blockContents">
                                                <h2>
                                                    WHAT'S NEXT?
                                                </h2>
                                                <p>
                                                    You will receive an email from Papaya as soon as you are matched with a student. 
                                                    The email will notify you of the match and invite you to go to Papaya where you 
                                                    will find the student you were matched with, as well as the contact they provided 
                                                    so you can reach out to them. At the end of the academic year, you will get a 
                                                    certificate for the period in which you have been a buddy! 😊
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
    );

}

export default BecomeABuddy;
