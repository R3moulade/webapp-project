import './Slider.css';
import {motion} from "framer-motion";
import {useRef, useState, useEffect} from "react"



function Slider() {
  const [width, setWidth] = useState(0);
  const carousel = useRef();
  

  useEffect(() => {

setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  },)

  return (
  
  
  <div className='slider'>
    <motion.div ref={carousel} className='carousel'>
<motion.div drag="x" dragConstraints={{right:0, left: -width}} className="inner-carousel">
    <motion.div className="box"></motion.div>
    <motion.div className="box"></motion.div>
    <motion.div className="box"></motion.div>
    <motion.div className="box"></motion.div>
    <motion.div className="box"></motion.div>
    <motion.div className="box"></motion.div>
    <motion.div className="box"></motion.div>
    <motion.div className="box"></motion.div>
     </motion.div>
    </motion.div>
  </div>
   
  );
}

export default Slider;