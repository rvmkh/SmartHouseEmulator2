"use strict";

class drawTable {
  constructor(name) {
    this._name = name;
    this._table;
    this._row;
    this._cell;
    this.parentElem = document.body;
  }
  create(){
    this._table = document.createElement("table");
    this._table.id = this._name;
    this._table.style.backgroundColor = "lightgray";
    this._table.align = "justify";
    this._table.innerHTML = "<b>&nbsp&nbsp&nbsp&nbsp" + this._name + "&nbsp&nbsp&nbsp&nbsp</b>";
    this._table.style.width = "500px";
    this._table.style.height = "250px";
    this._table.style.border = "thick solid #0000FF";
    this.parentElem.appendChild(this._table);
  }
  addrow() {
    this.parentElem = document.getElementById(this._table.id);
    this._row = document.createElement("row");
    this._row.id = "myrow";
    this.parentElem.appendChild(this._row);
  }
  addcell() {
    this.parentElem = document.getElementById(this._row.id);
    this._cell = document.createElement("cell");
    this._cell.id = "mycell";
    this.parentElem.appendChild(this._cell);
  }
}

function drawtvbutts() {
  let tvtab = new drawTable("TVset1");
  tvtab.create();
  tvtab.addrow();
  for( let i=1; i<4; i++ ) {
    tvtab.addcell();
  }
  let parentcl1 = tvtab._table.childNodes[1].childNodes[0];
  let pwrbut = document.createElement("input");
  pwrbut.type = "submit";
  pwrbut.id = "tvonbut";
  pwrbut.value = "On / Off";
  parentcl1.appendChild(pwrbut);

  let parentcl2 = tvtab._table.childNodes[1].childNodes[1];
  let chnlistbut = document.createElement("input");
  chnlistbut.type = "submit";
  chnlistbut.id = "chnlistbut";
  chnlistbut.value = "Channel List";
  parentcl2.appendChild(chnlistbut);

  let parentcl3 = tvtab._table.childNodes[1].childNodes[2];
  let sleepbut = document.createElement("input");
  sleepbut.type = "submit";
  sleepbut.id = "sleepbut";
  sleepbut.value = "Sleep";
  parentcl3.appendChild(sleepbut);
}
drawtvbutts();

function exectvbuttons(){
	let tvset = new TVset("TVset1");
	let tvtab = document.getElementById("TVset1");

  document.getElementById("tvonbut").onclick = function() {
    if ( tvset.state === true ) {
      tvset.off();
      tvtab.style.backgroundColor = "lightgray";
    }
    else if ( tvset.state === false ) {
      tvset.on();
      tvtab.style.backgroundColor = "lightgreen";
    }
    console.log ( tvset.display() );
  }

	document.getElementById("chnlistbut").onclick = function() {
	   tvtab.innerHTML = '<a href="http://sputniktv.in.ua/inter.html"><br>1 - Inter</a>';
	   tvtab.innerHTML = tvtab.innerHTML + '<a href="http://sputniktv.in.ua/k1-tv.html"><br>2 - K1</a>';
	   tvtab.innerHTML = tvtab.innerHTML + '<a href="http://sputniktv.in.ua/ictv.html"><br>3 - ICTV</a><br>';
	}
	document.getElementById("sleepbut").onclick = function() {
    if ( tvset.state === true && tvset.sleep() === true ) {
       setTimeout(
         function(){
           console.log("\nTV slept after 3 sec...\n");
           document.getElementById("TVset1").style.backgroundColor = "lightgray";
         },
         3000
       );
	     tvset.off();
    }
    else {
      console.log("Please, turn on TV first");
      alert("Please, turn on TV first");
    }
	}
}
exectvbuttons();

/******************************/

function drawCondey() {
  let condeytab = new drawTable("Conditioner1");
  condeytab.create();
  condeytab.addrow();

  let condeyonbut = document.createElement("input");
  condeyonbut.type = "submit";
  condeyonbut.id = "condeyonbut";
  condeyonbut.value = "On / Off";
  condeytab._table.childNodes[1].appendChild(condeyonbut);

  let settempbut = document.createElement("input");
  settempbut.type = "submit";
  settempbut.id = "settempbut";
  settempbut.value = "Set Temperature";
  condeytab._table.childNodes[1].appendChild(settempbut);
}
drawCondey();

