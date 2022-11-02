import Link from 'next/link';
import { useRouter } from 'next/router';

export function NavLink({
  href,
  children,
  className,
  scroll,
  replace,
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
  scroll?: boolean;
  replace?: boolean;
}) {
  const { asPath } = useRouter();

  const isActive = asPath === href;

  if (isActive) {
    if (className == null) {
      className = 'active';
    } else {
      className += ' active';
    }
  }

  return (
    <Link legacyBehavior href={href} scroll={scroll} replace={replace}>
      <a className={className}>{children}</a>
    </Link>
  );
}
