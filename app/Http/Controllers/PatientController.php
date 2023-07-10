<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redirect;
use App\Models\Patient;
use App\Models\Service;
use Inertia\Inertia;
use Inertia\Response;

class PatientController extends Controller
{
    //

    /**
     * Display the patient dashboard
     */

    public function dashboard() {
        // Get the authenticated patient
        $patient = Auth::guard('patient')->user();
        //$patient = Patient::where(["identifier" => $patient->identifier])->get()->first();
        //dd($patient);
        return Inertia::render('Patients/Dashboard', [
            "patient" => $patient
        ]);
    }

    /**
     * Display the service page
     */
    public function services()
    {
        // Retrieve the list of services
        $services = Service::all();
        //$services = $services -> toArray();
        // Return an Inertia page view with the services data
        return Inertia::render('Patients/Services', [
            'services' => $services,
        ]);
    }

    public function servicePage(Request $request, $service) {
        $service = Service::where(["nom" => $service])->get()->first();
        // Return the view with the service and additional data
        //dd($service-> toArray());
        return Inertia::render('Patients/ServicePage', [
            'service' => $service -> toArray(),
            //'additionalData' => $additionalData,
        ]);

    }
}
