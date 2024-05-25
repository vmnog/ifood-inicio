import { Skeleton } from "@/components/ui/skeleton";

export function NearByStoresCarrousel() {
  return (
    <div className="flex justify-between gap-8">
      {Array.from({ length: 5 }).map((_, index) => (
        <Skeleton key={index} className="w-80 h-28 rounded-sm" />
      ))}
    </div>
  );
}