function execcondeybuts() {
    let condey = new Condey("Conditioner1");
    let condeytab = document.getElementById("Conditioner1");

    document.getElementById("condeyonbut").onclick = function() {
      if ( condey.state === true ) {
          condey.off();
          condeytab.style.backgroundColor = "lightgray";
      }
      else if ( condey.state === false ) {
          condey.on();
          condeytab.style.backgroundColor = "lightgreen";
      }
      console.log( condey.display() );
    }

    document.getElementById("settempbut").onclick = function() {
      let usertemp = prompt("Set Temperature","5");
      if ( /^\s*\d+\s*$/.test(usertemp) ) {
        condey.tempr = " Current Temperature = " + usertemp + "*C";
        document.getElementById("Conditioner1").childNodes[0].textContent = condey.tempr;
        console.log("Current temperature: " + condey.tempr + " *C");
      }
      else {
        alert("Please use digits only!");
      }
    }
}
execcondeybuts();

/**************************** New Devices View *******************************************/

/** Draw Buttons**/

let divbuts = document.createElement("div");                                    // DIV for Add/Delete butts
divbuts.id = "divbuts";
divbuts.style.width = "300px";
divbuts.style.height = "50px";
divbuts.style.backgroundColor = "lightgray";
divbuts.align = "justify";
divbuts.style.border = "thick solid #0000FF";
document.body.appendChild(divbuts);

let addbut = document.createElement("input");                                   // Add-butt
addbut.type = "submit";
addbut.id = "addbut";
addbut.style.width = "100px";
addbut.style.height = "50px";
addbut.value = "Add new Dev";
document.getElementById("divbuts").appendChild(addbut);

let delbut = document.createElement("input");                                   // Delete-butt
delbut.type = "submit";
delbut.id = "delbut";
delbut.style.width = "100px";
delbut.style.height = "50px";
delbut.value = "Delete Device";
document.getElementById("divbuts").appendChild(delbut);

let clearbut = document.createElement("input");                                   // Clear-butt
clearbut.type = "submit";
clearbut.id = "clearbut";
clearbut.style.width = "100px";
clearbut.style.height = "50px";
clearbut.value = "Clear Devices";
document.getElementById("divbuts").appendChild(clearbut);

/** OnClick Buttons**/

let newdev = new NewDevice();                                                   // New exemplar of Class NewDevice

document.getElementById("addbut").onclick = function() {                        // Addbut onclick
  let newdevname = prompt("Enter the name for Dev","Lamp");                     // Get new dev name from user
  newdev.create(newdevname);                                                    // Create new different Devises, using one Class - different names and keys in Map
  console.log( newdev.devsqtty );                                               // print to console the Qtty of created devices

  let divnewdev = document.createElement("div");                                // Draw new dev
  divnewdev.id = newdevname;
  divnewdev.style.width = "100px";
  divnewdev.style.height = "50px";
  divnewdev.style.backgroundColor = "lightgray";
  divnewdev.style.border = "thick solid green";
  document.body.appendChild(divnewdev);
  divnewdev.textContent = newdevname + " (is clickable)";

  divnewdev.onclick = function() {                                              // On/Off new dev
    if ( newdev._devsmap.get(0).state === true ) {                              // when push new dev to Map, it Key=0 && previous Key++
       newdev._devsmap.get(0).off();
       divnewdev.style.backgroundColor = "lightgray";
    }
    else if ( newdev._devsmap.get(0).state === false ) {
       newdev._devsmap.get(0).on();
       divnewdev.style.backgroundColor = "yellow";
    }
  }
}

document.getElementById("delbut").onclick = function() {                        // Delete-but onclick
  let delname = prompt("Which device delete? Name:","Lamp");                    // Get deleting Device-name from user
  for ( let entry of newdev._devsmap ) {                                        // Dev-map Iterration
      let [mykey, myval] = entry;                                               // Dev-map Destructure
      if ( myval._devname == delname ) {                                        // Devices filter by its name
        newdev._devsmap.delete(mykey);                                          // Delete device from Model with a certain name
        console.log( newdev.devsqtty );
      }
  }
  let deldiv = document.getElementById(delname);                                // Erase DIV for deleted Device
  try {
    document.body.removeChild(deldiv);
  }
  catch(error){
    alert("Looks like device doesn't exist: \n\n" + error);
  }
}

document.getElementById("clearbut").onclick = function() {                      // Clear-but onclick
  let remdiv;                                                                   // Erase DIV for deleted Device
  for ( let value of newdev._devsmap ) {                                        // Dev-map Iterration
    let clear = value[1]._devname;
    remdiv = document.getElementById(clear);
    document.body.removeChild(remdiv);
  }
  newdev.clear();
  console.log( newdev.devsqtty );
}


//
