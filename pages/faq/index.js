import { useEffect } from "react";
import Link from "next/link";

function FAQ() {
    useEffect(() => {
        $(".sidebarLeft .sidebarMenu a").on("click", function (event) {
            if (this.hash !== "") {
                event.preventDefault();

                var hash = this.hash;

                var topOffset = $(hash).offset().top - 150;

                $("html, body").animate(
                    {
                        scrollTop: topOffset,
                    },
                    500
                );
            }
        });
    });

    return (
        <div className="mwPageArea">
            <div id="wSCKM1MFXRYVSVM5" className="mwPageBlock File">
                <div className="blockContents">
                    <div className="bannerParallex faq-breadcrumb">
                        <div className="bannerParallexShadow">
                            <div className="bannerParallexInner">
                                <h1>Frequently asked questions</h1>
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
                                            <div
                                                id="wG7TC3YCLOPHAEHN"
                                                className="mwPageBlock Content"
                                            >
                                                <div className="blockContents">
                                                    <h5>Quick Links</h5>
                                                </div>
                                            </div>
                                            <div id="wM9AJIW6Z58MXKM2" className="mwPageBlock Menu">
                                                <div className="blockContents">
                                                    <ul id="mtBgfgvYI">
                                                        <li className="no-face no-children">
                                                            <a className="arrow"></a>
                                                        </li>
                                                        <li className="no-children">
                                                            <a href="#lang">
                                                                <span className="Title">
                                                                    English language requirements
                                                                </span>
                                                            </a>
                                                            <a className="arrow"></a>
                                                        </li>
                                                        <li className="no-children">
                                                            <a href="#docs">
                                                                <span className="Title">
                                                                    Application documents
                                                                </span>
                                                            </a>
                                                            <a className="arrow"></a>
                                                        </li>
                                                        <li className="no-children">
                                                            <a href="#course">
                                                                <span className="Title">
                                                                    Course catalogue
                                                                </span>
                                                            </a>
                                                            <a className="arrow"></a>
                                                        </li>
                                                        <li className="no-children">
                                                            <a href="#acc">
                                                                <span className="Title">
                                                                    Accommodation
                                                                </span>
                                                            </a>
                                                            <a className="arrow"></a>
                                                        </li>
                                                        <li className="no-children">
                                                            <a href="#residence">
                                                                <span className="Title">
                                                                    Residence permit
                                                                </span>
                                                            </a>
                                                            <a className="arrow"></a>
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
                                            <div id="lang" className="blockContents">
                                                <h2>English language requirements</h2>
                                            </div>
                                        </div>

                                        <div id="wYZ4EU4HMY790NHA" className="mwPageBlock Content">
                                            <div className="blockContents">
                                                <h5>
                                                    Which level of proficiency in English is
                                                    required of the applicants?
                                                </h5>
                                                <p>
                                                    Depends on the courses but in most cases is
                                                    English B1 or B2.
                                                </p>
                                                <h5>
                                                    Where can I get the confirmation of my English
                                                    proficiency?
                                                </h5>
                                                <p>From your faculty.</p>
                                                <h5>Do you accept OLS scores?</h5>
                                                <p>
                                                    Each faculty itself decides whether to consider
                                                    OLS or not as a measure of language proficiency.
                                                    To a large extent, OLS is not taken into account
                                                    as evidence of language proficiency.
                                                </p>
                                                <h5>
                                                    Is my graduation certificate acceptable if it
                                                    includes English at B1 level?
                                                </h5>
                                                <p>Yes.</p>
                                            </div>
                                        </div>
                                        <div id="w6IRX4FVIMV3ZFKC" className="mwPageBlock Content">
                                            <div id="docs" className="blockContents">
                                                <h2>Application documents</h2>
                                            </div>
                                        </div>

                                        <div id="wYZ4EU4HMY790NHA" className="mwPageBlock Content">
                                            <div className="blockContents">
                                                <h5>Which documents do I need?</h5>
                                                <p>
                                                    OLA, proof of your language skills (English B1),
                                                    a copy of the European ID or the photo page in
                                                    your passport, some programmes may require that
                                                    you upload extra documents – you will be
                                                    contacted by the University of Primorska -{" "}
                                                    <Link href="https://welcome.upr.si/student/prepare/application-enrolment/">
                                                        <a>link</a>
                                                    </Link>
                                                    .
                                                </p>
                                                <h5>Where can I find my EMŠO number?</h5>
                                                <p>
                                                    University of Primorska will give you the EMŠO
                                                    number before you come to Slovenia, you will
                                                    need it at the first day when you will apply for
                                                    residence permit – as part of{" "}
                                                    <Link href="https://welcome.upr.si/student/arrive/orientation-days/">
                                                        <a>Orientation days</a>
                                                    </Link>
                                                    .
                                                </p>
                                                <h5>
                                                    What kind of document is the TRANSCRIPT OF
                                                    RECORDS?
                                                </h5>
                                                <p>
                                                    This is the document that list all the grades
                                                    for all coursework and examinations you have
                                                    completed.
                                                </p>
                                                <h5>
                                                    Is the application form actually your Learning
                                                    Agreement?
                                                </h5>
                                                <p>
                                                    Application form and Learning Agreement are two
                                                    different things. The application process is a
                                                    procedure and is done through an online
                                                    application university system (you will receive
                                                    an e-mail from our faculty or university when
                                                    you are nominated and accepted by the UP).
                                                    Learning agreement is the main document for
                                                    doing the mobility and contains the information
                                                    about sending and receiving institutions, and
                                                    information about recognition of the courses.
                                                    This document must be uploaded to the
                                                    application form -{" "}
                                                    <Link
                                                        href={
                                                            "https://welcome.upr.si/student/prepare/application-enrolment/"
                                                        }
                                                    >
                                                        Application & Enrolment
                                                    </Link>
                                                    .
                                                </p>
                                            </div>
                                        </div>
                                        <div id="w6IRX4FVIMV3ZFKC" className="mwPageBlock Content">
                                            <div id="course" className="blockContents">
                                                <h2>Course catalogue</h2>
                                            </div>
                                        </div>

                                        <div id="wYZ4EU4HMY790NHA" className="mwPageBlock Content">
                                            <div className="blockContents">
                                                <h5>
                                                    Can I choose courses from the faculty webpage?
                                                </h5>
                                                <p>
                                                    Yes, all the courses you can choose are listed{" "}
                                                    <Link href="https://www.upr.si/en/study--enrolment/mobile-students/list-of-courses-for-mobility-students/">
                                                        <a>here</a>
                                                    </Link>
                                                    .
                                                </p>
                                                <h5>
                                                    Can I choose courses from the Course Catalogue
                                                    that are carried out by different faculties?
                                                </h5>
                                                <p>
                                                    Yes, but you need to inform the host faculty
                                                    about taking different course at different
                                                    faculty -{" "}
                                                    <Link href="https://welcome.upr.si/student/choose/study-offer-for-exchange/">
                                                        <a>link</a>
                                                    </Link>
                                                    .
                                                </p>
                                                <h5>
                                                    How many courses carried out by the second
                                                    faculty can I attend?
                                                </h5>
                                                <p>
                                                    It's not limited, but must be in the same field
                                                    of study.
                                                </p>
                                                <h5>
                                                    How many ECTS can I choose for one semester?
                                                </h5>
                                                <p>Maximum of 30 ECTS per semester.</p>
                                            </div>
                                        </div>
                                        <div id="w6IRX4FVIMV3ZFKC" className="mwPageBlock Content">
                                            <div id="acc" className="blockContents">
                                                <h2>Accommodation</h2>
                                            </div>
                                        </div>

                                        <div id="wYZ4EU4HMY790NHA" className="mwPageBlock Content">
                                            <div className="blockContents">
                                                <h5>
                                                    Where can I find information about
                                                    accommodation?
                                                </h5>
                                                <p>
                                                    For any information regarding the accommodation,
                                                    you can contact ac.primorska.exchange@upr.si.
                                                </p>
                                                <h5>
                                                    Do you help students with accommodation or do we
                                                    make accommodation arrangements by ourselves?
                                                </h5>
                                                <p>
                                                    We have assembled a catalogue of all the
                                                    available accommodations we have made an
                                                    agreement with for students that are coming on
                                                    an exchange. There you can find all the
                                                    information and contacts needed. We can help you
                                                    with any questions or issues that might arise.
                                                    But the final agreement is made directly with
                                                    the landlords.
                                                </p>
                                                <h5>
                                                    Do you offer rooms in the student dormitory?
                                                </h5>
                                                <p>
                                                    Unfortunately no, we as an organization do not
                                                    offer rooms in the student dormitories.
                                                </p>
                                                <h5>
                                                    Can I apply for a room at the Student
                                                    Dormitories of the University of Primorska?
                                                </h5>
                                                <p>
                                                    Unfortunately, University of Primorska has
                                                    limited amount of places in student dormitories,
                                                    which is why you cannot apply for a room. The
                                                    only exception are the first year students, who
                                                    will study full time at the University of
                                                    Primorska. However, there are also some private
                                                    student dormitories in Koper and Izola for which
                                                    you can apply for.
                                                </p>
                                            </div>
                                        </div>
                                        <div id="w6IRX4FVIMV3ZFKC" className="mwPageBlock Content">
                                            <div id="residence" className="blockContents">
                                                <h2>Residence permit</h2>
                                            </div>
                                        </div>

                                        <div id="wYZ4EU4HMY790NHA" className="mwPageBlock Content">
                                            <div className="blockContents">
                                                <h5>
                                                    Should I submit the documents for the residence
                                                    permit before my arrival?
                                                </h5>
                                                <p>
                                                    We will do that together when you arrive in
                                                    Slovenia as part of{" "}
                                                    <Link href="https://welcome.upr.si/student/arrive/orientation-days/">
                                                        <a>Orientation days</a>
                                                    </Link>
                                                    .
                                                </p>
                                                <h5>Where can I get my EMŠO number?</h5>
                                                <p>
                                                    University of Primorska will give you the EMŠO
                                                    number before you come to Slovenia, you will
                                                    need it at the first day when you will apply for
                                                    residence permit -{" "}
                                                    <Link href="https://welcome.upr.si/student/arrive/plan-your-arrival-2/">
                                                        <a>link</a>
                                                    </Link>
                                                    .
                                                </p>
                                                <h5>
                                                    I have a visa. Do I also need a residence permit
                                                    card?
                                                </h5>
                                                <p>
                                                    Yes, here is a helpful{" "}
                                                    <Link href="https://welcome.upr.si/student/prepare/visas-permit/">
                                                        <a>link</a>
                                                    </Link>
                                                    .
                                                </p>
                                            </div>
                                        </div>

                                        <div>
                                            <div>
                                                <h3>
                                                    To obtain further information, we encourage you
                                                    to visit the website{" "}
                                                    <Link href="https://welcome.upr.si/">
                                                        <a>welcome.upr.si</a>
                                                    </Link>
                                                    , which offers valuable information for all
                                                    incoming students.
                                                </h3>
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

export default FAQ;
