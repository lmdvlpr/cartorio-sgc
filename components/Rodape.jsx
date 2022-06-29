import { Footer } from 'flowbite-react'
import { BsFacebook, BsInstagram, BsWhatsapp } from 'react-icons/bs'
// import Image from 'next/image'

export function Rodape() {
	return (
		<>
			<Footer className="flex flex-col">
				<div className="w-full justify-between sm:flex sm:items-center sm:justify-between">
					<Footer.Brand
						href="/"
						src="/logo.png"
						alt="Flowbite Logo"
						name="Flowbite"
					/>
					<Footer.LinkGroup className="mt-3 flex-wrap items-center text-sm sm:mt-0">
						<Footer.Link href="#">About</Footer.Link>
						<Footer.Link href="#">Privacy Policy</Footer.Link>
						<Footer.Link href="#">Licensing</Footer.Link>
						<Footer.Link href="#">Contact</Footer.Link>
					</Footer.LinkGroup>
				</div>
				<hr className="my-6 w-full border-gray-200 p-1 dark:border-gray-700 sm:mx-auto lg:my-8" />
				<div className="w-full sm:flex sm:items-center sm:justify-between">
					<Footer.Copyright href="#" by="Flowbite™" year={2022} />
					<div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
						<Footer.Icon
							href="#"
							className="text-gray-400 hover:text-gray-900"
							icon={BsFacebook}
						/>
						<Footer.Icon
							href="#"
							className="text-gray-400 hover:text-gray-900"
							icon={BsInstagram}
						/>
						<Footer.Icon
							href="#"
							className="text-gray-400 hover:text-gray-900"
							icon={BsWhatsapp}
						/>
					</div>
				</div>
			</Footer>
		</>
	)
}
