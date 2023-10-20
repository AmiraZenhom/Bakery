import React, { useState } from "react";

import Styles from "./Contact.module.scss";
import axios from "axios";
export default function Contact() {
  const [user, setUser] = useState({
    email: "",
    phone: "",
    name: "",
  });

  let getInputValue = (e) => {
    let myUser = { ...user };
    myUser[e.target.name] = e.target.value;
    setUser(myUser);
    console.log(myUser);
  };

  let submitFormData = async (e) => {
    e.preventDefault();
    let { data } = await axios.post(
      "http://upskilling-egypt.com:3000/contact",
      user
    );
      
    // console.log(data);
  };
  return (
    <>
      <div
        id="us"
        className={`  container py-5 d-flex justify-content-center align-items-center flex-wrap  `}
      >
        <div>
          <h2 className={`${Styles.title}`}> CONTACT US</h2>
        </div>

        <div className={` row  w-50  `}>
          <div className="col-md-6 ">
            <form onSubmit={submitFormData}>
              <input
                onChange={getInputValue}
                className={`${Styles.data} form-control`}
                type="text"
                placeholder="Full Name"
                name="name"
              />
              <input
                onChange={getInputValue}
                className={`${Styles.data} form-control`}
                type="email"
                placeholder="Email"
                name="email"
              />
              <input
                onChange={getInputValue}
                className={`${Styles.data} form-control`}
                type="number"
                placeholder="Phone Number"
                name="phone"
              />
              <div className="ms-4 my-3">
                {" "}
                <button
                  className={` ${Styles.send} btn btn-outline-warning ms-5  `}
                >
                  SEND
                </button>
              </div>
            </form>
          </div>
          <div className="col-md-6 py-5">
            <div className={`info `}>
              <div className="d-flex justify-content-evenly">
                <i className={`${Styles.icons} fa-solid fa-envelope`}></i>
                <span>upskilling.eg1@gmail.com</span>
              </div>
              <div className="d-flex justify-content-evenly mt-3  ">
                <span className={`${Styles.icons} fa-solid fa-phone`}>
                  <i></i>
                </span>
                <span className="w-75">+20 115 493 2137</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
