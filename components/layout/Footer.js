import Script from "next/script";
import MyLogo from '../../public/images/logo_white.png'
import Joze from '../../public/images/psen_logo.png'
import Image from "next/image";
import Link from "next/link";

function Footer() {

    return (
        <footer>
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
                                        <strong>Address:</strong>
                                        <br/>
                                        Trg Brolo 12<br/>
                                        6000 Koper
                                        Slovenia
                                    </p>
                                    {/*<p>*/}
                                    {/*    <strong>P: (805) 543-8235</strong>*/}

                                    {/*    <strong>F: (805) 543-6202</strong>*/}
                                    {/*</p>*/}
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
                                            <Link href='/activities'><a>Activities</a></Link>
                                        </li>
                                        <li>
                                            <Link href='/contact'><a>Contact Us</a></Link>
                                        </li>
                                        {/*<li>*/}
                                        {/*    <a href="https://ops1.operations.daxko.com/online/3040/Security/login.mvc/find_account">Account*/}
                                        {/*        Login</a>*/}
                                        {/*</li>*/}
                                    </ul>
                                </div>
                            </div>
                        </div>
                        {/*<div className="footerCol">*/}
                        {/*    <Image src={Joze} alt="joze"/>*/}
                        {/*</div>*/}
                        {/*<div className="footerCol">*/}
                        {/*    <div id="wIHN7QR47OI3M6EK" className="mwPageBlock Contact">*/}
                        {/*        <div className="blockContents">*/}
                        {/*            <form id="FHCOEZN7Y0AORXDE" action="/send-data-here" method="post">*/}
                        
                        
                        {/*                <div className="Caption">*/}
                        {/*                    <h5>*/}
                        {/*                        Newsletter Sign-up*/}
                        {/*                    </h5>*/}
                        {/*                </div>*/}
                        
                        
                        {/*                <div className="text name-name">*/}
                        {/*                    <input placeholder="First name:" className="inputStyle" type="text"*/}
                        {/*                           id="name" name="name"/>*/}
                        {/*                </div>*/}
                        
                        
                        {/*                <div className="text email-email">*/}
                        {/*                    <input placeholder="Email:" className="inputStyle" type="text" id="email"*/}
                        {/*                           name="email"/>*/}
                        {/*                </div>*/}
                        {/*                <br/>*/}
                        {/*                <div className="row nopadd">*/}
                        
                        {/*                    <a href="https://www.facebook.com/primorska.exchange/" target="_blank" rel="noreferrer">*/}
                        {/*                        <span className="fab fa-facebook"/>*/}
                        {/*                    </a>*/}
                        {/*                    &nbsp;*/}
                        {/*                    <a href="https://www.instagram.com/esnprimorska/" target="_blank"*/}
                        {/*                       rel="noreferrer">*/}
                        {/*                        <span className="fab fa-instagram"/>*/}
                        {/*                    </a>*/}
                        {/*                    &nbsp;*/}
                        {/*                    <a href="https://www.linkedin.com/company/primorska-student-exchange-network/"*/}
                        {/*                       target="_blank" rel="noreferrer">*/}
                        {/*                        <span className="fab fa-linkedin"/>*/}
                        {/*                    </a>*/}
                        {/*                    &nbsp;*/}
                        {/*                    <a href="https://www.linktr.ee/primorska_exchange" target="_blank"*/}
                        {/*                       rel="noreferrer">*/}
                        {/*                        <span className="fas fa-link"/>*/}
                        {/*                    </a>*/}
                        {/*                </div>*/}
                        {/*                <br/>*/}
                        {/*                <div className="row nopadd">*/}
                        {/*                    <button className="buttonStyle" type="submit">Submit</button>*/}
                        {/*                </div>*/}
                        
                        
                        {/*                <div className="Clear"></div>*/}
                        {/*            </form>*/}
                        {/*        </div>*/}
                        {/*    </div>*/}
                        
                        {/*</div>*/}
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