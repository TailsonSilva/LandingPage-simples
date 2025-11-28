"use client"

import { Star, CaretLeft, CaretRight, Quotes } from "@phosphor-icons/react/dist/ssr"
import Slider from "react-slick"
import tutor1 from '../../public/images/tutor1.png'
import tutor2 from '../../public/images/tutor2.jpg'
import tutor3 from '../../public/images/tutor3.jpg'
import Image from "next/image"

// --- 1. Dados dos Depoimentos ---
const TESTIMONIALS = [
    {
        author: "Ana C.",
        role: "Cliente Premium",
        content: "O melhor atendimento veterinário que já tivemos. O Dr. Lucas foi atencioso, e meu gato se recuperou super rápido. Recomendo os produtos premium!",
        rating: 5,
        image: tutor2
    },
    {
        author: "Marcos P.",
        role: "Dono do Rex",
        content: "O serviço de banho e tosa é impecável. Rex sempre volta para casa cheiroso e feliz. O agendamento online é muito prático.",
        rating: 5,
        image: tutor1
    },
    {
        author: "Lúcia S.",
        role: "Dona da Luna",
        content: "Usei o Day Care nas férias e fiquei totalmente tranquila. O espaço é seguro e a Luna fez vários amigos. Cinco estrelas!",
        rating: 4,
        image: tutor3
    },
];

// --- 2. Componentes de Seta (Adaptados para o novo layout) ---
const NextArrow = (props) => {
    const { onClick } = props;
    return (
        <div
            className="absolute top-1/2 -translate-y-1/2 right-4 z-10 cursor-pointer"
            onClick={onClick}
        >
            <CaretRight className="w-8 h-8 text-red-500 hover:text-[#E84C3D] transition duration-200" weight="bold" />
        </div>
    );
};

const PrevArrow = (props) => {
    const { onClick } = props;
    return (
        <div
            className="absolute top-1/2 -translate-y-1/2 left-4 z-10 cursor-pointer"
            onClick={onClick}
        >
            <CaretLeft className="w-8 h-8 text-red-500 hover:text-[#E84C3D] transition duration-200" weight="bold" />
        </div>
    );
};

// --- Função para Renderizar Estrelas (Visual simples) ---
const renderStars = (rating) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
        stars.push(
            <Star 
                key={i} 
                weight={i < rating ? "fill" : "regular"} 
                className="w-5 h-5 text-yellow-500" 
            />
        );
    }
    return <div className="flex justify-center mb-4">{stars}</div>;
};


export function Testimonials () {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1, // APENAS 1 SLIDE VISÍVEL POR VEZ
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        
        arrows: true,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
    };

    return(
        // Fundo amarelo mantido
        <section className="bg-[#FFD449] py-16">
            <div className="container mx-auto px-4">
                
                {/* Cabeçalho da Seção */}
                <div className="mb-12 text-center">
                    <h2 className="text-4xl font-bold text-black">O que dizem sobre nós</h2>
                    {/* CORREÇÃO: Usando text-gray-600 para garantir visibilidade no fundo amarelo */}
                    <p className="text-gray-600 mt-2">Veja a experiência de quem confia no nosso cuidado.</p>
                </div>

                {/* Container do Carrossel */}
                <div className="max-w-3xl mx-auto relative">
                    <Slider {...settings}>
                        {TESTIMONIALS.map((depoimento, index) => (
                            <div key={index} className="px-3 py-6"> 
                                <article className="bg-white text-black rounded-2xl p-8 shadow-2xl h-full flex flex-col items-center text-center">
                                    
                                    {/* Ícone de Aspas (Adicionado novamente) */}
                                    <Quotes className="w-12 h-12 text-[#E84C3D] mb-4" weight="fill" />
                                    
                                    {/* Estrelas (Adicionado novamente) */}
                                    {renderStars(depoimento.rating)}

                                    <div className="flex flex-col items-center text-center space-y-4">
                                        {/* Imagem do Tutor */}
                                        <div className="relative w-24 h-24">
                                            <Image
                                                // CORREÇÃO: Usando a variável 'depoimento'
                                                src={depoimento.image} 
                                                alt={depoimento.author}
                                                fill
                                                sizes="96px"
                                                className="object-cover rounded-full"
                                            />
                                        </div>

                                        {/* Texto do Depoimento */}
                                        <p className="text-gray-800 italic text-lg leading-relaxed pt-2">
                                            {/* CORREÇÃO: Usando a variável 'depoimento' */}
                                            "{depoimento.content}"
                                        </p>
                                    </div>
                                    
                                    {/* Nome e Cargo */}
                                    {/* CORREÇÃO: Usando as variáveis 'depoimento.author' e 'depoimento.role' */}
                                    <h4 className="text-xl font-semibold text-black mt-6">{depoimento.author}</h4>
                                    <p className="text-sm text-red-500 font-medium">{depoimento.role}</p>

                                </article>
                            </div>
                        ))}
                    </Slider>
                </div>
                
            </div>
        </section>
    )
}