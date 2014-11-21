$(function () {

  var matches = location.pathname.split('/');
  matches.shift();
  if(matches[0]==='browse'
    && matches[1]==='keyword'){
    $('#search-input').val(matches[2]);
    $('#search-input').focus(); 
  }
});
