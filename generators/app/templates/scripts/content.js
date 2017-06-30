'use strict';

browser.runtime.onMessage.addListener(function(e){
	document.body.style.backgroundColor='red';
	console.log('Extension Loaded');
});