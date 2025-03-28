<?php

use App\Http\Controllers\Auth\RegisterController;
use Illuminate\Support\Facades\Route;

Route::middleware(['api'])
    ->group(function () {
        Route::post('/register', RegisterController::class);
    });
