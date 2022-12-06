<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\SoftDeletes;

class UserSubscription extends Model
{
    use HasFactory, SoftDeletes;

    protected $fillable = ['user_id', 'subcrription_plans_id', 'price', 'expired_date', 'payment_status', 'snapToken'];

    /**
     * Get the subcriptionPlan that owns the UserSubscription
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function subcriptionPlan()
    {
        return $this->belongsTo(SubcrriptionPlan::class);
    }

   
}
