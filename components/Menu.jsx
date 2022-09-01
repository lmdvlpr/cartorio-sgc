import Image from 'next/image'
import { Navbar } from 'flowbite-react'

export function Menu() {
	return (
		<>
			<div className="container mx-auto">
				<Navbar fluid={true} rounded={true}>
					<Navbar.Brand href="/">
						<Image
							src="/1.png"
							width={40}
							height={60}
							className="mr-3 h-6 sm:h-9"
							alt="Logo do Cartório De Registro De Imóveis, Hipotecas, Títulos e Documentos - São Gonçalo Dos Campos"
						/>
						<span className="self-center whitespace-nowrap ml-2 text-xl font-semibold dark:text-white">
							Cartório RI TD PJ
						</span>
					</Navbar.Brand>
					<Navbar.Toggle />
					<Navbar.Collapse>
						<Navbar.Link href="/" active={true}>
							Início
						</Navbar.Link>
						<Navbar.Link href="#servicos">Serviços</Navbar.Link>
						<Navbar.Link href="#sobre">Sobre</Navbar.Link>
						<Navbar.Link href="#modelos">Modelos</Navbar.Link>
						<Navbar.Link href="#contato">Contato</Navbar.Link>
					</Navbar.Collapse>
				</Navbar>
			</div>
		</>
	)
}
