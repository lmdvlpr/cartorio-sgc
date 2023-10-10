import { Accordion } from 'flowbite-react'
export function Modelos() {
	return (
		<>
			<section className="bg-white dark:bg-gray-900" id="modelos">
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
									Aqui estão alguns modelos para Títulos e Documentos.
								</p>
								<p className="mb-2 text-gray-500 dark:text-gray-400">
									Estamos trabalhando para fornecer mais modelos, com o tempo essa lista
									será atualizada.
								</p>
								<br />
								<ul className="list-disc pl-5 text-gray-500 dark:text-gray-400">
									<li>
										<a
											href="/arquivos/MODELO-DE-NOTIFICACAO.doc"
											className="text-blue-600 hover:underline dark:text-blue-500"
										>
											Modelo De Notificação Extrajudicial
										</a>
									</li>
									<li>
										<a
											href="/arquivos/MODELO-CONTRATO-DE-UNIAO-ESTAVEL.docx"
											rel="nofollow"
											className="text-blue-600 hover:underline dark:text-blue-500"
										>
											Modelo Contrato De União Estável
										</a>
									</li>
								</ul>
							</Accordion.Content>
						</Accordion.Panel>
						<Accordion.Panel>
							<Accordion.Title>Pessoa Jurídica</Accordion.Title>
							<Accordion.Content>
								<p className="mb-2 text-gray-500 dark:text-gray-400">
									Aqui estão alguns modelos para Pessoa Jurídica.
								</p>
								<p className="mb-2 text-gray-500 dark:text-gray-400">
									Estamos trabalhando para fornecer mais modelos, com o tempo essa lista será atualizada.
								</p>
								<br />
								<p className="mb-2 text-gray-500 dark:text-gray-400">
									Unidade Executora
								</p>
								<ul className="list-disc pl-5 text-gray-500 dark:text-gray-400">
									<li>
										<a
											href="/arquivos/CONSTITUIÇÃO.zip"
											className="text-blue-600 hover:underline dark:text-blue-500"
										>
											Kit Para Constituição - Unidade Executora (Caixa Escolar)
										</a>
									</li>
									<li>
										<a
											href="/arquivos/ALTERAÇÃO-CAIXA-ESCOLAR.zip"
											rel="nofollow"
											className="text-blue-600 hover:underline dark:text-blue-500"
										>
											Kit Para Alteração - Unidade Executora (Caixa Escolar)
										</a>
									</li>
									<li>
										<a
											href="/arquivos/ALTERAÇÃO-ATUALIZAR-ESTATUTO-COM-O-CARTÃO-BANCÁRIO.zip"
											rel="nofollow"
											className="text-blue-600 hover:underline dark:text-blue-500"
										>
											Kit Alteração - Para Atualizar Estatuto Com O Cartão Bancário
										</a>
									</li>
								</ul>
								<br />
								<p className="mb-2 text-gray-500 dark:text-gray-400">
									Associação
								</p>
								<ul className="list-disc pl-5 text-gray-500 dark:text-gray-400">
									<li>
										<a
											href="/arquivos/CONSTITUIÇÃO-ASSOCIAÇÃO.zip"
											className="text-blue-600 hover:underline dark:text-blue-500"
										>
											Kit Para Constituição - Associações
										</a>
									</li>
									<li>
										<a
											href="/arquivos/ELEIÇÃO-E-POSSE-ASSOCIAÇÃO.zip"
											rel="nofollow"
											className="text-blue-600 hover:underline dark:text-blue-500"
										>
											Kit Para Eleição e Posse - Associações
										</a>
									</li>
									<li>
										<a
											href="/arquivos/ALTERAÇÃO-ASSOCIAÇÃO.zip"
											rel="nofollow"
											className="text-blue-600 hover:underline dark:text-blue-500"
										>
											Kit Para Alteração do Estatuto - Associações
										</a>
									</li>
								</ul>
								<br />
								<p className="mb-2 text-gray-500 dark:text-gray-400">
									Sociedade Simples
								</p>
								<ul className="list-disc pl-5 text-gray-500 dark:text-gray-400">
									<li>
										<a
											href="/arquivos/CONSTITUIÇÃO-SOCIEDADE-SIMPLES.zip"
											className="text-blue-600 hover:underline dark:text-blue-500"
										>
											Kit Para Constituição - Sociedade Simples
										</a>
									</li>
								</ul>
								<br />
								<p className="mb-2 text-gray-500 dark:text-gray-400">
									Sociedade Unipessoal Simples
								</p>
								<ul className="list-disc pl-5 text-gray-500 dark:text-gray-400">
									<li>
										<a
											href="/arquivos/CONSTITUIÇÃO-SOCIEDADE-UNIPESSOAL-SIMPLES.zip"
											className="text-blue-600 hover:underline dark:text-blue-500"
										>
											Kit Para Constituição - Sociedade Unipessoal
										</a>
									</li>
								</ul>
								<br />
								<p className="mb-2 text-gray-500 dark:text-gray-400">
									Associação Religiosa - Igreja
								</p>
								<ul className="list-disc pl-5 text-gray-500 dark:text-gray-400">
									<li>
										<a
											href="/arquivos/CONSTITUIÇÃO-IGREJA.zip"
											className="text-blue-600 hover:underline dark:text-blue-500"
										>
											Kit Para Constituição - Igreja
										</a>
									</li>
									<li>
										<a
											href="/arquivos/ALTERAÇÃO-AVERBAÇÃO-IGREJA.zip"
											className="text-blue-600 hover:underline dark:text-blue-500"
										>
											Kit Para Averbação ou Alteração - Igreja
										</a>
									</li>
								</ul>
							</Accordion.Content>
						</Accordion.Panel>
						<Accordion.Panel>
							<Accordion.Title>Registro de Imóveis</Accordion.Title>
							<Accordion.Content>
								<p className="mb-2 text-gray-500 dark:text-gray-400">
									Aqui estão alguns modelos para Registro de Imóveis.
								</p>
								<p className="mb-2 text-gray-500 dark:text-gray-400">
									Estamos trabalhando para fornecer mais modelos, com o tempo essa lista será atualizada.
								</p>
								<br />
								<ul className="list-disc pl-5 text-gray-500 dark:text-gray-400">
									<li>
										<a
											href="https://docs.google.com/document/d/1Z-wZeqFjrmVlePlGjq_ZxYfbFBUQeHeEatTQ0yrvEOk/edit?usp=drive_link"
											rel="noreferrer"
											target="_blank"
											className="text-blue-600 hover:underline dark:text-blue-500"
										>
											Checklist Para Integralização - Formação ou Aumento de Capital Social
										</a>
									</li>
									<li>
										<a
											href="https://docs.google.com/document/d/1wL2dFXtd9HYBCqgLp2DYayOn5nsJnNR6mQ1ZKGvCTIE/edit?usp=drive_link"
											rel="noreferrer"
											target="_blank"
											className="text-blue-600 hover:underline dark:text-blue-500"
										>
											Checklist e Requerimento para Georreferenciamento Rural
										</a>
									</li>
									<li>
										<a
											href="https://docs.google.com/document/d/1NP36gtVO-zBK9Q6vCdLqeuWa-RNyWRQNRyMim6ozzMM/edit?usp=drive_link"
											rel="noreferrer"
											target="_blank"
											className="text-blue-600 hover:underline dark:text-blue-500"
										>
											Checklist para Desmembramento Urbano e Rural
										</a>
									</li>
									<li>
										<a
											href="https://docs.google.com/document/d/1SFktQ1n9xMWL4tiUj6Ct8Gf8dKbIEdbo8-Ts7Y0pM3o/edit?usp=drive_link"
											rel="noreferrer"
											target="_blank"
											className="text-blue-600 hover:underline dark:text-blue-500"
										>
											Checklist e Requerimento para Retificação de Área Urbana e Rural
										</a>
									</li>
									<li>
										<a
											href="https://docs.google.com/document/d/1vbji-R52VfxRyVE6KymdGUUNqc2OrkludD-MqRbKILM/edit?usp=drive_link"
											rel="noreferrer"
											target="_blank"
											className="text-blue-600 hover:underline dark:text-blue-500"
										>
											Checklist e Requerimento para Unificação/Fusão de Área Urbana e Rural
										</a>
									</li>
									<li>
										<a
											href="https://docs.google.com/document/d/120zP1TWZURO1Qelq6BDVrG1ej81tit-lPBYjtSC6fkI/edit?usp=drive_link"
											rel="noreferrer"
											target="_blank"
											className="text-blue-600 hover:underline dark:text-blue-500"
										>
											Checklist e Requerimento - Loteamento
										</a>
									</li>
									<li>
										<a
											href="https://docs.google.com/document/d/1YVE88Pkr0SgulQ-GxWfvfPOJKe2PCGZZmE-T5XlPEgY/edit?usp=drive_link"
											rel="noreferrer"
											target="_blank"
											className="text-blue-600 hover:underline dark:text-blue-500"
										>
											Checklist e Requerimento para Averbação de Construção
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
