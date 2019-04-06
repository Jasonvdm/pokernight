# pokernight

## First: How to setup Backend (API)

1. Make sure to have any Java SDK installed on your machine by running `java -version`. If you need to install a Java SDK, run `brew install java-sdk`.

2. Make sure to have SBT installed on your machine as well, by running `sbt sbt-version`, if you don't have it installed, run:  `brew install sbt`.

3. Run `sbt run` to start the server locally and access the application by going to: http://localhost:9000/

## Second: How to setup Frontend (Vue.js)

1. `npm install`

2. `npm run build` (if you only want to build once)

3. (optional) `npm run watch` (for development: watcher on all app/js files)

## Third: Setup MySQL and seed local dev databases

1. `brew install mysql`
2. `brew tap homebrew/services`
3. `mysql_secure_installation`
4. Set a root password that you will remember. Don't forget this!
5. Answer `y` for removing anonymous users, disallow remote login, and dropping the test database.
6. run `bash bin/setup.sh`.
7. `mysql -u root -p`
8. Once in the mysql terminal, type `show databases;`. Confirm that you see `production_db`.
