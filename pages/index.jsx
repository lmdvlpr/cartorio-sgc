import Head from 'next/head'
import { Modelos } from '../components/Modelos'
import { Sobre } from '../components/Sobre'
import { Cabecalho } from '../components/Cabecalho'
// import { Hero } from '../components/Hero'
import { Menu } from '../components/Menu'
import { Servicos } from '../components/Servicos'
import { Contato } from '../components/Contato'
// import { Rodape } from '../components/Rodape'
import { Footer } from '../components/Footer'

export default function Home() {
	return (
		<div>
			<Head>
				<title>Cartório São Gonçalo dos Campos</title>
				<meta name="description" content="Generated by create next app" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<Menu />
			<Cabecalho />
			<Servicos />
			<Sobre />
			<Modelos />
			<Contato />
			<Footer />
		</div>
	)
}
