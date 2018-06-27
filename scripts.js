<script
src="https://code.jquery.com/jquery-3.1.1.min.js"
integrity="sha256-hVVnYaiADRTO2PzUGmuLJr8BLUSjGIZsDYGmIJLv2b8="
crossorigin="anonymous">
</script>

<script src="semantic/dist/semantic.min.js"> </script>
<script>
    $('.toc.item').click(function(){
      $('.ui.sidebar')
    .sidebar('toggle');
    });
</script>

<script>
          $(document).ready(function(){
              $('a[href^="#"]').on('click', function(event) {
  
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
