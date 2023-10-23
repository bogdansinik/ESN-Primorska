import {useEffect} from "react";
import { useState } from 'react'


function Contact() {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const [submitted, setSubmitted] = useState(false)

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

    const handleSubmit = async (event) => {

        event.preventDefault()

        // TODO: Client-side validation

        console.log('Sending')

        const data = {
            name: name,
            email: email,
            message: message
        }

        // console.log(data)

        const JSONdata = JSON.stringify(data)

        const endpoint = '/api/contact'

        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSONdata,
        }

        const response = await fetch(endpoint, options)

        const result = await response.json()
        console.log(result.data, result.error, result.message)
        // alert(`Is this your full name: ${result.data}`)
    }

    return (
        <div className="mwPageArea">

            <div id="wSCKM1MFXRYVSVM5" className="mwPageBlock File">
                <div className="blockContents">

                    <div className="bannerParallex contact-breadcrumb">
                        <div className="bannerParallexShadow">
                            <div className="bannerParallexInner">
                                <h1>Contact Us</h1>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <div className="mwPageBlock">
                <div className="blockContents">
                    <div className="contentAreaWhite">
                        <div className="mainContentArea">
                            <div className="sidebar left">

                                <div className="sidebarLeft">
                                    <div className="sidebarMenu">
                                        <div className="mwPageArea">
                                            <div id="wG7TC3YCLOPHAEHN" className="mwPageBlock Content">
                                                <div className="blockContents"><h5>
                                                    Quick Links
                                                </h5></div>
                                            </div>
                                            <div id="wM9AJIW6Z58MXKM2" className="mwPageBlock Menu">
                                                <div className="blockContents">
                                                    <ul id="mtBgfgvYI">
                                                        <li className="no-face no-children"><a className="arrow"></a>
                                                        </li>
                                                        <li className="no-children"><a href="#location"><span
                                                            className="Title">Location</span></a><a
                                                            className="arrow"></a>
                                                        </li>

                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="Clear"></div>
                                        </div>
                                    </div>
                                </div>

                                <div className="sidebarRight">
                                    <div className="mwPageArea">

                                        <div id="w6IRX4FVIMV3ZFKC" className="mwPageBlock Content">
                                            <div id="location" className="blockContents">
                                                <h2>WHERE ARE WE?</h2>
                                            </div>
                                        </div>

                                        <div id="wYZ4EU4HMY790NHA" className="mwPageBlock Content">
                                            <div className="blockContents">

                                                <h3>Building of Rector office </h3>

                                                <h3>ADDRESS: Trg Brolo 12, 6000 Koper </h3>

                                            </div>
                                        </div>

                                        <iframe
                                            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11176.47002016851!2d13.7295516!3d45.5479617!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xcef86a13c03d84d4!2sESN%20Primorska!5e0!3m2!1sen!2ssi!4v1675096574131!5m2!1sen!2ssi"
                                            width="100%"
                                            height= "500"
                                            style={{border: "0.5"}}
                                            allowFullScreen=""
                                            loading="lazy"
                                            referrerPolicy="no-referrer-when-downgrade"
                                        >

                                        </iframe>

                                        <div id="wYZ4EU4HMY790NHA" className="mwPageBlock Content">
                                            <div className="blockContents mt-2">

                                                <h2>Contact Us </h2>
                                                <div className="container-form">
                                                    <div className="container-text">
                                                        <form>
                                                            <div className="form-group">
                                                                <label htmlFor="exampleInputEmail1">Name</label>
                                                                <input type="text" required className="form-control"
                                                                       id="name" name='name' onChange={(e)=>setName(e.target.value)}/>
                                                            </div>
                                                            <div className="form-group">
                                                                <label htmlFor="email">Email
                                                                    address</label>
                                                                <input type="email" required name='email' onChange={(e)=>setEmail(e.target.value)} className="form-control"
                                                                       id="email"
                                                                       placeholder="Enter email"/>
                                                                <small id="emailHelp" className="form-text text-muted">We'll
                                                                    never
                                                                    share your email with anyone else.</small>
                                                            </div>
                                                            <div className="form-group mt-1">
                                                                <label htmlFor='message'>Message</label>
                                                                <textarea rows={4} required onChange={(e)=>setMessage(e.target.value)} name='message' id="message"/>
                                                            </div>
                                                            <button type="submit" onClick={(e)=>{handleSubmit(e)}} className="btn btn-primary">Submit
                                                            </button>
                                                        </form>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>

                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div id="w61SIUM0GZH1LJDK" className="mwPageBlock Include">
                <div className="blockContents">
                    <div className="callToActionWrap five">
                        <div className="callToActionInner">
                            <div className="callToAction">
                                <div id="wTC3BURAUU4CLGUZ" className="mwPageBlock Content">
                                    <div className="blockContents">
                                        <p style={{textAlign: "center", backgroundColor: "rgba(0,0,0,0.5)"}}>
                                            "The main hope of a nation lies in the proper education of its youth" <br/> -Desiderius Erasmus Roterodamus
                                        </p>
                                    </div>
                                </div>
                                {/*<div className="ctaButton">*/}
                                {/*    <div id="wYQM0ZJV778WUH50" className="mwPageBlock Button">*/}
                                {/*        <div className="blockContents">*/}
                                {/*            <div className="mwBtnCenter">*/}
                                {/*                <div className="button">*/}
                                {/*                    <p><a href="" className="medium"*/}
                                {/*                          style={{background: "{color_1}"}}>Get Started</a></p>*/}
                                {/*                </div>*/}
                                {/*            </div>*/}
                                {/*        </div>*/}
                                {/*    </div>*/}
                                {/*</div>*/}
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default Contact;

