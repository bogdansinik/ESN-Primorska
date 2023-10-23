import '../styles/common.css'
import '../styles/front.css'
import '../styles/spacer.css'
import '../styles/button.css'
import '../styles/reset.css'
import '../styles/all.css'
import '../styles/sidr.css'
import '../styles/owl_carousel.css'
import '../styles/last_css.css'
import '../styles/flag-icons.min.css'
import '../styles/style_custom.css'
import '../styles/team.css'
import '../styles/exchange.css'
import '../styles/popup.css'


import Head from "next/head";
import Layout from "../components/layout/Layout";
import Footer from "../components/layout/Footer";
import {Fragment} from "react";
import Script from "next/script";
import ScrollToTop from "react-scroll-to-top";

function MyApp({Component, pageProps}) {
    return (
        <Fragment>
            <Head>
                <title>ESN Primorska</title>
                <meta charSet='utf-8'/>
                <meta name="keywords" content="psen,primorska,student exchange,program"/>
                <meta name="description" content="Primorka student exchange network PSEN, University of Primorska UPR"/>
                <meta name='viewport' content='initial-scale=1.0, width=device-width'/>
                <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta2/css/all.min.css"
                      rel="stylesheet" type="text/css"/>
            </Head>
            <Script src="/js/jquery.js" strategy="beforeInteractive"/>
            <Layout><Component {...pageProps} /></Layout>
            <ScrollToTop smooth />
            <Footer/>
        </Fragment>
    );
}

export default MyApp