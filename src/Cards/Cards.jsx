/* eslint-disable react/prop-types */
import "./Cards.css";
import member from "../../data/Members.json";
import dummyImage from "/president.png";
import { useState, useEffect } from "react";
import { lenis } from "../Lenis/Lenis.js";

let cardHtml = member.map((mv) => {

    return (
        <div key={mv.attr} className="tablet" id={mv.attr}>
            <img src={dummyImage} alt="" />
            <div className="tabletContent">
                {mv.val}
                <div className="post">{mv.post}</div>
            </div>
        </div>
    );
});


function Cards(props) {
    const [fullScreenImageStyle, setFullScreenImageStyle] = useState({
        position: "absolute",
        top: "50vh",
        padding: 0,
        right: "12vw",
        height: "fit-content",
        width: "fit-content",
    })
    const [MembersOpen, setMembersOpen] = useState("shorter");
    const [MembersCardState, setMembersCardState] = useState("Show More");

    if (props.id == "circleButtons") {
        return (
            <div className="glassCards glass parallaxEl" id={props.id}>
                <div className="cardTitle">{props.title}</div>
                <div className="cardContent">
                    <a
                        onMouseDown={(e) => {
                            e.preventDefault();
                            lenis.scrollTo("#aboutUs");
                        }}
                    >
                        <button className="activated">{props.button1}</button>
                    </a>
                    <a
                        onMouseDown={(e) => {
                            e.preventDefault();
                            lenis.scrollTo("#contactUs");
                        }}
                    >
                        <button className="deactivated">{props.button2}</button>
                    </a>
                </div>
            </div>
        );
    } else if (props.id == "image") {
        return (
            <div
                style={fullScreenImageStyle}
                className="glassCards"
                id={props.id}
                onClick={
                    () => {
                        if (fullScreenImageStyle.position == "absolute") {
                            setFullScreenImageStyle({
                                height: "100vh",
                                width: "100vw",
                                position: "fixed",
                                top: 0,
                                right: 0,
                            })
                        } else {
                            setFullScreenImageStyle({
                                position: "absolute",
                                top: "50vh",
                                padding: 0,
                                right: "12vw",
                                height: "fit-content",
                                width: "fit-content",
                            })
                        }
                    }
                }
            >
                <img src={props.src} />
            </div>
        );
    } else if (props.id == "MembersCard") {
        return (
            <div
                className={ "glassCards glass parallaxEl " + MembersOpen }
                id="MembersCard"
            >
                <div className="cardTitle">
                    Our
                    <br />
                    Members
                </div>
                <div className={"membersList"}>{cardHtml}</div>
                <div
                    className="tablet showMore"
                    onClick={() => {
                        if (MembersOpen == "shorter") {
                            setMembersOpen("larger");
                            setMembersCardState("Show Less");
                        } else {
                            setMembersOpen("shorter");
                            setMembersCardState("Show More");
                        }
                    }}
                >
                    {MembersCardState}
                </div>
            </div>
        );
    } else if (props.id == "ImgDetailCard") {
        return (
            <div
                className={
                    "glassCards glass parallaxEl " +
                        (props.extraClass ? props.extraClass : "")
                }
                id={props.id}
            >
                {Object.prototype.hasOwnProperty.call(props, "titleImage") ? (
                    <img src={props.titleImage} alt="" />
                ) : null}
                {Object.prototype.hasOwnProperty.call(props, "title") ? (
                    <div className="cardTitle">{props.title}</div>
                ) : null}
                <div className="idcContent">
                    <div className="cardActions">
                        {Object.prototype.hasOwnProperty.call(props, "button1") ? (
                            <a href={props.link1}>
                                <button className="activated">{props.button1}</button>
                            </a>
                        ) : null}
                        {Object.prototype.hasOwnProperty.call(props, "button2") ? (
                            <a href={props.link2}>
                                <button className="deactivated">{props.button2}</button>
                            </a>
                        ) : null}
                    </div>
                    <div className="cardContent">{props.description}</div>
                </div>
            </div>
        );
    } else if (props.id == "DetailCard") {
        return (
            <div
                className={
                    "glassCards glass parallaxEl " +
                        (props.extraClass ? props.extraClass : "")
                }
                id={props.id}
            >
                <div className="cardData">
                    {Object.prototype.hasOwnProperty.call(props, "title") ? (
                        <div className="cardTitle">{props.title}</div>
                    ) : null}
                    <div className="cardContent">{props.description}</div>
                </div>
                <hr />
                <div className="cardActions">
                    {Object.prototype.hasOwnProperty.call(props, "button1") ? (
                        <a href={props.link1}>
                            <button className="activated">{props.button1}</button>
                        </a>
                    ) : null}
                    {Object.prototype.hasOwnProperty.call(props, "button2") ? (
                        <a href={props.link2}>
                            <button className="deactivated">{props.button2}</button>
                        </a>
                    ) : null}
                </div>
            </div>
        );
    } else if (props.id == "notice") {
        let noticeStyle = (!(props.buttonDiscord && props.buttonForm))
            ? null
            : "exists";

        return (
            <div className={`glassCards glass parallaxEl ${noticeStyle}`} id={props.id}>
                {Object.prototype.hasOwnProperty.call(props, "title") ? (
                    <div className="cardTitle">{props.title}</div>
                ) : null}
                {Object.prototype.hasOwnProperty.call(props, "content") ? (
                    <div className="cardContent" id="noticeContent">
                        {props.content}
                        <div className="noticeSpButtons">
                            {
                                props.buttonDiscord ? (
                                    <a href={props.buttonDiscord}>
                                        <button className="discordButton">
                                            <img src="/discord_logo.png" alt="Discord Logo" />
                                        </button>
                                    </a>
                                ) : null
                            }

                            {
                                props.buttonForm ? (
                                    <a href={props.buttonForm}>
                                        <button className="formButton">
                                            <img src="/forms_logo.png" alt="Forms Logo" />
                                        </button>
                                    </a>
                                ) : null
                            }
                        </div>
                    </div>
                ) : null}
                {Object.prototype.hasOwnProperty.call(props, "button1") ? (
                    <a href={props.link1}>
                        <button className="activated ">{props.button1}</button>
                    </a>
                ) : null}
                {Object.prototype.hasOwnProperty.call(props, "button2") ? (
                    <a href={props.link2}>
                        <button className="deactivated ">{props.button2}</button>
                    </a>
                ) : null}
            </div>
        );
    }
}

export default Cards;
