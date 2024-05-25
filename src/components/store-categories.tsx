import { Skeleton } from "@/components/ui/skeleton";

export function StoreCategoriesCarrousel() {
  return (
    <div className="flex justify-between gap-3">
      {Array.from({ length: 9 }).map((_, index) => (
        <Skeleton key={index} className="w-24 h-20 rounded-sm" />
      ))}
    </div>
  );
}
