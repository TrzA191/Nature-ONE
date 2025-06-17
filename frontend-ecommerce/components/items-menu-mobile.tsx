import { Popover, PopoverContent, PopoverTrigger } from "@radix-ui/react-popover";
import {  Menu } from "lucide-react";
import Link from "next/link";

const ItemsMenuMobile = () => {
    return (
        <Popover>
            <PopoverTrigger>
                <Menu/>
            </PopoverTrigger>
            <PopoverContent>
                <Link href="/categories/alimentos" className="block">Alimentos</Link>
                <Link href="/categories/bebidas" className="block">Bebidas</Link>
                <Link href="/categories/cuidado-personal" className="block">Cuidado personal</Link>
            </PopoverContent>

        </Popover>
    );
}

export default ItemsMenuMobile;