import Image from 'next/image';
import Link from 'next/link';

export default function Logo() {
  return (
    <Link href="/" passHref>
      <a>
        <Image
          src="/images/logo.png"
          alt="Alex G Logo - Home"
          width="64"
          height="64"
          className="logo-img"
          placeHolder="blur"
        />
      </a>
    </Link>
  );
}
