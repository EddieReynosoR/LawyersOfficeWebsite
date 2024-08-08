import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import {
    Form,
    FormControl,
    FormField,
    FormMessage
} from "@/components/ui/form";

const phoneRegex = new RegExp(
    /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/
);

const formSchema = z.object({
    email: z
    .string()
    .email({
        message: "Debes de proporcionar un correo electrónico válido."
    }),
    firstName: z.string().min(1, {
        message: "Ingresa tu nombre(s).",
    }),
    lastName: z.string().min(1, {
        message: "Ingresa tu(s) apellido(s).",
    }),
    phone: z
    .string()
    .regex(phoneRegex, "Debes de proporcionar un número de teléfono válido.")
})

export const ContactForm = () => {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
          email: "",
          firstName: "",
          lastName: "",
          phone: ""
        },
    });

    function onSubmit(values: z.infer<typeof formSchema>) {
        console.log(values);
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="max-w-md pl-5">
                <FormField 
                control={form.control}
                name="email"
                render={({ field }) => (
                    <div className="relative z-0 w-full mb-5 group">
                        <FormControl>
                            <input type="text" id="email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" {...field} placeholder=" " />
                        </FormControl>
                        <label htmlFor="email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Correo electrónico</label>
                        <FormMessage />
                    </div>
                )}
                />              
                <div className="grid md:grid-cols-2 md:gap-6">
                    <FormField 
                    control={form.control}
                    name="firstName"
                    render={({ field }) => (
                        <div className="relative z-0 w-full mb-5 group">
                            <FormControl>
                                <input type="text" id="firstName" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" {...field} placeholder=" " />
                            </FormControl>
                            <label htmlFor="firstName" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Nombre(s)</label>
                            <FormMessage />
                        </div>
                    )}
                    />
                    <FormField 
                    control={form.control}
                    name="lastName"
                    render={({ field }) => (
                        <div className="relative z-0 w-full mb-5 group">
                            <FormControl>
                                <input type="text" id="lastName" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" {...field} placeholder=" " />
                            </FormControl>
                            <label htmlFor="lastName" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Apellido(s)</label>
                            <FormMessage />
                        </div>
                    )}
                    />
                </div>
                <FormField 
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                        <div className="relative z-0 w-full mb-5 group">
                            <FormControl>
                                <input type="text" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"  id="phone" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" {...field} placeholder=" " />
                            </FormControl>
                            <label htmlFor="phone" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Número de teléfono (123-456-7890)</label>
                            <FormMessage />
                        </div>
                    )}
                    />
                <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
            </form>
        </Form>
    );
}
 