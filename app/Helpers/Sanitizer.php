<?php

namespace App\Helpers;

use Illuminate\Support\Str;

class Sanitizer
{
    public static function clean(string|int|null $data, bool $canTrim = true): string|int|null
    {
        if (!$data) return $data;
        
        $get = stripslashes($data);

        $get = htmlspecialchars($get);

        return $canTrim ? trim($get) : $get;
    }

    public static function formatNumber($number, $decimal = 2)
    {
        return number_format($number, $decimal, ".", " ");
    }

    public static function uniqSlugGenerator($data, $model, $column = "slug"): string
    {
        $slug = Str::slug($data);
        $randomLeng = 1;
        $checkSlug = $model::where([$column => $slug]);

        while ($checkSlug->count() > 0) {
            $slug .= "-" . Str::random($randomLeng);
            $randomLeng++;
            $checkSlug = $model::where([$column => $slug]);
        };

        return $slug;
    }
}
