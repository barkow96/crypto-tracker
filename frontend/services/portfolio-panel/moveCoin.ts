export default async function STRAPI_moveCoin(
  jwt: string | null | undefined,
  sourcePortfolioId: number,
  destinationPortfolioId: number,
  coinId: number
) {
  if (typeof jwt === undefined || typeof jwt === null) return null;

  const response = await fetch(`/api/strapi/portfolio-coins/move`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${jwt}`,
      "Content-type": "application/json",
    },
    body: JSON.stringify({
      data: { sourcePortfolioId, destinationPortfolioId, coinId },
    }),
  });
  const data = await response.json();

  return data;
}
