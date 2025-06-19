import { useRouter } from "next/navigation";


interface ProductImageMiniatureProsps{
    slug:string,
    url:string
}

const ProductImageMiniature = (props:ProductImageMiniatureProsps) =>{
    const {slug, url} = props
    const router = useRouter()


    return(
        <div onClick={()=> router.push(`/product/${slug}`)}>
            <img src={`${process.env.NEXT_PUBLIC_BACKEND_URL}${url}`}
             alt="Product" 
             className="w-24 h-24 overflow-hidden rounded-md sm:w-auto sm:h-32"
             />

        </div> 
    );
}

export default ProductImageMiniature;