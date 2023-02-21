import React from "react";
import image1 from "../../../assets/image/about-banner.png";
import { AiFillStar } from "react-icons/ai";
import Reply from "./Reply";

export default function Comment({ reply }) {
    return (
        <div className="d-grid gap-3 px-5 pt-4 pb-5" style={{ backgroundColor: "var(--bgColor)" }}>
            <div className="d-flex justify-content-between align-items-center">
                <div className="d-flex gap-3 align-items-center">
                    <img src={image1} alt="avarta" className="rounded-circle" style={{ width: "50px", height: "50px" }} />
                    <div className="d-grid gap-2">
                        <h6>Rafiqui Islam</h6>

                        <p className="text-secondary">London, UK</p>
                    </div>
                </div>

                <div className="d-flex gap-1">
                    <div className="text-warning">
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                    </div>
                    <p>(4.0)</p>
                </div>
            </div>

            <p className="lh-base text-secondary mb-4">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the redi 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has survived not only five centuries but also the on leap into electronic typesetting, remaining
            </p>

            {
                reply ? null : <Reply />
            }
        </div>
    );
}
