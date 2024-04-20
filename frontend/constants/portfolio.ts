import { PortfolioIcons } from "@/types/portfolio-panel/choose-portfolio-panel";
import { MoonIcon, StarIcon, SunIcon } from "@chakra-ui/icons";

export const PORTFOLIO_ICONS: PortfolioIcons = [
  { component: StarIcon, name: "StarIcon" },
  { component: MoonIcon, name: "MoonIcon" },
  { component: SunIcon, name: "SunIcon" },
];

export const PORTFOLIO_FOCUS_DELAY = 200;
export const NEW_PORTFOLIO_DEFAULT_NAME = "My New Porfolio";
export const NEW_PORTFOLIO_DEFAULT_ICON = "StarIcon";
