import { GitHubIcon } from "../icons/github-icon";
import { InstaIcon } from "../icons/insta-icon";
import { LinkedInIcon } from "../icons/linkedin-icon";
import { TwitterIcon } from "../icons/twitter-icon";

import "./social-btns.scss"


export function SocialBtns(){
    return(
        <div className="social">
            <a href="https://www.instagram.com/rene_kemalandua/">
                <InstaIcon/>
            </a>
            <a href="https://www.linkedin.com/in/rkemalandua/">
                <LinkedInIcon/>
            </a>
            <a href="https://github.com/renekemalandua">
                <GitHubIcon/>
            </a>
            <a href="">
                <TwitterIcon/>
            </a>
        </div>
    )
}