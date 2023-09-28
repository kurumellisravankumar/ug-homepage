import React from "react";
import  {AiFillHome,AiOutlineUser,AiFillBook,AiFillPhone,  AiOutlinePercentage, AiFillQuestionCircle} from "react-icons/ai"
// ----------------header css------------------------
import "./header.css"




// ----------------navbardata_------------------------

import { NavData } from "./NavData";


const Header = () => {
  return (
    <>
      <header>
        {NavData.map((NavData, index) => {
          return (
            <div className="header" key={index}>
              <div className={NavData.logo_img_container}>
                <img src={NavData.logo} alt="" />
              </div>
              <nav >
                <ul className={NavData.navbar}>
                  <li>
                    <a href="#home" className={NavData.navlist}>{NavData.link1}</a>
                  </li>
                  <li>
                    <a href="#about" className={NavData.navlist}>{NavData.link2}</a>
                  </li><li>
                    <a href="#exam" className={NavData.navlist}>{NavData.link3}</a>
                  </li><li>
                    <a href="#courses" className={NavData.navlist}>{NavData.link4}</a>
                  </li><li>
                    <a href="#contact" className={NavData.navlist}>{NavData.link5}</a>
                  </li><li>
                    <a href="#faq" className={NavData.navlist}>{NavData.link6}</a>
                  </li>
                
                </ul>                
              </nav>
              <div className={NavData.login}>
          <a href="#" className={NavData.login_btn}>{NavData.btn1}</a>
         
        </div>    

            </div>
          );
        })}     
     
      </header>

      <div className="mobile_nav">
        
                    <nav className="mobil_navbar">
                        <ul className="mobil_navbar_links" >
                         <li><a href="#home" title="Home"><AiFillHome/></a></li>
                         <li><a href="#about" title="About"><AiOutlineUser/></a></li>
                         <li><a href="#exam" title="Exams"><AiOutlinePercentage/></a></li>
                         <li><a href="#courses" title="Courses"><AiFillBook/></a></li>
                         <li><a href="#contact" title="Contact"><AiFillPhone/></a></li>
                         <li><a href="faq"title="FAQ"s><AiFillQuestionCircle/></a></li>

                        </ul>
                    </nav>
    

</div>
    </>
  );
};

export default Header;
