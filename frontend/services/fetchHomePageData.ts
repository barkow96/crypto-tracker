export default async function fetchHomePageData() {
  const response = await fetch("/api/coins");
  const data = await response.json();

  return data;
}
