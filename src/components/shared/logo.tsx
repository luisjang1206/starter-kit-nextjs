import Link from "next/link";
import { Layers } from "lucide-react";
import { siteConfig } from "@/config/site";

interface LogoProps {
  showText?: boolean;
}

export function Logo({ showText = true }: LogoProps) {
  return (
    <Link href="/" className="flex items-center gap-2">
      <Layers className="h-6 w-6" />
      {showText && (
        <span className="font-bold text-lg">{siteConfig.name}</span>
      )}
    </Link>
  );
}
