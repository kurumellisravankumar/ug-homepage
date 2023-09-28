import React from "react";
import { Contact_data } from "./Contact_data";
import { GiMailbox, GiPhone } from "react-icons/gi";

import "./contact.css";

const Contact = () => {
  return (
    <>
      <div id="contact">
        {Contact_data.map((Contact_data, index) => {
          return (
            <div key={index}>
              <div className={Contact_data.contact_sub_contcainer}>
                 <h2>{Contact_data.contact_title}</h2>

              <div className={Contact_data.contact_box}>
              <div className={Contact_data.mpa_adresss}>
                <div>
                  <iframe src={Contact_data.map} frameborder="0"></iframe>
                </div>
                <div>
                 
                  <p>
                    <span className={Contact_data.adres}>{Contact_data.adress}</span>
                    {Contact_data.ad1}
                  </p>                  
                  <p>
                    <span>
                      <GiMailbox />
                    </span>
                    {Contact_data.mobile}
                  </p>
                  <p>
                    <span>
                      <GiPhone />
                    </span>
                    {Contact_data.email}
                  </p>
                </div>
              </div>

              <div>
                <form action="">
                  <input type="text" placeholder="FIRST NAME" />
                  <input type="text" placeholder="LAST NAME" />
                  <input type="text" placeholder="Your email address" />
                  <select name="" id="" placeholder="category">
                    <option value="">{Contact_data.category}</option>
                    <option value="">{Contact_data.op1}</option>
                    <option value="">{Contact_data.op2}</option>
                    <option value="">{Contact_data.op3}</option>
                    <option value="">{Contact_data.op4}</option>
                  </select>
                  <input type="submit" />
                </form>
              </div>
              </div>
            </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Contact;
