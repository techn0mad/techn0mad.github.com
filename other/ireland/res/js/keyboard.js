/*
************************************************************
  Keyboard support
    Keys:
      RIGHT arrow  : next page
      LEFT arrow   : previous page
      UP arrow     : index page
      HOME         : first page
      END          : last page
      S,s          : toggle start/stop slide show
      I,i          : toggle exif info
    Tested on: IE6, Mozzila 1.4, Netscape 7.1, Opera 7.2
    Not yet support for Netscape 4.x :-(
    Bugs:
     - HOME,END, NUM+, NUM-  doesn't work in Opera
    Author: Danutz
************************************************************
*/

var takenAction = false;

//IE&Gecko Code
function IEGeckoKeyPress(oEvent) {
	if(typeof _jaWidgetFocus != 'undefined' && _jaWidgetFocus) return true;
	if (!oEvent) var oEvent = window.event;
	if (oEvent.keyCode) myKeyCode = oEvent.keyCode;
	else if (oEvent.which) myKeyCode = oEvent.which;
	if (oEvent.repeat || takenAction) {	return;	}
	if (myKeyCode >= 16 && myKeyCode <= 18) { return; }
	if (oEvent.shiftKey) { myKeyCode += 1000; }
	if (oEvent.ctrlKey)  { myKeyCode += 2000; }
	if (oEvent.altKey)   { myKeyCode += 4000; }
	//TODO_BY_YOU: If you don't know what keycode has your key , uncomment the following ...
	//alert(oEvent.type + "=" + myKeyCode);
	myKeyPress(myKeyCode);
}

function myKeyPress(myKeyCode) {
	switch (myKeyCode) {
		case 39:					// RIGHT arrow
		case 107:					// NUM +
			takenAction = true;
			nextPage();
			break;
		case 37:					// LEFT arrow
		case 109:					// NUM -
			takenAction = true; 
			prevPage();
			break;
		case 38: 					// UP arrow
			takenAction = true;
			indexPage();
			break;
		case 36:					// HOME
			takenAction = true;
			firstPage();
			break;
		case 35:					// END
			takenAction = true;
			lastPage();
			break;
		case 83:					// S,s
			if ( isSlideShow ) {
				// Only if i have slide show
				takenAction = true;
				navSlideShow();
			}
			break;
		case 73:					// I,i
			takenAction = true;
			navToggleInfo();
			break;
		default:	 
			//alert(oEvent.type + "=" + myKeyCode);
			break;
		}
}

function initKeyboard() {
	document.onkeydown = IEGeckoKeyPress;
}

