import Image from 'next/image';

const Logo = () => {
  return (
    <Image
      src="/logo.svg"
      alt="Auto Gallery logo"
      width={150}
      height={50}
      className="object-contain"
    />
  );
};

export default Logo;
