<?php

namespace Database\Seeders;

use App\Models\SubcrriptionPlan;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class SubscriptionPlanTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $subscriptionPlans = [
            [
                'name'                      => 'Basic',
                'price'                     => 20000,
                'active_period_in_months'   => 3,
                'features'                  => json_encode(['feature1', 'feature2'])
            ],
            [
                'name'                      => 'Premium',
                'price'                     => 80000,
                'active_period_in_months'   => 6,
                'features'                  => json_encode(['feature1', 'feature2', 'feature3', 'feature4',])
            ],
            ];

            SubcrriptionPlan::insert($subscriptionPlans);
    }
}
