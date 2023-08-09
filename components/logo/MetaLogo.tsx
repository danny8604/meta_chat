import Image from "next/image";

interface MetaLogoProps {
  size?: number;
}

const MetaLogo = ({ size = 60 }: MetaLogoProps) => {
  return (
    <Image
      height={size}
      width={size}
      className="mx-auto w-auto"
      src="/images/META.png"
      alt="Logo"
    />
  );
};

export default MetaLogo;
