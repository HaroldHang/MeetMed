<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\User;
use App\Models\Patient;
use App\Providers\RouteServiceProvider;
use Illuminate\Auth\Events\Registered;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use App\Helpers\Sanitizer;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;
use Illuminate\Validation\Rules;
use Inertia\Inertia;
use Inertia\Response;

class RegisteredUserController extends Controller
{
    /**
     * Display the registration view.
     */
    public function create(): Response
    {
        return Inertia::render('Auth/RegisterCustom');
        //return Inertia::render('Auth/Register');
    }

    /**
     * Handle an incoming registration request.
     *
     * @throws \Illuminate\Validation\ValidationException
     */
    public function store(Request $request): RedirectResponse
    {
        /*
        $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:'.User::class,
            'password' => ['required', 'confirmed', Rules\Password::defaults()],
        ]);

        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => Hash::make($request->password),
        ]);

        event(new Registered($user));

        */
        $request->validate([
            'firstname' => 'required|string|max:255',
            'lastname' => 'required|string|max:255',
            //'identifier' => 'required|string|max:255|unique:patients',
            'birthdate' => 'required|date',
            'gender' => 'required|in:M,F',
            'address' => 'required|string|max:255',
            'phoneNumber' => 'required|string|max:255',
            'civilState' => 'required|string|max:255',
            'email' => 'nullable|string|email|max:255|unique:patients',
            'password' => 'nullable|string|min:8',
        ]);
        $identifier = $this -> generateIdentifier();
        //dd($identifier);
        $patientData = [
            'firstname' => Sanitizer::clean($request->firstname),
            'lastname' => Sanitizer::clean($request->lastname),
            'identifier' => $identifier,
            'birthdate' => Sanitizer::clean($request->birthdate),
            'gender' => Sanitizer::clean($request->gender),
            'address' => Sanitizer::clean($request->address),
            'phone_number' => Sanitizer::clean($request->phoneNumber),
            'civil_state' => Sanitizer::clean($request->civilState),
            'email' => Sanitizer::clean($request->email),
            'password' => Hash::make($request->password),

        ];
        //dd($patientData);
        $patient = Patient::create($patientData);


        Auth::guard('patient')->login($patient);

        return redirect(RouteServiceProvider::HOME);
    }

    private function generateIdentifier()
    {
        $min = 1000; // Minimum value for the four-digit number
        $max = 9999; // Maximum value for the four-digit number

        // Generate a random number between the minimum and maximum values
        $identifier = mt_rand($min, $max);

        // Check if the generated identifier already exists in the database
        while (Patient::where('identifier', $identifier)->exists()) {
            $identifier = mt_rand($min, $max);
        }

        return $identifier;
    }
}
