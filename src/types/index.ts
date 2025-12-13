import { LucideIcon } from "lucide-react";

// Navigation types
export interface NavItem {
  title: string;
  href: string;
  icon?: LucideIcon;
  disabled?: boolean;
  external?: boolean;
  badge?: string;
}

export interface NavSection {
  title: string;
  items: NavItem[];
}

// Site configuration type
export interface SiteConfig {
  name: string;
  description: string;
  url: string;
  links: {
    github?: string;
    twitter?: string;
  };
}

// Footer link types
export interface FooterLink {
  title: string;
  href: string;
  external?: boolean;
}

export interface FooterSection {
  title: string;
  links: FooterLink[];
}
