// Link to tab
var url = document.location.toString();
if (url.match('#')) {
    $('.nav-tabs a[href="#' + url.split('#')[1] + '"]').tab('show');
}

$('.nav-tabs a').on('shown.bs.tab', function (e) {
    window.location.hash = e.target.hash;
})

// Radio collapsible
$('[name="resourceType"]').on('change', function() {
  if($(this).val() === "url") {
    $('#url').collapse('show');
    $('#upload').collapse('hide');
  } else {
    $('#url').collapse('hide');
    $('#upload').collapse('show');
  }
});
