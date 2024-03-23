import { ClickMetricService } from "@/types/home-table/services";

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
