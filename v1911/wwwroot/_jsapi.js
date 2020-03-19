var xchost = '';
function xcOpenTab(url, name) {
	let ifr = document.createElement('iframe');
	ifr.id = 'xc_ifr';
	ifr.name = 'xc_ifr';
	ifr.src = '//' + xchost + '/jsapi?do=open&url=' + encodeURI(url) + '&name=' + encodeURI(name);
	ifr.style.display = 'none';
	document.body.appendChild(ifr);
}
function xcBackTab(name) {
	let ifr = document.createElement('iframe');
	ifr.id = 'xc_ifr';
	ifr.name = 'xc_ifr';
	ifr.src = '//' + xchost + '/jsapi?do=back&name=' + encodeURI(name);
	ifr.style.display = 'none';
	document.body.appendChild(ifr);
}