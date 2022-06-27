import Image from 'next/image'
import { Navbar } from 'flowbite-react'

export function Menu() {
	return (
		<>
			<Navbar fluid={true} rounded={true}>
				<Navbar.Brand href="https://flowbite.com/">
					{/* <Image
						src="/vercel.svg"
						width={72}
						height={16}
						className="mr-3 h-6 sm:h-9"
						alt="Flowbite Logo"
					/> */}
					<span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
						Cartório SGC
					</span>
				</Navbar.Brand>
				<Navbar.Toggle />
				<Navbar.Collapse>
					<Navbar.Link href="/navbars" active={true}>
						Início
					</Navbar.Link>
					<Navbar.Link href="/navbars">Serviços</Navbar.Link>
					<Navbar.Link href="/navbars">Sobre</Navbar.Link>
					<Navbar.Link href="/navbars">Modelos</Navbar.Link>
					<Navbar.Link href="/navbars">Contato</Navbar.Link>
				</Navbar.Collapse>
			</Navbar>
		</>
	)
}