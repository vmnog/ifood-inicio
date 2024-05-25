import { Skeleton } from "@/components/ui/skeleton";

export function PromotionsCarrousel() {
  return (
    <div className="flex justify-strech gap-3">
      {Array.from({ length: 3 }).map((_, index) => (
        <Skeleton key={index} className="w-full h-48 rounded-sm" />
      ))}
    </div>
  );
}
