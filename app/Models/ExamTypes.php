<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ExamTypes extends Model
{
    use HasFactory;
    protected $fillable = [
        'name',
        'description',
        'service_id'
    ];
    
    public function service()
    {
        return $this->belongsTo(Service::class);
    }

    public function exams()
    {
        return $this->hasMany(Exam::class);
    }
}