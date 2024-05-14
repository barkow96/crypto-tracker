import { Metric } from "@/types/home-table/settings";
import { HomeTableMetadata } from "@/types/home-table/table";

type ClickMetricService = (
  metric: Metric,
  setTableMetadata: React.Dispatch<React.SetStateAction<HomeTableMetadata>>
) => void;

export const clickMetricService: ClickMetricService = (
  metric,
  setTableMetadata
) => {
  const newIsActive = !metric.isActive;

  setTableMetadata((prevState) => {
    const updatedMetric = prevState[metric.name];
    updatedMetric.isActive = newIsActive;
    return { ...prevState, [metric.name]: updatedMetric };
  });
};
export default clickMetricService;
