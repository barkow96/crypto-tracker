export default async function STRAPI_addPortfolio(
  jwt: string | null | undefined
) {
  if (typeof jwt === undefined || typeof jwt === null) return null;

  const response = await fetch("/api/strapi/portfolios", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${jwt}`,
      "Content-type": "application/json",
    },
  });
  const data = await response.json();

  return data;
}
