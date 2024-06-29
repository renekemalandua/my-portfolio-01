import { SectionTitle } from "../sectionTitle/section-title"
import "./information.scss"

export function Info(){
    return(
        <div className="infos">
        <SectionTitle text="Languages"/>
        <div className="languages-info">
          <span> EN - Intermediate</span>
          <span> PT - Native Speaker</span>
        </div>
        <SectionTitle text="Education"/>
        <div className="educational-info">
          <span>🎓</span>
          <span>Technical Secondary Diploma In Computer Systems Management - Instituto Politécnico Indústrial de Luanda (Makarenco) </span>
        </div>
      </div>
    )
}