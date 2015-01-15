/**
 * Welcome to Pebble.js!
 *
 * AccelerometerApp. 
 * Monitors the Accelerometer
 * By Max Hunt - 609556
 * Date - 14/01/2015
 */
//include Accel Pebble Libary
var Accel = require('ui/accel');
//iniate acceleometer
Accel.init();
//include UI Pebble Libary
var UI = require('ui');
//get vector Pebble Libary
var Vector2 = require('vector2');
var AccelerometerScreen = new UI.Window();
var AxisSnapShot = new UI.Text({ position: new Vector2(0,0), size: new Vector2(144, 168) });

//start App screen
var main = new UI.Card({   
   icon: 'images/menu_icon.png',
   subtitle: 'Track your Accelerometer',
   body: 'Press the select button to get a snapshot of accelerometer.',
   scrollable: true
});

//start APP
console.log("App started");
main.show();


main.on('click', 'select', onClick);

function onClick(e) {
   console.log("Entered Tracker");   
   Accel.peek(onPeek);
}

function onPeek(e) {
   console.log('Current acceleration on axis are: X=' + e.accel.x + ' Y=' + e.accel.y + ' Z=' + e.accel.z);     
   AxisSnapShot.text('Snapshot of acceleration on axis is: X=' + e.accel.x + ' Y=' + e.accel.y + ' Z=' + e.accel.z);
   try{
      AccelerometerScreen.hide();
      console.log("WindowRefreshed");
   }catch(err){
      console.log(err);
      console.log("First Time in Screen");
   }     
   AccelerometerScreen.insert(0,AxisSnapShot);
   AccelerometerScreen.show();
}



