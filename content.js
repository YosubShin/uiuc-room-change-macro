function injectJs(srcFile) {
    var scr = document.createElement('script');
    scr.src = srcFile;
    document.getElementsByTagName('head')[0].appendChild(scr);
}

var dsturl = "https://starrez.housing.illinois.edu/StarRezPortal/Modules/Renewal/RoomSearchWizard_Floor.aspx";
if (document.URL.substring(0, dsturl.length) == dsturl) {

	$(document).ready(function() {

	injectJs(chrome.extension.getURL('inject.js'));
		if (localStorage.getItem('macro') == "true") {
			$("#ctl00_ButtonPanel").append('<input type="button" onclick="macrostop();" class="ui-continue-button ui-button ui-widget ui-state-default ui-corner-all" role="button" aria-disabled="false">');
			
		} else {
			$("#ctl00_ButtonPanel").append('<input type="button" onclick="macro();" class="ui-continue-button ui-button ui-widget ui-state-default ui-corner-all" role="button" aria-disabled="false">');
		}

		if (localStorage.getItem('macro') == "true") {
			var cell = $('#ctl00_Content_grdFloors_grid tr td:nth-child(2)');

			var succeed = false;
			if (cell.size() > 0 || parseInt(cell.text(), 10) > 0) {
				succeed = true;
			}

			if (succeed == true) {
				localStorage.removeItem('macro');
				//TODO play sound or notify me somehow!!!!
				alert("Your room is there!");
			} else {
				// Reload if the room is not found
				setTimeout(function() { 
				location.reload();
				}, 5000);
				
			}
		}
	});

}
