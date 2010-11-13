var win = Titanium.UI.currentWindow;

var isAndroid = Ti.Platform.osname == 'android';

if (isAndroid) {
	var showCancel = Ti.UI.createSwitch({
		style : Ti.UI.Android.SWITCH_STYLE_CHECKBOX,
		title: 'Show Cancel Button',
		top : 160
	});
	
	var applyButtons = function() 
	{
		if (showCancel.value) {
			dialog.buttonNames = [ 'Cancel'];
		} else {
			dialog.buttonNames = [];
		}
	}
}
//
// BASIC OPTIONS DIALOG
//
var dialog = Titanium.UI.createOptionDialog({
	options:['Option 1', 'Option 2', 'Option 3'],
	destructive:2,
	cancel:1,
	title:'I am a title'
});

// add event listener
dialog.addEventListener('click',function(e)
{
	label.text = 'You selected ' + e.index;
	
	if (isAndroid) {
		if (e.button) {
			label.text += ' button'
		}  else {
			label.text += ' option'
		}
	}
});

// BUTTON TO SHOW BASIC DIALOG
var button1 = Titanium.UI.createButton({
	title:'Show Dialog 1',
	height:40,
	width:200,
	top:10
});
button1.addEventListener('click', function()
{
	if (isAndroid) {
		applyButtons();
	}
	dialog.show();
});

// BUTTON TO MODIFY DIALOG AND SHOW
var button2 = Titanium.UI.createButton({
	title:'Modify and Show Dialog',
	height:40,
	width:200,
	top:60
});
button2.addEventListener('click', function()
{
	dialog.title = 'I changed the title';
	dialog.options = ['New Option 1', 'New Option 2', 'New Option 3', 'New Option 4'];
	dialog.destructive = 0;
	dialog.cancel = 1;
	if (isAndroid) {
		applyButtons();
	}
	dialog.show();
});

// label that shows clicked option
var label = Titanium.UI.createLabel({
	text:'No selection' ,
	color:'#999',
	font:{
		fontFamily:'Helvetica Neue',
		fontSize:15
	},
	textAlign:'center',
	top:110,
	width:300
});

win.add(button1);
win.add(button2);
win.add(label);

if (isAndroid) {
	win.add(showCancel);
}