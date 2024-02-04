import {Fragment} from "react";
import Link from "next/link";

function IndexTwoColumns() {
    return (
        <Fragment>
            <div id="wRNKBJ1YXVXRN4YC" className="mwPageBlock Include">
                <div className="blockContents">
                    <div className="twoCol row nopadd">
                        <div className="twoColLeft col-md-6">
                            <div className="mwPageArea">
                                <div id="w16LRFUGYBRY38RR" className="mwPageBlock Include">
                                    <div className="blockContents">
                                        <div className="homeVolunteerWrap">
                                            <div className="homeVolunteer">
                                                <div className="mwPageArea">
                                                    <div id="w2MWMOSHEYGXTFJO" className="mwPageBlock Content">
                                                        <div className="blockContents"><h2>
                                                            Exchange Student
                                                        </h2></div>
                                                    </div>
                                                    <div id="wEXZ0M7DUOG4V5R1" className="mwPageBlock Button">
                                                        <div className="blockContents">
                                                            <div className="mwBtnLeft">
                                                                <div className="button whiteborder">
                                                                    <p><Link href="/exchange_student"><a className="medium">Learn More</a></Link></p>
                                                                    {/*<p><a href="/exchange_student" className="medium">Learn More</a></p>*/}
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="Clear"></div>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="Clear"></div>
                            </div>
                        </div>
                        <div className="twoColRight col-md-6">
                            <div className="mwPageArea">
                                <div id="wWX14HVA931TK80T" className="mwPageBlock Include">
                                    <div className="blockContents">
                                        <div className="homeEmploymentWrap">
                                            <div className="homeEmployment">
                                                <div className="mwPageArea">
                                                    <div id="wD9K09KWBI54FAOP" className="mwPageBlock Content">
                                                        <div className="blockContents"><h2>
                                                            Local Student
                                                        </h2></div>
                                                    </div>
                                                    <div id="wYDXH5YCGMOE5WZ8" className="mwPageBlock Button">
                                                        <div className="blockContents">
                                                            <div className="mwBtnLeft">
                                                                <div className="button whiteborder">
                                                                    <p><a href="/exchange_preparation" className="medium">Learn More</a></p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="Clear"></div>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="Clear"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default IndexTwoColumns;
