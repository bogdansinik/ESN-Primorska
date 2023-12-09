import Image from "next/image";
import image2 from "../../public/images/test2.jpg";
import Link from "next/link";
import image1 from "../../public/images/exchange1.jpg";
import {useEffect} from "react";
import styles from './exchange.module.css'

function Exchange_student() {

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
            <div className="mwPageArea">

                <div className="mwPageBlock">
                    <div className="blockContents mt-7">

                       

                        <div style={{width: "80%", marginLeft: "10%", marginTop: "5%", marginBottom: "5%"}}>
                            <div id="carousel_a9b5">
                                <div className="slide">
                                    <Image className="resize" src={image2} 
                                    style={{
                                        borderRadius:"20px"                       
                                     }}
                                    alt="Before arrival"  layout="fill"/>
                                    <div className="slide-content">
                                        <div className="button">
                                            <p><Link href="/before_arrival"><a>Before arrival</a></Link></p>
                                        </div>
                                    </div>
                                </div>

                                <div className="slide">
                                    <Image className="resize" src={image1} alt="During mobility"  layout="fill" style={{
                                        borderRadius:"20px"                                        
                                     }} />
                                    <div className="slide-content">
                                        <div className="button">
                                            <p><Link href="/mobility"><a>During mobility</a></Link></p>
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

export default Exchange_student