<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Models\Movie;
use Illuminate\Http\Request;

class DashboardController extends Controller
{
    public function index()
    {
        // return Inertia::render('User/Dashboard/index');
        $featuredMovies = Movie::whereIsFeatured(true)->get();
        // return $featuredMovies;
        $movies = Movie::all();
        return inertia('User/Dashboard/index',compact('featuredMovies', 'movies'));
    }

    public function Movie($slug)
    {
        return $slug;
        $data = [
            $slugs = $slug
        ];
        // return inertia('User/Movie/index', $data);
        // return Inertia::render('User/Dashboard/Movie/show');
    }
}
