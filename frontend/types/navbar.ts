export type LinkType = {
  href: string;
  description: string;
  onlyForLoggedIn: boolean;
};
export type NavbarLinksProps = { links: LinkType[] };
