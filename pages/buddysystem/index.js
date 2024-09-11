import {useEffect} from "react";

function BuddySystem() {
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

                    <div className="bannerParallex buddy-breadcrumb">
                        <div className="bannerParallexShadow">
                            <div className="bannerParallexInner">
                                <h1>Buddy System</h1>
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
                                                        <li className="no-children"><a href="#about"><span
                                                            className="Title">What is the buddy system?</span></a><a
                                                            className="arrow"></a>
                                                        </li>
                                                        <li className="no-children"><a href="#buddies"><span
                                                            className="Title">Who are our buddies?</span></a><a
                                                            className="arrow"></a>
                                                        </li>
                                                        <li className="no-children"><a href="#getabuddy"><span
                                                            className="Title">Who can get a buddy?</span></a><a
                                                            className="arrow"></a></li>
                                                        <li className="no-children"><a href="#system"><span
                                                            className="Title">How the system works?</span></a><a
                                                            className="arrow"></a></li>
                                                        <li className="no-children"><a href="#whatispapaya"><span
                                                            className="Title">What is Papaya?</span></a><a
                                                            className="arrow"></a></li>

                                                        <li className="no-children"><a href="#applynow"><span
                                                            className="Title">Interested? Apply now!</span></a><a
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
                                                <h2>What is the buddy system?</h2>
                                            </div>
                                        </div>

                                        <div id="wYZ4EU4HMY790NHA" className="mwPageBlock Content">
                                            <div className="blockContents">
                                                <p> The Buddy System is one of the biggest networks of volunteers 
                                                    at the University of Primorska and it aims to assist the incoming
                                                    exchange students during their arrival and their stay. It was 
                                                    formed in the 2021/2022 academic year, together with the formation
                                                    of PSEN. Currently, the system involves around 30 student buddies
                                                    from all the faculties of UP.</p>
                                            </div>
                                        </div>

                                        <div id="w6IRX4FVIMV3ZFKC" className="mwPageBlock Content">
                                            <div id="buddies" className="blockContents">
                                                <h2>WHO ARE OUR BUDDIES?</h2>
                                            </div>
                                        </div>

                                        <div id="wYZ4EU4HMY790NHA" className="mwPageBlock Content">
                                            <div className="blockContents">
                                                <p>
                                                    Our buddies are local and foreign full-time students who have made 
                                                    the coast their home for a while. They're the ones that are always 
                                                    up for a good time and willing to provide a hand. Whether native 
                                                    Slovene speakers or not, they offer their assistance to the exchange
                                                    students as they learn the ropes and settle in. Our buddies are 
                                                    awesome people who come to most of our events. They join us for 
                                                    everything, from sports days, to parties, to pub quizzes in which
                                                    they form competitive teams with the exchange students! 😊
                                                </p>

                                            </div>
                                        </div>

                                        <div id="w6IRX4FVIMV3ZFKC" className="mwPageBlock Content">
                                            <div id="getabuddy" className="blockContents">
                                                <h2>WHO CAN GET A BUDDY?</h2>
                                            </div>
                                        </div>

                                        <div id="wYZ4EU4HMY790NHA" className="mwPageBlock Content">
                                            <div className="blockContents">
                                                <p>Any arriving exchange student at the Universities of Primorska, 
                                                    University of Ljubljana’s Faculty of Maritime Studies and Transport,
                                                    or Emuni University may be paired with a local volunteer who will 
                                                    act as a guide and a friend during their stay in Slovenia. Apply 
                                                    for a buddy and meet them online before you even set foot on the 
                                                    coast if you'll be attending one of the before mentioned universities
                                                    and you're worried about getting around on your own or simply want to
                                                    make friends as soon as possible. A buddy is a good option for you 
                                                    even if you are having trouble arranging transportation or accommodation
                                                    since it gives you the opportunity to communicate with each other before
                                                    you arrive.</p>
                                            </div>
                                        </div>


                                        <div id="w6IRX4FVIMV3ZFKC" className="mwPageBlock Content">
                                            <div id="system" className="blockContents">
                                                <h2>HOW DOES THE SYSTEM WORK?</h2>
                                            </div>
                                        </div>

                                        <div id="wYZ4EU4HMY790NHA" className="mwPageBlock Content">
                                            <div className="blockContents">
                                                <p>Each exchange student needs to apply for a student buddy through
                                                    the <a href={"https://papaya.iter-idea.com/auth"}> Papaya
                                                        application </a>
                                                    before their arrival (approx. one month
                                                    before their arrival). When the application is received, the
                                                    student is matched to a buddy according to the interests they
                                                    have in common (faculty, language, hobbies…). Once the match is
                                                    made,
                                                    the buddy will be notified of the match
                                                    via email from Papaya, from that point on, they can finally reach
                                                    out to the exchange student, introduce themselves and offer their
                                                    help! </p>

                                                <p> When setting up their profile in the Papaya application, 
                                                    both incoming students and buddies are encouraged to answer optional
                                                    questions about their hobbies and interests. We recommend you enter 
                                                    some information about your likes and dislikes. The main goal of the
                                                    system is to connect people that will become friends, so your answers
                                                    might lead to connecting you with someone that shares the same interests! 
                                                    The buddy system is all about growing our networks and making long-lasting
                                                    friendships around the globe!</p>

                                            </div>
                                        </div>

                                        <div id="w6IRX4FVIMV3ZFKC" className="mwPageBlock Content">
                                            <div id="whatispapaya" className="blockContents">
                                                <h2>WHAT IS PAPAYA?</h2>
                                            </div>
                                        </div>

                                        <div id="wYZ4EU4HMY790NHA" className="mwPageBlock Content">
                                            <div className="blockContents">
                                                <p>
                                                    The Papaya application is an ESN Matching System founded by our
                                                    fellow colleagues from ESN Modena. It allows for a simple and 
                                                    efficient way of matching local buddies and exchange students 
                                                    in need of a helping hand. When creating a Papaya account, users
                                                    are asked for some basic information such as their field of study,
                                                    interests, hobbies etc. This information is needed in order for the
                                                    application to calculate the percentage of affinity between users 
                                                    based on the provided data, which would help the local admin in 
                                                    making the final match between buddies and exchange students, 
                                                    hopefully resulting in new friendships! 😊
                                                </p>
                                            </div>
                                        </div>


                                        <div id="w6IRX4FVIMV3ZFKC" className="mwPageBlock Content">
                                            <div id="applynow" className="blockContents">
                                                <h2>INTERESTED? APPLY NOW!</h2>
                                            </div>
                                        </div>

                                        <div id="wYZ4EU4HMY790NHA" className="mwPageBlock Content">
                                            <div className="blockContents">
                                                <p>
                                                    Whether you are an exchange student that is arriving to the coast
                                                    soon or a student that is living on the coast and wants to join 
                                                    our network, make sure to apply via the
                                                    <a href={"https://papaya.iter-idea.com/auth"}> Papaya application!</a>
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

export default BuddySystem;
