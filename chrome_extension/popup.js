// Copyright (c) 2012 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

var files = ['auto_review/dependencies/jquery-3.2.1.min.js',
            'auto_review/review_functions.js', 
            'auto_review/main.js'];

function click(e) {
  if (e.target.id === "start") {
    chrome.tabs.executeScript(null, {file: "contentscript.js"});
    window.close();
  }
}

document.addEventListener('DOMContentLoaded', function () {
  var divs = document.querySelectorAll('div');
  for (var i = 0; i < divs.length; i++) {
    divs[i].addEventListener('click', click);
  }
});
