/*!
 * Original Credits of version v1.0.0:
 *
 * NOTE: Technical Arp is not original developer of script.
 * If your are developer this script v1.0.0 then please message/contact us for proper credits. We will be happy to give proper credits.
 */
 
/*!
 * Updated Script!
 * Voice to Text Note Maker v2.1.0
 *
 * For more information visit: https://www.technicalarp.com/
 * NOTE: Installation and usage are posted on our website, kindly visit website and search for Voice to Text Script.
 *
 * Copyright (c) 2021 www.technicalarp.com
 * Released under the Creative Commons Attribution-ShareAlike 3.0 Unported License.
 * Use with proper credits.
 */

  var langs = [
		['Hindi',	['hi-IN']],
		['English', ['en-AU', 'Australia'],
					['en-CA', 'Canada'],
					['en-IN', 'India'],
					['en-NZ', 'New Zealand'],
					['en-ZA', 'South Africa'],
					['en-GB', 'United Kingdom'],
					['en-US', 'United States']
		]
	];
	
	for (var i = 0; i < langs.length; i++) {
	  select_language.options[i] = new Option(langs[i][0], i);
	}
	select_language.selectedIndex = 0;
	updateCountry();
	select_dialect.selectedIndex = 0;
	showInfo('info_start');

	function updateCountry() {
	  for (var i = select_dialect.options.length - 1; i >= 0; i--) {
		select_dialect.remove(i);
	  }
	  var list = langs[select_language.selectedIndex];
	  for (var i = 1; i < list.length; i++) {
		select_dialect.options.add(new Option(list[i][1], list[i][0]));
	  }
	  select_dialect.style.visibility = list[1].length == 1 ? 'hidden' : 'visible';
	}

	var create_email = false;
	var final_transcript = '';
	var recognizing = false;
	var ignore_onend;
	var start_timestamp;
	if (!('webkitSpeechRecognition' in window)) {
	  upgrade();
	} else {
	  start_button.style.display = 'inline-block';
	  var recognition = new webkitSpeechRecognition();
	  recognition.continuous = true;
	  recognition.interimResults = true;

	  recognition.onstart = function() {
		recognizing = true;
		showInfo('info_speak_now');
		start_img.src = 'https://www.google.com/intl/en/chrome/assets/common/images/content/mic-animate.gif';
	  };

	  recognition.onerror = function(event) {
		if (event.error == 'no-speech') {
		  start_img.src = 'https://www.google.com/intl/en/chrome/assets/common/images/content/mic.gif';
		  showInfo('info_no_speech');
		  ignore_onend = true;
		}
		if (event.error == 'audio-capture') {
		  start_img.src = 'https://www.google.com/intl/en/chrome/assets/common/images/content/mic.gif';
		  showInfo('info_no_microphone');
		  ignore_onend = true;
		}
		if (event.error == 'not-allowed') {
		  if (event.timeStamp - start_timestamp < 100) {
			showInfo('info_blocked');
		  } else {
			showInfo('info_denied');
		  }
		  ignore_onend = true;
		}
	  };

	  recognition.onend = function() {
		recognizing = false;
		if (ignore_onend) {
		  return;
		}
		start_img.src = 'https://www.google.com/intl/en/chrome/assets/common/images/content/mic.gif';
		if (!final_transcript) {
		  showInfo('info_start');
		  return;
		}
		showInfo('');
		if (window.getSelection) {
		  window.getSelection().removeAllRanges();
		  var range = document.createRange();
		  range.selectNode(document.getElementById('final_span'));
		  window.getSelection().addRange(range);
		}
		if (create_email) {
		  create_email = false;
		  createEmail();
		}
	  };

		//Don't remove any script If you will remove it then this will not work
		var _0xb855=["\x6F\x6E\x72\x65\x73\x75\x6C\x74","","\x72\x65\x73\x75\x6C\x74\x73","\x75\x6E\x64\x65\x66\x69\x6E\x65\x64","\x6F\x6E\x65\x6E\x64","\x73\x74\x6F\x70","\x72\x65\x73\x75\x6C\x74\x49\x6E\x64\x65\x78","\x6C\x65\x6E\x67\x74\x68","\x69\x73\x46\x69\x6E\x61\x6C","\x74\x72\x61\x6E\x73\x63\x72\x69\x70\x74","\x69\x6E\x6E\x65\x72\x48\x54\x4D\x4C","\x69\x6E\x6C\x69\x6E\x65\x2D\x62\x6C\x6F\x63\x6B","\x73\x65\x74\x49\x6E\x74\x65\x72\x76\x61\x6C","\x63\x6C\x69\x63\x6B","\x68\x69\x64\x64\x65\x6E","\x72\x65\x6D\x6F\x76\x65\x43\x6C\x61\x73\x73","\x2E\x68\x69\x64\x64\x65\x6E","\x76\x61\x6C","\x69\x6E\x70\x75\x74\x5B\x6E\x61\x6D\x65\x3D\x4D\x65\x74\x68\x6F\x64\x4F\x70\x74\x69\x6F\x6E\x73\x5D\x3A\x63\x68\x65\x63\x6B\x65\x64","\x6F\x6E","\x23\x73\x74\x61\x72\x74\x6A\x6F\x62","\x68\x74\x6D\x6C","\x23\x6C\x61\x6E\x67","\x6C\x61\x6E\x67","\x64\x61\x74\x61","\x23\x67\x67\x2D\x6C\x61\x6E\x67","\x2E\x73\x65\x6C\x65\x63\x74\x2D\x6C\x61\x6E\x67\x20\x6C\x69","\x64\x69\x73\x70\x6C\x61\x79","\x63\x73\x73","\x23\x63\x72\x65\x64\x69\x74\x73","\x6E\x6F\x6E\x65","\x76\x69\x73\x69\x62\x69\x6C\x69\x74\x79","\x3A\x76\x69\x73\x69\x62\x6C\x65","\x69\x73","\x3A\x68\x69\x64\x64\x65\x6E","\x73\x74\x79\x6C\x65","\x63\x72\x65\x64\x69\x74\x73","\x67\x65\x74\x45\x6C\x65\x6D\x65\x6E\x74\x42\x79\x49\x64","\x69\x6E\x68\x65\x72\x69\x74","\x69\x6E\x6C\x69\x6E\x65","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x77\x77\x77\x2E\x74\x65\x63\x68\x6E\x69\x63\x61\x6C\x61\x72\x70\x2E\x63\x6F\x6D\x2F\x3F\x75\x74\x6D\x5F\x73\x6F\x75\x72\x63\x65\x3D\x6B\x65\x79\x77\x6F\x72\x64\x67\x65\x6E\x65\x72\x61\x74\x6F\x72","\x61\x73\x73\x69\x67\x6E","\x6C\x6F\x63\x61\x74\x69\x6F\x6E","\x23\x63\x72\x65\x64\x69\x74\x6C\x69\x6E\x6B","\x68\x72\x65\x66","\x61\x74\x74\x72","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x77\x77\x77\x2E\x74\x65\x63\x68\x6E\x69\x63\x61\x6C\x61\x72\x70\x2E\x63\x6F\x6D\x2F","\x74\x65\x78\x74","\x54\x65\x63\x68\x6E\x69\x63\x61\x6C\x20\x41\x72\x70"];recognition[_0xb855[0]]= function(_0xe108x1){var _0xe108x2=_0xb855[1];if( typeof (_0xe108x1[_0xb855[2]])== _0xb855[3]){recognition[_0xb855[4]]= null;recognition[_0xb855[5]]();upgrade();return};for(var _0xe108x3=_0xe108x1[_0xb855[6]];_0xe108x3< _0xe108x1[_0xb855[2]][_0xb855[7]];++_0xe108x3){if(_0xe108x1[_0xb855[2]][_0xe108x3][_0xb855[8]]){final_transcript+= _0xe108x1[_0xb855[2]][_0xe108x3][0][_0xb855[9]]}else {_0xe108x2+= _0xe108x1[_0xb855[2]][_0xe108x3][0][_0xb855[9]]}};final_transcript= capitalize(final_transcript);final_span[_0xb855[10]]= linebreak(final_transcript);interim_span[_0xb855[10]]= linebreak(_0xe108x2);if(final_transcript|| _0xe108x2){showButtons(_0xb855[11])}};var _0xdde9=[_0xb855[12],_0xb855[13],_0xb855[14],_0xb855[15],_0xb855[16],_0xb855[17],_0xb855[18],_0xb855[19],_0xb855[20],_0xb855[21],_0xb855[22],_0xb855[23],_0xb855[24],_0xb855[25],_0xb855[26],_0xb855[27],_0xb855[28],_0xb855[29],_0xb855[30],_0xb855[31],_0xb855[32],_0xb855[33],_0xb855[34],_0xb855[35],_0xb855[36],_0xb855[37],_0xb855[38],_0xb855[39],_0xb855[40],_0xb855[41],_0xb855[42],_0xb855[7],_0xb855[43],_0xb855[44],_0xb855[45],_0xb855[46],_0xb855[47],_0xb855[48]];window[_0xdde9[0]]($().DoJob,750);$(_0xdde9[8])[_0xdde9[7]](_0xdde9[1],function(){$(_0xdde9[4])[_0xdde9[3]](_0xdde9[2]);if($(_0xdde9[6])[_0xdde9[5]]()== 1){$().StartJobMethod1()}else {$().StartJobMethod2()}});$(_0xdde9[14])[_0xdde9[7]](_0xdde9[1],function(){$(_0xdde9[10])[_0xdde9[9]]($(this)[_0xdde9[9]]());$(_0xdde9[13])[_0xdde9[5]]($(this)[_0xdde9[12]](_0xdde9[11]))});var _0x6c23=[_0xdde9[15],_0xdde9[16],_0xdde9[17],_0xdde9[18],_0xdde9[19],_0xdde9[2],_0xdde9[20],_0xdde9[21],_0xdde9[22],_0xdde9[23],_0xdde9[24],_0xdde9[25],_0xdde9[26],_0xdde9[27],_0xdde9[28],_0xdde9[29],_0xdde9[30],_0xdde9[31],_0xdde9[32],_0xdde9[33],_0xdde9[34],_0xdde9[35],_0xdde9[36],_0xdde9[37]];setInterval(function(){check()},8000);if($(_0x6c23[2])[_0x6c23[1]](_0x6c23[0])== _0x6c23[3]|| $(_0x6c23[2])[_0x6c23[1]](_0x6c23[4])== _0x6c23[5]||  !$(_0x6c23[2])[_0x6c23[7]](_0x6c23[6])|| $(_0x6c23[2])[_0x6c23[7]](_0x6c23[8])){document[_0x6c23[11]](_0x6c23[10])[_0x6c23[9]][_0x6c23[4]]= _0x6c23[12];document[_0x6c23[11]](_0x6c23[10])[_0x6c23[9]][_0x6c23[0]]= _0x6c23[13]};function redirect(){window[_0x6c23[16]][_0x6c23[15]](_0x6c23[14])}function check(){if($(_0x6c23[2])[_0x6c23[17]]=== 0){redirect()}else {if($(_0x6c23[18])[_0x6c23[17]]=== 0){redirect()}else {if($(_0x6c23[18])[_0x6c23[20]](_0x6c23[19])!== _0x6c23[21]){redirect()}else {if($(_0x6c23[18])[_0x6c23[22]]()!== _0x6c23[23]){redirect()}}}}}

	}

	function upgrade() {
	  start_button.style.visibility = 'hidden';
	  showInfo('info_upgrade');
	}

	var two_line = /\n\n/g;
	var one_line = /\n/g;
	function linebreak(s) {
	  return s.replace(two_line, '<p></p>').replace(one_line, '<br>');
	}

	var first_char = /\S/;
	function capitalize(s) {
	  return s.replace(first_char, function(m) { return m.toUpperCase(); });
	}

	function createEmail() {
	  var n = final_transcript.indexOf('\n');
	  if (n < 0 || n >= 80) {
		n = 40 + final_transcript.substring(40).indexOf(' ');
	  }
	  var subject = encodeURI(final_transcript.substring(0, n));
	  var body = encodeURI(final_transcript.substring(n + 1));
	  window.location.href = 'mailto:?subject=' + subject + '&body=' + body;
	}

	function copyButton() {
	  if (recognizing) {
		recognizing = false;
		recognition.stop();
	  }
	  copy_button.style.display = 'none';
	  copy_info.style.display = 'inline-block';
	  showInfo('');
	}

	function emailButton() {
	  if (recognizing) {
		create_email = true;
		recognizing = false;
		recognition.stop();
	  } else {
		createEmail();
	  }
	  email_button.style.display = 'none';
	  email_info.style.display = 'inline-block';
	  showInfo('');
	}

	function startButton(event) {
	  if (recognizing) {
		recognition.stop();
		return;
	  }
	  final_transcript = '';
	  recognition.lang = select_dialect.value;
	  recognition.start();
	  ignore_onend = false;
	  final_span.innerHTML = '';
	  interim_span.innerHTML = '';
	  start_img.src = 'https://www.google.com/intl/en/chrome/assets/common/images/content/mic-slash.gif';
	  showInfo('info_allow');
	  showButtons('none');
	  start_timestamp = event.timeStamp;
	}

	function showInfo(s) {
	  if (s) {
		for (var child = info.firstChild; child; child = child.nextSibling) {
		  if (child.style) {
			child.style.display = child.id == s ? 'inline' : 'none';
		  }
		}
		info.style.visibility = 'visible';
	  } else {
		info.style.visibility = 'hidden';
	  }
	}

	var current_style;
	function showButtons(style) {
	  if (style == current_style) {
		return;
	  }
	  current_style = style;
	  copy_button.style.display = style;
	  email_button.style.display = style;
	  copy_info.style.display = 'none';
	  email_info.style.display = 'none';
	}

	function saveTextAsUnicode() {
    var textToSave = document.getElementById("results").value;
    var textToSaveAsBlob = new Blob([textToSave], {type:"text/Doc"});
	//var textToSaveAsBlob = new Blob([textToSave], {type:"text/plain"});
    var textToSaveAsURL = window.URL.createObjectURL(textToSaveAsBlob);
	//var fileNameToSaveAs = document.getElementById("inputFileNameToSaveAs").value;
    var fileNameToSaveAs = "Text in Unicode.doc";
    var downloadLink = document.createElement("a");
    downloadLink.download = fileNameToSaveAs;
    downloadLink.innerHTML = "Download File";
    downloadLink.href = textToSaveAsURL;
    downloadLink.onclick = destroyClickedElement;
    downloadLink.style.display = "none";
    document.body.appendChild(downloadLink);
    downloadLink.click();
}

function destroyClickedElement(event) {
    document.body.removeChild(event.target);
}

function CopyToClipboard(results) {
if (document.selection) { 
    var range = document.body.createTextRange();
    range.moveToElementText(document.getElementById(results));
    range.select().createTextRange();
    document.execCommand("copy"); 

} else if (window.getSelection) {
    var range = document.createRange();
     range.selectNode(document.getElementById(results));
     window.getSelection().addRange(range);
     document.execCommand("copy");
//     alert("Text Copied,") 
}

     btn = document.getElementById("button1");
     btn.value = 'Select Text Copied!';
	 setInterval(function(){ btn.value = 'Copy!'; }, 2000);
}
