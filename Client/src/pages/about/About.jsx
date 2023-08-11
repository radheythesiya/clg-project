import React from 'react'
import "./style.css"
import {BsArrowRight, BsTranslate} from "react-icons/bs"
import {motion} from "framer-motion"

const About = () => {
  return (
    <>
    
    <div id="about" >
    <h2 className='heading'>ABOUT US</h2>
    <LeftAbout
        title="LEGACY"
        subTitle="ELEGANCE | ETHICS | VISION"
        para="Built on the legacy of trust, ethics and more than 4 decades of excellence, MRP is synonymous to competence and innovation in diamond manufacturing"
        myimg="https://akm-img-a-in.tosshub.com/indiatoday/diamond-mar19-1_647_030818060550.jpg?size=690:388"
      />
    <RightAbout
   
     title="TRANSPARENCY"
     subTitle="LEGITIMACY | TRACEABILITY | TRUST"
     para="Offering enhanced consistency, reliability of supply, and assurance in the authenticity and integrity of diamonds, we ensure our diamonds are natural, conflict-free and traceable to the origin."
     myimg="https://diamondbuzz.blog/wp-content/uploads/2021/08/Diamond-Anatomy-Understanding-the-Basics.jpg"
    />
    <LeftAbout
        title="CRAFTMANSHIP"
        subTitle="PRECISION | EXCELLENCE"
        para="Our highly experienced team has worked with us over the years, and many times over generations of the family are working with us bringing continuity, expertise and quality to our entire collection."
        myimg="https://media.gettyimages.com/id/699045366/video/workers-use-magnifying-glasses-to-inspect-cut-diamonds-at-a-workbench-decorated-with-a-russian.jpg?s=640x640&k=20&c=5DFwcgpaGZpqIAhQ-RzvbdIP93vN_DpubqMx15SsDeU="
      />
    <RightAbout
 
     title="UNIQUENESS"
     subTitle="ART | SCIENCE | TECHNOLOGY"
     para="Our state-of-the-art facility in Surat brings millions of diamonds to life per year, through our streamlined process with global technology and talent."
     myimg="https://www.designworldonline.com/wp-content/uploads/Page-2-Raman.jpg"
    />
    </div>
    </>
  )
}
export const LeftAbout = ({title, subTitle, para, myimg,myclass}) => {
  return (
    <motion.main className={myclass}>
      <motion.div className="left" initial={{x:-300}} whileInView={{x:0}}>
        <h4>{subTitle}</h4>
        <h2>{title}</h2>
        <p>{para}</p>
        <button className='commBtn'>EXPLORE <BsArrowRight/></button>
      </motion.div>
      <div className="right">
        <img src={myimg} alt="" />
      </div>
    </motion.main>
  )
}
export const RightAbout = ({title, subTitle, para, myimg}) => {
  return (
    <motion.main className='rightabout'>
      
      <div className="right">
        <img src={myimg} alt="" />
      </div>
      <motion.div className="left"  initial={{y:100}} whileInView={{y:0}}>
        <h4>{subTitle}</h4>
        <h2>{title}</h2>
        <p>{para}</p>
        <button className='commBtn'>EXPLORE <BsArrowRight/> </button>
      </motion.div>
    </motion.main>
  )
}


export default About;

