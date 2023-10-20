import React from "react";
import Styles from "./Feedback.module.scss";
import Photo from "../../images/Group 30.png"
export default function Feedback() {
  const sendData = () => {
    window.location.href = '#us';
  }
  return (
    <>
      <div className={`${Styles.Photo2}  `}>
        <div className={`${Styles.overlay}`}>
          <div className={`${Styles.layer}`}>
            <div
              className={` container py-5 d-flex justify-content-center align-items-center  flex-wrap `}
            >
              <div>
                
                <h2 className={`${Styles.title} `}>TESTYMONIALS</h2>
              </div>
              <div className=" w-75 py-3">
                <div className="row ">
                  <div className="col-sm-6 mb-3 mb-sm-0">
                    <div className="card">
                      <div className="card-body">
                        <h5 className="card-title">Special title treatment</h5>
                        <p className="card-text">
                          With supporting text below as a natural lead-in to
                          additional content.
                        </p>
                        <img src={Photo} alt="star" />
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="card">
                      <div className="card-body">
                        <h5 className="card-title">Special title treatment</h5>
                        <p className="card-text">
                          With supporting text below as a natural lead-in to
                          additional content.
                        </p>
                        <img src={Photo} alt="star" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className=" w-75">
                <div className="row ">
                  <div className="col-sm-6 mb-3 mb-sm-0">
                    <div className="card">
                      <div className="card-body">
                        <h5 className="card-title">Special title treatment</h5>
                        <p className="card-text">
                          With supporting text below as a natural lead-in to
                          additional content.
                        </p>
                        <img src={Photo} alt="star" />
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="card">
                      <div className="card-body">
                        <h5 className="card-title">Special title treatment</h5>
                        <p className="card-text">
                          With supporting text below as a natural lead-in to
                          additional content.
                        </p>
                        <img src={Photo} alt="star" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className=" d-flex justify-content-center">
            
              <button
              onClick={() => sendData()}
                type="button"
                className={`btn btn-warning ${Styles.text} `}
              >
                Contact us
              </button>
            </div>
          </div>
          <div className={`${Styles.amira}`}></div>
        </div>
      </div>
    </>
  );
}
