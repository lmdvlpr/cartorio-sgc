import Image from 'next/image'

export function Cabecalho() {
	return (
		<>
			<section className="text-gray-600 body-font">
				<div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
					<div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
						<h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
							Seja bem-vindo(a)
							<br className="hidden lg:inline-block" />
							ao RI TD PJ - SGC
						</h1>
						<p className="mb-8 leading-relaxed">
							Estamos aqui para melhor atendê-lo! A nossa missão é prestar um
							serviço de qualidade e agilidade, para garantir a satisfação
							daqueles que buscam os nossos serviços.
						</p>
						<div className="flex justify-center">
							<button className="inline-flex text-white bg-primary-600 border-0 py-2 px-6 focus:outline-none hover:bg-primary-800 rounded text-lg">
								<a href="#servicos">Nossos Serviços</a>
							</button>
							<button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
								<a href="#sobre">O Cartório</a>
							</button>
						</div>
					</div>
					<div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
						<Image
							className="object-cover object-center rounded"
							src="/atendente.jpg"
							alt="mockup"
							width={700}
							height={600}
						/>
					</div>
				</div>
			</section>
		</>
	)
}
