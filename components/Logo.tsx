import { cn } from "@/lib/utils";
import Link from "next/link";

interface LogoProps {
  className?: string;
  title?: string;
  subtitle?: string;
}
const Logo = ({ className, title, subtitle }: LogoProps) => {
  return (
    <div className="text-2xl group">
      <Link href="/">
        <h2
          className={cn(
            "font-bold text-2xl hover:text-hoverColor hoverEffect",
            className
          )}
        >
          {title}{" "}
          <span className="text-yellow-300 group-hover:text-white hoverEffect">
            {subtitle}
          </span>
        </h2>
      </Link>
    </div>
  );
};

export default Logo;
