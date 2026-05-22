export interface SpamPredictionRequest {
  email: string;
}

export interface SpamPredictionResponse {
  success: boolean;
  message: string;
  data: "Spam" | "Not Spam";
}

const BASE_URL = import.meta.env.VITE_API_URL;

export const predictSpam = async (
  request: SpamPredictionRequest,
): Promise<SpamPredictionResponse> => {
  const response = await fetch(`${BASE_URL}/predict`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(request),
  });

  if (!response.ok) {
    throw new Error("Failed to predict spam.");
  }

  return response.json();
};
