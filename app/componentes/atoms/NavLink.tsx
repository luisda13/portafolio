type NavLinkProps = {
  href: string;
  children: React.ReactNode;
  isMenuItem?: boolean;
  id?: string;
};

export function NavLink({
  href,
  children,
  isMenuItem = false,
  id,
}: NavLinkProps) {
  return (
    <a
      href={href}
      className="block rounded-md px-4 py-2 text-sm text-gray-300 hover:bg-white/5 hover:text-white"
      {...(isMenuItem
        ? {
            role: "menuitem",
            tabIndex: -1,
            id,
          }
        : {})}
    >
      {children}
    </a>
  );
}
