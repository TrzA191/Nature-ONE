"use client";
import { useGetCategories } from '@/api/getProducts';
import { CategoryType } from '@/types/category';
import { ResponseType } from '@/types/response';
import Link from 'next/link';
import { useState } from 'react';

const ChooseCategory = () => {
    const {result, loading}:ResponseType= useGetCategories();
    const [currentIndex, setCurrentIndex] = useState(0);
    
    // Configuración del carrusel
    const itemsPerView = 3;
    const totalItems = result?.length || 0;
    const maxIndex = Math.max(0, totalItems - itemsPerView);
    
    const nextSlide = () => {
        setCurrentIndex(prev => prev < maxIndex ? prev + 1 : 0);
    };
    
    const prevSlide = () => {
        setCurrentIndex(prev => prev > 0 ? prev - 1 : maxIndex);
    };
    
    return (
        <div className="max-w-6xl py-4 mx-auto sm:py-16 sm:px-24">
            <h3 className="px-6 pb-4 text-3xl sm:pb-8">Elige tu categoría favorita</h3>
            
            {!loading && result !== undefined && (
                <div className="relative">
                    {/* Contenedor del carrusel */}
                    <div className="overflow-hidden">
                        <div 
                            className="flex gap-5 transition-transform duration-500 ease-in-out"
                            style={{
                                transform: `translateX(-${(currentIndex * (100 / itemsPerView))}%)`
                            }}
                        >
                            {result.map((category:CategoryType) => (
                                <Link
                                    key={category.id}
                                    href={`/category/${category.slug}`}
                                    className="relative max-w-xs mx-auto overflow-hidden bg-no-repeat bg-cover flex-shrink-0 w-1/3"
                                >
                                    <img 
                                        src={`${process.env.NEXT_PUBLIC_BACKEND_URL}${category.mainImage.url}`}
                                        alt={category.categoryName} 
                                        className='max-w-[270px] transition duration-300 ease-in-out rounded-2xl hover:scale-110'
                                    />
                                    <p className='absolute w-full py-2 text-lg font-bold text-center text-white bottom-5 backdrop-blur-lg'>{category.categoryName}</p>
                                </Link>
                            ))}
                        </div>
                    </div>
                    
                    {/* Controles del carrusel - solo si hay más de 3 items */}
                    {totalItems > itemsPerView && (
                        <>
                            <button
                                onClick={prevSlide}
                                className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/80 backdrop-blur-sm rounded-full p-2 shadow-lg hover:bg-white transition-colors z-10"
                            >
                                <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                </svg>
                            </button>
                            <button
                                onClick={nextSlide}
                                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/80 backdrop-blur-sm rounded-full p-2 shadow-lg hover:bg-white transition-colors z-10"
                            >
                                <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </button>
                            
                            {/* Indicadores de puntos */}
                            <div className="flex justify-center mt-6 space-x-2">
                                {Array.from({ length: maxIndex + 1 }).map((_, index) => (
                                    <button
                                        key={index}
                                        onClick={() => setCurrentIndex(index)}
                                        className={`w-2 h-2 rounded-full transition-colors ${
                                            index === currentIndex ? 'bg-gray-600' : 'bg-gray-300'
                                        }`}
                                    />
                                ))}
                            </div>
                        </>
                    )}
                </div>
            )}
        </div>
    );
}

export default ChooseCategory;