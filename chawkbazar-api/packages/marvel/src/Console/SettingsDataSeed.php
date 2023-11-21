<?php

namespace Marvel\Console;

use Illuminate\Console\Command;
use Illuminate\Filesystem\Filesystem;
use Illuminate\Support\Facades\DB;



class SettingsDataImporter extends Command
{
    protected $signature = 'marvel:settings_seed';

    protected $description = 'Import Settings Data';

    public function handle()
    {
        if (DB::table('settings')->where('id', 1)->exists()) {

            if ($this->confirm('Already data exists. Do you want to refresh it with dummy settings?')) {

                $this->info('Seeding necessary settings....');

                DB::table('settings')->truncate();

                $this->info('Importing dummy settings...');

                $this->call('db:seed', [
                    '--class' => '\\Marvel\\Database\\Seeders\\SettingsSeeder'
                ]);

                $this->info('Settings were imported successfully');
            } else {
                $this->info('Previous settings was kept. Thanks!');
            }
        }
    }
}
