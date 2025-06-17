export type CategoryType = {
    id: number;
    categoryName: string;
    createdAt: string;
    documentId: string;
    publishedAt: string;
    slug: string;
    mainImage: {
        id: number;
        documentId: string;
        name: string;
        alternativeText: string | null;
        caption: string | null;
        url: string;
    };
};