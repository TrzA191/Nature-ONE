import BannerDiscount from "@/components/banner-discount";
import CarouselTextBanner from "@/components/carousel-txt-banner";
import FeaturedProducts from "@/components/featured-products";
import ChooseCategory from "@/components/choose-category";
import BannerPRoduct from "@/components/banner-product";

export default function Home() {
  return (
    <main>
      <CarouselTextBanner />
      <FeaturedProducts />
      <BannerDiscount />
      <ChooseCategory />
      <BannerPRoduct />
    </main>
  );
}
