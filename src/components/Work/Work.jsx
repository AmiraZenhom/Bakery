import React from 'react'
import Styles from "./Work.module.scss"
import photo1 from "../../images/Rectangle 268.png"
import photo2 from "../../images/Rectangle 269.png"
import photo3 from "../../images/Rectangle 271.png"
import photo4 from "../../images/Rectangle 270.png"

export default function Work() {
  const sendData = () => {
    window.location.href = '#us';
  }
  return (
    <>
   <div  >
    <div className= {`${Styles.parent}`}>
    <div className={`${Styles.bread}`}>
        <img src={photo1}  className='ps-3' alt="" />
        <img src={photo2}  className='ps-3' alt="" />
        <img src={photo3}  className='ps-3' alt="" />
        <img src={photo4}  className='ps-3'alt="" />
       
    </div>
    </div>
  
   <div className="row  ">
        <div className={`col-md-4  ${Styles.left}`}>
      <div className={`${Styles.layer}`}>
      <div className={`${Styles.info}`}>
       Lorem Ipsum is simply <br /> dummy text of the printing <br /> and typesetting industry. <br /> Lorem Ipsum has been the <br /> industry's standard dummy <br /> text ever since the
       </div>

      </div>
        </div>
        <div className={`col-md-8 ${Styles.right } d-flex justify-content-center `}>
            <h2 className={`${Styles.title}`}>
            HOW  WE <br /> WORK
            </h2>
          
            <button onClick={() => sendData()} type="button" className={`btn btn-warning ${Styles.btn} `}>
              Contact us
            </button>
        </div>
       
    </div>
   </div>
    </>
  )
}
