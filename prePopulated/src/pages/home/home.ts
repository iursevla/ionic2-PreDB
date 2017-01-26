import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { SQLite } from 'ionic-native';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public storage: SQLite;
  private options = { name: "data.db", location: 'default', createFromLocation: 1 };
  private queryNames = "SELECT * FROM testTable";
  public names: String[] = [];

  constructor(public navCtrl: NavController) {
    this.storage = new SQLite();
    /** Here's the code to make a simple call to the database 
     * 1st you need to open the database. If you need help see: https://github.com/litehelpers/Cordova-sqlite-storage#opening-a-database
     * 2nd you can make your call to the database now using executeSql method.
    */
    this.storage.openDatabase(this.options).then((success) => {
      console.info("Opened data.db with success");
      this.storage.executeSql(this.queryNames, {}).then((data) => {
        let rows = data.rows;
        for (let i = 0; i < rows.length; i++) 
          this.names.push(rows.item(i).name);
        console.log("Number of names on database = " + this.names.length);
      });
    }, (err) => {
      console.log("Error opening database: " + err);
    });
  }
}
