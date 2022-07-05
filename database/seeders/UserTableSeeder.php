<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;


class UserTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $admin=User::create([
            'name'      => 'admin',
            'email'     => 'admin@moonton.com',
            'password'  => bcrypt('password')
        ]);

        $admin->assignRole('admin');
    }
}
