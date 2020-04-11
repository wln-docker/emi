var ehost = '';
function emiOpenTab(url, name) {
	let ifr = document.createElement('iframe');
	ifr.id = 'emifr';
	ifr.name = 'emifr';
	ifr.src = '//' + ehost + '/jsapi?do=open&url=' + encodeURI(url) + '&name=' + encodeURI(name);
	ifr.style.display = 'none';
	document.body.appendChild(ifr);
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