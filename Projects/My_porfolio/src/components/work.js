import "./workCards.css"
import React from 'react'
import WordCards from './workCards'
import WorkCardData from "./WorkCardData"

const Work = () => {
    return (
    <div className="work-container">
        <h1 className="project-heading">Projects</h1>
        <div className="project-container">
            {
                WorkCardData.map((val,i)=>{
                    return(
                        <WordCards
                            key={i}
                            img_src={val.img_src}
                            title={val.title}
                            text={val.text}
                            view={val.title}
                            source={val.source}
                        />
                    )
                })
            }
        </div>
    </div>
    )
}
export default Work
