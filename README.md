# homeWork
# nodejs_homework_week8
Soal 1: Lakukan seeding untuk menambahkan 5 data baru pada data table actor yang
disediakan

Soal 2 : Buatlah query untuk menampilkan data pada database sebagai berikut.
1. Menampilkan data seluruh list film
2. Menampilkan data film tertentu berdasarkan id
3. Menampilkan data list category
4. Menampilkan data list film berdasarkan category

Implementasikan routing yang sesuai dan benar pada aplikasi yang teman-teman buat.
Soal 3: Lakukan migrasi database dengan menambahkan column age pada tabel actor yang
tersedia

Installation -> npm install

Run code : npm run start
Run Seeder: npm run seed
Run migrate: db-migrate up

API
http://localhost:3000/listFilm -> Menampilkan data seluruh list film
http://localhost:3000/listFilm/:id -> Menampilkan data film tertentu berdasarkan id
http://localhost:3000/listCategory/ -> Menampilkan data list category
http://localhost:3000/listFilmByCategory/:category_id -> Menampilkan data list film berdasarkan category
