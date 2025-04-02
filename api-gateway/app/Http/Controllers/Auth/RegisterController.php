<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;

class RegisterController extends Controller
{
    /**
     * Регистрация нового пользователя
     */
    public function __invoke(Request $request): JsonResponse
    {
        try {
            $response = Http::withHeaders([
                'Accept' => 'application/json',
                'Content-Type' => 'application/json'
            ])->post(config('services.auth.url') . '/api-auth/register', [
                'email' => $request->email,
                'password' => $request->password,
                'passport' => $request->passport
            ])->throw();

            // Получаем куки из ответа auth-service
            $cookies = $response->headers()['Set-Cookie'] ?? [];

            // Создаем ответ
            $jsonResponse = response()->json($response->json(), $response->status());

            // Добавляем все куки из auth-service в ответ
            foreach ($cookies as $cookie) {
                $jsonResponse->withHeaders(['Set-Cookie' => $cookie]);
            }

            return $jsonResponse;

        } catch (\Illuminate\Http\Client\RequestException $e) {
            $errorResponse = $e->response;

            $statusCode = $errorResponse->status();

            $errorBody = $errorResponse->json();

            // Теперь вы можете использовать эти данные
            return response()->json([
                'error' => $errorBody,
                'status' => $statusCode
            ], $statusCode);
        }
    }
}
