# ionic2/3 Pre-Populated Database Example
Simple Ionic 2/3 **pre-populated** database starter project.

## To install this project:
1. Clone project `git clone https://github.com/iursevla/ionic2-PreDB.git`
2. Inside the project folder run: `npm i`
3. Add android platform: `ionic cordova platform add android`
4. Next: `ionic cordova build android`
5. After that: `ionic cordova run android`

Now you should see on your emulator/device the project and on the main page the elements from the database `data.db` table `testTable`.

### Important Note 
I used the emulator for android **Google Nexus 5X - 6.0.0 - API 23 from Genymotion**

---

## Start from scratch:
1. Create ionic project e.g., `ionic start projectName blank`
2. Add cordova-sqlite-ext: `ionic cordova plugin add cordova-sqlite-ext --save`
3. Create the database (you can use [DB Browser](http://sqlitebrowser.org/) for this) and copy the .db file to your project `/www` folder.
4. Add code to your `home.ts` folder to open the pre-populated database and then execute some query on a existing table on said database.
5. Run your project on a emulator/device and see the results.

---

# Possible problems
1. If you can't execute with sucess the commands: `ionic build android` or `ionic run android` then run:

     `cordova platform add https://github.com/apache/cordova-android`

# Async/Await
This example contains commented code to use async/await to query the database. 

To use this code, you should go to ```home.ts``` and comment lines 16-23 and uncomment line 24 and the method called ```accessDB()```.

Then go to ```tsconfig.json``` and change ```"target":"es5"``` to ```"target":"es2015"```