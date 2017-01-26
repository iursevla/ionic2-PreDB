# ionic2-PreDB
Simple Ionic 2 **pre-populated** database starter project.
Anything let me know by creating a issue or send a PM.
##### Important Note 
I used the emulator for android **Google Nexus 5X - 6.0.0 - API 23 from Genymotion**


#### To install:
1. Clone project
2. Inside the project folder run: `npm init`
3. Next: `ionic build android`
3. After that: `ionic run android`

Now you should see on your emulator/device the project and on the main page the elements from the database `data.db` table `test`.

---

#### Start from scratch:
1. Create ionic project e.g., `ionic start projectName blank --v2`
2. Add cordova-sqlite-ext: `ionic plugin add cordova-sqlite-ext --save`
3. Create(you can use DB Browser for this) and copy your .db file to your project `/www` folder.
4. Open and read your database file on your `home.ts` file
5. Run your project on a emulator/device and see the results.
