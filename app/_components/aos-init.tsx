"use client"

import { useEffect } from "react";

export default function AosInit() { // Exportação padrão

    useEffect( () => {
        
        console.log("AOS Init logic triggered (assuming AOS library is loaded globally).");
    }, [])

    return null;
}