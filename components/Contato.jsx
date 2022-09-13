import { useState, useEffect } from 'react'

export function Contato() {
	const [success, setSuccess] = useState(false)

	useEffect(() => {
		if (window.location.search.includes('success=true')) {
			setSuccess(true)
		}
	}, [])
	return (
		<>
			<section className="bg-white dark:bg-gray-900" id="contato">
				<div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
					<h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">
						Contato
					</h2>
					<p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">
						Tem alguma dúvida? Entre em contato conosco!
					</p>
					{success && (
						<p className="mb-8 lg:mb-16 font-light text-center text-green-500 dark:text-green-400 sm:text-xl">
							Sua mensagem foi enviada com sucesso!
						</p>
					)}
					<form
						name="contact"
						method="POST"
						action="/?success=true"
						netlify-honeypot="bot-field"
						data-netlify="true"
						className="space-y-8"
					>
						<label className="invisible">
							Não preencha se você não for humano: <input name="bot-field" />
						</label>
						<input type="hidden" name="form-name" value="Contato via Site" />
						<div>
							<label
								htmlFor="yourname"
								className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
							>
								Seu Nome
							</label>
							<input
								type="text"
								name="yourname"
								id="yourname"
								className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
								placeholder="Informe o seu nome"
								required
							/>
						</div>
						<div>
							<label
								htmlFor="email"
								className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
							>
								Seu e-mail
							</label>
							<input
								type="email"
								name="email"
								id="email"
								className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
								placeholder="Informe o seu e-mail"
								required
							/>
						</div>
						<div className="sm:col-span-2">
							<label
								htmlFor="message"
								className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
							>
								Mensagem
							</label>
							<textarea
								name="message"
								id="message"
								rows={6}
								className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
								placeholder="Escreva aqui a sua mensagem..."
								defaultValue={''}
								required
							/>
						</div>
						<button
							type="submit"
							className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
						>
							Enviar Mensagem
						</button>
					</form>
				</div>
			</section>
		</>
	)
}
