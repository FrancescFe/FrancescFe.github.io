export type SiteHeaderVariant = "compact" | "default";

export interface HeaderNavigationItem {
  label: string;
  href: string;
  disabled?: boolean;
}

export type SiteFooterVariant = "full" | "minimal";
