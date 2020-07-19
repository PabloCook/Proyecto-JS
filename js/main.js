$(document).ready(function(){
    //Slider
    if(window.location.href.indexOf('index') > -1){
    $('.bxslider').bxSlider({
        mode: 'fade',
        captions: true,
        slideWidth: 1200,
        infiniteLoop: true
      });
    }

      //Post
      if(window.location.href.indexOf('index') > -1){
      var posts = [
      {
        title: 'Prueba de titulo 1',
        date: 'Publicado el día: ' + moment().format("D") + ' de ' + moment().format("MMMM") + ' de ' + moment().format("YYYY"),
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pharetra vel turpis nunc eget lorem dolor sed. Sollicitudin aliquam ultrices sagittis orci a scelerisque purus semper. Massa enim nec dui nunc. Vulputate ut pharetra sit amet aliquam id diam maecenas. Donec enim diam vulputate ut pharetra sit amet aliquam id. Scelerisque in dictum non consectetur a erat nam at lectus. Velit scelerisque in dictum non consectetur a erat. Mattis nunc sed blandit libero volutpat sed cras. Facilisis sed odio morbi quis. Sem nulla pharetra diam sit amet nisl suscipit adipiscing. Accumsan in nisl nisi scelerisque eu ultrices vitae auctor eu. Aliquam vestibulum morbi blandit cursus risus at ultrices. Ante in nibh mauris cursus mattis molestie a iaculis. Ultrices dui sapien eget mi proin. A erat nam at lectus. Consectetur libero id faucibus nisl tincidunt. Morbi enim nunc faucibus a. Nulla aliquet porttitor lacus luctus accumsan.'
      },
      {
        title: 'Prueba de titulo 2',
        date: 'Publicado el día: ' + moment().format("D") + ' de ' + moment().format("MMMM") + ' de ' + moment().format("YYYY"),
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pharetra vel turpis nunc eget lorem dolor sed. Sollicitudin aliquam ultrices sagittis orci a scelerisque purus semper. Massa enim nec dui nunc. Vulputate ut pharetra sit amet aliquam id diam maecenas. Donec enim diam vulputate ut pharetra sit amet aliquam id. Scelerisque in dictum non consectetur a erat nam at lectus. Velit scelerisque in dictum non consectetur a erat. Mattis nunc sed blandit libero volutpat sed cras. Facilisis sed odio morbi quis. Sem nulla pharetra diam sit amet nisl suscipit adipiscing. Accumsan in nisl nisi scelerisque eu ultrices vitae auctor eu. Aliquam vestibulum morbi blandit cursus risus at ultrices. Ante in nibh mauris cursus mattis molestie a iaculis. Ultrices dui sapien eget mi proin. A erat nam at lectus. Consectetur libero id faucibus nisl tincidunt. Morbi enim nunc faucibus a. Nulla aliquet porttitor lacus luctus accumsan.'
      },
      {
        title: 'Prueba de titulo 3',
        date: 'Publicado el día: ' + moment().format("D") + ' de ' + moment().format("MMMM") + ' de ' + moment().format("YYYY"),
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pharetra vel turpis nunc eget lorem dolor sed. Sollicitudin aliquam ultrices sagittis orci a scelerisque purus semper. Massa enim nec dui nunc. Vulputate ut pharetra sit amet aliquam id diam maecenas. Donec enim diam vulputate ut pharetra sit amet aliquam id. Scelerisque in dictum non consectetur a erat nam at lectus. Velit scelerisque in dictum non consectetur a erat. Mattis nunc sed blandit libero volutpat sed cras. Facilisis sed odio morbi quis. Sem nulla pharetra diam sit amet nisl suscipit adipiscing. Accumsan in nisl nisi scelerisque eu ultrices vitae auctor eu. Aliquam vestibulum morbi blandit cursus risus at ultrices. Ante in nibh mauris cursus mattis molestie a iaculis. Ultrices dui sapien eget mi proin. A erat nam at lectus. Consectetur libero id faucibus nisl tincidunt. Morbi enim nunc faucibus a. Nulla aliquet porttitor lacus luctus accumsan.'
      },
      {
        title: 'Prueba de titulo 4',
        date: 'Publicado el día: ' + moment().format("D") + ' de ' + moment().format("MMMM") + ' de ' + moment().format("YYYY"),
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pharetra vel turpis nunc eget lorem dolor sed. Sollicitudin aliquam ultrices sagittis orci a scelerisque purus semper. Massa enim nec dui nunc. Vulputate ut pharetra sit amet aliquam id diam maecenas. Donec enim diam vulputate ut pharetra sit amet aliquam id. Scelerisque in dictum non consectetur a erat nam at lectus. Velit scelerisque in dictum non consectetur a erat. Mattis nunc sed blandit libero volutpat sed cras. Facilisis sed odio morbi quis. Sem nulla pharetra diam sit amet nisl suscipit adipiscing. Accumsan in nisl nisi scelerisque eu ultrices vitae auctor eu. Aliquam vestibulum morbi blandit cursus risus at ultrices. Ante in nibh mauris cursus mattis molestie a iaculis. Ultrices dui sapien eget mi proin. A erat nam at lectus. Consectetur libero id faucibus nisl tincidunt. Morbi enim nunc faucibus a. Nulla aliquet porttitor lacus luctus accumsan.'
      },
      {
        title: 'Prueba de titulo 5',
        date: 'Publicado el día: ' + moment().format("D") + ' de ' + moment().format("MMMM") + ' de ' + moment().format("YYYY"),
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pharetra vel turpis nunc eget lorem dolor sed. Sollicitudin aliquam ultrices sagittis orci a scelerisque purus semper. Massa enim nec dui nunc. Vulputate ut pharetra sit amet aliquam id diam maecenas. Donec enim diam vulputate ut pharetra sit amet aliquam id. Scelerisque in dictum non consectetur a erat nam at lectus. Velit scelerisque in dictum non consectetur a erat. Mattis nunc sed blandit libero volutpat sed cras. Facilisis sed odio morbi quis. Sem nulla pharetra diam sit amet nisl suscipit adipiscing. Accumsan in nisl nisi scelerisque eu ultrices vitae auctor eu. Aliquam vestibulum morbi blandit cursus risus at ultrices. Ante in nibh mauris cursus mattis molestie a iaculis. Ultrices dui sapien eget mi proin. A erat nam at lectus. Consectetur libero id faucibus nisl tincidunt. Morbi enim nunc faucibus a. Nulla aliquet porttitor lacus luctus accumsan.'
      },

      ];
      //Cargar Posts
      posts.forEach((item, index)=>{
        var post = `
        <article class="post">
        <h2>${item.title}</h2>
        <span class="date">${item.date}</span>
        <p>
        ${item.content}
        </p>
        <a href="#" class="button-more">Leer más</a>
        </article>
        `;
        $("#posts").append(post);
      })
    }
      //Seleccionar tema
      var theme = $("#theme");
      $("#to-green").click(function(){
        theme.attr("href","css/green.css");
      });
      $("#to-blue").click(function(){
        theme.attr("href","css/blue.css");
      });
      $("#to-red").click(function(){
        theme.attr("href","css/red.css");
      });
      //Subir suavizado
      $('.subir').click(function(e){
        e.preventDefault();

        $('html, body').animate({
          scrollTop: 0
        }, 1000);
        return false;
      });
      //Login falso
      $("#login form").submit(function(){
        var form_name= $("#name").val();
        localStorage.setItem("form_name",form_name);
        location.reload();
      })

      var form_name = localStorage.getItem("form_name");
      if(form_name != null && form_name != undefined)
      {
        var about_p =  $("#about p");
        about_p.html("<br><hr><br><Strong>Bienvenido, " + form_name + "</Strong> ");
        about_p.append("<br><a href='#' id = 'logout'>Cerrar sesión </a>");
        $("#login").hide();
        $("#logout").click(function(){
          localStorage.clear();
          location.reload();
        });
      }
      //Acordeon
      if(window.location.href.indexOf('About') > -1){
        $('#acordeon').accordion();
      }
        //Reloj
      if(window.location.href.indexOf('reloj') > -1){
        
        setInterval(function(){
          var reloj = moment().format('h:mm:ss a');
          $('#reloj').html(reloj);
        },1000);
        
      }
      if(window.location.href.indexOf('contact') > -1){
        
      $('#contact').validate();
      }
      
})