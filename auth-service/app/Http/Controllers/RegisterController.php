<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Http\Requests\RegisterRequest;
use App\Models\User;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Log;
class RegisterController extends Controller
{
    public function __construct() {}

    public function __invoke(RegisterRequest $request) {

        // $user = User::create([
        //     'name' => $request->name ?? 'test',
        //     'email' => $request->email,
        //     'password' => Hash::make($request->password),
        // ]);

        $response = Http::get('http://127.0.0.1/api-auth/test');

        return response()->json($response->json());


        $response = Http::post('http://172.19.0.4/oauth/token', [
            'grant_type'    => 'password',
            'client_id'     => 1,
            'client_secret' => 'uYqx4HDqUTUMV7je6TNdMbsprhKrM1aFOltNiWld',
            'username'      => $request->email,
            'password'      => $request->password,
            'scope'         => '',
        ]);

        if ($response->failed()) {
            return response()->json(['error' => 'Не удалось создать токены'], 500);
        }

        $tokens = $response->json();

        return response()->json([
            //'user'          => $user,
            'access_token'  => $tokens['access_token'],
            'refresh_token' => $tokens['refresh_token'],
            'token_type'    => $tokens['token_type'],
            'expires_in'    => $tokens['expires_in']
        ], 201);
    }
}
