import type { AuthResponse } from "@/shared/types/user";
import { apiClient } from "@/app/providers/api";

export async function registerUser(userData: {
  email: string;
  password: string;
}): Promise<AuthResponse | Error> {
  try {
    const response = await apiClient.post("api/register", userData);

    return response.data as AuthResponse;
  } catch (error) {
    console.info("Ошибка при регистрации пользователя:", error);
    throw new Error("Не удалось зарегистрировать пользователя");
  }
}
