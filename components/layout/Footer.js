import Script from "next/script";
import MyLogo from '../../public/images/logo_white.png'
import Joze from '../../public/images/psen_logo.png'
import Image from "next/image";
import Link from "next/link";

function Footer() {

    return (<footer>
        <div className="footerWrap">
            <div className="footer">
                <div className="footerColumn">
                    <div className="footerCol">
                        <Image src={MyLogo} width={800} height={436.75} alt="logo"/>
                        <div id="wHE32NI961T334CC" className="mwPageBlock Content">
                            <div className="blockContents mwBtnCenter">
                                <p>
                                    <Link href='/contact' style={{marginTop: '50px'}}>Contact Us</Link>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="footerCol">
                        <div id="wXHZ502DDD688HW3" className="mwPageBlock Content">
                            <div className="blockContents">
                                <p>
                                    <strong>ESN Primorska</strong> <br/> <br/>
                                    Trg Brolo 12<br/>
                                    6000 Koper
                                    Slovenia
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="footerCol">
                        <div id="wDOFLVMTQH834X9J" className="mwPageBlock Content">
                            <div className="blockContents">
                                <ul>
                                    <li>
                                        <Link href='/about'><a>About</a></Link>
                                    </li>
                                    <li>
                                        <Link href='/exchange_student'><a>Exchange Student</a></Link>
                                    </li>
                                    <li>
                                        <Link href='/exchange_preparation'><a>Local Student</a></Link>
                                    </li>
                                    <li>
                                        <Link href='/buddysystem'><a>Buddy System</a></Link>
                                    </li>
                                    <li>
                                        <Link href='/events'><a>Activities</a></Link>
                                    </li>
                                    <li>
                                        <Link href='/contact'><a>Contact Us</a></Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="footerCol">
                        <div id="wXHZ502DDD688HW3" className="mwPageBlock Content">
                            <div className="blockContents">
                                <ul>
                                    <li>
                                        <Link href='https://www.esn.org/'><a>ESN International</a></Link>
                                    </li>
                                    <li>
                                        <Link href='https://esn-slovenia.org/'><a>ESN Slovenia</a></Link>
                                    </li>
                                    <li>
                                        <Link href='https://www.esncard.org/'><a>ESNcard.org</a></Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="copyrightWrap">
            <div className="copyright">
                <div className="twoColumn">
                    <div className="twoColLeft">
                        <div id="wY6QXAEZD48R5UZ7" className="mwPageBlock Content">
                            <div className="blockContents"><p style={{'textAlign': 'left'}}>
                            </p></div>
                        </div>
                    </div>
                    <div className="twoColRight">
                        <div id="wXPEEGZLKYPL34M2" className="mwPageBlock Content">
                            <div className="blockContents"><p style={{'textAlign': 'right'}}>
                                © 2023 ESN Primorska. All rights reserved.
                            </p></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Script src="/js/owl.carousel2.js" strategy="beforeInteractive"/>
        <Script src="/js/jquery.magnific-popup.js"/>
        <Script src="/js/sidr.js"/>
        <Script src="/js/wow.min.js"/>
        <Script src="/js/scripts.js" strategy="lazyOnload"/>
    </footer>);
}

export default Footer;