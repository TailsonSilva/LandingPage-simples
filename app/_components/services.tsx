"use client"

import React from "react"
import useEmblaCarousel from "embla-carousel-react"
import { Scissors, Syringe, CarTaxiFront, Hotel, Icon } from 'lucide-react'
import { Card, CardContent } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import { WhatsappLogoIcon } from "@phosphor-icons/react/dist/ssr"
import { title } from "process"

const services = [
    {
        title: "banho & Tosa ",
        description: "Inclui banho com produtos específicos para todo tipo de pelagem do animal.",
        duration: "1h",
        price: "R$ 50",
        icon: <Scissors className="w-8 h-8 text-blue-400"/>
        
    },
    {
        title: "Consulta Veterinária",
        description: "Oferece atendimento clíbico básico ou especializado para cuidar da saíde do animal.",
        duration: "1h",
        price: "R$ 45",
        icon: <Syringe className="w-8 h-8 text-blue-400"/>
    },
    {
        title: "Táxi Pet",
        description: "Serviço de transporte para levar e buscar os pets no petshop.",
        duration: "2h",
        price: "R$ 100",
        icon: <CarTaxiFront className="w-8 h-8 text-blue-400"/>
        
    },
    {
        title: "Hotel para pets ",
        description: "Serviço de hospedagem para animais de estimação, ideal para qaundo tutores precisam viajar ou se ausentar por alguns dias.",
        duration: "1h",
        price: "R$ 120",
        icon: <Hotel className="w-8 h-8 text-blue-400"/>
        
    },
]

export function Services() {
    const [emblaRef, emblaApi] = useEmblaCarousel({
        loop: false,
        align: "start",
        slidesToScroll: 1,
        breakpoints: {
            "(min-width: 756px)": {slidesToScroll: 3 }
        }
    })

    return(
        <section className="bg-white py-16">
            <div className="container mx-auto px-4">
                <div className="mb-12">
                    <h2 className="text-4xl font-bold mb-8 text-gray-800">Serviços</h2>
                    <div>
                        <Carousel 
                            className="bg-[#1e293b] text-white rounded-2xl p-6 h-full"
                            opts={{
                                loop: false,
                                align: "start",
                                slidesToScroll: 1,
                            }}
                        >
                            <CarouselContent className="-ml-4">
                                    {services.map((service, index) => (
                                    <CarouselItem 
                                        key={index}
                                        className="pl-4 basis-full md:basis-1/2"
                                    >
                                            <Card className="bg-gray-800 text-white border-none shadow-lg h-full transition duration-300 hover:bg-gray-700">
                                                <CardContent className="flex flex-col p-6 space-y-4 h-full justify-between">
                                                    <div className="flex items-center space-x-4">
                                                        <div className="p-3 bg-blue-600/20 rounded-full">
                                                            {service.icon}
                                                        </div>
                                                        <h3 className="text-xl font-semibold">{service.title}</h3>
                                                    </div>

                                                    <p className="text-gray-300 flex-grow">{service.description}</p>
                                                    
                                                    <div className="pt-4 border-t border-gray-700">
                                                        <p className="text-sm font-medium">Duração: {service.duration}</p>
                                                        <p className="text-2xl font-bold text-green-400 mt-1">{service.price}</p>
                                                    </div>
                                                </CardContent>
                                            </Card>
                                    </CarouselItem>
                                ))}
                            </CarouselContent>
                            <CarouselPrevious className="text-white bg-blue-600 hover:bg-blue-700 disabled:opacity-50"/>
                            <CarouselNext className="text-white bg-blue-600 hover:bg-blue-700 disabled:opacity-50"/>
                        </Carousel>
                    </div>
                </div>
            </div>
        </section>
    )
}