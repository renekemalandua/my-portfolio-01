import Image from "next/image"
import { SectionTitle } from "../sectionTitle/section-title"

import "./experience.scss"
import { Skill } from "../skill/skill"

export function Experience(){
    return(
        <div className="experience">
          <SectionTitle text="Experience"/>
          <p hidden={true} >3 years working as a Software Developer </p>
          <div className="experience-time">
            <Skill image="/node.webp" measure={4} years="Advanced"/>
            <Skill image="/react.png" measure={3} years="Upper-Intermediate"/>
            <Skill image="/dotNet.svg" measure={2} years="Intermediate"/>
            <Skill image="/django.png" measure={1} years="Beginner"/>
          </div>
        </div>
    )
}