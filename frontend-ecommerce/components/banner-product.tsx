import Link from "next/link";
import { buttonVariants } from "./ui/button";

const BannerProduct = () => {
    return (
        <>
        <div className="mt-4 text-center">
            <p>Sumérgete en una experiencia única</p>
            <h4 className="mt-2 text-5xl font-extrabold uppercase">Productos Saludables</h4>
            <p className="my-2 text-lg">Siente el poder de lo puro</p>
            <Link href="#" className={buttonVariants()}>Comprar</Link>
        </div>
<div className="w-full h-[450px] bg-[url('/slider-image.jpg')] bg-center bg-cover bg-no-repeat mt-5" />
        </>
    );
};

export default BannerProduct;