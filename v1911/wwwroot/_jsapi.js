var ehost = '';
function emiOpenTab(url, name) {
	if (self.frameElement && self.frameElement.tagName === "IFRAME") {
		let ifr = document.createElement('iframe');
		ifr.id = 'emifr';
		ifr.name = 'emifr';
		ifr.src = '//' + ehost + '/jsapi?do=open&url=' + encodeURIComponent(url) + '&name=' + encodeURI(name);
		ifr.style.display = 'none';
		document.body.appendChild(ifr);
	} else {
		location.href = url
	}
}
function emiBackTab(name) {
	let ifr = document.createElement('iframe');
	ifr.id = 'emifr';
	ifr.name = 'emifr';
	ifr.src = '//' + ehost + '/jsapi?do=back&name=' + encodeURI(name);
	ifr.style.display = 'none';
	document.body.appendChild(ifr);
}
function emiToLogin() {
	let ifr = document.createElement('iframe');
	ifr.id = 'emifr';
	ifr.name = 'emifr';
	ifr.src = '//' + ehost + '/jsapi?do=tologin';
	ifr.style.display = 'none';
	document.body.appendChild(ifr);
}