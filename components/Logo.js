import Image from 'next/image';
import Link from 'next/link';
import { rgbDataURL } from '../utils/blur';

export default function Logo() {
  return (
    <Link href="/" passHref>
      <a>
        <Image
          src="https://res.cloudinary.com/dcf4y5ngp/image/upload/v1631038369/alexwebdevcolor.png"
          alt="Alex G Logo - Home"
          width={64}
          height={64}
          quality={100}
          placeholder="blur"
          blurDataURL={rgbDataURL(35, 50, 67)}
          // attr added for lighthouse audit unjustified error => I want my 100 score
          layout="fixed"
        />
      </a>
    </Link>
  );
}
