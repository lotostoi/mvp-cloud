<?php

use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\Route;

// Route::get('/', function () {
//     return view('welcome');
// });

Route::get('api-gateway', function(){
    return new JsonResponse('Проверка');
});
