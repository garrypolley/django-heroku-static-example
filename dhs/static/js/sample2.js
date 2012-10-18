 $(document).ready(function() {
   $("#orderedlist").on('hover', 'li', function(e) {
    if( e.type === 'mouseenter' ) {
     $(this).addClass($(this)[0].innerHTML);
    } else {
     $(this).removeClass($(this)[0].innerHTML);
    }
   });
});