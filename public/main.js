$(document).ready(function() {
  $('#salida').hide();
  $('#parse').click(function() {
    try {
      var result = pl0.parse($('#input').val());
      $('#output').html(JSON.stringify(result,undefined,2));
      tabTransition("#entrada", "#salida");
    }
    catch (e) {
      $('#output').html('<div class="error"><pre>\n' + String(e) + '\n</pre></div>');
    }
  });

  $("#examples").change(function(ev) {
    var f = ev.target.files[0]; 
    if (f) {
      var r = new FileReader();
      r.onload = function(e) { 
        var contents = e.target.result;
        $("#saveas").val(f.name.replace(/\./g, '_'));
        input.innerHTML = contents;
      }
      r.readAsText(f);
    }
    else
      alert("Failed to load file");
  });

  $( "#tad_entrada" ).click(function() {
    tabTransition("#salida", "#entrada");
  });

  $( "#tad_salida" ).click(function() {
    tabTransition("#entrada", "#salida");
  });

  $( "#download" ).click(function() {
    saveTextAsFile($( "#output" ).html(),$( "#saveas" ).val());
  });
    
  $( "#savebutton" ).click(function() {
    if ($("#saveas").val().length > 0)
      $( "#formsave" ).submit();
    else
      alert("Debes dar un nombre al fichero");
  });
});

function tabTransition (t1, t2) {
  var but1Name = t1.replace(/^#/, '#tad_');
  var but2Name = t2.replace(/^#/, '#tad_');

  $(but1Name).parent().removeClass("active");
  $(but2Name).parent().addClass("active");
  $(t1).hide(250);
  $(t2).show(250);
}

function saveTextAsFile (val,name) {
  var textToWrite = val;
  if (textToWrite.length > 5) {
    var textFileAsBlob = new Blob([textToWrite], {type:'text/plain'});
    var fileNameToSaveAs = name;
    
    var downloadLink = document.createElement("a");
    downloadLink.download = fileNameToSaveAs;
    downloadLink.innerHTML = "Download File";
    if (window.webkitURL != null) {
        // Chrome allows the link to be clicked
        // without actually adding it to the DOM.
        downloadLink.href = window.webkitURL.createObjectURL(textFileAsBlob);
    }
    else {
        // Firefox requires the link to be added to the DOM
        // before it can be clicked.
        downloadLink.href = window.URL.createObjectURL(textFileAsBlob);
        downloadLink.onclick = destroyClickedElement;
        downloadLink.style.display = "none";
        document.body.appendChild(downloadLink);
    }

    downloadLink.click();
  }
  else
    alert("Es necesario introducir un contenido en el textarea y lanzar el parser antes de descargar!!");
}

function test_main(value){ 
  var result = pl0.parse(value);
  return JSON.stringify(result,undefined,2).replace(/\n/g,"");
}