QM.start();
var ativo = 1;

chrome.browserAction.onClicked.addListener(function() {
	ativo = ativo == 1? 0 : 1;
	if(ativo == 1) {
		QM.start();
		chrome.browserAction.setIcon({path: "logo_true.png"}, null);
		chrome.browserAction.setTitle({title: "Parar TCC"});
	} else {
		QM.stop();
		chrome.browserAction.setIcon({path: "logo_false.png"}, null);
		chrome.browserAction.setTitle({title: "Iniciar TCC"});
	}
});