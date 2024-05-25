import { FamousStoresCarrousel } from "@/components/famous-stores-carrousel";
// import { FoodCategoriesCarrousel } from "@/components/food-categories-carrousel";
import { Header } from "@/components/header";
import { NearByStoresCarrousel } from "@/components/near-by-stores-carrousel";
import { PromotionsCarrousel } from "@/components/promotions-carrousel";
import { StoreCategoriesCarrousel } from "@/components/store-categories";
// import { StoreFilters } from "@/components/store-filters";
// import { StoreList } from "@/components/store-list";

export default function Home() {
  return (
    <div className="flex flex-col justify-center">
      <Header />
      <div className="py-12 flex flex-col mx-auto gap-12 max-w-[2000px] px-24 w-full">
        <StoreCategoriesCarrousel />
        <PromotionsCarrousel />
        <NearByStoresCarrousel />
        <FamousStoresCarrousel />
        {/* <FoodCategoriesCarrousel /> */}
        {/* <StoreFilters /> */}
        {/* <StoreList /> */}
      </div>
    </div>
  );
}
