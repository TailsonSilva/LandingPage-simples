"use client"

import { PawPrint, CaretLeft, CaretRight, WhatsappLogo } from "@phosphor-icons/react/dist/ssr"
import Slider from "react-slick"

// --- 1. Componente de Seta para a Direita (Próximo) ---
const NextArrow = (props:any) => {
    const { onClick } = props;
    return (
        <div
            // Posiciona a seta absolutamente no centro (vertical) à direita
            className="absolute top-1/2 -translate-y-1/2 right-0 z-10 cursor-pointer"
            onClick={onClick}
        >
            {/* Seta vermelha customizada */}
            <CaretRight className="w-8 h-8 text-red-500 hover:text-[#E84C3D] transition duration-200" weight="bold" />
        </div>
    );
};

// --- 2. Componente de Seta para a Esquerda (Anterior) ---
const PrevArrow = (props:any) => {
    const { onClick } = props;
    return (
        <div
            // Posiciona a seta absolutamente no centro (vertical) à esquerda
            className="absolute top-1/2 -translate-y-1/2 left-0 z-10 cursor-pointer"
            onClick={onClick}
        >
            {/* Seta vermelha customizada */}
            <CaretLeft className="w-8 h-8 text-red-500 hover:text-[#E84C3D] transition duration-200" weight="bold" />
        </div>
    );
};


// --- 3. Array de Dados dos Serviços ---
const services = [
    {
        title: "Consulta Veterinária",
        description: "Exames de rotina, vacinação e diagnóstico completo para a saúde do seu pet.",
        icon: PawPrint,
        color: "text-blue-400",
    },
    {
        title: "Banho e Tosa",
        description: "Higiene completa e tosa especializada em um ambiente seguro e relaxante.",
        icon: PawPrint,
        color: "text-green-400",
    },
    {
        title: "Produtos Premium",
        description: "As melhores rações, suplementos e acessórios do mercado.",
        icon: PawPrint,
        color: "text-yellow-400",
    },
    {
        title: "Day Care & Hotel",
        description: "Espaço seguro e divertido para seu pet passar o dia ou as férias.",
        icon: PawPrint,
        color: "text-purple-400",
    },
];

// --- 4. CONFIGURAÇÃO DE CONTATO ---
// IMPORTANTE: Mude SEU_NUMERO_AQUI para o número de telefone completo (ex: 5511999998888)
const WHATSAPP_NUMBER = "5511999998888"; 

export function Services () {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3, 
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        
        // Aplica as setas customizadas
        arrows: true,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,

        responsive: [
            {
                breakpoint: 1024, 
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 600, 
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return(
        // Fundo da seção definido como branco (mantendo sua alteração)
        <section className="bg-white py-16 mt-16">
            <div className="container mx-auto px-4">
                <div className="mb-12 text-center">
                    <h2 className="text-4xl font-bold text-black">Nossos serviços</h2>
                    <p className="text-gray-600 mt-2">Cuidado completo para o seu melhor amigo.</p>
                </div>

                {/* Container do Carrossel */}
                <Slider {...settings}>
                    {services.map((item, index) => {
                        // Constrói a mensagem automática do WhatsApp
                        const whatsappMessage = encodeURIComponent(`Olá, gostaria de saber mais sobre o serviço de ${item.title}.`);
                        const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappMessage}`;
                        
                        return (
                            <div key={index} className="px-3"> 
                                {/* Fundo do cartão em azul-escuro */}
                                <article className="bg-[#1e293b] text-white rounded-2xl p-6 space-y-4 h-full flex flex-col shadow-lg">
                                    
                                    {/* Ícone do Serviço */}
                                    <item.icon className={`w-10 h-10 ${item.color}`} weight="fill" /> 
                                    
                                    {/* Título */}
                                    <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                                    
                                    {/* Descrição */}
                                    <p className="text-gray-300">{item.description}</p>
                                    
                                    {/* BOTÃO WHATSAPP */}
                                    <a
                                        target='_blank'
                                        href={'https://wa.me/00000000000?text=Olá vim pelo site e gostaria de mais informações sobre ${item.title}'}
                                        rel="noopener noreferrer"
                                        className="mt-4 inline-flex items-center justify-center gap-2 
                                                   bg-green-500 text-white font-medium px-4 py-2 
                                                   rounded-lg transition duration-300 
                                                   hover:bg-green-600"
                                    >
                                        <WhatsappLogo className="w-5 h-5" weight="bold" />
                                        Solicitar
                                    </a>

                                </article>
                            </div>
                        );
                    })}
                </Slider>
                
            </div>
        </section>
    )
}