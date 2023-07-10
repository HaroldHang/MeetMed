<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Exam extends Model
{
    use HasFactory;
    protected $fillable = [
        'patient_id',
        'exam_type_id',
        'date',
        'description',
        'outcomes',
        'status',
        'result_file',
        'details'
    ];
    protected $casts = [
        'details' => 'json'
    ];

    public function patient()
    {
        return $this->belongsTo(Patient::class);
    }

    public function examType()
    {
        return $this->belongsTo(ExamType::class);
    }
}
