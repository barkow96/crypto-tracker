export default async function STRAPI_updatePortfolio(
  jwt: string | null | undefined,
  portfolioId: number,
  newName?: string,
  newIcon?: string
) {
  if (typeof jwt === undefined || typeof jwt === null) return null;

  type PortfolioDataToBeUpdated = { newName?: string; newIcon?: string };
  const portfolioData: PortfolioDataToBeUpdated = {};
  if (newName) portfolioData.newName = newName;
  if (newIcon) portfolioData.newIcon = newIcon;

  const response = await fetch(`/api/strapi/portfolios/${portfolioId}`, {
    method: "PUT",
    headers: {
      Authorization: `Bearer ${jwt}`,
      "Content-type": "application/json",
    },
    body: JSON.stringify({ data: portfolioData }),
  });
  const data = await response.json();

  return data;
}
