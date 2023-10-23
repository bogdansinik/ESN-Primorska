import Image from "next/image";
import MyLogo from '../../public/images/home/web-star-colour.png'
import Link from "next/link";
// import {useRouter} from "next/router";
import useTranslation from "next-translate/useTranslation";

function MainNavigation(props) {

    let {t} = useTranslation()
    // let router = useRouter()


    return (
        <div className="headerWrap">
            <div className="header">
                <div className="logo"><Link href="/"><a className="d-inline-block"><Image src={MyLogo} alt="logo"/></a></Link>
                </div>
                <div className="headerRight">
                    <div className="headerRightTop j-r">

                        {/*                        <div className={"tutorial"}>
                            <ul>
                                <li>
                                    <i className={router.locale === 'en-US' ? "mr-5 fis fi fi-gb" : "mr-5 fis fi fi-" + router.locale}/>
                                    <i className="fa fa-angle-down"/>
                                    <ul>
                                        {router.locales.map((locale) => {
                                            let add = ''
                                            if (locale === 'en-US') {
                                                add = 'gb'
                                            } else {
                                                add = locale
                                            }
                                            let cl = "fis fi fi-" + add;
                                            if (router.locale !== locale) return (
                                                <Link key={locale} href={router.asPath} locale={locale}>
                                                    <a className="d-block">
                                                        <li>
                                                            <i className={cl}/>
                                                        </li>
                                                    </a>
                                                </Link>
                                            )
                                        })}
                                    </ul>
                                </li>
                            </ul>
                        </div>*/}

                        <div className="sML">
                            <a href="https://www.facebook.com/primorska.exchange/" target="_blank" rel="noreferrer">
                                <span className="fab fa-facebook"/>
                            </a>
                            &nbsp;
                            <a href="https://www.instagram.com/esnprimorska/" target="_blank" rel="noreferrer">
                                <span className="fab fa-instagram"/>
                            </a>
                            &nbsp;
                            <a href="https://www.linkedin.com/company/primorska-student-exchange-network/"
                               target="_blank" rel="noreferrer">
                                <span className="fa-brands fa-linkedin"/>
                            </a>
                            &nbsp;
                            <a href="https://www.linktr.ee/primorska_exchange" target="_blank" rel="noreferrer">
                                <span className="fas fa-link"/>
                            </a>
                        </div>

                    </div>

                    <div className="headerRightBottom">
                        <div className="menuWrap">
                            <div className="mainMenu">
                                <div id="wAJBL5FC1NFGFB20" className="mwPageBlock Menu">
                                    <div className="blockContents">
                                        <ul id="mwfsFOfFw">

                                            <li className="has-children">
                                                <Link href={t("common:menu_about_url")}><a><span
                                                    className="Title">{t("common:menu_about")}</span></a></Link>
                                                <ul>
                                                    <li className="no-children"><a><span className="Title">
                                                        <div className="navIcon2"/></span></a></li>
                                                    <li className="no-children">
                                                        <Link href='/about'><a><span
                                                            className="Title">About Us</span></a></Link>
                                                    </li>
                                                    <li className="no-children">
                                                        <Link href='/aboutesn'><a><span
                                                            className="Title">About the ESN</span></a></Link>
                                                    </li>
                                                    <li className="no-children">
                                                        <Link href='/aboutUp'><a><span
                                                            className="Title">About the University</span></a></Link>
                                                    </li>
                                                    <li className="no-children">
                                                        <Link href='/aboutprimorska'><a><span
                                                            className="Title">About Region</span></a></Link>
                                                    </li>

                                                </ul>
                                            </li>
                                            <li className="has-children">
                                                <Link href={t("common:menu_exchange_student_url")}><a><span
                                                    className="Title">{t("common:menu_exchange_student")}</span></a></Link>
                                                <ul>
                                                    <li className="no-children"><a><span className="Title"><div
                                                        className="navIcon2"></div></span></a></li>
                                                    <li className="no-children">
                                                        <Link href='/before_arrival'><a><span
                                                            className="Title">Before arrival</span></a></Link>
                                                    </li>
                                                    <li className="no-children">
                                                        <Link href='/mobility'><a><span
                                                            className="Title">During mobility</span></a></Link>
                                                    </li>
                                                    {/* <li className="no-children">
                                                        <Link href='/faq'><a><span
                                                            className="Title">FAQ</span></a></Link>
                                                    </li> */}

                                                </ul>
                                            </li>
                                            <li className="has-children">
                                                <Link href={t("common:menu_local_student_url")}><a><span
                                                    className="Title">{t("common:menu_local_student")}</span></a></Link>

                                                <ul>
                                                    <li className="no-children"><a><span className="Title"><div
                                                        className="navIcon2"></div></span></a></li>
                                                    <li className="no-children">
                                                        <Link href='/exchange_preparation'><a><span
                                                            className="Title">Exchange preparation</span></a></Link>
                                                    </li>
                                                    <li className="no-children">
                                                        <Link href='/from_exchange'><a><span
                                                            className="Title">Back from exchange</span></a></Link>
                                                    </li>

                                                </ul>
                                            </li>
                                            
                                            {/*ESN CARD SECTION ON THE NAVBAR*/}
                                            
                                            {/*<li>*/}
                                            {/*    <Link href={t("common:menu_esncard_url")}><a><span*/}
                                            {/*        className="Title">{t("common:menu_esncard")}</span></a></Link>*/}
                                            {/*    <ul>*/}
                                            {/*        <li className="no-children"><a><span className="Title"><div*/}
                                            {/*            className="navIcon2"></div></span></a></li>*/}
                                            {/*        <li className="no-children">*/}
                                            {/*            <Link href='/partners'><a><span*/}
                                            {/*                className="Title">Partners</span></a></Link>*/}
                                            {/*        </li>*/}
                                            {/*    </ul>*/}
                                            
                                            {/*</li>*/}

                                            {/*ESN CARD SECTION ON THE NAVBAR*/}
                                            
                                            <li className="has-children">
                                                <Link href={t("common:menu_buddy_system_url")}><a><span
                                                    className="Title">{t("common:menu_buddy_system")}</span></a></Link>
                                                <ul>
                                                    <li className="no-children"><a><span className="Title"><div
                                                        className="navIcon2"></div></span></a></li>
                                                    <li className="no-children">
                                                        <Link href='/buddysystem'><a><span
                                                            className="Title">About</span></a></Link>
                                                    </li>
                                                    <li className="no-children">
                                                        <Link href='/getabuddy'><a><span
                                                            className="Title">Get a Buddy</span></a></Link>
                                                    </li>
                                                    <li className="no-children">
                                                        <Link href='/becomeabuddy'><a><span
                                                            className="Title">Become a Buddy</span></a></Link>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li className="has-children">
                                                <Link href={t("common:menu_activities_url")}><a><span
                                                    className="Title">{t("common:menu_activities")}</span></a></Link>
                                                <ul>
                                                    <li className="no-children"><a><span className="Title"><div
                                                        className="navIcon2"></div></span></a></li>
                                                    <li className="no-children">
                                                        <Link href='/news'><a><span
                                                            className="Title">News</span></a></Link>
                                                    </li>
                                                    <li className="no-children">
                                                        <Link href='/events'><a><span
                                                            className="Title">Events</span></a></Link>
                                                    </li>
                                                    <li className="no-children">
                                                        <Link href='/trips'><a><span
                                                            className="Title">Trips</span></a></Link>
                                                    </li>
                                                    <li className="no-children">
                                                        <Link href='/calendar'><a><span
                                                            className="Title">Calendar</span></a></Link>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li className="no-children">
                                                <Link href='/contact'><a><span
                                                    className="Title">Contact Us</span></a></Link>
                                                <ul>
                                                    <li className="no-children"><a><span className="Title"><div
                                                        className="navIcon2"></div></span></a></li>
                                                    <li className="no-children">
                                                        <Link href='/faq'><a><span
                                                            className="Title">FAQ</span></a></Link>
                                                    </li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/*  <div className="donateButton">
                            <div id="wZGDFDOA350OM3L0" className="mwPageBlock Content">
                                <div className="blockContents">
                                    <p>
                                    <span
                                    className="Title">Events <a href='/contact'>Contact us</a></span>
                                    </p>
                                </div>
                            </div>
                        </div> */}
                    </div>
                </div>
                <div id="mobile-header">
                    <a id="responsive-menu-button" href="#">
                        <div id="navIcon"><span></span> <span></span> <span></span> <span></span> <span></span>
                            <span></span> <span></span></div>
                    </a>
                </div>
            </div>
        </div>

    );
}

export default MainNavigation;
