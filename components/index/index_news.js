import {Fragment} from "react";
import Image from "next/image";
import useTranslation from "next-translate/useTranslation";


function IndexNews() {

    let {t} = useTranslation('news')

    let articles = t('articles', '', {returnObjects: true})
    console.log(articles[0].title)
    return (
        <Fragment>
            <div id="w5VVSF9YTSBD1C52" className="mwPageBlock Include">
                <div className="blockContents">
                    <div className="contentAreaWhite">
                        <div className="mainContentArea">
                            <div className="mwPageArea">
                                <div id="wRY57V9OQG9CFL4K" className="mwPageBlock Include">
                                    <div className="blockContents">
                                        <div className="newsTitle">
                                            <div className="newsTitleLeft">
                                                <div className="mwPageArea">
                                                    <div id="wLZBPPH7FYYRLZQH" className="mwPageBlock Content">
                                                        <div className="blockContents"><h4>
                                                            Latest News
                                                        </h4></div>
                                                    </div>
                                                    <div className="Clear"></div>
                                                </div>

                                            </div>
                                            <div className="newsTitleRight">
                                                <div className="mwPageArea">
                                                    <div id="wTZ33AGTRHLEDDUR" className="mwPageBlock Content">
                                                        <div className="blockContents"><p style={{textAlign: "center"}}>
                                                            <a href="/News">View All</a>
                                                        </p></div>
                                                    </div>
                                                    <div className="Clear"></div>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div id="wLP9J6RWTDA66C4A" className="mwPageBlock Spacer">
                                    <div className="blockContents">
                                        <div className="mwSpacer small hor"></div>
                                    </div>
                                </div>
                                <div id="wP7Y3RN28CPS5LUV" className="mwPageBlock BlogsPosts">
                                    <div className="blockContents">
                                        <div className="homeNews">

                                            <div className="homeNewsItem"
                                                 style={{background: "url('/images/psen_logo.png') center center no-repeat; background-size:auto"}}>
                                                <a href="/blog/Bellevue-Santa-Fe-Charter-School">
                                                    <div className="homeNewsImage"></div>
                                                    <p>{articles[0].title}</p>
                                                    <p className="small">{articles[0].date}</p>
                                                </a>
                                            </div>

                                            <div className="homeNewsItem"
                                                 style={{background: "url('') center center no-repeat; background-size:cover"}}>
                                                <a href="/blog/Lewis-Middle-School-Program">
                                                    <div className="homeNewsImage"></div>
                                                    <p>{articles[0].title}</p>
                                                    <p className="small">{articles[0].date}</p>
                                                </a></div>

                                            <div className="homeNewsItem"
                                                 style={{background: "url(/get/files/image/galleries/Hockey_Team-Volunteer_Photo.jpg?768x768) center center no-repeat; background-size:cover"}}>
                                                <a href="/blog/Fall-2022-Youth-Roller-Hockey-League">
                                                    <div className="homeNewsImage"></div>
                                                    <p>{articles[1].title}</p>
                                                    <p className="small">{articles[1].date}</p>
                                                </a></div>

                                            <div className="homeNewsItem"
                                                 style={{background: "url(/get/files/image/galleries/2016-03-15_AS_YMCA_0218-0002-0001.jpg?768x768) center center no-repeat; background-size:cover"}}>
                                                <a href="/blog/Branch-Elementary-Bright-Futures">
                                                    <div className="homeNewsImage"></div>
                                                    <p>{articles[2].title}</p>
                                                    <p className="small">{articles[2].date}</p>
                                                </a></div>


                                        </div>
                                        <div id="blogs_list_loader_20469" style={{display: "none"}}>
                                            <div align="center"><Image src="/images/preloader.gif"  alt="preloader"  layout="fill"/>
                                            </div>
                                        </div>
                                        <div className="Clear"></div>

                                    </div>
                                </div>
                                <div id="w0SNHCQJW8N52B15" className="mwPageBlock Spacer">
                                    <div className="blockContents">
                                        <div className="mwSpacer medium hor"></div>
                                    </div>
                                </div>
                                <div className="Clear"></div>
                            </div>
                        </div>
                    </div>
                    <div className="Clear"></div>
                </div>
            </div>
        </Fragment>
    )
}

export default IndexNews;