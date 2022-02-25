import Image from 'next/image';
import Link from 'next/link';
import logo from '../public/logo.png';

export default function Logo() {
  return (
    <Link href="/" passHref>
      <a>
        <Image
          src={logo}
          alt="Alex G Logo - Home"
          width="64"
          height="64"
          className="logo-img"
          placeholder="blur"
        />
      </a>
    </Link>
  );
}
