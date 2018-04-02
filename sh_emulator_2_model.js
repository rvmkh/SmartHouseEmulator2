"use strict";

/**************************** Devices Parent *******************************************/
class PowerSwitch {
	constructor(devname){
		this._devname = devname;
		this._state = false;
	}
	get state() {
		return this._state;
	}
	on() {
		this._state = true;
	}
	off() {
		this._state = false;
	}
	display() {
		console.log(this._devname);
		console.log("Power state: " + this._state + "\n\n");
	}
}
/**************************** New Devices Model *******************************************/

class NewDevice extends PowerSwitch {
	constructor(devname) {
		super(devname);																																// PowerSwitch Parent
		this._k = 0;																																	// Initial key number for Map
		this._devsmap = new Map;																											// Creating Map for new objects
	}
	create(devname) {
			this._newdev = new PowerSwitch(devname);																		// New exemplar of PowerSwitch
			this._devsmap.set(this._k, this._newdev);																		// Filling Map with new Object
			this._k++;																																	// Increasing key
	}
	clear(){
		this._devsmap.clear();
	}
	checkname(delname){

	}
	get devsqtty() {
		console.log("Devs qtty: " + this._devsmap.size);
		return this._devsmap.size;
	}
}

/************************** TV && Condey - static devices *********************************************/

class TVset extends PowerSwitch {
	constructor(devname, chnlist) {
		super(devname);
		this._chnlist = chnlist;
	}
	get chnlist(){
		return this._chnlist;
	}
	set chnlist(chnlist){
		this._chnlist = chnlist;
	}
	sleep() {
		return true;
	}
}

class Condey extends PowerSwitch {
	constructor(devname, t, fan){
		super(devname);
		this._t = t;
		this._fan;
	}
	get tempr() {
		return this._t;
	}
	set tempr(t) {
		this._t = t;
	}
	get fan() {
		return this._fan;
	}
	set fan(fan) {
		this._fan = fan;
	}
}





//
