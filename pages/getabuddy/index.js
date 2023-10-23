import {useEffect} from "react";
import Link from "next/link";

function GetABuddy() {

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

                    <div className="bannerParallex getBuddy-breadcrumb">
                        <div className="bannerParallexShadow">
                            <div className="bannerParallexInner">
                                <h1>Get a buddy</h1>
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
                                                        <li className="no-children"><a href="#buddyhelp"><span
                                                            className="Title">HOW CAN A BUDDY HELP YOU?</span></a><a
                                                            className="arrow"></a>
                                                        </li>
                                                        <li className="no-children"><a href="#apply"><span
                                                            className="Title">HOW TO APPLY?</span></a><a
                                                            className="arrow"></a>
                                                        </li>
                                                        <li className="no-children"><a href="#next"><span
                                                            className="Title">WHAT'S NEXT?</span></a><a
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
                                            <div id="buddyhelp" className="blockContents">
                                                <h2>HOW CAN A BUDDY HELP YOU?</h2>
                                            </div>
                                        </div>

                                        <div id="wYZ4EU4HMY790NHA" className="mwPageBlock Content">
                                            <div className="blockContents">
                                                <h5>If you are an incoming exchange student that could use some help 
                                                    and also wants to make new friends, be sure to apply for a student
                                                    buddy through the Papaya application when you start with your 
                                                    preparations for your arrival.</h5>


                                                <p>The buddy can help you arrange the means of transport to the coast. 
                                                    Since the buddies are local students, they are most familiar with 
                                                    the public transport in Slovenia. The buddy can also help you in 
                                                    search of an apartment or they can check out the apartments that 
                                                    you find. Then, when you arrive he/she can wait for you and help 
                                                    you get to the apartment. And finally, they can help you or advise
                                                    you on anything else during your stay. </p>

                                            </div>
                                        </div>

                                        <div id="w6IRX4FVIMV3ZFKC" className="mwPageBlock Content">
                                            <div id="apply" className="blockContents">
                                                <h2>HOW TO APPLY?</h2>
                                            </div>
                                        </div>

                                        <div id="wYZ4EU4HMY790NHA" className="mwPageBlock Content">
                                            <div className="blockContents">
                                                <h5>In order to apply, you will need to use the Papaya application. 
                                                    A Papaya profile is extremely easy to set up and can be accessed
                                                    either through a <Link href="https://bit.ly/papayaESN"><a>web browser</a></Link> or 
                                                    downloaded via <Link href="https://bit.ly/papayaESNiOS"><a>Apple App Store</a></Link> or <Link href="https://bit.ly/papayaESNandroid"><a>Google Play Store</a></Link>. </h5>

                                                <p>The user can log in with Facebook, Apple or Google or register through
                                                    email and password. If the user logs in with Facebook, Apple or Google,
                                                    they will be directly prompted to the profile editing page. If the user
                                                    opts for registering through email and password, they will be redirected
                                                    to a registration page on which they will be able to select the closest
                                                    ESN section (ESN Primorska in our case), their country of origin and 
                                                    other basic information. </p>
                                                
                                                <p>Following this registration, the local Papaya
                                                    admin has to confirm the account creation in a timely manner (the admin
                                                    can either accept or deny the request, the user will be notified via 
                                                    email in either case). After first accessing Papaya, to complete their
                                                    profile, the user has to fill in fields with information that was not 
                                                    acquired previously (e.g. from Facebook).</p>
                                                
                                                <p>Finally, the user can land in the homepage and proceed to the last step. 
                                                    In the homepage, the user can subscribe to the Buddy System project, 
                                                    this is done by simply selecting the desired project, clicking the 
                                                    “I NEED HELP” tab and filling in other data required by the project. 
                                                    Once the subscription is completed, the user can sit back, relax and 
                                                    wait to meet their buddy!</p>

                                            </div>
                                        </div>

                                        <div id="w6IRX4FVIMV3ZFKC" className="mwPageBlock Content">
                                            <div id="next" className="blockContents">
                                                <h2>WHAT'S NEXT?</h2>
                                            </div>
                                        </div>

                                        <div id="wYZ4EU4HMY790NHA" className="mwPageBlock Content">
                                            <div className="blockContents">
                                                <p>
                                                    The student buddy will contact you as soon as you two are matched. 
                                                    Be sure to expect their message on the contact that you provided in
                                                    the application.
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

export default GetABuddy;
