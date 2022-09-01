import Image from 'next/image'
// import Image from 'next/image'

export function Footer() {
  return (
    <>
      <footer className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
          <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left md:mt-0 mt-10">
            <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
              <Image
                src="/1.png"
                width={40}
                height={60}
                className="mr-3 h-6 sm:h-9"
                alt="Logo do Cartório De Registro De Imóveis, Hipotecas, Títulos e Documentos - São Gonçalo Dos Campos"
              />
              <span className="ml-2 self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                Cartório RI TD PJ
              </span>
            </a>
            <p className="mt-2 text-sm text-gray-500">
              Rua Cel. Antônio Carlos Carlos, 02 <br />
              Ed. Garden Plaza Center, Sala 12 <br />
              Centro, São Gonçalo dos Campos - BA. <br />
              CEP: 44.330-000
            </p>
          </div>
          <div className="flex-grow flex flex-wrap md:pr-20 -mb-10 md:text-left text-center order-first">
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
                LINKS ÚTEIS
              </h2>
              <nav className="list-none mb-10">
                <li>
                  <a
                    href="https://ibatdpj.com.br/tela_inicial"
                    rel="noreferrer"
                    target="_blank"
                    className="text-gray-600 hover:text-gray-800">Central IBATDPJ</a>
                </li>
                <li>
                  <a
                    href="http://regin.ibatdpj.com.br:8181/servicosregin/servicos.html"
                    rel="noreferrer"
                    target="_blank"
                    className="text-gray-600 hover:text-gray-800">REDESIM</a>
                </li>
                <li>
                  <a
                    href="http://www5.tjba.jus.br/portal"
                    rel="noreferrer"
                    target="_blank"
                    className="text-gray-600 hover:text-gray-800">TJBA</a>
                </li>
                <li>
                  <a
                    href="http://servicos.receita.fazenda.gov.br/Servicos/cnpjreva/Cnpjreva_Solicitacao.asp?cnpj="
                    rel="noreferrer"
                    target="_blank" className="text-gray-600 hover:text-gray-800">RECEITA FEDERAL</a>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
                LINKS ÚTEIS
              </h2>
              <nav className="list-none mb-10">
                <li>
                  <a
                    href="https://www.registrodeimoveis.org.br"
                    rel="noreferrer"
                    target="_blank"
                    className="text-gray-600 hover:text-gray-800">RI Brasil</a>
                </li>
                <li>
                  <a
                    href="https://www.gov.br/pt-br/servicos/assinatura-eletronica"
                    rel="noreferrer"
                    target="_blank"
                    className="text-gray-600 hover:text-gray-800">Assinatura Digital</a>
                </li>
                <li>
                  <a
                    href="https://www.tjba.jus.br/selodigital/login"
                    rel="noreferrer"
                    target="_blank"
                    className="text-gray-600 hover:text-gray-800">Selo Digital</a>
                </li>
                <li>
                  <a
                    href="https://verificador.iti.gov.br"
                    rel="noreferrer"
                    target="_blank" className="text-gray-600 hover:text-gray-800">Verificador de Assinatura</a>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
                LINKS ÚTEIS
              </h2>
              <nav className="list-none mb-10">
                <li>
                  <a
                    href="https://www.bahia.ba.gov.br"
                    rel="noreferrer"
                    target="_blank"
                    className="text-gray-600 hover:text-gray-800">Governo da Bahia</a>
                </li>
                <li>
                  <a
                    href="http://www.sac.ba.gov.br"
                    rel="noreferrer"
                    target="_blank"
                    className="text-gray-600 hover:text-gray-800">SAC Bahia</a>
                </li>
                <li>
                  <a
                    href="https://www.detran.ba.gov.br"
                    rel="noreferrer"
                    target="_blank"
                    className="text-gray-600 hover:text-gray-800">Detran Bahia</a>
                </li>
                <li>
                  <a
                    href="https://www.saogoncalodoscampos.ba.gov.br"
                    rel="noreferrer"
                    target="_blank" className="text-gray-600 hover:text-gray-800">Prefeitura SGC</a>
                </li>
              </nav>
            </div>
            {/* <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
                CATEGORIES
              </h2>
              <nav className="list-none mb-10">
                <li>
                  <a className="text-gray-600 hover:text-gray-800">First Link</a>
                </li>
                <li>
                  <a className="text-gray-600 hover:text-gray-800">Second Link</a>
                </li>
                <li>
                  <a className="text-gray-600 hover:text-gray-800">Third Link</a>
                </li>
                <li>
                  <a className="text-gray-600 hover:text-gray-800">Fourth Link</a>
                </li>
              </nav>
            </div> */}
          </div>
        </div>
        <div className="bg-gray-100">
          <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
            <p className="text-gray-500 text-sm text-center sm:text-left">
              {new Date().getFullYear()} Cartório RI TD PJ —
              <a
                href="mailto:contato.lukamota@gmail.com"
                rel="noopener noreferrer"
                className="text-gray-600 ml-1"
                target="_blank"
              >
                Feito por: Lucas Mota
              </a>
            </p>
            <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
              {/* E-mail Icon */}
              <a
                href="mailto:cartorio.registrosgc@gmail.com"
                className="text-gray-500">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </a>
              {/* Instagram Icon */}
              <a
                href="https://www.instagram.com/"
                rel="noreferrer"
                target="_blank"
                className="ml-3 text-gray-500">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <rect width={20} height={20} x={2} y={2} rx={5} ry={5} />
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01" />
                </svg>
              </a>
              {/* WhatsApp Icon */}
              <a
                href="https://wa.me/5575998480101"
                rel="noreferrer"
                target="_blank"
                className="ml-3 text-gray-500">
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M 12.011719 2 C 6.5057187 2 2.0234844 6.478375 2.0214844 11.984375 C 2.0204844 13.744375 2.4814687 15.462563 3.3554688 16.976562 L 2 22 L 7.2324219 20.763672 C 8.6914219 21.559672 10.333859 21.977516 12.005859 21.978516 L 12.009766 21.978516 C 17.514766 21.978516 21.995047 17.499141 21.998047 11.994141 C 22.000047 9.3251406 20.962172 6.8157344 19.076172 4.9277344 C 17.190172 3.0407344 14.683719 2.001 12.011719 2 z M 12.009766 4 C 14.145766 4.001 16.153109 4.8337969 17.662109 6.3417969 C 19.171109 7.8517969 20.000047 9.8581875 19.998047 11.992188 C 19.996047 16.396187 16.413812 19.978516 12.007812 19.978516 C 10.674812 19.977516 9.3544062 19.642812 8.1914062 19.007812 L 7.5175781 18.640625 L 6.7734375 18.816406 L 4.8046875 19.28125 L 5.2851562 17.496094 L 5.5019531 16.695312 L 5.0878906 15.976562 C 4.3898906 14.768562 4.0204844 13.387375 4.0214844 11.984375 C 4.0234844 7.582375 7.6067656 4 12.009766 4 z M 8.4765625 7.375 C 8.3095625 7.375 8.0395469 7.4375 7.8105469 7.6875 C 7.5815469 7.9365 6.9355469 8.5395781 6.9355469 9.7675781 C 6.9355469 10.995578 7.8300781 12.182609 7.9550781 12.349609 C 8.0790781 12.515609 9.68175 15.115234 12.21875 16.115234 C 14.32675 16.946234 14.754891 16.782234 15.212891 16.740234 C 15.670891 16.699234 16.690438 16.137687 16.898438 15.554688 C 17.106437 14.971687 17.106922 14.470187 17.044922 14.367188 C 16.982922 14.263188 16.816406 14.201172 16.566406 14.076172 C 16.317406 13.951172 15.090328 13.348625 14.861328 13.265625 C 14.632328 13.182625 14.464828 13.140625 14.298828 13.390625 C 14.132828 13.640625 13.655766 14.201187 13.509766 14.367188 C 13.363766 14.534188 13.21875 14.556641 12.96875 14.431641 C 12.71875 14.305641 11.914938 14.041406 10.960938 13.191406 C 10.218937 12.530406 9.7182656 11.714844 9.5722656 11.464844 C 9.4272656 11.215844 9.5585938 11.079078 9.6835938 10.955078 C 9.7955938 10.843078 9.9316406 10.663578 10.056641 10.517578 C 10.180641 10.371578 10.223641 10.267562 10.306641 10.101562 C 10.389641 9.9355625 10.347156 9.7890625 10.285156 9.6640625 C 10.223156 9.5390625 9.737625 8.3065 9.515625 7.8125 C 9.328625 7.3975 9.131125 7.3878594 8.953125 7.3808594 C 8.808125 7.3748594 8.6425625 7.375 8.4765625 7.375 z" />
                </svg>
              </a>
            </span>
          </div>
        </div>
      </footer>
    </>
  )
}
