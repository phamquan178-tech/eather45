import Image from "next/image";

type BrandLogoProps = {
  variant?: "light" | "dark";
  size?: "small" | "medium" | "large";
  iconOnly?: boolean;
  className?: string;
};

const logoSizes = {
  small:  { width: 150, height: 52 },
  medium: { width: 300, height: 104 },
  large:  { width: 460, height: 160 },
};

const iconSizes = {
  small:  { width: 72,  height: 36 },
  medium: { width: 120, height: 60 },
  large:  { width: 180, height: 90 },
};

export default function BrandLogo({
  variant = "dark",
  size = "medium",
  iconOnly = false,
  className = "",
}: BrandLogoProps) {
  const src = iconOnly
    ? variant === "light"
      ? "/images/eather45/icon-light.png"
      : "/images/eather45/icon-dark.png"
    : variant === "light"
      ? "/images/eather45/logo-light.png"
      : "/images/eather45/logo-dark.png";

  const dimensions = iconOnly ? iconSizes[size] : logoSizes[size];

  return (
    <Image
      src={src}
      alt="Aether45"
      width={dimensions.width}
      height={dimensions.height}
      priority
      className={`object-contain ${className}`}
    />
  );
}
