export default async function fetchHomePageData() {
  const response = await fetch("/api/strapi/coins");
  const data = await response.json();

  return data;
}
