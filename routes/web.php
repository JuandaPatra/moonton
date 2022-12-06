<?php

use App\Http\Controllers\User\DashboardController;
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
Route::redirect('/', '/login');

Route::get('admin', function(){
    return 'admin';
})->middleware('role:admin');



Route::middleware(['auth', 'role:user'])->prefix('dashboard')->name('user.dashboard.')->group(function(){
    // Route::get('/movie/{slug}', [DashboardController::class, 'movie'])->name('movie.show');
    Route::get('/', [DashboardController::class,'index'])->name('index');

});

// Route::get('user', function(){
//     return 'user';
// })->middleware('role:user');





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


// Route::get('/dashboard', function () {
//     return Inertia::render('User/Dashboard/index');
// })->middleware(['auth', 'verified'])->name('dashboard');

// Route::middleware(['auth', 'role:user'])->prefix('dashboard')->name('user.dashboard.')->group(function(){
//     Route::get('/', [DashboardController::class,'index'])->name('index');

// });

require __DIR__.'/auth.php';
