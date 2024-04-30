export default async function fetchPortfoliosData(
  jwt: string | null | undefined
) {
  if (typeof jwt === undefined) return null;

  const response = await fetch("/api/strapi/portfolios", {
    method: "GET",
    headers: { Authorization: `Bearer ${jwt}` },
  });
  const data = await response.json();

  return data;
}
