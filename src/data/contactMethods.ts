import ChatIcon from "@components/icons/Chat.astro";
import LocationIcon from "@components/icons/Location.astro";
import CallIcon from "@components/icons/Call.astro";

type ContactMethods = {
    icon: (props: Record<string, any>) => any,
    title: string,
    description: string,
    buttonText: string
}

export const CONTACT_METHODS: ContactMethods[] = [
    {
        icon: ChatIcon,
        title: "Mándanos mensaje",
        description: "Envíanos un mensaje vía WhatsApp y uno de nuestros abogados te atenderá.",
        buttonText: "Enviar mensaje"
    },
    {
        icon: LocationIcon,
        title: "Visítanos",
        description: "Visita nuestras oficinas para poder brindarte ayuda y atenderte presencialmente.",
        buttonText: "Ver en Google Maps"
    },
    {
        icon: CallIcon,
        title: "Llámanos",
        description: "Llámanos ahora, de Lunes a Viernes desde las 8 am a 5 pm.",
        buttonText: "Llamar ahora"
    },
]