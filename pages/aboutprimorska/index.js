import Link from "next/link";
import React, { useEffect } from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import {Keyboard, Navigation, Pagination} from "swiper";
import Image from "next/image";
import koper1 from "../../public/images/koper1.jpg";
import koper2 from "../../public/images/koper2.jpg";
import koper3 from "../../public/images/koper3.jpg";
import koper4 from "../../public/images/koper4.jpg";
// import izola1 from "../../public/images/izola1.jpeg";
// import izola2 from "../../public/images/izola2.jpeg";
// import izola3 from "../../public/images/izola3.jpeg";
import piran1 from "../../public/images/piran1.jpg";
import piran2 from "../../public/images/piran2.jpg";
import piran3 from "../../public/images/piran3.jpg";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

function AboutPrimorska() {

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

                    <div className="bannerParallex aboutprimorska-breadcrumb">
                        <div className="bannerParallexShadow">
                            <div className="bannerParallexInner">
                                <h1>About region</h1>
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
                                                        <li className="no-children"><a href="#slovenia"><span
                                                            className="Title">Slovenia</span></a><a
                                                            className="arrow"></a>
                                                        </li>
                                                        <li className="no-children"><a href="#primorska"><span
                                                            className="Title">Primorska region</span></a><a
                                                            className="arrow"></a>
                                                        </li>
                                                        <li className="no-children"><a href="#koper"><span
                                                            className="Title">Koper</span></a><a
                                                            className="arrow"></a>
                                                        </li>
                                                        <li className="no-children"><a href="#izola"><span
                                                            className="Title">Izola</span></a><a
                                                            className="arrow"></a>
                                                        </li>
                                                        <li className="no-children"><a href="#piran"><span
                                                            className="Title">Piran</span></a><a
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
                                            <div id="slovenia" className="blockContents">
                                                <h2>Slovenia</h2>
                                            </div>
                                        </div>

                                        <div id="wYZ4EU4HMY790NHA" className="mwPageBlock Content">
                                            <div className="blockContents">

                                                <p>
                                                    Hi there, Jožе here! As a proud Slovenian, I'm here to tell you all about this amazing country.
                                                    From its breathtaking natural beauty to its rich cultural heritage, there's so much to love about Slovenia.
                                                </p>
                                                <p>
                                                    Whether you're an adrenaline junkie looking for adventure in the Julian Alps, or a culture buff searching for hidden gems in historic towns, Slovenia has something for everyone.
                                                    And let's not forget about our pristine lakes, rolling hills, and stunning coastline.
                                                    Trust me, you'll be in awe of the natural beauty you'll find here.
                                                </p>
                                                <p>
                                                    But it's not just about the scenery. Slovenia is a modern, forward-thinking country with a highly developed economy.
                                                    We have a strong education system and a high standard of living, making it a great place to visit, live, or do business.
                                                    Plus, our central location in Europe makes it easy to explore other countries and cultures as well.
                                                </p>
                                                <p>
                                                    So why not come see what Slovenia has to offer? I promise you won't regret it.
                                                    From the warm hospitality of its people to the stunning landscapes and rich cultural heritage, Slovenia is a hidden gem just waiting to be discovered.
                                                </p>
                                            </div>
                                        </div>
                                        <div id="w6IRX4FVIMV3ZFKC" className="mwPageBlock Content">
                                            <div id="primorska" className="blockContents">
                                                <h2>Primorska region</h2>
                                            </div>
                                        </div>

                                        <div id="wYZ4EU4HMY790NHA" className="mwPageBlock Content">
                                            <div className="blockContents">

                                                <p>
                                                    Primorska is a rad region located in the northwest of Slovenia.
                                                    It's famous for its gorgeous coastal areas, awe-inspiring Julian Alps, and unique Karst Plateau.
                                                    This region is full of history and tradition, with loads of cute little villages that give you a real taste of Slovenian life.
                                                    The cities of Koper, Izola, and Piran are the main hubs here and each has its own personality.
                                                </p>
                                                <p>
                                                    Tourism is the main source of income for Primorska, and it's not hard to see why.
                                                    People flock here for the natural beauty and rich cultural heritage.
                                                    Fishing and agriculture are also big deals here, with the perfect climate for growing crops and raising livestock.
                                                    And, in recent years, tech industries like IT and biotechnology have been popping up, making Primorska a hub of activity.
                                                    In short, if you're looking for breathtaking landscapes, cool history, and a thriving economy, Primorska is the place to be.
                                                </p>
                                            </div>
                                        </div>

                                        <div className="mwPageBlock Content">
                                            <div id="koper" className="blockContents">
                                                <h2>
                                                    Koper
                                                </h2>

                                                <p>
                                                    I'm excited to share with you all about the beauty and charm of three cities in Slovenia: Koper, Izola, and Piran.
                                                    These three cities, located in the Primorska region of Slovenia, are must-visits for anyone looking to experience the best of what Slovenia has to offer.
                                                </p>
                                                <p>
                                                    Let's start with Koper, the largest city in the region.
                                                    This city has a rich history that dates back to the Roman era and a well-preserved old town that is a popular destination for tourists.
                                                    Koper is also a busy port that is an important hub for commerce and trade, making it a lively and dynamic city with plenty of things to see and do.
                                                    Whether you're interested in history, culture, or commerce, Koper is a city that has it all.
                                                </p>

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
                                                    <Image alt="" src={koper1} />
                                                </SwiperSlide>

                                                <SwiperSlide>
                                                    <Image alt="" src={koper2} />
                                                </SwiperSlide>

                                                <SwiperSlide>
                                                    <Image alt="" src={koper3} />
                                                </SwiperSlide>

                                                <SwiperSlide>
                                                    <Image alt="" src={koper4} />
                                                </SwiperSlide>


                                            </Swiper>

                                        </div>
                                        <div className="mwPageBlock Content">
                                            <div id="izola" className="blockContents">
                                                <h2>
                                                    Izola
                                                </h2>

                                                <p>
                                                    Next, let's talk about the charming town of Izola.
                                                    This town has a Mediterranean atmosphere, with narrow cobbled streets, historic buildings, and lively squares.
                                                    Located on the Adriatic coast, Izola is known for its beautiful beaches, clear waters, and rich cultural heritage.
                                                    There's a vibrant marina in the town, where you can find a variety of restaurants, bars, and shops, and the town is surrounded by stunning natural beauty, making it a great place for outdoor activities.
                                                </p>

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
                                                <Image alt="" src={koper1} />
                                            </SwiperSlide>

                                            <SwiperSlide>
                                                <Image alt="" src={koper2} />
                                            </SwiperSlide>

                                            <SwiperSlide>
                                                <Image alt="" src={koper3} />
                                            </SwiperSlide>


                                        </Swiper>

                                        <div className="mwPageBlock Content">
                                            <div id="piran" className="blockContents">
                                                <h2>
                                                    Piran
                                                </h2>

                                                <p>
                                                    Finally, we have Piran, a picturesque town located on a peninsula.
                                                    This town is known for its well-preserved old town, which is a popular destination for tourists, as well as its stunning views of the Adriatic Sea.
                                                    Piran also has a vibrant cultural scene, with a variety of museums, galleries, and cultural events taking place throughout the year.
                                                    Whether you're looking for a peaceful escape or an active cultural experience, Piran has something for everyone.
                                                </p>


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
                                                        <Image alt="" src={piran1} />
                                                    </SwiperSlide>

                                                    <SwiperSlide>
                                                        <Image alt="" src={piran2} />
                                                    </SwiperSlide>

                                                    <SwiperSlide>
                                                        <Image alt="" src={piran3} />
                                                    </SwiperSlide>


                                                </Swiper>

                                                <p>
                                                    So there you have it! Koper, Izola, and Piran are three cities that offer a unique and unforgettable experience for everyone.
                                                    From their rich history and cultural heritage to their stunning natural beauty and vibrant nightlife, these cities are truly a must-visit for anyone looking to experience the best of Slovenia.
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

export default AboutPrimorska;


