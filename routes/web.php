<?php

use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('admin', function(){
    return 'admin';
})->middleware('role:admin');

Route::get('user', function(){
    return 'user';
})->middleware('role:user');

Route::redirect('/', 'prototype/login');

// Route::get('/', function () {
//     return Inertia::render('Welcome', [
//         'canLogin' => Route::has('login'),
//         'canRegister' => Route::has('register'),
//         'laravelVersion' => Application::VERSION,
//         'phpVersion' => PHP_VERSION,
//     ]);
// });

// Route::prefix('prototype')->group(function(){
//     return Inertia::render('login');
// })->name('Prototype/Login');

Route::prefix('prototype')->name('prototype.')->group(function(){
    route::get('/login', function(){
        return Inertia::render('Prototype/login');
    })->name('login');

    route::get('/register', function(){
        return Inertia::render('Prototype/register');
    })->name('register');

    route::get('/dashboard', function(){
        return Inertia::render('Prototype/dashboard');
    })->name('dashboard');

    Route::get('/subscriptionPlan', function(){
        return Inertia::render('Prototype/subscriptionPlan');
    })->name('subscriptionPlan');

    Route::get('/movie/{slug}', function(){
        return Inertia::render('Prototype/Movie/show');
    })->name('movie.show');
});


Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

require __DIR__.'/auth.php';
