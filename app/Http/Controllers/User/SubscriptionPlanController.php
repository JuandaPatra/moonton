<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\SubcrriptionPlan;

class SubscriptionPlanController extends Controller
{
    public function index()
    {
        // $subscriptionPlans =SubcrriptionPlan::all();
        $subciptionPlan1 = SubcrriptionPlan::whereId(1)->get();
        $subciptionPlan2 = SubcrriptionPlan::whereId(2)->get();
        // return $subciptionPlan1[0]; 
        
        // return $subscriptionPlans;
        return inertia('User/Dashboard/SubscriptionPlan/index', [
            'reguler' => $subciptionPlan1,
            'premium' => $subciptionPlan2
        ]);
    }

    public function subcription(SubcrriptionPlan $subcrriptionPlan)
    {
        return $subcrriptionPlan;
    }
}
