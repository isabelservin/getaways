import React from "react";
import video from "../video/video.mp4"
import LoginButton from "./Authentication/LoginButton";

const SplashPage = () => {
    return (
        <>
            <section className="showcase">
                <video src={video} muted loop autoPlay></video>
                <div className="overlay"></div>
                <div className="text">
                    <h2>Grand Getaways </h2>
                    <h3>explore the world</h3>
                    <p>or offer your space to guests – connecting travelers with somewhere to stay. Hosting can help you make new connections, find new purpose, and pursue your passions..</p>
                    <LoginButton />
                </div>
            </section>

        </>
    )
}

export default SplashPage