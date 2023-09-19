import React from 'react';
import '../assets/scss/Developer.scss';
import {IconButton} from "@material-ui/core";
import AvatarImage from "../assets/img/avatar.JPG";
import {Facebook, Instagram, LinkedIn, Portrait, Twitter} from "@material-ui/icons";

const Developer = () => {
    return (
        <div className={"Developer"}>
            <h3 className={"Developer-head"}>PROFILE</h3>
            <div className="Developer-profile">
                <div className="Developer-profileCard">
                    <img src={AvatarImage} alt="Profile"/>
                    <div className={"Card-details"}>
                        <h3>AMAN KUSHWAHA</h3>
                        <p>MERN STACK DEVELOPER</p>
                        <p>amankushwaha57@gmail.com</p>
                    </div>
                </div>
                <div className="Developer-profileDetails">
                    <p>I am a passionate MERN Stack developer with a relentless drive for learning and problem-solving.</p>
                    <p>I'm a team player, a master of deadlines, and always ready to embrace the latest tech.</p>
                    <p>User experience is my top priority, backed by solid security practices.</p>
                    <br></br>
                    <p>Experience : 2.1 + Years</p>
                    <p>React, JavaScript, TypeScript, Express, Next, Pixi, Socket, Redux</p>
                    <p>Bootstrap, HTML, CSS, JSON, Tailwind CSS, SCSS, Material UI</p>
                    <p>Rest APIs, NPM, Interfaces, GIT, SVN</p>
                    <div className="Card-btn">
                        <IconButton target={"_blank"} href={"https://twitter.com/amankushwaha57"}  title={"Vishal_kld"}>
                            <Twitter/>
                        </IconButton>
                        <IconButton target={"_blank"} href={"https://www.linkedin.com/in/amankushwaha57/"}  title={"vishalsingh-"}>
                            <LinkedIn/>
                        </IconButton>
                        <IconButton target={"_blank"} href={"https://www.instagram.com/the_amankushwaha/"}  title={"vishalsingh023"}>
                            <Instagram/>
                        </IconButton>
                        <IconButton target={"_blank"} href={"/"}  title={"Web Portfolio"}>
                            <Portrait/>
                        </IconButton>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Developer;