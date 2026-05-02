import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

type Props = {
  rating: number;
  className?: string;
  size?: "sm" | "md" | "lg";
};

const sizes = { sm: "w-3 h-3", md: "w-4 h-4", lg: "w-5 h-5" };

export function StarRating({ rating, className, size = "md" }: Props) {
  return (
    <div className={cn("flex gap-0.5", className)}>
      {[1, 2, 3, 4, 5].map((i) => (
        <Star
          key={i}
          className={cn(
            sizes[size],
            i <= Math.round(rating)
              ? "fill-[#f4e19f] text-[#f4e19f]"
              : "fill-[#D1C9BC] text-[#D1C9BC]"
          )}
        />
      ))}
    </div>
  );
}
