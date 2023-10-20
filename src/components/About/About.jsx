import React from "react";
import Styles from "./about.module.scss";
import Photo from "../../images/Rectangle 275.png";

export default function About() {
  const sendData = () => {
    window.location.href = '#us';
  }
  return (
    <>
      <div className="row   ">
        <div className={`col-md-8 ${Styles.data}     `}>
          <div className={`${Styles.info} my-4 `}>
            <h2 className={`${Styles.title}  w-100`}>
              ABOUT <br />
              US
            </h2>
            <p className={`${Styles.text} w-100 `}>
              Lorem Ipsum is simply dummy text of the printing and <br />{" "}
              typesetting industry. Lorem Ipsum has been the <br /> industry's
              standard dummy text ever since the 1500s, <br /> when an unknown
              printer took a galley of type and <br /> scrambled it to make a
              type specimen book. It has <br /> survived not only five
              centuries, but also the leap into <br /> electronic typesetting,
              remaining essentially <br /> unchanged. It was popularised in the
              1960s with the <br /> release of Letraset sheets containing Lorem
              Ipsum <br /> passages, and more recently with desktop publishing{" "}
              <br /> software like Aldus PageMaker including versions of <br />{" "}
              Lorem Ipsum.
            </p>
            <button onClick={() => sendData()} type="button" className={`btn btn-warning ${Styles.text} `}>
              Contact us
            </button>
          </div>
        </div>

        <div className={`${Styles.bgabout} col-md-4 `}>
          <div className={`info  `}></div>
          <div className={`${Styles.chef}`}>
        <img
          src={Photo}
          alt="chef"
          className={`${Styles.aboutImg} ${Styles.photo1}  `}
        />
      </div>
        </div>
      </div>
     
    </>
  );
}
