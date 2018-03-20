"use strict";

let tvset = new TVset("TVset");

tvset.on();
tvset.display();

tvset.off();
tvset.display();

tvset.chnlist = "Discovery Science";
console.log("TVset get Channel List:\n" + tvset.chnlist);

tvset.chnlist = tvset.chnlist + "\nDiscovery Channel\n";
console.log("TVset get Channel List:\n" + tvset.chnlist);

tvset.sleep = "3000";
console.log("\n");

/******************************/
let condey = new Condey("Conditioner");

condey.on();
condey.display();
condey.off();
condey.display();

condey.tempr = "5";
console.log("Current temperature: " + condey.tempr + " *C");

condey.funspd = "50";
console.log("Current Fan Speed: " + condey.funspd + " rpm");

/******************************/
let ls = new LampStore();
let lf = new LampFabric();

ls.add(new PowerSwitch("Lamp1"));
lf.create("Lamp1");

ls.add(new PowerSwitch("Lamp2"));
lf.create("Lamp2");

ls.add(new PowerSwitch("Lamp3"));
lf.create("Lamp3");

console.dir(ls);
console.dir(lf);
lf.clear();
