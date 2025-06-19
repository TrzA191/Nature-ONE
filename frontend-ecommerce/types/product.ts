export type ProductType = {
    id: number;
    taste:string;
    productName: string;
    slug: string;
    description: string;
    active: boolean;
    isFeatured: boolean;
    origin: string;
    price: number;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    documentId: string;
    length:boolean;
    images: {
        id: number;
        documentId: string;
        name: string;
        alternativeText: string | null;
        caption: string | null;
        url: string;
        // ... otros campos de la imagen
    }[];
    category: {
        id: number;
        categoryName: string;
        slug: string;
        createdAt: string;
        updatedAt: string;
        publishedAt: string;
        documentId: string;
    };
};