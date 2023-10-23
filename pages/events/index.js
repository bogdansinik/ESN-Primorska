/* eslint-disable jsx-a11y/alt-text */
import Link from "next/link";
import Image from "next/image";
import { useEffect } from "react";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Keyboard, Pagination, Navigation } from "swiper";

import image1 from '../../public/images/events01.jpeg'
import image2 from '../../public/images/events02.jpeg'
import image3 from '../../public/images/events03.jpeg'
import image4 from '../../public/images/events04.jpeg'
import image5 from '../../public/images/events05.jpeg'
import image6 from '../../public/images/events06.jpeg'
import image7 from '../../public/images/events07.jpeg'
import image8 from '../../public/images/events08.jpeg'
import image9 from '../../public/images/events09.jpeg'
import image10 from '../../public/images/events10.jpeg'
import image11 from '../../public/images/events11.jpeg'
import image12 from '../../public/images/events12.jpeg'
import image13 from '../../public/images/events13.jpeg'
import image14 from '../../public/images/events14.jpeg'
import image15 from '../../public/images/events15.jpeg'
import image16 from '../../public/images/events16.jpeg'


function Events() {

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

                <div className="bannerParallex events-breadcrumb">
                    <div className="bannerParallexShadow">
                        <div className="bannerParallexInner">
                            <h1>Events</h1>
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
                                                    <li className="no-children"><a href="#sport"><span
                                                        className="Title">SPORT EVENTS</span></a><a
                                                            className="arrow"></a>
                                                    </li>
                                                    <li className="no-children"><a
                                                        href="#social"><span
                                                            className="Title">SOCIAL EVENTS</span></a><a
                                                                className="arrow"></a></li>
                                                    <li className="no-children"><a href="#parties"><span
                                                        className="Title">PARTIES</span></a><a
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
                                        <div id="sport" className="blockContents"><h2>
                                            SPORT EVENTS
                                        </h2></div>
                                    </div>

                                    <div id="wYZ4EU4HMY790NHA" className="mwPageBlock Content">
                                        <div className="blockContents">
                                            <p>We organize sports events to promote health and well-being and provide
                                                our
                                                students with an opportunity to get to further know each other through
                                                activities requiring teamwork and cooperation. </p>

                                            <p>One event was a basketball, volleyball, badminton, and chess tournament.
                                                Students
                                                signed up as already assembled teams or got assigned a team. They
                                                competed in
                                                four sports and the winning teams received trophies. </p>

                                            <h3>Hikes</h3>

                                            <p>Slovenia is a country of many different landscapes and breath-taking
                                                sights. From
                                                waterfalls, mountains, rivers to old towns and the sunny coast on the
                                                Mediterranean sea, Slovenia has it all. To show our students the area
                                                and give
                                                them a chance to socialize and be proactive, our section organizes hikes
                                                throughout the semester. Our volunteers, team members, student buddies
                                                and fury
                                                friends also like to join us on our walks. </p>
                                        </div>
                                    </div>


                                    <Swiper
                                        slidesPerView={1}
                                        spaceBetween={30}
                                        keyboard={{
                                            enabled: true,
                                        }}
                                        pagination={{
                                            clickable: true,
                                        }}
                                        navigation={true}
                                        modules={[Keyboard, Pagination, Navigation]}
                                        className="mySwiper"
                                    >

                                        <SwiperSlide>
                                            <Image src={image1} />
                                        </SwiperSlide>

                                        <SwiperSlide>
                                            <Image src={image2} />
                                        </SwiperSlide>


                                    </Swiper>



                                    <div id="w6IRX4FVIMV3ZFKC" className="mwPageBlock Content">
                                        <div id="social" className="blockContents"><h2>
                                            SOCIAL EVENTS
                                        </h2></div>
                                    </div>

                                    <div id="wYZ4EU4HMY790NHA" className="mwPageBlock Content">

                                        <div className="blockContents">


                                            <p>One of our main goals is for our students to get to meet each other and
                                                spend
                                                some quality time getting to know the local culture or exchanging their
                                                own
                                                cultures. This is why we organize different social events where they can
                                                accomplish just that. </p>


                                            <h3>International dinner </h3>

                                            <p>International dinner is an event where Erasmus and local students prepare
                                                dishes
                                                from their own countries and cultures. Then we gather together for a fun
                                                night
                                                of delicious food in an international atmosphere. To spice things up
                                                (pun
                                                unintended), Primorska team decided to organize a small competition and
                                                after
                                                the dinner, we all voted for our top three dishes. The first three with
                                                the most
                                                votes got small prices. </p>

                                            <Swiper
                                                slidesPerView={1}
                                                spaceBetween={30}
                                                keyboard={{
                                                    enabled: true,
                                                }}
                                                pagination={{
                                                    clickable: true,
                                                }}
                                                navigation={true}
                                                modules={[Keyboard, Pagination, Navigation]}
                                                className="mySwiper"
                                            >

                                                <SwiperSlide>
                                                    <Image src={image3} />
                                                </SwiperSlide>

                                                <SwiperSlide>
                                                    <Image src={image4} />
                                                </SwiperSlide>


                                                <SwiperSlide>
                                                    <Image src={image5} />
                                                </SwiperSlide>


                                            </Swiper>


                                            <h3>Trivia Nights </h3>

                                            <p>Trivia nights are one of our most visited social events. Pub quiz is an
                                                event
                                                where students work in teams to get as many correct answers to different
                                                categories like movies and tv shows, Slovenia, sports etc. We also had a
                                                Harry
                                                Potter themed trivia night, where potterheads were able to show off
                                                their
                                                knowledge about the magical universe of the Wizarding World. After each
                                                category, our volunteers collect the answers from all the teams and
                                                grade them.
                                                The team with most points wins a prize!

                                                This is a great activity where students get to be competitive, but also
                                                practice
                                                their teamwork skills and learn new facts about different themes,
                                                including the
                                                local culture.

                                                Looking forward to many more trivia nights! </p>

                                            <Swiper
                                                slidesPerView={1}
                                                spaceBetween={30}
                                                keyboard={{
                                                    enabled: true,
                                                }}
                                                pagination={{
                                                    clickable: true,
                                                }}
                                                navigation={true}
                                                modules={[Keyboard, Pagination, Navigation]}
                                                className="mySwiper"
                                            >

                                                <SwiperSlide>
                                                    <Image src={image6} />
                                                </SwiperSlide>

                                                <SwiperSlide>
                                                    <Image src={image7} />
                                                </SwiperSlide>

                                                <SwiperSlide>
                                                    <Image src={image8} />
                                                </SwiperSlide>

                                                <SwiperSlide>
                                                    <Image src={image9} />
                                                </SwiperSlide>


                                            </Swiper>


                                            <h3>Polyglot Cafe </h3>

                                            <p>One of our classsic ESN events that we organize is Polyglot cafe. It's an
                                                opportunity for students and visitors to teach others their own
                                                languages and
                                                learn new ones. Participants meet at a cafe or a bar and engage in
                                                different
                                                activities and games divided to diffferent teams and tables. </p>

                                        </div>

                                        <Swiper
                                            slidesPerView={1}
                                            spaceBetween={30}
                                            keyboard={{
                                                enabled: true,
                                            }}
                                            pagination={{
                                                clickable: true,
                                            }}
                                            navigation={true}
                                            modules={[Keyboard, Pagination, Navigation]}
                                            className="mySwiper"
                                        >

                                            <SwiperSlide>
                                                <Image src={image10} />
                                            </SwiperSlide>

                                            <SwiperSlide>
                                                <Image src={image11} />
                                            </SwiperSlide>

                                        </Swiper>


                                    </div>

                                    <div className="mwPageBlock Content">
                                        <div id="parties" className="blockContents">
                                            <h2>
                                                PARTIES
                                            </h2>
                                        </div>
                                    </div>

                                    <div className="mwPageBlock Content">
                                        <div id="buddy" className="blockContents">

                                            <h3>Eurovision Party</h3>

                                            <p>Eurovision is the biggest musical contest of Europe, so in order to
                                                celebrate our
                                                international talents and cheer for our favorite contestants, we gather
                                                at a
                                                local cafe for a watch party. During the finale the atmosphere gers
                                                tense and
                                                our eyes arestuck on the screen as the votes are coming in to choose a
                                                new
                                                winner for the year. We also make our own voting system just for fun,
                                                the person
                                                who votes closest to the actual ranking, wins a small prize! </p>

                                            <Swiper
                                                slidesPerView={1}
                                                spaceBetween={30}
                                                keyboard={{
                                                    enabled: true,
                                                }}
                                                pagination={{
                                                    clickable: true,
                                                }}
                                                navigation={true}
                                                modules={[Keyboard, Pagination, Navigation]}
                                                className="mySwiper"
                                            >

                                                <SwiperSlide>
                                                    <Image src={image12} />
                                                </SwiperSlide>

                                                <SwiperSlide>
                                                    <Image src={image13} />
                                                </SwiperSlide>

                                            </Swiper>

                                            <h3>Karaoke Party</h3>

                                            <p>One of our personal and student favorite parties is the karaoke party,
                                                which is
                                                held in the Youth centre of Koper (Centar mladih Koper). Visitors are
                                                welcome to
                                                muster their courage up and show off their singing, dancing and
                                                performing
                                                skills! No singing is mandatory though, so everybody is welcome to join
                                                us for a
                                                fun night of music and karaoke classics and cheering for the performers.
                                                So far
                                                we have discovered some hiddent talents among the students and team
                                                members, so
                                                don't hesitate to get up on the stage and amaze us for with your
                                                skills! </p>
                                        </div>
                                    </div>
                                    <Swiper
                                        slidesPerView={1}
                                        spaceBetween={30}
                                        keyboard={{
                                            enabled: true,
                                        }}
                                        pagination={{
                                            clickable: true,
                                        }}
                                        navigation={true}
                                        modules={[Keyboard, Pagination, Navigation]}
                                        className="mySwiper"
                                    >

                                        <SwiperSlide>
                                            <Image src={image14} />
                                        </SwiperSlide>

                                        <SwiperSlide>
                                            <Image src={image15} />
                                        </SwiperSlide>

                                        <SwiperSlide>
                                            <Image src={image16} />
                                        </SwiperSlide>


                                    </Swiper>

                                </div>
                            </div>



                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>)
}

export default Events;
