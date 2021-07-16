$(document).ready(function(){

  // v13 link
  setTimeout(() => {
    $('.dropdown-menu-right#toolbar-user').append('<div class="dropdown-divider"></div><a class="dropdown-item" href="/app/usage-info">           Dashboard Usage          </a>')
  }, 200);

  // v12 link
  setTimeout(() => {
    $('#toolbar-user').append('<li class="divider"></li><li><a href="/desk#usage-info">       Dashboard Usage</a></li>')
  }, 200);
  
});