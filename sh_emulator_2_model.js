"use strict";

class PowerSwitch {
	constructor(devname){
		this._devname = devname;
		this._state = false;
	}
	get devname(){
		return this._devname;
	}
	set devname(devname) {
		this._devname = devname;
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

class TVset extends PowerSwitch {
	constructor(devname, chnlist, timer) {
		super(devname);
		this._chnlist = chnlist;
		this._timer = timer;
	}
	get chnlist(){
		return this._chnlist;
	}
	set chnlist(chnlist){
		this._chnlist = chnlist;
	}
	set sleep(timer) {
		setTimeout(
			function(){
				console.log("\nTV slept ...\n");
			},
			timer
		);
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

class LampStore {
	constructor(name){
		this._lamps = [];
	}
	add(lamp) {
		this._lamps.push(lamp);
	}
	getLamp(name) {
		return this._lamps.filter((lamp) => {
			if ( lamp.name === name ) {
				return true;
			}
		});
	}
}

class LampFabric {
	constructor(name){
		this._lamps = [];
	}
	create(name) {
			this._lamps.push(new PowerSwitch(name));
	}
	removeByName(name){
		this.lamps = this._lamps.filter(
			(lamp) => {
				if ( lamp.name !== name ){
					return true;
				}
			}
		);
	}
	remove(lamp) {
		this._lamps = this._lamps.filter(
			(l) => {
				if ( l !== lamp ) {
					return true;
				}
			}
		);
	}
	clear() {
		this._lamps.length = 0;
	}
}
