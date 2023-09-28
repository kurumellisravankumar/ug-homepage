import React from "react";
import { Course_data } from "./Course_data";

import "./course.css";

const Course = () => {
  return (
    <div id="courses">
      <h2>OUR COURSES</h2>

      <div className="courses_sub_container">
        {Course_data.map((Course_data, index) => {
          return (
            <div key={index}>
             
                <h3>{Course_data.course_title1}</h3>
                <div className={Course_data.Course_box1}>
                  <div className={Course_data.course_img1}>
                    <img src={Course_data.ots_olvc_QB_img1} alt="" />
                  </div>
                  <ul>
                    <li>{Course_data.course_pont1_1}</li>
                    <li>{Course_data.course_pont2_1}</li>
                    <li>{Course_data.course_pont3_1}</li>
                    <li>{Course_data.course_pont4_1}</li>
                  </ul>
                  <div className={Course_data.course_bttons_list1}>
                  <a href="#">{Course_data.c_btn1}</a>
                  <a href="#">{Course_data.c_btn2}</a>
                  <a href="#">{Course_data.c_btn3}</a>
                  <a href="#">{Course_data.c_btn4}</a>
                  <a href="#">{Course_data.c_btn5}</a>
                  <a href="#">{Course_data.c_btn6}</a>
                  <a href="#">{Course_data.c_btn7}</a>
                  <a href="#">{Course_data.c_btn8}</a>
                  <a href="#">{Course_data.c_btn9}</a>
                  <a href="#">{Course_data.c_btn11}</a>
                </div>
                </div>

           
              
            
                <h3>{Course_data.course_title2}</h3>
                <div className={Course_data.Course_box2}>
                  <div className={Course_data.course_img2}>
                    <img src={Course_data.ots_olvc_QB_img2} alt="" />
                  </div>
                  <ul>
                    <li>{Course_data.course_pont1_2}</li>
                    <li>{Course_data.course_pont2_2}</li>
                    <li>{Course_data.course_pont3_2}</li>
                    <li>{Course_data.course_pont4_2}</li>
                  </ul>
                  <div className={Course_data.course_bttons_list2}>
                  <a href="#">{Course_data.c_btn2_1}</a>
                  <a href="#">{Course_data.c_btn2_2}</a>
                
                </div>
                </div>

           
              <div>
                <h3>{Course_data.course_title3}</h3>
                <div className={Course_data.Course_box3}>
                  <div className={Course_data.course_img3}>
                    <img src={Course_data.ots_olvc_QB_img3} alt="" />
                  </div>
                  <ul>
                    <li>{Course_data.course_pont1_3}</li>
                    <li>{Course_data.course_pont2_3}</li>
                    <li>{Course_data.course_pont3_3}</li>
                    <li>{Course_data.course_pont3_4}</li>
                  </ul>
                  <div className={Course_data.course_bttons_list3}>
                    <a href="#">{Course_data.c_btn3_1}</a>
                    <a href="#">{Course_data.c_btn3_2}</a>

                  </div>
               
                </div>

           
              </div>
            </div>
          );
        })}


      </div>
    </div>
  );
};

export default Course;
