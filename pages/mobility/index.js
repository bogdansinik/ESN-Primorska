import Link from "next/link"
import {useEffect} from "react";

function Mobility() {
    

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

                <div className="bannerParallex duringmobility-breadcrumb">
                    <div className="bannerParallexShadow">
                        <div className="bannerParallexInner">
                            <h1>During Mobility</h1>
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
                                                    <li className="no-children"><a href="#meals"><span
                                                        className="Title">SUBSIDISED MEALS</span></a><a
                                                        className="arrow"></a>
                                                    </li>
                                                    <li className="no-children"><a href="#locations"><span
                                                        className="Title">IMPORTANT LOCATIONS</span></a><a
                                                        className="arrow"></a>
                                                    </li>
                                                    <li className="no-children"><a href="#learnslovene"><span
                                                        className="Title">LEARN SLOVENE</span></a><a
                                                        className="arrow"></a>
                                                    </li>
                                                    <li className="no-children"><a href="#sport"><span
                                                        className="Title">SPORT ACTIVITIES</span></a><a
                                                        className="arrow"></a>
                                                    </li>
                                                    <li className="no-children"><a href="#health"><span
                                                        className="Title">HEALTH SERVICES</span></a><a
                                                        className="arrow"></a>
                                                    </li>
                                                    <li className="no-children"><a href="#paperwork"><span
                                                            className="Title">PAPERWORK</span></a><a
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
                                        <div id="meals" className="blockContents">
                                            <h2>SUBSIDISED MEALS</h2>
                                        </div>
                                    </div>

                                    <div id="wYZ4EU4HMY790NHA" className="mwPageBlock Content">
                                        <div className="blockContents">


                                            <p>Usually during the orientation days, a group trip to SOUP is organized in
                                                order
                                                for students to get registered for subsidised meals, however if you miss
                                                it,
                                                here is how you can do it yourself: <br/>
                                                First you need to register through the webpage: <Link
                                                    href="https://www.studentska-prehrana.si/en"><a
                                                    target="_blank">STUDENTSKA-PREHRANA</a></Link>
                                            </p>

                                            <p>
                                                Visit the Student Organisation of the University of Primorska to finish
                                                the
                                                registration process. Address: Čevljarska ulica 27, 6000 Koper
                                                <br/>
                                                <br/>
                                                <strong>Bring with you:</strong>
                                            </p>
                                            <ul>
                                                <li>
                                                    Enrollment certificate;
                                                </li>
                                                <li>
                                                    ID
                                                </li>
                                            </ul>

                                            <p>After you are registered, you can use the system. Each month you are
                                                granted the
                                                same number of subsidies, as there are working days in that particular
                                                month
                                                (around 20). You can use them between 8 am and 9 pm and you can use up
                                                to 2
                                                subsidies a day, however, at least 4 hours have to pass between the two
                                                meals.
                                                No subsidies are offered between 15 July and 15 August. To use the
                                                benefits, you
                                                should register with the system. When paying for your meal, you can
                                                claim your
                                                subsidy. You can use your phone (making a telephone call), an app, or a
                                                card. </p>

                                        </div>
                                    </div>


                                    <div id="w6IRX4FVIMV3ZFKC" className="mwPageBlock Content">
                                        <div id="locations" className="blockContents">
                                            <h2>IMPORTANT LOCATIONS</h2>
                                        </div>
                                    </div>

                                    <div id="wYZ4EU4HMY790NHA" className="mwPageBlock Content">
                                        <div className="blockContents">

                                            <div className="mwPageBlock Gmaps">
                                                <div className="blockContents" style={{textAlign: "center"}}>

                                                    <iframe
                                                        src="https://www.google.com/maps/d/embed?mid=1EkadS6OZt_KCIvSto6MdavrIKau1uFE&ehbc=2E312F&noprof=1"
                                                        width="640" height="480"></iframe>

                                                </div>
                                            </div>


                                        </div>
                                    </div>


                                    <div id="w6IRX4FVIMV3ZFKC" className="mwPageBlock Content">
                                        <div id="learnslovene" className="blockContents">
                                            <h2>LEARN SLOVENE</h2>
                                        </div>
                                    </div>

                                    <div id="wYZ4EU4HMY790NHA" className="mwPageBlock Content">
                                        <div className="blockContents">

                                            <p>
                                                The University of Primorska is offering free courses of Slovene to its
                                                students
                                                and staff from level A1 (absolute beginner) to B1 (intermediate).<br/>
                                                All students enrolled in Slovene study programmes and all scholarship
                                                holders
                                                have to pass A2 Slovene proficiency exam before their enrollment into
                                                the 2nd
                                                year.<br/>
                                                All others are strongly encouraged to learn the language of the
                                                environment they
                                                live in.
                                            </p>

                                            <h3>How does it work?</h3>

                                            <p>You are divided into smaller groups with students who have a similar
                                                background
                                                and therefore similar starting point in the language. There are a 6
                                                groups: </p>

                                            <ul>
                                                <li>
                                                    2 groups of students from Croatia, Serbia, Bosnia and Herzegovina
                                                    and
                                                    Montenegro - start with A2 class and continue to B1;
                                                </li>
                                                <li>
                                                    1 group of students from other Slavic speaking countries - start
                                                    with A1
                                                    advance class and continue to A2;
                                                </li>
                                                <li>
                                                    1 group of students from non-Slavic speaking countries - start with
                                                    A1
                                                    absolute beginner class and continue to A2;
                                                </li>
                                                <li>
                                                    1 group of mobile students - have an A1 absolute beginner class with
                                                    emphasis on culture and life in Slovenia;
                                                </li>
                                                <li>
                                                    1 group of staff - level depends on the group needs.
                                                </li>

                                            </ul>

                                            <p>UP takes necessary measures to enable your participation in language
                                                courses
                                                and we try to reserve your time for language learning free in the
                                                schedules. <br/>
                                                Mobile students will get the information about learning Slovene after
                                                the
                                                arrival to Koper (on Orientation days).<br/>
                                                All language courses are implemented by the <Link
                                                    href="https://www.fhs.upr.si/en"><a target="_blank">University of
                                                    Primorska
                                                    Faculty of Humanities</a></Link> at their premises.
                                            </p>


                                        </div>
                                    </div>

                                    <div id="w6IRX4FVIMV3ZFKC" className="mwPageBlock Content">
                                        <div id="sport" className="blockContents">
                                            <h2>SPORT ACTIVITIES</h2>
                                            <h3>ORGANISED SPORT ACTIVITIES</h3>
                                        </div>
                                    </div>

                                    <div id="wYZ4EU4HMY790NHA" className="mwPageBlock Content">
                                        <div className="blockContents">


                                            <p><Link href="https://sportup.si/en/"><a
                                                target="_blank">ŠportUP</a></Link> is
                                                managing sport activities for students and staff of the University of
                                                Primorska. They organise regular recreation activities in different
                                                sport
                                                disciplines and competitions. <br/>
                                                Their offer includes:
                                            </p>

                                            <ul>
                                                <li>Basketball,</li>

                                                <li>Volleyball,</li>

                                                <li>Futsal,</li>

                                                <li>Badminton,</li>

                                                <li>Swimming,</li>
                                                <li>
                                                    The basic of weight lifting,
                                                </li>
                                                <li>
                                                    Table tennis,
                                                </li>
                                                <li>
                                                    Yoga and pilates,
                                                </li>
                                                <li>
                                                    Skiing,
                                                </li>
                                                <li>
                                                    Cycling,
                                                </li>
                                                <li>
                                                    Hiking,
                                                </li>
                                                <li>
                                                    Skating,
                                                </li>
                                                <li>
                                                    Climbing,
                                                </li>
                                                <li>
                                                    Running prep,
                                                </li>
                                                <li>
                                                    Muscoloskeletal health,
                                                </li>
                                                <li>
                                                    Metabolic health,
                                                </li>
                                                <li>
                                                    Introduction to sports.
                                                </li>
                                            </ul>

                                            <p>Student recreation is free for all UP students. All you need is a valid
                                                student
                                                ID. It will grant you access to sport facilities. </p>

                                            <h3>RECREATIONAL FACILITIES IN KOPER</h3>

                                            <p>
                                                Koper has one of the best recreational infrastructures in Slovenia. Main
                                                facilities include: </p><p>
                                            <strong>OLD ROAD BETWEEN KOPER AND IZOLA</strong> - a 3 km stretch of road
                                            by the
                                            sea closed for
                                            traffic (perfect for running, cycling, rollerblading, walking, swimming,
                                            etc.) -
                                            free; </p><p>
                                            <strong>BEACHES</strong> in all coastal municipalities (swimming, kiting,
                                            diving,
                                            SUPing,
                                            kayaking, etc.) - free; </p><p>
                                            <strong>SPORT GROUND BONIFIKA</strong> (52.411 sq m of facilities include
                                            football
                                            stadium, 3
                                            additional football courts, 13 tennis courts, athletic stadium, 2 futsal
                                            courts,
                                            2 volleyball courts, 2 basketball courts, trim trail and outdoor fitness) -
                                            majority of facilities are free, but not all - <Link
                                            href="https://sportkoper.si/objekt/sportni-park-bonifika/"><a
                                            target="_blank">LINK</a></Link></p><p>
                                            <strong>BEACH VOLLEY SPORT CENTRE</strong> - small fee - <Link
                                            href="https://sportkoper.si/objekt/center-sportov-na-mivki/"><a
                                            target="_blank">LINK</a></Link></p><p>
                                            <strong>OLYMPIC SWIMMING POOLS KOPER (winter) AND ŽUSTERNA
                                                (summer)</strong> - fee
                                            - <Link
                                            href="https://sportkoper.si/objekt/olimpijski-bazen-koper/"><a
                                            target="_blank">LINK</a></Link>
                                        </p>


                                        </div>
                                    </div>

                                    <div id="w6IRX4FVIMV3ZFKC" className="mwPageBlock Content">
                                        <div id="health" className="blockContents">
                                            <h2>HEALTH SERVICES</h2>
                                        </div>
                                    </div>

                                    <div id="wYZ4EU4HMY790NHA" className="mwPageBlock Content">
                                        <div className="blockContents">

                                            <p>In case of an emergency, call <span style={{color: "red"}}>112</span> for
                                                an
                                                ambulance. <br/>
                                                You can also visit emergency services, in case of bigger injuries (e.g.
                                                broken
                                                bones, severe cuts, etc.). The following emergencies operate in the
                                                area:
                                            </p>

                                            <ul>
                                                <li>
                                                    <Link href="https://www.sb-izola.si/en/home-page/"><a
                                                        target="_blank">Izola
                                                        General Hospital</a></Link> (at night, during weekends and on
                                                    holidays)
                                                </li>
                                                <li>
                                                    Health Clinic Koper (Monday - Friday 7 am - 8 pm; Bonifika clinic -
                                                    next to
                                                    the Police Station and Fire Brigade )
                                                </li>
                                                <li>
                                                    Health Clinic Izola (Monday - Friday 7 am - 8 pm)
                                                </li>
                                                <li>
                                                    Health Clinic Piran (Monday - Friday 7 am - 8 pm) - also has a
                                                    touristic
                                                    clinic in the summer season
                                                </li>
                                            </ul>

                                            <h5>General doctor for students:</h5>
                                            <p>In non-life-threatening conditions (e.g. flu, high fever, etc.), you can
                                                visit
                                                the student doctor in the Clinic Koper (in the city centre, behind the
                                                cathedral). Call them before hand to arrange a visit: 05 664 72 84 or 05
                                                664 72
                                                85.<br/>
                                                In Slovenia, we first visit a general / family doctor, who then decided
                                                if
                                                further tests are needed and refers us to specialists.</p>
                                            <h5>Dentist for students:</h5>
                                            <p>You can visit a dentist on duty each Friday 3 pm - 6 pm in the Clinic
                                                Koper (in
                                                the city centre). On Saturdays, Sundays and Holidays, on duty dentist
                                                works
                                                between 8 and 12 noon in the Clinic Koper - Bonifika. </p>


                                            <h5>Psychological Support:</h5>
                                            <p>We know that sometimes moving can be hard, and you may have troubles
                                                adjusting,
                                                and therefore ESN Primorska will try to organize support to
                                                students that
                                                may need it.
                                                <br/>
                                                Contact us and we will try to arrange something for you. </p>


                                        </div>
                                    </div>

                                    <div id="w6IRX4FVIMV3ZFKC" className="mwPageBlock Content">
                                            <div id="paperwork" className="blockContents">
                                                <h2>PAPERWORK</h2>
                                            </div>
                                        </div>

                                        <div id="wYZ4EU4HMY790NHA" className="mwPageBlock Content">
                                            <div className="blockContents">

                                                <p>Before you leave, you should visit the International Office at your
                                                    host faculty.
                                                    We will have a chat about your experience and you will also be able
                                                    to
                                                    collect: </p>

                                                <ul>
                                                    <li>
                                                        Confirmation of your stay (bring your university's forms if they
                                                        provided
                                                        them)
                                                    </li>
                                                    <li>
                                                        Transcript of Records (usually it will be sent to you by mail,
                                                        as not all
                                                        the marks are entered in the system at the time of your
                                                        departure)
                                                    </li>
                                                    <li>
                                                        Any other confirmation required by your university.
                                                    </li>
                                                </ul>

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

export default Mobility;
