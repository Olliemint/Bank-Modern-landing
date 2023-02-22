import React from 'react'
import { features } from '../constants';
import styles, { layout } from '../style'
import Button from './Button';


const FeatureCard = (({icon,content,title,i}) => (
  <div className={`flex flex-row items-center rounded-[20px] py-3 ${i === features.length -1 ? "mb-0": "mb-6" } feature-card`}>
    <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}>
      <img src={icon} alt="" className="w-[50%] h-[50%] object-contain" />
    </div>
    <div className="flex-1 flex flex-col ml-3">
      <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23px] mb-1">{title}</h4>
      <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px] mb-1">{content}</p>
    </div>
  </div>
))

const Business = () => {
  return (
    <section className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
          You do the business, <br className="sm:block hidden" /> we’ll handle
          the money.
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          With the right credit card, you can improve your financial life by
          building credit, earning rewards and saving money. But with hundreds
          of credit cards on the market.
        </p>

        <div className="mt-4 sm:mt-10">
          <Button />
        </div>
      </div>
      <div className={`${layout.sectionImg} flex-col`}>
        {
          features.map((feature, i) => (
            <FeatureCard {...feature} i={i}  key={i}/>
          ))
          }
      </div>
    </section>
  );
}

export default Business