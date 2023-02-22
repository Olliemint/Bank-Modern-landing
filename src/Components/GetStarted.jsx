import React from 'react'
import { arrowUp } from '../assets'
import styles from '../style'

const GetStarted = () => {
  return (
    <div
      className={`${styles.flexCenter} w-[140px] h-[140px] rounded-full bg-blue-gradient cursor-pointer p-[2px]`}
    >
      <div
        className={`${styles.flexCenter} flex-col bg-primary w-[100%] h-[100%] rounded-full`}
      >
        <div className={`${styles.flexStart} flex-row`}>
          <p className="font-poppins leading-[23px] text-[18px] font-medium mr-2">
            <span className="text-gradient">Get</span>
          </p>

          <img
            src={arrowUp}
            alt=""
            className="h-[23px] w-[23px] object-contain"
          />
        </div>
        <p className="font-poppins leading-[23px] text-[18px] font-medium">
          <span className="text-gradient">Started</span>
        </p>
      </div>
    </div>
  );
}

export default GetStarted