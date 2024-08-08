type Questions = {
    title: string,
    answer: string | string[]
}

type Service = {
    id: string,
    title: string,
    description: string,
    image: string,
    sections: Questions[], 
}

export const SERVICES: Service[] = [
    {
        id: "abogado-penal",
        title: "Abogado Penal",
        description: "Nuestros abogados especialistas con más de 25 años de experiencia en derecho penal están para ayudarte y para velar por tus intereses.",
        image: "contact-form-image.webp",
        sections: [
            {
                title: "¿Qué es un abogado penal?",
                answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris pretium volutpat mattis. Nunc at semper dui, ac maximus nisl. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nullam ac semper nulla, non faucibus nisl. Phasellus auctor vitae lectus eget blandit. Mauris placerat convallis maximus. Suspendisse at facilisis libero. Aenean porttitor augue turpis, ut malesuada ex euismod non."
            },
            {
                title: "¿Qué es un abogado penal?",
                answer: ["Homicidio", "Secuestro", "Violación"]
            }
        ]
    },
]