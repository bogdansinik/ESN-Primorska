import Head from "next/head";
import Script from "next/script";
import {Fragment} from "react";
import Footer from "../components/layout/Footer";

export default function Custom404() {
    return (
        <Fragment>

            <Head>
                <title>PSEN</title>
                <meta charSet='utf-8'/>
                <meta name="keywords" content="psen,primorska,student exchange,program"/>
                <meta name="description" content="Primorka student exchange network PSEN, University of Primorska UPR"/>
                <meta name='viewport' content='initial-scale=1.0, width=device-width'/>
                <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta2/css/all.min.css"
                      rel="stylesheet" type="text/css"/>
            </Head>

            <div className="mwPageArea">

                <div className="mwPageBlock">
                    <div className="blockContents">
                        <div className="contentAreaWhite">
                            <div className="mainContentArea">
                                <div className="sidebarRight">
                                    <div className="mwPageArea">

                                        <div id="w6IRX4FVIMV3ZFKC" className="mwPageBlock Content">
                                            <div id="about" className="blockContents text-center m-bt-100">
                                                <h2>404 | This page is not found</h2>
                                            </div>
                                        </div>


                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </Fragment>
    )
}