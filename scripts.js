// <script
// src="https://code.jquery.com/jquery-3.1.1.min.js"
// integrity="sha256-hVVnYaiADRTO2PzUGmuLJr8BLUSjGIZsDYGmIJLv2b8="
// crossorigin="anonymous">
// </script>


// <script>
//     $('.toc.item').click(function(){
//       $('.ui.sidebar')
//     .sidebar('toggle');
//     });
// </script>


 <script type="text/javascript">
              $('.toc.item').click(function(){
                $('.ui.sidebar')
              .sidebar('toggle');
              });


               $(document).ready(function(){
              $('a[href^="#"]').on('click', function(event) {

                    var selector = '.active.item';
                   $(selector).removeClass('active');
                    $(this).addClass('active');
  
                  var target = $( $(this).attr('href') );
              
                  if( target.length ) {
                    event.preventDefault();
                    $('html, body').animate({
                        scrollTop: target.offset().top
                    }, 1000);
                  }
              });
           });
      </script>