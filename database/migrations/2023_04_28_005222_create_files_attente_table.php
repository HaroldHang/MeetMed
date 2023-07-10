<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('files_attente', function (Blueprint $table) {
            $table->id();
            $table->string('service');
            $table->unsignedBigInteger('patient_id');
            $table->integer('position')->default(1);
            $table->timestamps();
            $table->foreign('patient_id')->references('id')->on('patients');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('files_attente');
    }
};
