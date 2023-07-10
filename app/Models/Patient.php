<?php

namespace App\Models;

use Illuminate\Auth\Authenticatable;
use Illuminate\Contracts\Auth\Authenticatable as AuthenticatableContracts;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Patient extends Model implements AuthenticatableContracts
{
    use HasFactory;
    use Authenticatable;
    protected $fillable = [
        'firstname',
        'lastname',
        'identifier',
        'birthdate',
        'gender',
        'address',
        'phone_number',
        'civil_state',
        'antecedant',
        'password'
    ];

    public function examens()
    {
        return $this->hasMany(Exam::class);
    }

    public function getAuthIdentifierName(): string
    {
        return 'id';
    }

    public function getAuthPassword(): string
    {
        return $this->password;
    }

    public function getRememberToken(): ?string
    {
        return $this->remember_token;
    }

    public function setRememberToken($value): void
    {
        $this->remember_token = $value;
    }

    public function getRememberTokenName(): string
    {
        return 'remember_token';
    }

}
