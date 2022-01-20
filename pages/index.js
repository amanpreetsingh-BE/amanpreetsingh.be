/* Import React.js libs */
import {useState, useEffect} from 'react'
/* Import Next.js libs */
import Head from 'next/head'
import Image from 'next/image'
/* Import custom components */
import Nav from '@components/Nav'
import MobileNav from '@components/NavMobile'
/* Animation and scroll */
import {Link as LinkS, animateScroll as scroll} from 'react-scroll'
import {motion, useViewportScroll, useTransform} from 'framer-motion';
import {useInView} from 'react-intersection-observer';
/* Import icons */
import { ChevronDoubleDownIcon } from '@heroicons/react/outline'

/* Import image */
const logo = require("@images/logo/logo.png")
const UCLogo = require("@images/logo/UCLouvain.svg")
export default function Home() {
  /* Handle navbar */
  const [isOpen, setIsOpen] = useState(true)
  const toggle = () => {
      setIsOpen(!isOpen)
  };

  /* Handle framer animations */
  const [innerHeight, setInnerHeight] = useState()
  const [scroller, setScroller] = useState(-128)
  const { scrollYProgress } = useViewportScroll();
  const pathLength = useTransform(scrollYProgress, [0, 0.25], [1, 0]);
  const [ref, inView] = useInView({
    threshold: 0.5,
    triggerOnce: false
  });
  const variants = {
    visible: { 
        opacity: 1, 
        x: 0 
    },
    hidden: {
        opacity: 0,
        x: 50
    }
  };
  /* Handle Animation Opacity */
  const controlScroll = () => {
    if(window.scrollY > window.innerHeight*0.05){
      setScroller(window.scrollY-window.innerHeight*0.05-128)
    } else{
      setScroller(-128)
    }
    
  }
  useEffect(() => {
      window.addEventListener('scroll', controlScroll)
      return () => {
          window.removeEventListener('scroll', controlScroll)
      }
  }, [])
  const controlResize = () => {
    setInnerHeight(window.innerHeight)
  }
  useEffect(() => {
    setInnerHeight(window.innerHeight)
    window.addEventListener('resize', controlResize)
    return () => {
        window.removeEventListener('resize', controlResize)
    }
}, [])

  return (
    <div className="">
      {/* Head SEO */}
      <Head>
        <title>Amanpreet Singh</title>
        <meta name="description" content="Amanpreet Singh's portfolio" />
        <meta name="keywords" content="engineer, data, scientist, amanpreet, singh, belgium, portfolio" />
        <link rel="apple-touch-icon" href="/logo192.png" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className='font-fontMT'>
        <Nav useState={useState} useEffect={useEffect} toggle={toggle} logo={logo} scroll={scroll} Image={Image} LinkS={LinkS} />
        <MobileNav useState={useState} useEffect={useEffect} toggle={toggle} isOpen={isOpen} logo={logo} Image={Image} LinkS={LinkS} />
        <motion.div style={{marginTop: scroller}} initial={{opacity:0, height:0}} animate={{opacity:1, height:innerHeight}} transition={{duration:2}}  className='absolute mx-[35px] md:mx-[82px] flex justify-start items-center flex-col bg-transparent'>
          <div className='relative h-full bg-[#60EE93] w-[2px]'/>
          <ChevronDoubleDownIcon className='relative text-[#60EE93] w-8 h-8'/>
        </motion.div>


        {/* Hero */}
        <section id="home" className="bg-blk text-white w-full h-screen -mt-32">
          
          <div className='top-1/2 ml-20 md:ml-32 absolute font-medium font-sans md:font-fontMT text-xl md:text-3xl max-w-xs md:max-w-lg '>
            Hi, my name is 
              <motion.span animate={{opacity:1}} initial={{opacity:0}} transition={{duration:2}} className='font-bold text-[#60EE93] mx-1'>Amanpreet Singh</motion.span> 
              and I am a shadowy super coder
              <motion.svg className="w-6 h-6 inline md:w-10 md:h-10 ml-1 md:ml-2" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                <title>ionicons-v5-l</title>
                <motion.rect x="32" y="48" width="448" height="416" rx="48" ry="48" style={{fill:"none",  pathLength: pathLength, stroke:"#fff", strokeLinejoin:"round", strokeWidth:"30px"}}/>
                <motion.polyline points="96 112 176 176 96 240" style={{fill:"none",  pathLength: pathLength, stroke:"#fff", strokeLinecap:"round", strokeLinejoin:"round", strokeWidth:"30px"}}/>
                <motion.line x1="192" y1="240" x2="256" y2="240" style={{fill:"none", stroke:"#fff",  pathLength: pathLength, strokeLinecap:"round", strokeLinejoin:"round", strokeWidth:"30px"}}/>
            </motion.svg>
          </div>

          <div className='rounded-full absolute left-[15%] max-w-2xl top-[20%] w-1/2 h-1/2 border-[1px] border-gray-300'/>
          <div className='rounded-full absolute left-[35%] max-w-2xl top-[30%] w-1/2 h-1/2 border-[1px] border-gray-500'/>
          
        </section>

        <section id="aboutme" className=' pt-16 bg-blk'>
          <motion.div 
            animate={inView ? 'visible' : 'hidden'}
            variants={variants}
            transition={{ duration: 1, ease: 'easeOut' }}
            ref={ref}
            className='ml-20 md:ml-32 text-[#60EE93] font-bold font-sans md:font-fontMT text-xl md:text-3xl'>
            About Me
            
          </motion.div>
          <div className='ml-20 md:ml-32 font-sans md:font-fontMT text-gray-300 font-medium max-w-xs md:max-w-xl '>
            I am currently seeking for an opportunity as a <span className='font-bold text-white'>Data Scientist</span>. I am a fresh graduate student with a Master's degree in Electrical Engineering from Université catholique de Louvain (UCLouvain). 
            I am thrilled to start a new career !
          </div>

          <div className='ml-20 mb-1 mt-12 md:ml-32 text-gray-100 font-medium font-sans md:font-fontMT text-lg md:text-xl'>
            Education
          </div>
          <div className='ml-20 md:ml-32 font-sans md:font-fontMT text-gray-300 font-medium max-w-xs md:max-w-xl '>
            MSc in <span className='text-white font-bold'>Electrical Engineering</span>, Université catholique de Louvain, September 2021 
            <ul className='ml-8 list-disc'>
              <li>Specialization in information and signal processing</li>
              <li>Specialization in electronic circuits and systems</li>
            </ul>
          </div>
          <div className='ml-20 md:ml-32 mt-2 relative bg-white hover:bg-gray-100  rounded-xl w-52 h-16'><a target="_blank" href='https://www.uclouvain.be/'><Image src={UCLogo} layout="fill"/></a></div>
          
          <div className='ml-20 mt-12 mb-1 md:ml-32 text-gray-100 font-medium font-sans md:font-fontMT text-lg md:text-xl'>
            Main skills
          </div>
          <div className='ml-20 mb-1 md:ml-32  font-sans md:font-fontMT font-medium grid place-items-center gap-4 grid-cols-2 md:grid-cols-4 max-w-xs md:max-w-xl'>
            <motion.div whileHover={{scale:1.1}} className='w-32 h-20 flex justify-center items-center text-center text-white rounded-xl bg-zinc-800'>Machine learning</motion.div>
            <motion.div whileHover={{scale:1.1}} className='w-32 h-20 flex justify-center items-center text-center text-white rounded-xl bg-zinc-800'>Reinforcement learning</motion.div>
            <motion.div whileHover={{scale:1.1}} className='w-32 h-20 flex justify-center items-center text-center text-white rounded-xl bg-zinc-800'>Signal processing</motion.div>
            <motion.div whileHover={{scale:1.1}} className='w-32 h-20 flex justify-center items-center text-center text-white rounded-xl bg-zinc-800'>Design and synthesis of digital systems</motion.div>
            <motion.div whileHover={{scale:1.1}} className='w-32 h-20 flex justify-center items-center text-center text-white rounded-xl bg-zinc-800'>IoT</motion.div>
            <motion.div whileHover={{scale:1.1}} className='w-32 h-20 flex justify-center items-center text-center text-white rounded-xl bg-zinc-800'>Python</motion.div>
            <motion.div whileHover={{scale:1.1}} className='w-32 h-20 flex justify-center items-center text-center text-white rounded-xl bg-zinc-800'>C/C++</motion.div>
          </div>

          <div className='ml-20 mt-12 mb-1 md:ml-32 text-gray-100 font-medium font-sans md:font-fontMT text-lg md:text-xl'>
            Web skills
          </div>
          <div className='ml-20 mb-1 md:ml-32 font-sans md:font-fontMT font-medium grid place-items-center gap-4 grid-cols-2 md:grid-cols-5 max-w-xs md:max-w-xl'>
            <motion.div whileHover={{scale:1.1}} className='w-28 h-12 flex justify-center items-center  text-center text-white rounded-xl bg-zinc-800'>HTML</motion.div>
            <motion.div whileHover={{scale:1.1}} className='w-28 h-12 flex justify-center items-center  text-center text-white rounded-xl bg-zinc-800'>CSS</motion.div>
            <motion.div whileHover={{scale:1.1}} className='w-28 h-12 flex justify-center items-center  text-center text-white rounded-xl bg-zinc-800'>React.js</motion.div>
            <motion.div whileHover={{scale:1.1}} className='w-28 h-12 flex justify-center items-center  text-center text-white rounded-xl bg-zinc-800'>Next.js</motion.div>
            <motion.div whileHover={{scale:1.1}} className='w-28 h-12 flex justify-center items-center  text-center text-white rounded-xl bg-zinc-800'>Node.js</motion.div>
            <motion.div whileHover={{scale:1.1}} className='w-28 h-12 flex justify-center items-center  text-center text-white rounded-xl bg-zinc-800'>Firebase</motion.div>
            <motion.div whileHover={{scale:1.1}} className='w-28 h-12 flex justify-center items-center  text-center text-white rounded-xl bg-zinc-800'>Netlify</motion.div>
          </div>

          <div className='ml-20 mt-12 pb-12  md:ml-32 text-gray-100 font-medium font-sans md:font-fontMT text-lg md:text-xl'>
            Certifications (in construction ... )
          </div>

        </section>
      </main>
      {/* Footer 
      <Footer />*/}
    </div>
  )
}
