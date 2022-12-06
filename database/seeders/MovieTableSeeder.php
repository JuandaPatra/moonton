<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Movie;

class MovieTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $movies =[
            [
                'name'          => 'The Shawshank Redemption',
                'slug'          => 'the-shawshank-redemption',
                'category'      => 'Drama',
                'video_url'     => 'https://www.youtube.com/watch?v=oBiggLZI2XU',
                'thumbnail'     => 'https://source.unsplash.com/640x480?drama',
                'rating'        =>  9.2,
                'is_featured'   =>  1
            ],
            [
                'name'          => 'The Godfather',
                'slug'          => 'the-godfather',
                'category'      => 'Drama',
                'video_url'     => 'https://www.youtube.com/watch?v=oBiggLZI2XU',
                'thumbnail'     => 'https://source.unsplash.com/640x480?drama',
                'rating'        =>  9.4,
                'is_featured'   =>  0
            ],
            [
                'name'          => 'The Godfather: Part II',
                'slug'          => 'the-godfather-part-ii',
                'category'      => 'Drama',
                'video_url'     => 'https://www.youtube.com/watch?v=oBiggLZI2XU',
                'thumbnail'     => 'https://source.unsplash.com/640x480?drama',
                'rating'        =>  9.4,
                'is_featured'   =>  0
            ],
        ];

        Movie::insert($movies);
    }
}
