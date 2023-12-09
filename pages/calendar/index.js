// import {Calendar, dateFnsLocalizer} from "react-big-calendar";
// import {format, parse, startOfWeek, getDay} from "date-fns";
// import "react-big-calendar/lib/css/react-big-calendar.css";
// import {useEffect} from "react";
// import {Client} from "@notionhq/client";
import Image from 'next/image';
import CalendarImage from '../../public/calendarDecember.png';
// export async function getStaticProps() {

//     const notion = new Client({auth: process.env.NOTION_API_KEY})
//     const dbId = process.env.NOTION_DB_ID
//     const db = await notion.databases.query({database_id: dbId})
//     const results = db.results

//     return {
//         props: {
//             events: results
//         },
//         revalidate: 1800
//     }
// }

// const locales = {
//     "en-US": require("date-fns")
// };

// const localizer = dateFnsLocalizer({
//     format,
//     parse,
//     startOfWeek,
//     getDay,
//     locales
// });

// function eventStyleGetter(event, start, end, isSelected) {
//     // console.log(event);
//     var backgroundColor = event.hexColor;
//     var style = {
//         backgroundColor: backgroundColor,
//     }

//     return {
//         style: style
//     }
// }

// const onSelectEvent = ((event) => {
//     console.log(event)
//     let startDate = event.start.toLocaleDateString('en-US', {
//         day: 'numeric',
//         month: 'short',
//         year: 'numeric',
//         hour: 'numeric',
//         minute: 'numeric',
//         second: 'numeric'
//     });
//     let endDate = event.end.toLocaleDateString('en-US', {
//         day: 'numeric',
//         month: 'short',
//         year: 'numeric',
//         hour: 'numeric',
//         minute: 'numeric',
//         second: 'numeric'
//     });

//     var modal = document.getElementById("myModal");
//     var modal_header = document.getElementById("modal_header");
//     var modal_date = document.getElementById("modal_date");
//     var modal_desc = document.getElementById("modal_desc");
//     var modal_header_bg = document.getElementsByClassName("modal-header")[0];
//     var modal_footer_bg = document.getElementsByClassName("modal-footer")[0];
//     var modal_footer = document.getElementById("modal_footer");
//     modal_header.innerText = event.title
//     modal_footer.innerText = "Location - " + event.location
//     modal_header_bg.style.backgroundColor = event.hexColor
//     modal_footer_bg.style.backgroundColor = event.hexColor
//     modal.style.display = "block";

//     if (event.allDay === undefined) {
//         modal_date.innerHTML = "Start Date: " + startDate + "<br/>End Date: " + endDate
//     } else {
//         modal_date.innerText = "Start Date: " + startDate
//     }

//     modal_desc.innerHTML = event.description
// })

// function MyCalendar(props) {

//     let calendarEvents = []

//     useEffect(() => {

//         // Get the modal
//         var modal = document.getElementById("myModal");
//         // Get the button that opens the modal
//         var btn = document.getElementById("myBtn");

//         // Get the <span> element that closes the modal
//         var span = document.getElementsByClassName("close")[0];

//         // When the user clicks on <span> (x), close the modal
//         span.onclick = function () {
//             modal.style.display = "none";
//         }

//         // When the user clicks anywhere outside of the modal, close it
//         window.onclick = function (event) {
//             if (event.target === modal) {
//                 modal.style.display = "none";
//             }
//         }

//         props.events.map(event => {

//             var startDate = new Date(Date.parse(event.properties.Date.date.start))
//             var endDate = new Date(Date.parse(event.properties.Date.date.start))

//             // console.log(event.properties)
//             var location = ""
//             var description = ""
//             var tags = []
//             var hex = '#37352F'

//             if (event.properties.location.rich_text.length > 0) {
//                 location = event.properties.location.rich_text[0].plain_text
//             }

//             if (event.properties.Description.rich_text.length > 0) {
//                 description = event.properties.Description.rich_text[0].plain_text
//             }

//             if (event.properties.Tags.multi_select.length > 0) {
//                 tags = event.properties.Tags.multi_select
//                 if (event.properties.Tags.multi_select[0].color === 'red') {
//                     hex = '#E03E3E'
//                 }
//                 if (event.properties.Tags.multi_select[0].color === 'pink') {
//                     hex = '#AD1A72'
//                 }
//                 if (event.properties.Tags.multi_select[0].color === 'purple') {
//                     hex = '#6940A5'
//                 }
//                 if (event.properties.Tags.multi_select[0].color === 'blue') {
//                     hex = '#0B6E99'
//                 }
//                 if (event.properties.Tags.multi_select[0].color === 'green') {
//                     hex = '#0F7B6C'
//                 }
//                 if (event.properties.Tags.multi_select[0].color === 'yellow') {
//                     hex = '#DFAB01'
//                 }
//                 if (event.properties.Tags.multi_select[0].color === 'orange') {
//                     hex = '#D9730D'
//                 }
//                 if (event.properties.Tags.multi_select[0].color === 'brown') {
//                     hex = '#64473A'
//                 }
//                 if (event.properties.Tags.multi_select[0].color === 'gray') {
//                     hex = '#9B9A97'
//                 }
//             }

//             if (event.properties.Date.date.end === null) {
//                 calendarEvents.push({
//                     title: event.properties.Name.title[0].plain_text,
//                     start: startDate,
//                     hexColor: hex,
//                     end: new Date(endDate.setTime(endDate.getTime() + 60 * 60 * 1000)),
//                     allDay: true,
//                     location: location,
//                     description: description
//                 })
//             } else {
//                 calendarEvents.push({
//                     title: event.properties.Name.title[0].plain_text,
//                     start: startDate,
//                     hexColor: hex,
//                     end: new Date(Date.parse(event.properties.Date.date.end)),
//                     location: location,
//                     description: description
//                 })
//             }

//         })

//         // console.log(calendarEvents)

//         $(".sidebarLeft .sidebarMenu a").on('click', function (event) {

//             if (this.hash !== "") {
//                 event.preventDefault();

//                 var hash = this.hash;

//                 var topOffset = ($(hash).offset().top) - 150;

//                 $('html, body').animate({
//                     scrollTop: topOffset
//                 }, 500)
//             }
//         })

//     })
function MyCalendar(){
    return (

        <div className="container">
            <div className="mwPageArea">

                <div id="wSCKM1MFXRYVSVM5" className="mwPageBlock File">
                    <div className="blockContents">

                        <div className="bannerParallex calendar-breadcrumb">
                            <div className="bannerParallexShadow">
                                <div className="bannerParallexInner">
                                    <h1>Calendar of Events</h1>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                <div id="myModal" className="modal">

                    <div className="modal-content">
                        <div className="modal-header">
                            <span className="close">&times;</span>
                            <h3 id="modal_header">Modal Header</h3>
                        </div>
                        <div className="modal-body">
                            <h6 id="modal_date">
                            </h6>
                            <hr/>
                            <h6 id="modal_desc">

                            </h6>
                        </div>
                        <div className="modal-footer">
                            <h5 id="modal_footer">Modal Footer</h5>
                        </div>
                    </div>

                </div>

                <div className="mwPageBlock">
                    <div className="blockContents">
                        <div className="contentAreaWhite">
                            <div className="mainContentArea" id = "calendarDiv">
                                <Image 
                                    style={{
                                        borderRadius:"20px"                                        
                                     }}
                                    src= {CalendarImage}
                                    width={800}
                                    height={800}
                                    id="calendarImage"
                                />
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    );
}

export default MyCalendar