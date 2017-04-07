import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  private options = { name: "data.db", location: 'default', createFromLocation: 1 };
  private queryNames = "SELECT * FROM testTable";
  public names: String[] = [];

  constructor(public navCtrl: NavController, private sqlite: SQLite) {
    this.sqlite.create(this.options).then((db: SQLiteObject) => {
      db.executeSql(this.queryNames, {}).then((data) => {
        let rows = data.rows;
        for (let i = 0; i < rows.length; i++)
          this.names.push(rows.item(i).name);
        console.log("Number of names on database = " + this.names.length);
      })
    });
    /* this.accessDB();*/
  }

  /* async accessDB() {
   let db = await this.sqlite.create(this.options);
   let data = await db.executeSql(this.queryNames, {});
   let rows = data.rows;
   for (let i = 0; i < rows.length; i++)
     this.names.push(rows.item(i).name + " async/await");
 }*/
}
