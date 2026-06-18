import Link from 'next/link';
import Image from 'next/image';

export default function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2">
      <Image src="/assets/Logo.png" alt="Rhinny Global Logo" width={40} height={40} />
      <span className="text-lg font-semibold text-slate-800 dark:text-white">Rhinny Global</span>
    </Link>
  );
}
