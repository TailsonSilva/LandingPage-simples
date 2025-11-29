import Image from "next/image"
import about1Img from "../../public/images/about-1.png"
import about2Img from "../../public/images/about-2.png"
import { ChecksIcon, MapPin, WhatsappLogo } from "@phosphor-icons/react/dist/ssr"

export function About () {
    return (
        <section className="bg-[#FDF6ec] py-16">
            <div className="container px-4 mx-auto">
                {/* 1. O grid é definido aqui: 1 coluna por padrão, 2 colunas no 'lg' (desktop)
                 2. A classe 'items-center' garante que as colunas fiquem alinhadas no centro verticalmente.
                */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    
                    {/* COLUNA 1: IMAGEM */}
                    <div className="relative">
                        {/* ... (código das imagens) ... */}
                        <div className="relative w-full h-[400px] rounded-3xl overflow-hidden">
                            <Image
                                src={about1Img}
                                alt="Foto do Cachorro"
                                fill
                                quality={100}
                                className="object-cover hover:scale-110 duration-300"
                                priority
                            />
                        </div>

                        <div className="absolute w-40 h-40 right-4 -bottom-8 border-4 
                         overflow-hidden rounded-lg border-white">
                            <Image
                                src={about2Img}
                                alt="Foto do Cachorro 2"
                                fill
                                quality={100}
                                priority
                            />
                        </div>
                    </div>

                    {/* COLUNA 2: TEXTO E BOTÕES 
                     (Este div deve ser o segundo item dentro do grid container)
                    */}
                    <div className="space-y-6 mt-10 lg:mt-0"> 
                        <h2 className="text-4xl font-bold text-black">SOBRE</h2>

                        <p className="text-black">
                            Na [Nome da Loja], somos apaixonados por pets e dedicados 
                            ao bem-estar deles. Nossa missão é simples: oferecer os 
                            melhores produtos, desde nutrição premium até acessórios 
                            divertidos, garantindo que seu melhor amigo tenha uma vida 
                            feliz e saudável. Cuidar do seu pet é a nossa maior alegria.
                        </p>

                        <ul className="space-y-4 text-black">
                            {/* ... (itens da lista) ... */}
                            <li className="flex items-center gap-2">
                                <ChecksIcon className="text-red-500" />
                                Aberto desde 2006.
                            </li>

                            <li className="flex items-center gap-2">
                                <ChecksIcon className="text-red-500" />
                                Mais de 10 veterinários.
                            </li>

                            <li className="flex items-center gap-2">
                                <ChecksIcon className="text-red-500" />
                                Qualidade é nossa prioridade.
                            </li>
                        </ul>

                        <div className="flex gap-2 flex-wrap">
                            <a 
                                target='_blank'
                                href={'https://wa.me/00000000000?text=Olá vim pelo site e gostaria de mais informações'}
                                className="bg-[#E84C3D] text-white flex items-center justify-center w-fit gap-2 px-4 py-2 rounded-md focus:outline-none" // 🚨 ADICIONADO
                            >
                                <WhatsappLogo className="w-5 h-5 text-white" />
                                Contato via WhatsApp
                            </a>

                            <a href="#"
                                className="bg-[#E84C3D] text-white flex items-center justify-center w-fit gap-2 px-4 py-2 rounded-md focus:outline-none" // 🚨 ADICIONADO
                            >
                                {/* CORRIGIDO: O MapPin estava com text-black, troquei para text-white */}
                                <MapPin className="w-5 h-5 text-white" />
                                Endereço da loja
                            </a>
                        </div>
                        
                    </div>
                </div> {/* <--- O GRID FECHA AQUI! */}

            </div>

        </section>
    )
}