$(document).ready(function(){
    //Slider
    $('.bxslider').bxSlider({
        mode: 'fade',
        captions: true,
        slideWidth: 1200,
        infiniteLoop: true
      });

      //Post

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

      
      
})