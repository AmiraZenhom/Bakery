import React from 'react'
import Styles from"./Home.module.scss" 
import Photo from "../../images/bread.png"
import Photo2 from "../../images/Star 1.png"
import Logo from "../../images/logo.png"
import Photo3 from "../../images/Body Text.png" 
import Photo4 from "../../images/Mask.png"
export default function Home() {
  return (
    <>
    <div>
        <div className={`${Styles.parent} row`}>
          
            <div className= {` col-md-8 ${Styles.data}`}>
           
            <div className={`${Styles.caption}`}>
            <div className={Styles.logo} >
                    <div ><img src={Logo} alt="logo"  /></div>
                   <div className='mx-3'>  PEACHY PUP <br /> BAKERY</div>
                </div>
                <div>
                    <h2  className={`${Styles.title}` }> TASTY PASTRIES</h2>
                </div>
                <div> Lorem Ipsum is simply dummy text of the printing and <br /> typesetting industry. Lorem Ipsum has been the industry's <br /> standard dummy text ever since the
                </div>

                <div>
                <button type="button" className={`btn btn-warning ${Styles.btn} `}>
                SEE MORE
            </button>
                </div>
                <div className={`${Styles.phone}`}>
                    <span>Telephone:</span>
                    <span>+7 700 000 00 00</span>
                  </div>
            </div>
            <div className={`${Styles.bodytext}`}>
                <img src={Photo3} alt="text" />
            </div>
            <div className={`${Styles.bodytext2}`}>
                <img src={Photo4} alt="text" />
            </div>
          
                <div className={`${Styles.photo1}`}>
                    <img src={Photo} alt="" className='w-75' />
                </div>
                <div className={`${Styles.photo2}`}>
                    <img src={Photo2} alt=""  className='w-50'/>
                </div>
                <div className={`${Styles.socialicons} container `}>
                  <div className={` ${Styles.layer}`}>
                  <div className={`${Styles.icons} my-1 mx-1 `}>
                    <i className="fa-brands fa-vk my-2 "></i>
                    <i className="fa-brands fa-square-facebook"></i>
                    <i className="fa-brands fa-square-instagram my-2"></i>
                    <i className="fa-brands fa-twitter"></i>
                    </div>
                  </div>
                  
                </div>

            </div>
            <div className={`col-md-4  ${Styles.right}`}>
      <div className={`${Styles.layer}`}>
     

      </div>
        </div>
        </div>
    </div>
    
    </>
  )
}
