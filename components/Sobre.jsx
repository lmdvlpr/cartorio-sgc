import Image from 'next/image'

export function Sobre() {
	return (
		<>
			<section className="text-gray-400  body-font">
				<div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
					<div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 md:mb-0 mb-10">
						<Image
							className="object-cover object-center rounded"
							alt="hero"
							src="/logo.png"
							width={720}
							height={600}
						/>
					</div>
					<div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
						{/* <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
							Sobre o Cartório
						</h2> */}
						<h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
							Sobre o Cartório
							{/* <br className="hidden lg:inline-block" />
							readymade gluten */}
						</h1>
						<p className="mb-8 leading-relaxed">
							O Cartório de Registro de Imóveis, Títulos, Documentos e Pessoa
							Jurídica é uma serventia localizada na cidade São Gonçalo dos
							Campos no interior da Bahia. Sendo responsável por três
							atribuições, estamos aqui para melhor atendê-lo! A nossa missão é
							prestar um serviço de qualidade e agilidade, para garantir a
							satisfação daqueles que buscam os nossos serviços.
						</p>
						<div className="flex justify-center">
							<button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
								Modelos de Documentos
							</button>
							<button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
								Entre em Contato
							</button>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}
