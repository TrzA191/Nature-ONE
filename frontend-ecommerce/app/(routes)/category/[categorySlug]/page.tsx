"use client"

import { useGetCategoryProduct } from "@/api/getCategoryProduct";
import { Separator } from "@/components/ui/separator";
import { ResponseType } from "@/types/response";
import { useParams , useRouter} from "next/navigation";
import FiltersControlsCategory from "./components/filters-controls-category";

export default function Page() {
    const params = useParams();
    const { categorySlug } = params;
    console.log(categorySlug);

    // Only call the hook if categorySlug is defined
    const { result, loading }: ResponseType = useGetCategoryProduct(
        typeof categorySlug === "string" || Array.isArray(categorySlug)
            ? categorySlug
            : ""
    );
    const router = useRouter();
    console.log(result);
    return (
        <div className="max-w-6xl py-4 mx-auto sm:py-16 sm:px-24">
            {result !== null && !loading &&(
                <h1 className="text-3xl font-medium">Vida Orgánica  {result[0].category.categoryName} </h1>

            )}
            <Separator/>
            <div className="sm:flex sm:justify-between">
                <FiltersControlsCategory />
            </div>
        </div>
    )
} 