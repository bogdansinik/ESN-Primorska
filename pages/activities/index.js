import Link from "next/link"
import {useEffect} from "react";

import Image from "next/image";
import image1 from "../../public/images/exchange1.jpg";
import image2 from "../../public/images/test2.jpg";

function ExchangeStudent() {


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

            <div style={{width:"80%", marginLeft:"10%", marginTop:"5%", marginBottom:"5%"}}>
                <div id="carousel_a9b5">
                    <div className="slide">
                        <Image className="resize" src={image2}alt="Before arrival"/>
                        <div className="slide-content">
                            <div className="button">
                                <p><Link href="/before_arrival"><a>Before arrival</a></Link></p>
                            </div>
                        </div>
                    </div>

                    <div className="slide">
                        <Image className="resize" src={image1} alt="During mobility"/>
                        <div className="slide-content">
                            <div className="button">
                                <p><Link href="/mobility"><a>During mobility</a></Link></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )

}

export default ExchangeStudent;
