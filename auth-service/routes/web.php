<?php

use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Log;

Route::get('/', function () {
    return view('welcome');
});
Route::get('api-auth/test', function () {

    Log::info('test');

    return response()->json(['message' => 'test']);
});
