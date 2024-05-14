export default async function STRAPI_addTransaction(
  jwt: string | null | undefined,
  portfolioId: number,
  coinName: string,
  date: string,
  type: "BUY" | "SELL",
  price: number,
  quantity: number
) {
  if (typeof jwt === undefined || typeof jwt === null) return null;

  const response = await fetch("/api/strapi/portfolio-transactions", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${jwt}`,
      "Content-type": "application/json",
    },
    body: JSON.stringify({
      data: { portfolioId, coinName, date, type, price, quantity },
    }),
  });
  const data = await response.json();

  return data;
}
