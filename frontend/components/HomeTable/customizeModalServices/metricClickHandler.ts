import { HomeTableMetadata, Metric } from "@/types/home-table";

export function metricClickHandler(
  metric: Metric,
  setTableMetadata: React.Dispatch<React.SetStateAction<HomeTableMetadata>>
) {
  const newIsActive = !metric.isActive;
  setTableMetadata((prevState) => {
    const updatedMetric = prevState[metric.name];
    updatedMetric.isActive = newIsActive;
    return { ...prevState, [metric.name]: updatedMetric };
  });
}
