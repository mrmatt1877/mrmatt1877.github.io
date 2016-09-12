$( document ).ready(function(){
  var options = [
    {selector: '.material-icons', offset: 200, callback: function(el) {
      Materialize.showStaggeredList($(el));
     } }
  ];
  Materialize.scrollFire(options);

  $('.button-collapse').sideNav({
     closeOnClick: true // Closes side-nav on <a> clicks, useful for Angular/Meteor
  });
})
