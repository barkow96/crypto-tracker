export default async function STRAPI_fetchHomePageData() {
  const response = await fetch("/api/strapi/coins");
  const data = await response.json();

  return data;
}
