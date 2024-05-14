export default async function STRAPI_removeCoin(
  jwt: string | null | undefined,
  coinId: number
) {
  if (typeof jwt === undefined || typeof jwt === null) return null;

  const response = await fetch(`/api/strapi/portfolio-coins/${coinId}`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${jwt}`,
      "Content-type": "application/json",
    },
  });
  const data = await response.json();

  return data;
}
