import type { AuthResponse } from "@/shared/types/user";
import { apiClient } from "@/app/providers/api";

export async function registerUser(userData: {
  email: string;
  password: string;
}): Promise<AuthResponse | Error> {
  const response = await apiClient.post("api/register", userData);

  return response.data as AuthResponse;
}
