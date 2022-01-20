/* Icons */
import {MenuAlt3Icon} from '@heroicons/react/outline'

function Nav({toggle, logo, scroll, Image, LinkS}) {


    return (
        <nav className="top-0 z-10 sticky h-32 flex bg-blk">
            
            <div className="flex justify-between px-8 md:px-14 h-full w-full">
                <div onClick={()=>scroll.scrollToTop()} className="hidden md:flex md:h-full md:justify-center md:items-center">
                    <Image className={"cursor-pointer"} src={logo} width={'90'} height={'90'} alt={'logo'}/>
                </div>

                <div onClick={toggle} className="flex items-center justify-center h-full md:hidden">
                    <MenuAlt3Icon className="text-white cursor-pointer h-8 "/>
                </div>

                
                <ul className={"md:flex md:h-full md:list-none md:text-center hidden text-white"}>
                    <li className="flex hover:text-indigo-300 justify-center items-center h-full">
                        <LinkS  to='home'
                                smooth={true}
                                duration={500}
                                spy={true}
                                exact="true"
                                offset={-80}
                                className="cursor-pointer mr-10 font-medium transition ease-in-out duration-300 ">
                                Home
                        </LinkS>
                    </li>

                    <li className="flex hover:text-indigo-300 justify-center items-center h-full">
                        <LinkS  to='about'
                                smooth={true}
                                duration={500}
                                spy={true}
                                exact="true"
                                offset={-80}
                                className="cursor-pointer mr-10 font-medium transition ease-in-out duration-300 ">
                                About Me
                        </LinkS>
                    </li>
                    <li className="flex hover:text-indigo-300 justify-center items-center h-full">
                        <LinkS  to='work'
                                smooth={true}
                                duration={500}
                                spy={true}
                                exact="true"
                                offset={-80}
                                className="cursor-pointer mr-10 font-medium transition ease-in-out duration-300 ">
                                Projects
                        </LinkS>
                    </li>

                    <li className="flex hover:text-indigo-300 justify-center items-center h-full">
                        <LinkS  to='contact'
                                smooth={true}
                                duration={500}
                                spy={true}
                                exact="true"
                                offset={-80}
                                className="cursor-pointer mr-10 font-medium transition ease-in-out duration-300 ">
                                Contact Me
                        </LinkS>
                    </li>

                </ul>

            </div>

        </nav>
    )
}

export default Nav
