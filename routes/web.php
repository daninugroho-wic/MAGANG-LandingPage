<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/welcome', function () {
    return view('welcome');
});

Route::get('/', function () {
    return Inertia::render('Home', [
        'message' => 'Hello from Laravel + Inertia!',
    ]);
});