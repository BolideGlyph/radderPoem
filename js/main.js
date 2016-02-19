
/*jsl:option explicit*/
/*jsl:declare $*//*jsl:declare addEventListener*//*jsl:declare isDigits*//*jsl:declare alert*//*jsl:declare blur*//*jsl:declare clearInterval*//*jsl:declare clearTimeout*//*jsl:declare close*//*jsl:declare closed*//*jsl:declare confirm*//*jsl:declare console*//*jsl:declare Debug*//*jsl:declare defaultStatus*//*jsl:declare document*//*jsl:declare event*//*jsl:declare focus*//*jsl:declare frames*//*jsl:declare getComputedStyle*//*jsl:declare history*//*jsl:declare Image*//*jsl:declare length*//*jsl:declare location*//*jsl:declare moveBy*//*jsl:declare moveTo*//*jsl:declare navigator*//*jsl:declare open*//*jsl:declare opener*//*jsl:declare opera*//*jsl:declare Option*//*jsl:declare parent*//*jsl:declare Number*//*jsl:declare parseInt*//*jsl:declare print*//*jsl:declare prompt*//*jsl:declare resizeBy*//*jsl:declare resizeTo*//*jsl:declare screen*//*jsl:declare scroll*//*jsl:declare scrollBy*//*jsl:declare scrollTo*//*jsl:declare setInterval*//*jsl:declare setTimeout*//*jsl:declare status*//*jsl:declare top*//*jsl:declare window*//*jsl:declare XMLHttpRequest*/


var g_testP;
var g_txtInputPoem;
var g_sOriginal;
var g_aOriginalArray;
var g_sRadderPoem;
var g_synString2;
var g_comboArea;
var g_divResult;

window.onload = Init;

function Init() {
    alert("init");
    g_testP = document.getElementById("testP");
    g_txtInputPoem = document.getElementById("txtInputPoemID");
    g_divResult = document.getElementById("divResult");
    g_comboArea = document.getElementById("comboArea");

    g_txtInputPoem.value = "Put your poem here!";
    document.getElementById("btnProcessPoem").onclick = ProcessPoem;

}

function combo(thelist, theinput) {
    theinput = document.getElementById(theinput);
    var idx = thelist.selectedIndex;
    var content = thelist.options[idx].innerHTML;
    theinput.value = content;
}

function ProcessPoem() {
    alert("process poem");
  g_sOriginal = g_txtInputPoem.value;
  //  g_sOriginal = g_testP.innerHTML;
  //g_divResult.innerHTML += g_sOriginal;

  var newString ="";

    var parsedOriginal = g_sOriginal.split(' '); // this is an array containing the items
    var word = parsedOriginal[2];
    loadDoc2(word);
  //  g_divResult.innerHTML += newString;

 //   g_divResult.innerHTML += g_synString2;

     for (var i = 0; i < parsedOriginal.length; i++) {
      g_divResult.innerHTML += "<br>" + parsedOriginal[i];
      createBox(parsedOriginal[i]);
    }
f
}


function loadDoc2(word) {
  var httpRequest;
  currentWord = word;
  var synString = "";
  var that = this;

  makeRequest('http://words.bighugelabs.com/api/2/3d1c2d7a3ce0005425de5b51cad153a8/'+ currentWord + '/xml');


  function makeRequest(url) {
    httpRequest = new XMLHttpRequest();

    if (!httpRequest) {
      alert('Giving up :( Cannot create an XMLHTTP instance');
      return false;
    }
    //httpRequest.onreadystatechange = alertContents;
    httpRequest.open('GET', url);
    httpRequest.send();
  }
  //
  //function alertContents() {
  //  if (httpRequest.readyState === XMLHttpRequest.DONE) {
  //    if (httpRequest.status === 200) {
  //    //  g_divResult.innerHTML += httpRequest.responseText;
  //   //  g_synString2 =  httpRequest.responseText;
  //   //  alert(httpRequest.responseText);
  //     that.synString ="reeeeeeee";
  //   //  var striiing = httpRequest.responseText
  //  //   setSynString(striiing);
  //     g_synString2 = httpRequest.responseText;
  //
  //
  //    g_divResult.innerHTML += httpRequest.responseText;
  //  //  return this.synString;
  //    } else {
  //      alert('There was a problem with the request.');
  //    }
  //  }
  //}
}

function createBox(word) {
g_comboArea.innerHTML +=

  "<div class='select-editable'> "
 + " <select onchange='this.nextElementSibling.value=this.value'> "
 //+ "   <option  value=''></option> "
  + "  <option selected='selected' value='" + word + "' >" + word + "</option> "
 + " </select> "
 + " <input type='text' name='format' value=''/> "
+ "</div>";
}
















/*
function ajax(url, callbackFunction) {
  alert("ajax called");
    var request =  new XMLHttpRequest();
    request.open("GET", url, true);
    request.setRequestHeader("Content-Type",
      "application/x-www-form-urlencoded");
  alert("1");
    request.onreadystatechange = function() {
      alert("2");
      var done = 4, ok = 200;
     // if (request.readyState == done && request.status == ok) {
        if (request.responseText) {
          alert("3");
          callbackFunction(request.responseText);
          g_divResult.innerHTML +=request.responseText;
          alert("4");
        }
   //   }
    };
    request.send();

  }
  */

/*
function loadDoc() {
  alert("0");
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (xhttp.status == 200) {
 //     g_divResult.innerHTML += xhttp.responseText;
     alert("1");
    }
  };
 // xhttp.open("GET", "ajax_info.txt", true);
 xhttp.open("GET", "words.bighugelabs.com/api/2/your-api-key/love/xml", true);
  xhttp.send();
   g_divResult.innerHTML += xhttp.responseText;
}

  var buttonClicked = function () {
    ajax('http://words.bighugelabs.com/api/2/3d1c2d7a3ce0005425de5b51cad153a8/love/', getComplete);
  }

  var getComplete = function (text) {
    alert(text);
  }

  */