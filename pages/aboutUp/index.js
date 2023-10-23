import {useEffect} from "react";
import Link from "next/link";

function AboutUp() {

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

                    <div className="bannerParallex aboutUP-breadcrumb">
                        <div className="bannerParallexShadow">
                            <div className="bannerParallexInner">
                                <h1>About the University</h1>
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
                                                        <li className="no-children"><a href="#aboutUp"><span
                                                            className="Title">About the University of Primorska</span></a><a
                                                            className="arrow"></a>
                                                        </li>
                                                        <li className="no-children"><a href="#upMemebers"><span
                                                            className="Title">University of Primorska members</span></a><a
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
                                            <div id="aboutUp" className="blockContents">
                                                <h2>ABOUT THE UNIVERSITY OF PRIMORSKA</h2>
                                            </div>
                                        </div>



                                        <div id="wYZ4EU4HMY790NHA" className="mwPageBlock Content">
                                            <div className="blockContents">

                                                <p>
                                                    <Link href="https://www.upr.si/en"><a target="_blank">The University of Primorska (UP)</a></Link> is youthful, flexible, dynamic and, as a result, bold in its approach.<br/>
                                                    These qualities make it fearless, as it is not afraid of trying new things and uncertain paths, which are regarded to be inevitable to achieve ambitious goals.
                                                    Only by being open-minded, open to new challenges and open to the world, we shall establish an environment that not only fosters respectful research, learning and working atmosphere, but also creates a more compassionate, reflective and better society.
                                                    Accordingly, we have marked our academic year with the hashtag #openUP, which marks all areas of our work.
                                                </p>
                                                <p>
                                                    It is the firm belief of the University of Primorska that meaningful milestones and bold ideas can only be achieved through collaboration between open-minded stakeholders.
                                                    This is why we strongly encourage innovation, sustainability and thinking outside the box among our administrative, teaching and research teams
                                                </p>
                                                <p>
                                                    We also encourage students to explore beyond borders, to experience foreign countries and to come back with new ideas and suggestions for improvement.
                                                </p>
                                                <p>
                                                    It is our aim to work together with the local environment to enhance its competitiveness in an environment where the sea and horizon remind us of its openness every day.
                                                </p>
                                                <p>
                                                    As an interdisciplinary organization, we bring together businesses and other institutions to foster collaboration and innovation.
                                                </p>
                                            </div>
                                        </div>

                                        <div id="w6IRX4FVIMV3ZFKC" className="mwPageBlock Content">
                                            <div id="upMemebers" className="blockContents">
                                                <h2>University of Primorska members</h2>
                                            </div>
                                        </div>


                                        <div id="wYZ4EU4HMY790NHA" className="mwPageBlock Content">
                                            <div className="blockContents">

                                                <p>
                                                    The University of Primorska (UP) was founded in 2003 and will celebrate its 20th anniversary in 2023.
                                                </p>
                                                <p>
                                                    The UP has nine members:
                                                </p>
                                                <ul>
                                                    <h3>
                                                        <li>
                                                            Six faculties
                                                            <ul>
                                                                <li>
                                                                    <Link href="https://www.famnit.upr.si/en"><a target="_blank">Faculty of Mathematics, Natural Sciences and
                                                                        Information Technologies (UP FAMNIT)</a></Link>
                                                                </li>
                                                                <li>
                                                                    <Link href="https://www.fm-kp.si/en"><a target="_blank">Faculty of Management (UP FM)</a></Link>
                                                                </li>
                                                                <li>
                                                                    <Link href="https://www.fhs.upr.si/en"><a target="_blank">Faculty of Humanities (UP FHŠ)</a></Link>
                                                                </li>
                                                                <li>
                                                                    <Link href="https://www.pef.upr.si/en"><a target="_blank">Faculty of Education (UP PEF)</a></Link>
                                                                </li>
                                                                <li>
                                                                    <Link href="https://www.turistica.si/en"><a target="_blank">Faculty of Tourism Studies - Turistica (UP FTŠ
                                                                        Turistica)</a></Link>
                                                                </li>
                                                                <li>
                                                                    <Link href="https://fvz.upr.si/en/faculty/"><a target="_blank">Faculty of Health Sciences (UP FVZ)</a></Link>
                                                                </li>
                                                            </ul>
                                                        </li>
                                                        <li>
                                                            Research institute
                                                            <ul>
                                                                <li>
                                                                    <Link href="https://www.iam.upr.si/en"><a target="_blank">Andrej Marušič Institute (UP IAM)</a></Link>
                                                                </li>
                                                            </ul>
                                                        </li>
                                                        <li>
                                                            Student residences
                                                            <ul>
                                                                <li>
                                                                    <Link href="https://sd.upr.si/"><a target="_blank">Student Housing (UP ŠD)</a></Link>
                                                                </li>
                                                            </ul>
                                                        </li>
                                                        <li>
                                                            University library
                                                            <ul>
                                                                <li>
                                                                    <Link href="https://www.upr.si/en/university-library/"><a target="_blank">University Library (UP UK)</a></Link>
                                                                </li>
                                                            </ul>
                                                        </li>
                                                    </h3>
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

export default AboutUp;
