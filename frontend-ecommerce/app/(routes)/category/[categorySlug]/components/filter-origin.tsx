import { useGetProductField } from "@/api/getProductField";
import { RadioGroup } from "@/components/ui/radio-group";

const FilterOrigin = () => {
    const { result,loading } = useGetProductField();
    return(
        <div className="my-5">
            <p className="mb-3 font-bold">Origen </p>
            {loading && result === null && (
                <p>Cargando...</p>
            )}
            
        </div>
    );
}

export default FilterOrigin;

/*
import { useGetProductField } from "@/api/getProductField";
import { RadioGroup } from "@/components/ui/radio-group";

const FilterOrigin = () => {
    const { result,loading } = useGetProductField();
    return(
        <div className="my-5">
            <p className="mb-3 font-bold">Origen </p>
            {loading && result === null && (
                <p>Cargando...</p>
            )}
            <RadioGroup>
                {result !== null && !loading && result.schema.origin.enum.map((origin: string) => (
                    <div key={origin} className="flex items-center space-x-2"> </div>
                ))}
            </RadioGroup>
        </div>
    );
}

export default FilterOrigin;

*/