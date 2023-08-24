// ==UserScript==
// @name     ALX check all
// @version  0.2
// @grant    none
// @include http://intranet.alxswe.com/projects/*
// @include https://intranet.alxswe.com/projects/*
// @require http://code.jquery.com/jquery-latest.js
// ==/UserScript==

$(document).ready(function() {
  const check_xpath = '//center/button[contains(@class, "test_send")]';

  function clickCheckboxes() {
    // Capture current scroll position
    const initialScrollPosition = window.scrollY || window.pageYOffset;

    // Click the checkboxes
    const checkboxes = document.evaluate(check_xpath, document, null, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null);
    for (let i = 0; i < checkboxes.snapshotLength; i++) {
      checkboxes.snapshotItem(i).click();
    }

    // Restore scroll position
    window.scrollTo(0, initialScrollPosition);
  }

  // Click checkboxes when the script is executed
  clickCheckboxes();
});
