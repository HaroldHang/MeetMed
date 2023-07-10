<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Service;

class ServicesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        //
        $services = [
            [
                'nom' => 'Cardiologie',
                'description' => 'La cardiologie est une branche de la médecine qui traite des troubles du cœur: hypertension artérielle, insuffisance cardiaque, troubles du rythme cardiaque etc.',
                //'image_url' => 'cardiology.jpg',
            ],
            [
                'nom' => 'Ophtamologie',
                'description' => 'Discipline médicale qui s’occupe des maladies liées aux affections oculaires',
                //'image_url' => 'cardiology.jpg',
            ],
            [
                'nom' => 'Dermatologie',
                'description' => 'La dermatologie est la spécialité médicale qui s\'intéresse à l\'étude de la peau, des cheveux, des poils et des ongles ainsi qu\'à la prévention, au diagnostic et au traitement des maladies qui les touchent.',
                //'image_url' => 'cardiology.jpg',
            ],
            [
                'nom' => 'Neurologie',
                'description' => 'La neurologie est la spécialité médicale clinique qui étudie l\'ensemble des maladies du système nerveux et en particulier du cerveau.',
                //'image_url' => 'cardiology.jpg',
            ],
            [
                'nom' => 'ORL',
                'description' => 'L\'otorhinolaryngologie représente une branche de la médecine spécialisée dans le diagnostic et le traitement des troubles du nez, de la gorge, de l\'oreille, et de la région tête et cou.',
                //'image_url' => 'cardiology.jpg',
            ],
            [
                'nom' => 'Stomatologie',
                'description' => 'Discipline médicale qui traite des maladies liées aux affections bucco-dentaires (la bouche et des dents).',
                //'image_url' => 'cardiology.jpg',
            ],
            [
                'nom' => 'Imagerie medical',
                'description' => 'Spécialité médicale consistant à produire des images du corps humain vivant et à les interpréter à des fins diagnostiques, thérapeutiques.',
                //'image_url' => 'cardiology.jpg',
            ],
            [
                'nom' => 'Urgence',
                'description' => 'Les urgences sont le service hospitalier chargé d\'accueillir et de prendre en charge les malades et les blessés qui se présentent d\'eux-mêmes ou sont amenés par les services de secours (pompiers...).',
                //'image_url' => 'cardiology.jpg',
            ],

        ];

        foreach ($services as $service) {
            Service::create($service);
        }



        // You can add more services if needed
    }
}
