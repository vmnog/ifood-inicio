import { Skeleton } from "@/components/ui/skeleton";

export function FamousStoresCarrousel() {
  return (
    <div className="grid grid-cols-2 gap-14 2xl:grid-cols-3">
      {Array.from({ length: 12 }).map((_, index) => (
        <div className="flex items-center gap-4">
          <Skeleton key={index} className="w-20 h-20 rounded-sm" />
          <div className="flex flex-col justify-stretch gap-2 h-full">
            <Skeleton key={index} className="w-64 h-6 rounded-sm" />
            <Skeleton key={index} className="w-60 h-4 rounded-sm" />
            <Skeleton key={index} className="mt-auto w-32 h-3 rounded-sm" />
          </div>
        </div>
      ))}
    </div>
  );
}
