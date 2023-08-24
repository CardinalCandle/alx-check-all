// ==UserScript==
// @name     ALX check all
// @version  0.1
// @grant    none
// @include http://intranet.alxswe.com/projects/*
// @include https://intranet.alxswe.com/projects/*
// @require http://code.jquery.com/jquery-latest.js
// ==/UserScript==
$(document).ready(function() {
const modalOpen_xpath = '//*[contains(@class, "check-your-task")]';
const modalClose_xpath = '//center/button[contains(@class, "close-modal")]';
const check_xpath = '//center/button[contains(@class, "test_send")]';

var xpath = function (xpathToExecute) {
    var result = [];
    var nodesSnapshot = document.evaluate(xpathToExecute, document, null, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null);
    for (var i = 0; i < nodesSnapshot.snapshotLength; i++) {
        result.push(nodesSnapshot.snapshotItem(i));
    }
    return result;
}


function buttonClick (path) {
  xpath(path).forEach(button => button.click());
  console.log('button clicked');
  return;
}
  
  function lockA () {
  var xPos = window.scrollX;
  var yPos = window.scrollY;
  window.onscroll = () => window.scroll(xPos, yPos);
}
  function unlock () { window.onscroll = ""; }
  
  
setInterval(function () {
	// Capture current scroll position
	const initialScrollPosition = window.scrollY || window.pageYOffset;
  buttonClick(modalOpen_xpath);
  buttonClick(check_xpath);
  buttonClick(modalClose_xpath);
  // Restore scroll position
  window.scrollTo(0, initialScrollPosition);
	
	}, 25000);
  return;
  

  
});
