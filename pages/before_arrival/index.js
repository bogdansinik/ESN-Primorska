import Link from "next/link"
import {useEffect} from "react";

function BeforeArrival() {

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

    });

    return (<div className="mwPageArea">

        <div id="wSCKM1MFXRYVSVM5" className="mwPageBlock File">
            <div className="blockContents">

                <div className="bannerParallex beforearrival-breadcrumb">
                    <div className="bannerParallexShadow">
                        <div className="bannerParallexInner">
                            <h1>Before Arrival</h1>
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
                                                    <li className="no-children"><a href="#permit"><span
                                                        className="Title">Visa & Permit</span></a><a
                                                        className="arrow"></a>
                                                    </li>
                                                    <li className="no-children"><a
                                                        href="#health"><span
                                                        className="Title">Health insurance</span></a><a
                                                        className="arrow"></a></li>
                                                    <li className="no-children"><a href="#costs"><span
                                                        className="Title">Living costs</span></a><a
                                                        className="arrow"></a></li>
                                                    <li className="no-children"><a href="#accommodation"><span
                                                        className="Title">Housing</span></a><a
                                                        className="arrow"></a></li>
                                                    <li className="no-children"><a href="#buddy"><span
                                                        className="Title">Get a buddy</span></a><a
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
                                        <div id="permit" className="blockContents">
                                            <h2>
                                                Welcome to Primorska
                                            </h2>
                                            <p>
                                                On this page you will be able to find some necessary info about student life at Primorska.<br/>
                                                For more up-to-date information, visit <a href="https://welcome.upr.si/en">Welcome to UP</a> website
                                            </p>
                                        </div>
                                    </div>

                                    <div id="w6IRX4FVIMV3ZFKC" className="mwPageBlock Content">
                                        <div id="permit" className="blockContents">
                                            <h2>
                                                Visa & Permit
                                            </h2>
                                        </div>
                                    </div>

                                    <div id="wYZ4EU4HMY790NHA" className="mwPageBlock Content">
                                        <div className="blockContents">
                                            <p>
                                                There are things you just can't avoid when you are moving to a new
                                                country.
                                            </p>
                                            <p>
                                                <strong>Just remember: patience and preparedness will get you a long
                                                    way!
                                                    And
                                                    generally, do not try to tackle Slovenian administration on your
                                                    own.
                                                    Visit
                                                    with a tutor or a buddy.</strong>
                                            </p>
                                            <p>
                                                The processes you need to go through depend on your personal
                                                circumstances
                                                and
                                                expectations. Generally, your country of origin will determine the
                                                procedures to
                                                a great extent, but you will have to make some decisions. Below is an
                                                overview
                                                of processes needed to be undertaken:
                                            </p>

                                            <ul>
                                                <li>All: once you are in Slovenia you will have to register your
                                                    address,
                                                    get a
                                                    tax number and open a bank account
                                                </li>
                                                <li>EU & EEA citizens: need to obtain residence registration certificate
                                                    if
                                                    you
                                                    are staying here for more than three months
                                                </li>
                                                <li>Swiss nationals: need to obtain residence permit if you are staying
                                                    here
                                                    for
                                                    more than three months
                                                </li>

                                                <li>Non-EU, EEA or Swiss citizens: need to obtain a long-term visa (type
                                                    D)
                                                    or a
                                                    temporary residence permit
                                                </li>
                                            </ul>

                                            <p>For more information, click <Link
                                                href="https://welcome.upr.si/en/prepare/visas--permit"><a
                                                target="_blank">HERE</a></Link>. </p>

                                        </div>
                                    </div>

                                    <div id="w6IRX4FVIMV3ZFKC" className="mwPageBlock Content">
                                        <div id="health" className="blockContents"><h2>
                                            HEALTH INSURANCE
                                        </h2></div>
                                    </div>

                                    <div id="wYZ4EU4HMY790NHA" className="mwPageBlock Content">
                                        <div className="blockContents">
                                            <h3>Who needs it?</h3>
                                        </div>
                                        <div className="blockContents">

                                            <p>
                                                For the citizens of the following countries, their home insurance covers
                                                services in Slovenia:
                                            </p>

                                            <ul>

                                                <li>EU, EEA, Switzerland: have your European Health Card (blue card)
                                                    ready
                                                </li>
                                                <li>Australia: Have your Medicare and passport ready
                                                </li>
                                                <li>Macedonia: arrange RM/SI3 form
                                                </li>
                                                <li>Bosnia and Herzegovina: arrange BIH/SI3 form
                                                </li>
                                                <li>Serbia: arrange SRB/SI03 form</li>
                                                <li> Montenegro: arrange MNE/SI03 form</li>

                                            </ul>

                                            <p>Others have to arrange: </p>

                                            <ul>
                                                <li>Any travel insurance covering at least EUR 30,000 or
                                                </li>
                                                <li><Link
                                                    href="https://www.coris.si/zavarovanja/zavarovanje-za-tujce"><a
                                                    target="_blank">CORIS in Slovenia for foreigners</a></Link> (app.
                                                    EUR
                                                    150 /
                                                    three months) or
                                                </li>
                                                <li> Compulsory health insurance: (EUR 137.46 / month)
                                                </li>
                                            </ul>

                                        </div>

                                        <div className="blockContents">
                                            <h3>How can you get it?</h3>
                                        </div>

                                        <div className="blockContents">
                                            <p>Arrange proof of the insurance valid in Slovenia (see above) or organise
                                                health
                                                insurance through a private insurance company. </p>
                                            <p>Citizens of Bosnia and Herzegovina, Montenegro, North Macedonia and
                                                Serbia
                                                have
                                                to visit the Health Insurance Institute in Slovenia (ZZZS), to exchange
                                                their
                                                form with the proof of insurance in Slovenia. You should do this
                                                immediately, if
                                                you are coming here for the first time. If you are trying to renew your
                                                temporary residence permit, then the Slovenian proof of insurance is not
                                                necessary anymore for the Administrative Unite. However, you should do
                                                it in
                                                a
                                                reasonable timeframe since you will definitely need it for doctor
                                                visitation
                                                or
                                                other situations. </p>
                                        </div>

                                        <div className="blockContents">
                                            <h3>How soon should you arrange it?</h3>
                                        </div>

                                        <div className="blockContents">
                                            <p>Before arrival to Slovenia.
                                                <br/>
                                                If you need a temporary residence permit or visa before you enter
                                                Slovenia,
                                                then
                                                before you launch an application. </p>
                                        </div>

                                        <div className="blockContents">
                                            <h3>Where?</h3>
                                        </div>

                                        <div className="blockContents">
                                            <ul>

                                                <li>Travel insurance: at home through a private insurance company
                                                </li>
                                                <li>CORIS for foreigners: send e-mail to <Link
                                                    href="mailto:coris@coris.si"><a>coris@coris.si</a></Link>
                                                </li>
                                                <li>Inclusion in the obligatory insurance: visit <Link
                                                    href="https://www.zzzs.si/en/"><a target="_blank">Health Insurance
                                                    Institute
                                                    of
                                                    Slovenia (ZZZS)</a></Link>
                                                </li>

                                            </ul>
                                        </div>

                                    </div>

                                    <div className="mwPageBlock Content">
                                        <div id="costs" className="blockContents">
                                            <h2>
                                                LIVING COSTS
                                            </h2>
                                            <p>This is just a rough guideline to give you a general idea about the
                                                prices in
                                                Primorska. How much you will actually spend, depends a lot on your
                                                personal
                                                lifestyle.</p>
                                            <h3>Accommodation:</h3>
                                            <ul>
                                                <li>Student dormitory - shared room: EUR 190 (shared room, expenses
                                                    included)
                                                </li>

                                                <li>Private flat - shared room: EUR 150 - 250 + expenses</li>

                                                <li>Private flat - private room: EUR 200 - 300 + expenses</li>

                                                <li>Studio apartment or 1 bedroom apartment: EUR 400 - 500 + expenses
                                                </li>

                                                <li>2 bedroom apartment: EUR 600 + expenses</li>
                                            </ul>

                                            <h3>Transportation:</h3>

                                            <ul>

                                                <li>Koper bus single ride: EUR 0.8 if you pay with Koper card of EUR 1.5
                                                    if
                                                    you
                                                    pay on a bus;
                                                </li>

                                                <li>Koper bus monthly ticket: EUR 10;</li>

                                                <li>Coastal bus (Koper - Piran) single ticket: depending on the
                                                    distance,
                                                    between EUR 1.30 and EUR 3.60
                                                </li>

                                                <li>Coastal bus (Koper - Piran) student monthly ticket: EUR 25</li>

                                            </ul>

                                            <h3>Food:</h3>
                                            <ul>

                                                <li>Non-subsidised meal in a restaurant: EUR 6 - 15 + drinks
                                                </li>

                                                <li>Student subsidised meal in a restaurant: EUR 3.5</li>

                                            </ul>

                                        </div>
                                    </div>

                                    <div className="mwPageBlock Content">
                                        <div id="accommodation" className="blockContents">
                                            <h2>
                                                Housing
                                            </h2>
                                            
                                            

                                            <div className="blockContents">

                                                    
                                                <p>Majority of students live in privately-owned flats in coastal towns.
                                                    In Slovenia
                                                    it is common to share a room with another student.
                                                </p>

                                                <p>Our organization is trying to source apartments in advance for
                                                    Erasmus students. <br/>
                                                    Here you can find a list of available places, however depending on
                                                    the time you open it, they may have been occupied. <br/>
                                                    In order to make sure that only incoming Erasmus students get this
                                                    list, the
                                                    folder is password protected, and you can get a password by sending
                                                    an email to one of two mails: <Link
                                                        href="mailto:accommodation@esn-primorska.si"><a>accommodation@esn-primorska.si</a></Link>, and
                                                    introducing yourself. <br/><br/>
                                                    If you manage to secure one
                                                    of the listed offers, don’t forget to contact us back and let us
                                                    know, so we can
                                                    take that place off the list. </p>

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
                                                                    Slovene for additional
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
                                                                <li>Filter out by region: " Regija: Koper "
                                                                </li>
                                                            </ul>
                                                        </li>
                                                    </ul>
                                                </div>

                                        </div>
                                    </div>

                                    <div className="mwPageBlock Content">
                                        <div id="buddy" className="blockContents">
                                            <h2>
                                                GET A BUDDY!
                                            </h2>

                                            <p>Make sure to apply for a Buddy once you get the invitation email about it
                                                from
                                                the University of Primorska!</p>
                                            <p>

                                                The Buddy System is a part of our network consisting of local and
                                                incoming
                                                students. It's aim is to match each incoming student to a local student
                                                volunteer (buddy). From that point on, the buddy can help with finding
                                                transport to Slovenia, accommodation, go with you to the administrative unit
                                                and much more.

                                            </p>
                                            <p>
                                                Read more about the Buddy System and find out how to get a buddy <Link
                                                href="/getabuddy"><a>HERE</a></Link>!
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

    </div>)
}

export default BeforeArrival;
