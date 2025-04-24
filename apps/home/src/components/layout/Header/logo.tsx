import Link from 'next/link';
import Image from 'next/image';

interface LogoProps {
  isActive: boolean;
}

export const Logo = ({ isActive }: LogoProps) => {
  return (
    <div className='h-[110px] flex items-center justify-center px-6 sm:px-11'>
      <Link href='/' className='h-[110px] flex items-center'>
        <Image
          src='/logo/ic-logo.webp'
          alt='Logo'
          width={180}
          height={80}
          priority
          className={isActive ? '' : ''}
        />
      </Link>
    </div>
  );
};
