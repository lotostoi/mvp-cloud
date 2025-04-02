import type { RegisterResponse } from "@/shared/types/user";
import { apiClient } from "@/app/providers/api";

export async function registerUser(userData: {
  email: string;
  password: string;
}): Promise<RegisterResponse> {
  const response = await apiClient.post("api/register", userData);

  return response.data as RegisterResponse;
}
