import Link from "next/link";
import React, { useEffect } from "react";
import { Keyboard, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import image1 from "../../public/images/slovenia_trip/IMG_2838.JPG";
import image2 from "../../public/images/slovenia_trip/IMG_2602.JPG";
import image3 from "../../public/images/slovenia_trip/IMG_2617.JPG";
import image4 from "../../public/images/slovenia_trip/IMG_2639.JPG";
import image5 from "../../public/images/slovenia_trip/IMG_2791.JPG";
import image6 from "../../public/images/slovenia_trip/IMG_2889.JPG";
import image0 from "../../public/images/slovenia_trip/IMG_2890.JPG";
import image7 from "../../public/images/slovenia_trip/IMG_2778.JPG";
import image8 from "../../public/images/Bled/459a2ca0-b627-486a-a52c-80ff6fc9ad84.jpg";
import image9 from "../../public/images/Bled/thumbnail.jpg";
import image10 from "../../public/images/Bled/photo_2022-04-09_12-25-05.jpg";
import image11 from "../../public/images/Bled/photo_2022-04-09_12-25-09.jpg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

function Trips() {
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
                    <div className="bannerParallex trips-breadcrumb">
                        <div className="bannerParallexShadow">
                            <div className="bannerParallexInner">
                                <h1>Trips</h1>
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
                                                            <a href="#slo">
                                                                <span className="Title">
                                                                    Slovenian trips
                                                                </span>
                                                            </a>
                                                            <a className="arrow"></a>
                                                        </li>
                                                        <li className="no-children">
                                                            <a href="#bled">
                                                                <span className="Title">Bled</span>
                                                            </a>
                                                            <a className="arrow"></a>
                                                        </li>
                                                        <li className="no-children">
                                                            <a href="#skocjanskejame">
                                                                <span className="Title">
                                                                    Škocjanske jame
                                                                </span>
                                                            </a>
                                                            <a className="arrow"></a>
                                                        </li>
                                                        <li className="no-children">
                                                            <a href="#soca">
                                                                <span className="Title">
                                                                    Soča Valley
                                                                </span>
                                                            </a>
                                                            <a className="arrow"></a>
                                                        </li>
                                                        <li className="no-children">
                                                            <a href="#celje">
                                                                <span className="Title">
                                                                    Celje, Maribor and Graz trip
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
                                        <div className="mwPageBlock Content">
                                            <div id="slo" className="blockContents">
                                                <h2>Slovenian trip</h2>
                                            </div>
                                        </div>

                                        <div className="mwPageBlock Content">
                                            <div id="buddy" className="blockContents">
                                                <p>
                                                    Bled, Bohinj, Celje, Kranj and Maribor are
                                                    popular tourist destinations in Slovenia, each
                                                    offering a unique blend of history, culture, and
                                                    natural beauty. During our Slovenia trip, we had
                                                    the opportunity to visit each of these
                                                    destinations and experience their unique
                                                    offerings.
                                                </p>
                                                <p>
                                                    During our trip to Bled, we had the opportunity
                                                    to take a scenic hike in the surrounding hills
                                                    and visit the Bled Museum. The hike provided
                                                    breathtaking views of Lake Bled and the Julian
                                                    Alps, with numerous scenic spots to stop and
                                                    take in the view. We encountered a variety of
                                                    flora and fauna, including rare birds and
                                                    wildflowers. After the hike, we visited the Bled
                                                    Museum, which offered a fascinating glimpse into
                                                    the history and culture of the region. The
                                                    museum was well-curated, showcasing artifacts
                                                    and exhibits that shed light on the area's rich
                                                    heritage.
                                                </p>
                                                <p>
                                                    In Bohinj, we took a relaxing boat ride on the
                                                    tranquil waters of Bohinj Lake. The ride offered
                                                    stunning views of the surrounding mountains,
                                                    with plenty of opportunities to take photos and
                                                    admire the scenery.
                                                </p>
                                                <p>
                                                    In Kranj, we had the opportunity to visit two of
                                                    the city's most notable attractions, the
                                                    Prešeren House Museum and the Bell Tower. The
                                                    Prešeren House Museum, dedicated to Slovenia's
                                                    greatest poet, France Prešeren, offers a
                                                    fascinating glimpse into the life and work of
                                                    this important cultural figure. The museum
                                                    showcases a collection of Prešeren's personal
                                                    artifacts, as well as exhibits that provide
                                                    context for his life and work. The Bell Tower,
                                                    located in the heart of Kranj, provides
                                                    breathtaking views of the city and the
                                                    surrounding hills. We climbed to the top of the
                                                    tower, where we were rewarded with panoramic
                                                    views of the city and its surroundings.
                                                </p>
                                                <p>
                                                    During our trip to Maribor, we had the
                                                    opportunity to take a city tour and party with
                                                    ESN Maribor. The city tour provided a
                                                    fascinating glimpse into the history and culture
                                                    of Maribor. The party was a lively and energetic
                                                    event, with a diverse crowd of students and
                                                    locals coming together to dance and socialize.
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
                                                <Image alt="" src={image0} />
                                            </SwiperSlide>
                                            <SwiperSlide>
                                                <Image alt="" src={image1} />
                                            </SwiperSlide>
                                            <SwiperSlide>
                                                <Image alt="" src={image7} />
                                            </SwiperSlide>
                                            <SwiperSlide>
                                                <Image alt="" src={image2} />
                                            </SwiperSlide>
                                            <SwiperSlide>
                                                <Image alt="" src={image3} />
                                            </SwiperSlide>
                                            <SwiperSlide>
                                                <Image alt="" src={image4} />
                                            </SwiperSlide>
                                            <SwiperSlide>
                                                <Image alt="" src={image6} />
                                            </SwiperSlide>
                                        </Swiper>

                                        <div id="w6IRX4FVIMV3ZFKC" className="mwPageBlock Content">
                                            <div id="bled" className="blockContents">
                                                <h2>BLED</h2>
                                            </div>
                                        </div>

                                        <div id="wYZ4EU4HMY790NHA" className="mwPageBlock Content">
                                            <div className="blockContents">
                                                <p>
                                                    Bled is one of the most attractive destinations
                                                    in Slovenia and a must-see for all coming to the
                                                    country for the first time. It includes the
                                                    gorgeous Bled island on the Bled lake, the Bled
                                                    castle and many different walking and hiking
                                                    routes and beautiful views. It is beautiful in
                                                    all weather conditions. This trip is included in
                                                    every semester and all the students love it.
                                                    Blejska kremšnita (Bled cream cake) is also
                                                    something we always go for!
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
                                                <Image alt="" src={image8} />
                                            </SwiperSlide>
                                            <SwiperSlide>
                                                <Image alt="" src={image9} />
                                            </SwiperSlide>
                                            <SwiperSlide>
                                                <Image alt="" src={image10} />
                                            </SwiperSlide>
                                            <SwiperSlide>
                                                <Image alt="" src={image11} />
                                            </SwiperSlide>
                                        </Swiper>

                                        <div id="w6IRX4FVIMV3ZFKC" className="mwPageBlock Content">
                                            <div id="skocjanskejame" className="blockContents">
                                                <h2>ŠKOCJANSKE JAME</h2>
                                            </div>
                                        </div>

                                        <div id="wYZ4EU4HMY790NHA" className="mwPageBlock Content">
                                            <div className="blockContents">
                                                <p>
                                                    Our highly recommended destination, if you are
                                                    seeking a memorable excursion in Slovenia is the
                                                    Skocjanske Jamea. This natural park is
                                                    well-known for its stunning caves and
                                                    awe-inspiring landscapes.
                                                </p>
                                                <p>
                                                    During our visit, we undertook a guided tour of
                                                    the caves, which was a truly remarkable
                                                    experience. We were able to marvel at the
                                                    intricate formations and stalactites up close.
                                                    The hiking trails surrounding the park offered
                                                    breathtaking views of the cliffs and river
                                                    below.
                                                </p>
                                            </div>
                                        </div>
                                        <br />

                                        <div className="mwPageBlock Content">
                                            <div id="soca" className="blockContents">
                                                <h2>SOČA VALLEY</h2>
                                            </div>
                                        </div>

                                        <div className="mwPageBlock Content">
                                            <div id="buddy" className="blockContents">
                                                <p>
                                                    The Soča Valley in Slovenia is a breathtaking
                                                    destination renowned for its stunning scenery
                                                    and thrilling rafting experiences. During our
                                                    visit to the Soča Valley, we had the opportunity
                                                    to participate in a rafting excursion along the
                                                    Soca River.
                                                </p>
                                                <p>
                                                    The rafting journey was a exciting adventure,
                                                    with rapids ranging from calm to challenging. We
                                                    navigated our way through the river, taking in
                                                    the stunning views of the surrounding mountains
                                                    and valleys. The crystal clear waters of the
                                                    Soča River provided a unique perspective of the
                                                    breathtaking scenery.
                                                </p>
                                                <p>
                                                    We also had the opportunity to stop along the
                                                    way, taking a refreshing swim in the river and
                                                    exploring the rocky shorelines. The scenery was
                                                    truly remarkable, with lush green forests and
                                                    towering mountains in the background.
                                                </p>
                                            </div>
                                        </div>
                                        <br />
                                        <div className="mwPageBlock Content">
                                            <div id="celje" className="blockContents">
                                                <h2>CELJE, MARIBOR AND GRAZ TRIP</h2>
                                            </div>
                                        </div>

                                        <div className="mwPageBlock Content">
                                            <div id="celje" className="blockContents">
                                                <p>
                                                    During the month of November ESN Primorska
                                                    decided to organize first of their erasmus trips
                                                    for this year. The destination we picked were in
                                                    the famour Steyr region of Slovenia and Austria
                                                    (slo. Štajerska). Historically speaking, one of
                                                    the more important regions inside the Habsburg
                                                    Monarchy and later Austro-Hungarian Empire.
                                                </p>
                                                <p>
                                                    Our trip started a bit before that, with a short
                                                    break in Trojane, so our exchange students could
                                                    try the famous Slovenian donuts, so called
                                                    Trojanski krofi, being famous for being both
                                                    delicious and huge.
                                                </p>
                                                <p>
                                                    After enjoying the mesmerizing view and tasty
                                                    donuts, our trip continued towards the famous
                                                    Celje castle. The castle dates back in 14th
                                                    century and was the seat to the famous Counts of
                                                    Celje, one of the most important Slovenian
                                                    historical figures. We spent quite some time
                                                    there, as we also had an opportunity to enjoy
                                                    two exhibitions that are held inside the castle.
                                                    And then, some free time in the city of Celje.
                                                </p>
                                                <p>
                                                    After Celje, we headed to Maribor. There, we had
                                                    a bit of free time to explore the beautiful city
                                                    whose architecture was strongly influenced by
                                                    the Austrian. In the evening, together with ESN
                                                    Maribor, our students had the opportunity to
                                                    participate in the famous Pub Crawl and party
                                                    with their fellow erasmus students from Maribor.
                                                </p>
                                                <p>
                                                    Next day the morning was dedicted to exploring
                                                    Maribor a bit more, as one evening is not enough
                                                    for so. We continued our trip towards Graz,
                                                    where we had the chance to explore the city in
                                                    unique way – with the photo rally. Our students
                                                    were running around, visiting all the important
                                                    sightseeing spots and making funny pictures on
                                                    the way.
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

export default Trips;
