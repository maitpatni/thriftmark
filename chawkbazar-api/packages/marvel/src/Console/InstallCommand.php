<?php

namespace Marvel\Console;

use Illuminate\Console\Command;
use Illuminate\Database\QueryException;
use Illuminate\Support\Facades\DB;
use Marvel\Database\Models\User;
use Illuminate\Support\Facades\Hash;
use Spatie\Permission\Models\Permission;
use Marvel\Enums\Permission as UserPermission;
use Illuminate\Support\Facades\Validator;
use PDO;
use PDOException;

class InstallCommand extends Command
{
    protected $signature = 'marvel:install';

    protected $description = 'Installing Marvel Dependencies';

    public function handle()
    {

        $this->info('Installing Marvel Dependencies...');
        if ($this->confirm('Do you want to migrate Tables? If you have already run this command or migrated tables then be aware, it will erase all of your data.')) {

            $this->info('Migrating Tables Now....');

            $this->call('migrate:fresh');

            $this->info('Tables Migration completed.');

            if ($this->confirm('Do you want to seed dummy data?')) {
                $this->call('marvel:seed');
            }

            $this->info('Importing required settings...');

            $this->call('db:seed', [
                '--class' => '\\Marvel\\Database\\Seeders\\SettingsSeeder'
            ]);

            $this->info('Settings import is completed.');
        } else {
            if ($this->confirm('Do you want to seed dummy Settings data? If "yes", then please follow next steps carefully.')) {
                $this->call('marvel:settings_seed');
            }
        }

        app()[\Spatie\Permission\PermissionRegistrar::class]->forgetCachedPermissions();

        Permission::firstOrCreate(['name' => UserPermission::SUPER_ADMIN]);
        Permission::firstOrCreate(['name' => UserPermission::CUSTOMER]);
        Permission::firstOrCreate(['name' => UserPermission::STORE_OWNER]);
        Permission::firstOrCreate(['name' => UserPermission::STAFF]);

        try {
            if ($this->confirm('Do you want to create an admin?')) {

                $this->info('Provide admin credentials info to create an admin user for you.');
                $name = $this->ask('Enter admin name');
                $email = $this->ask('Enter admin email');
                $password = $this->secret('Enter your admin password');
                $confirmPassword = $this->secret('Enter your password again');

                $this->info('Please wait, Creating an admin profile for you...');
                $validator = Validator::make(
                    [
                        'name' =>  $name,
                        'email' =>  $email,
                        'password' =>  $password,
                        'confirmPassword' =>  $confirmPassword,
                    ],
                    [
                        'name'     => 'required|string',
                        'email'    => 'required|email|unique:users,email',
                        'password' => 'required',
                        'confirmPassword' => 'required|same:password',
                    ]
                );
                if ($validator->fails()) {
                    $this->info('User not created. See error messages below:');
                    foreach ($validator->errors()->all() as $error) {
                        $this->error($error);
                    }
                    return;
                }
                $user = User::create([
                    'name' =>  $name,
                    'email' =>  $email,
                    'password' =>  Hash::make($password),
                ]);
                $user->email_verified_at = now()->timestamp;
                $user->save();
                $user->givePermissionTo(
                    [
                        UserPermission::SUPER_ADMIN,
                        UserPermission::STORE_OWNER,
                        UserPermission::CUSTOMER,
                    ]
                );
                $this->info('User Creation Successful!');
            }
        } catch (\Exception $e) {
            $this->error($e->getMessage());
        }
        $this->call('marvel:copy-files');
    }


    private function createDatabase(): void
    {
        $databaseName = config('database.connections.mysql.database');
        $servername = config('database.connections.mysql.host');
        $username = config('database.connections.mysql.username');
        $password = config('database.connections.mysql.password');

        try {
            $conn = new PDO("mysql:host=$servername", $username, $password);
            $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

            // Check if the database exists
            $query = "SELECT SCHEMA_NAME FROM INFORMATION_SCHEMA.SCHEMATA WHERE SCHEMA_NAME = '$databaseName'";
            $stmt = $conn->query($query);
            $databaseExists = $stmt->fetch(PDO::FETCH_ASSOC);

            if (!$databaseExists) {
                // Create the database
                $createDatabaseQuery = "CREATE DATABASE $databaseName";
                $conn->exec($createDatabaseQuery);
                $this->info("Database $databaseName created successfully.");
            }
            // else {
            //     $this->info("Database $databaseName already exists.");
            // }
        } catch (PDOException $e) {
            $this->info("Connection failed: " . $e->getMessage());
        }
    }
}
