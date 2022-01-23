import {XIcon} from '@heroicons/react/outline'
import Link from 'next/link'

function MobileNav({toggle, isOpen, logo, Image, LinkS}) {
    const opacity = isOpen ? " opacity-0 " : " opacity-100 "
    const top = isOpen ? " top-full" : " -top-0 "

    return (
        <aside className={"z-40 fixed bg-blk w-screen h-full md:font-fontMT font-sans grid items-center transition ease-in-out duration-300 left-0 text-white "+opacity+top}>
            <div onClick={toggle} className="absolute top-8 right-8 w-8 h-8 cursor-pointer outline-none">
                <XIcon className="text-3xl text-red-400 hover:text-red-500 transition ease-in-out duration-300 "/>
            </div>
            <div className="flex flex-col space-y-20">
                <Link passHref href="/" >
                        <div onClick={toggle} className="flex h-full justify-center items-center">
                            <Image className={"cursor-pointer"} src={logo} width={'85'} height={'85'} alt={'logo'}/>
                        </div>
                </Link>

                <ul className="grid text-center grid-cols-1 grid-rows-3 gap-4">
                    <LinkS  to='home'
                            onClick={toggle}
                            smooth={true}
                            duration={500}
                            spy={true}
                            exact="true"
                            offset={-80}
                            className="flex items-center justify-center text-xl font-semibold cursor-pointer hover:text-secondary transition ease-in-out duration-300">
                            Home
                    </LinkS>
                    <LinkS  to='aboutme'
                            onClick={toggle}
                            smooth={true}
                            duration={500}
                            spy={true}
                            exact="true"
                            offset={-80}
                            className="flex items-center justify-center text-xl font-semibold cursor-pointer hover:text-secondary transition ease-in-out duration-300">
                            About Me
                    </LinkS>
                    <LinkS  to='projects'
                            onClick={toggle}
                            smooth={true}
                            duration={500}
                            spy={true}
                            exact="true"
                            offset={-80}
                            className="flex items-center justify-center text-xl font-semibold cursor-pointer hover:text-secondary transition ease-in-out duration-300">
                            Projects
                    </LinkS>
                    <LinkS  to='contactme'
                            onClick={toggle}
                            smooth={true}
                            duration={500}
                            spy={true}
                            exact="true"
                            offset={-80}
                            className="flex items-center justify-center text-xl font-semibold cursor-pointer hover:text-secondary transition ease-in-out duration-300">
                            Contact Me
                    </LinkS>
                </ul>
            </div>
        </aside>
    )
}

export default MobileNav
