import { Accordion } from 'flowbite-react'
export function Modelos() {
	return (
		<>
			<section className="bg-white dark:bg-gray-900">
				<div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
					<div className="mx-auto max-w-screen-sm text-center">
						<h2 className="mb-4 text-4xl tracking-tight font-extrabold leading-tight text-gray-900 dark:text-white">
							Modelos de Documentos
						</h2>
						<p className="mb-6 font-light text-gray-500 dark:text-gray-400 md:text-lg">
							Confira abaixo os modelos que preparamos para auxiliar os nossos
							clientes na elaboração de seus documentos.
						</p>
					</div>
					<Accordion alwaysOpen={true}>
						<Accordion.Panel>
							<Accordion.Title>Títulos e Documentos</Accordion.Title>
							<Accordion.Content>
								<p className="mb-2 text-gray-500 dark:text-gray-400">
									The main difference is that the core components from Flowbite
									are open source under the MIT license, whereas Tailwind UI is
									a paid product. Another difference is that Flowbite relies on
									smaller and standalone components, whereas Tailwind UI offers
									sections of pages.
								</p>
								<p className="mb-2 text-gray-500 dark:text-gray-400">
									However, we actually recommend using both Flowbite, Flowbite
									Pro, and even Tailwind UI as there is no technical reason
									stopping you from using the best of two worlds.
								</p>
								<p className="mb-2 text-gray-500 dark:text-gray-400">
									Learn more about these technologies:
								</p>
								<ul className="list-disc pl-5 text-gray-500 dark:text-gray-400">
									<li>
										<a
											href="https://flowbite.com/pro/"
											className="text-blue-600 hover:underline dark:text-blue-500"
										>
											Flowbite Pro
										</a>
									</li>
									<li>
										<a
											href="https://tailwindui.com/"
											rel="nofollow"
											className="text-blue-600 hover:underline dark:text-blue-500"
										>
											Tailwind UI
										</a>
									</li>
								</ul>
							</Accordion.Content>
						</Accordion.Panel>
						<Accordion.Panel>
							<Accordion.Title>Pessoa Jurídica</Accordion.Title>
							<Accordion.Content>
								<p className="mb-2 text-gray-500 dark:text-gray-400">
									The main difference is that the core components from Flowbite
									are open source under the MIT license, whereas Tailwind UI is
									a paid product. Another difference is that Flowbite relies on
									smaller and standalone components, whereas Tailwind UI offers
									sections of pages.
								</p>
								<p className="mb-2 text-gray-500 dark:text-gray-400">
									However, we actually recommend using both Flowbite, Flowbite
									Pro, and even Tailwind UI as there is no technical reason
									stopping you from using the best of two worlds.
								</p>
								<p className="mb-2 text-gray-500 dark:text-gray-400">
									Learn more about these technologies:
								</p>
								<ul className="list-disc pl-5 text-gray-500 dark:text-gray-400">
									<li>
										<a
											href="https://flowbite.com/pro/"
											className="text-blue-600 hover:underline dark:text-blue-500"
										>
											Flowbite Pro
										</a>
									</li>
									<li>
										<a
											href="https://tailwindui.com/"
											rel="nofollow"
											className="text-blue-600 hover:underline dark:text-blue-500"
										>
											Tailwind UI
										</a>
									</li>
								</ul>
							</Accordion.Content>
						</Accordion.Panel>
						<Accordion.Panel>
							<Accordion.Title>Imóveis</Accordion.Title>
							<Accordion.Content>
								<p className="mb-2 text-gray-500 dark:text-gray-400">
									The main difference is that the core components from Flowbite
									are open source under the MIT license, whereas Tailwind UI is
									a paid product. Another difference is that Flowbite relies on
									smaller and standalone components, whereas Tailwind UI offers
									sections of pages.
								</p>
								<p className="mb-2 text-gray-500 dark:text-gray-400">
									However, we actually recommend using both Flowbite, Flowbite
									Pro, and even Tailwind UI as there is no technical reason
									stopping you from using the best of two worlds.
								</p>
								<p className="mb-2 text-gray-500 dark:text-gray-400">
									Learn more about these technologies:
								</p>
								<ul className="list-disc pl-5 text-gray-500 dark:text-gray-400">
									<li>
										<a
											href="https://flowbite.com/pro/"
											className="text-blue-600 hover:underline dark:text-blue-500"
										>
											Flowbite Pro
										</a>
									</li>
									<li>
										<a
											href="https://tailwindui.com/"
											rel="nofollow"
											className="text-blue-600 hover:underline dark:text-blue-500"
										>
											Tailwind UI
										</a>
									</li>
								</ul>
							</Accordion.Content>
						</Accordion.Panel>
					</Accordion>
				</div>
			</section>
		</>
	)
}
