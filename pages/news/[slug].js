import { useRouter } from 'next/router'
import useTranslation from "next-translate/useTranslation";
import Image from "next/image";

function NewsItem() {

    let {t} = useTranslation('news')

    let articles = t('articles', '', {returnObjects: true})

    let indents = [];
    for (let i = 0; i < articles.length; i++) {
        indents.push(articles[i]);
    }

    const router = useRouter()
    const { slug } = router.query

    const article = indents.filter(function (indent){
        return indent.slug === slug
    })[0]


    return (
        <div>

            <div id="wSCKM1MFXRYVSVM5" className="mwPageBlock File">
                <div className="blockContents">

                    <div className="bannerParallex getBuddy-breadcrumb">
                        <div className="bannerParallexShadow">
                            <div className="bannerParallexInner">
                                <h1>{article.title}</h1>
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
                                            <div className="blockContents"><h1>
                                                {article.title}
                                            </h1></div>
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

                                                    <div>
                                                        <h3>
                                                            <a href="/Program-Details/Los-Ranchos-Winter-Vacation-Camp">{article.date}</a>
                                                        </h3>
                                                        <p>{article.content}</p>

                                                        <hr/>
                                                    </div>

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

export default NewsItem;