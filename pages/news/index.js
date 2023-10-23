import {useEffect} from "react";
import useTranslation from "next-translate/useTranslation";
import Image from "next/image";

function News(props) {

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

    let {t} = useTranslation('news')

    let articles = t('articles', '', {returnObjects: true})

    let indents = [];
    for (let i = 0; i < articles.length; i++) {
        indents.push(articles[i]);
    }

    return (
        <div>
            <div id="wSCKM1MFXRYVSVM5" className="mwPageBlock File">
                <div className="blockContents">

                    <div className="bannerParallex getBuddy-breadcrumb">
                        <div className="bannerParallexShadow">
                            <div className="bannerParallexInner">
                                <h1>News</h1>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <div className="mwPageBlock">
                <div className="blockContents">
                    <div className="contentAreaWhite">
                        <div className="mainContentArea">
                            <div className="sidebar">
                                <div className="sidebarRight">
                                    <div className="mwPageArea">
                                        <div id="wNN4M6KHSM6GT37S" className="mwPageBlock Content">
                                            <div className="blockContents">
                                                <h1>
                                                    News
                                                </h1>
                                            </div>
                                        </div>
                                        <div id="wRZF8YP1WH0EMD9E" className="mwPageBlock Spacer">
                                            <div className="blockContents">
                                                <div className="mwSpacer small hor">
                                                    <div className="mwDivider hor middle"
                                                         style={{width: '100%', left: '0%'}}></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div id="wGLJT8GBHOKSXSTN" className="mwPageBlock BlogsPosts">
                                            <div className="blockContents">
                                                <div className="programsList">

                                                    {
                                                        indents.map((item) =>
                                                            // eslint-disable-next-line react/jsx-key
                                                            (<div>
                                                                <h3><a
                                                                    href="/Program-Details/Los-Ranchos-Winter-Vacation-Camp">{item.title}</a>
                                                                </h3>
                                                                <p>{item.content.split(/\s+/).slice(0, 90).join(" ") + ".."}</p>

                                                                <div className="button">
                                                                    <p>
                                                                        <a className="medium"
                                                                           href={'/news/' + item.slug}>More Info</a>
                                                                    </p>
                                                                </div>
                                                                <hr/>
                                                            </div>)
                                                        )
                                                    }

                                                    <div style={{clear: 'both'}}></div>
                                                    <div className="blogs_posts_list_ajax_position"
                                                         id="blogs_posts_list_ajax_position_12169"
                                                         style={{display: 'none'}}></div>
                                                </div>
                                                <div id="blogs_list_loader_12169" style={{display: 'none'}}>
                                                    <div align="center"><Image alt="Preloader" src="/images/preloader.gif"  layout="fill"/></div>
                                                </div>

                                                <div className="Clear"></div>

                                            </div>
                                        </div>
                                        <div className="Clear"></div>
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

export default News;
