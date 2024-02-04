import {Fragment} from "react";
import Link from "next/link";

function Services() {
    return (
        <Fragment>
            <div id="w1HKZBH4C6WHC3EM" className="mwPageBlock Include">
                <div className="blockContents">
                    <div className="homeTBWrap">
                        <div className="homeTB">
                            <Link href="/activities" passHref><div className="homeTBCol a"><a>
                                <h4>Activities</h4>
                            </a></div></Link>
                            <Link href="/buddysystem" passHref><div className="homeTBCol b"><a>
                                <h4>Buddy System</h4>
                            </a></div></Link>
                            <Link href="/esncard" passHref><div className="homeTBCol c"><a>
                                <h4> ESNcard{"\n"}
                                     & partners</h4>
                            </a></div></Link>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Services;