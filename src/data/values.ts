import Justice from "@components/icons/Justice.astro";

type Ventajas = {
    icon: (props: Record<string, any>) => any,
    title: string,
    description: string,
}

export const VENTAJAS:Ventajas[] = [
    {
        icon: Justice,
        title: "Nosotros defendemos la justicia",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In dignissim suscipit dolor eget volutpat. Cras libero urna, ultrices at mattis vitae, scelerisque eu odio."
    },
    {
        icon: Justice,
        title: "Nosotros defendemos la justicia",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In dignissim suscipit dolor eget volutpat. Cras libero urna, ultrices at mattis vitae, scelerisque eu odio."
    },
    {
        icon: Justice,
        title: "Nosotros defendemos la justicia",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In dignissim suscipit dolor eget volutpat. Cras libero urna, ultrices at mattis vitae, scelerisque eu odio."
    }
]