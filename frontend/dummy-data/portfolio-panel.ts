import { Portfolio } from "@/types/portfolio-panel/choose-portfolio-panel";

export const initialPortfolioList: Portfolio[] = [
  {
    id: 1,
    name: "My first portfolio",
    value: 1699,
    icon: "StarIcon",
    isActive: true,
  },
  {
    id: 2,
    name: "My second portfolio",
    value: 1299,
    icon: "MoonIcon",
    isActive: false,
  },
  {
    id: 3,
    name: "My third portfolio",
    value: 520,
    icon: "SunIcon",
    isActive: false,
  },
  {
    id: 4,
    name: "My fourth portfolio",
    value: 50,
    icon: "SunIcon",
    isActive: false,
  },
];
