import type { SiteConfig, NavItem, FooterSection } from "@/types";

export const siteConfig: SiteConfig = {
  name: "Starter Kit",
  description:
    "A modern, extensible Next.js 16 starter kit with Tailwind CSS v4 and ShadcnUI",
  // TODO: Update with your actual site URL
  url: "https://example.com",
  links: {
    // TODO: Update with your actual social links
    github: "https://github.com",
    twitter: "https://twitter.com",
  },
};

export const mainNavItems: NavItem[] = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "Dashboard",
    href: "/dashboard",
  },
  {
    title: "Components",
    href: "/components",
  },
];

export const footerSections: FooterSection[] = [
  {
    title: "Product",
    links: [
      { title: "Features", href: "#" },
      { title: "Pricing", href: "#" },
      { title: "Documentation", href: "#" },
    ],
  },
  {
    title: "Company",
    links: [
      { title: "About", href: "#" },
      { title: "Blog", href: "#" },
      { title: "Contact", href: "#" },
    ],
  },
  {
    title: "Legal",
    links: [
      { title: "Privacy", href: "#" },
      { title: "Terms", href: "#" },
    ],
  },
];
