<?php

namespace App\Http\Controllers;

use App\Enum\OAuth\PassportsEnum;
use App\Http\Controllers\Controller;
use App\Http\Requests\RegisterRequest;
use App\Models\User;
use App\Repository\OAuthClient\OAuthClientRepository;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Http;
class RegisterController extends Controller
{
    public function __construct(
        private readonly OAuthClientRepository $oAuthClientRepository
    ) {}

    public function __invoke(RegisterRequest $request) {

        $user = User::create([
            'name' => $request->name ?? 'test',
            'email' => $request->email,
            'password' => Hash::make($request->password),
        ]);

        $passport = PassportsEnum::from($request->passport);

        $oAuthClient = $this->oAuthClientRepository->findClientByPassport($passport);

        $response = Http::post('http://nginx/oauth/token', [
            'grant_type'    => 'password',
            'client_id'     => $oAuthClient->id,
            'client_secret' => $oAuthClient->secret,
            'username'      => $request->email,
            'password'      => $request->password,
            'scope'         => '',
        ]);

        if ($response->failed()) {
            return response()->json(['error' => 'Не удалось создать токены'], 500);
        }

        $tokens = $response->json();

        return response()->json([
            'user'          => $user,
            'access_token'  => $tokens['access_token'],
            'refresh_token' => $tokens['refresh_token'],
            'token_type'    => $tokens['token_type'],
            'expires_in'    => $tokens['expires_in']
        ], 201);
    }
}
