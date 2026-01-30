export interface Hook {
  id: string;
  name: string;
  category: Category;
  description: string;
  repoUrl: string;
  repoOwner: string;
  repoName: string;
  stars?: number;
  language?: string;
}

export type Category =
  | "Payment"
  | "Communication"
  | "DevOps"
  | "Storage"
  | "Authentication"
  | "Database"
  | "E-commerce"
  | "Analytics"
  | "General";

export const CATEGORIES: Category[] = [
  "Payment",
  "Communication",
  "DevOps",
  "Storage",
  "Authentication",
  "Database",
  "E-commerce",
  "Analytics",
  "General",
];
