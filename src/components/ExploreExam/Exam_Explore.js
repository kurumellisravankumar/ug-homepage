import React from 'react'



import {Exam_Explore_data,Examsliders} from "./Exam_Explore_data"



import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";




import "./exam.css"


const Exam_Explore = () => {
  return (
   <div id="exam">
    <h2>EXPLORE EXAMS</h2>
    <div className="exam_sub_container">

   
    <div className="exam_box_left">
{
    Examsliders.map((Examsliders,index)=>{
        return(
            <div key={index}>
                <Carousel 
                showThumbs={false}
                showIndicators={false}
                showStatus={false}
                showArrows={false}
                >
                    <div><img src={Examsliders.slide1} alt="" /></div>
                    <div><img src={Examsliders.slide2} alt="" /></div>
                    <div><img src={Examsliders.slide3} alt="" /></div>

                 
                </Carousel>
            </div>
        )
    })
}


        </div>

    <div className="exam_box_right">
    {
        Exam_Explore_data.map((Exam_Explore_data,index,Exam)=>{
            return(
                
            <div key={index} >
            
                <div className={Exam_Explore_data.exam_boxs}>
                    <a href="#" className={Exam_Explore_data.exams_buttons}>{Exam_Explore_data.exams_button}</a>
                    <a href=""className={Exam_Explore_data.exams_buttons}>{Exam_Explore_data.ots}</a>
                    <a href="" className={Exam_Explore_data.exams_buttons}>{Exam_Explore_data.olvc}</a>
                </div>
            </div>
            
            )
        })
    }
</div>
   </div>
   </div>
  )
}

export default Exam_Explore