<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Patient;
class PatientsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        //
        $patientTest = [
            'firstname' => "Harold",
            'lastname' => "Dev",
            'identifier' => 2070,
            'birthdate' => "1990-01-01",
            'gender' => "M",
            'address' => "Misserete",
            'phone_number' => "54796321",
            'civil_state' => "Celib",
            //'email' => Sanitizer::clean($request->email),
            'password' => "$2y$10\$zqvamkRbfpD7nJTaj66KTO4xohKUiS6KpzwVgp8qbT6l55PIT.hHm",

        ];

        Patient::create($patientTest);

    }
}
