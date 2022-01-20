/* Import React.js libs */
import {useState, useEffect} from 'react'
/* Import Next.js libs */
import Head from 'next/head'
import Image from 'next/image'
/* Import custom components */
import Nav from '@components/Nav'
/* Animation and scroll */
import {Link as LinkS, animateScroll as scroll} from 'react-scroll'
import {motion, useViewportScroll, useTransform, useSpring} from 'framer-motion';
/* Import icons */
import { ChevronDoubleDownIcon } from '@heroicons/react/outline'

/* Import image */
const logo = require("@images/logo/logo.png")

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

        <section id="about" className='h-[100vh] text-red-50 bg-blk'>
          <div className='ml-20 md:ml-32 text-indigo-300 font-sans text-xl md:text-3xl'>
            About Me
          </div>
        </section>
      </main>
      {/* Footer 
      <Footer />*/}
    </div>
  )
}
