import { DELAY_SUBMIT_TRANSACTION } from "@/constants/constants";
import { useEffect, useState } from "react";

export function useSubmissionMessage() {
  const [submissionMessage, setSubmissionMessage] = useState<{
    text: string;
    isPositive: boolean;
  } | null>(null);

  useEffect(() => {
    let timer;
    if (submissionMessage)
      timer = setTimeout(() => {
        setSubmissionMessage(null);
      }, DELAY_SUBMIT_TRANSACTION);
  }, [submissionMessage]);

  return { submissionMessage, setSubmissionMessage };
}
