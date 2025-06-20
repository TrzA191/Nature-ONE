"use client"

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useRouter } from "next/navigation";

const PageSuccess = () =>{
    const router = useRouter()
    return(
        <div className="max-w-5xl p-4 mx-auto sm:py-16 sm:px-24">  
            <div className="flex flex-col-reverse gap-2 sm:flex-row">
                <div className="flex justify-center md:min-w-[400px]">
                    <Image src="/success.jpg" alt="Success" width={250} height={500} className="rounded-lg"/>
                </div>
                <div>
                    <h1 className="text-3xl">¡Gracias por tu compra!</h1>
                    <p className="my-3">En nuestra tienda, nos comprometemos con la pureza y calidad de cada producto que ofrecemos. Seleccionamos cuidadosamente alimentos orgánicos cultivados sin pesticidas, herbicidas ni fertilizantes sintéticos. Cada artículo pasa por rigurosos controles de calidad para garantizar que llegue a tu hogar con todos sus nutrientes naturales intactos. Creemos en el poder de lo natural, por eso trabajamos directamente con productores locales que respetan la tierra y los ciclos naturales. Tu bienestar y el de tu familia son nuestra prioridad, ofreciendo productos que nutren el cuerpo y cuidan el planeta con cada compra.</p>
                    <p className="my-3"> ¡Disfruta tu producto!</p>
                    <Button onClick={()=> router.push("/")}>Volver a la tienda</Button>
                </div>
            </div>
        </div>
    );
}

export default PageSuccess;