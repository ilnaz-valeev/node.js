
const http = require("http");


let homeViews = 0;
let aboutViews = 0;


const server = http.createServer((req, res) => {
  
  res.setHeader("Content-Type", "text/html; charset=utf-8");


  if (req.url === "/") {
    homeViews++; 
    res.statusCode = 200;
    res.end(`
      <html>
        <head>
          <title>Главная страница</title>
        </head>
        <body>
          <h1>Добро пожаловать на главную страницу!</h1>
          <p>Количество просмотров: ${homeViews}</p>
          <a href="/about">Перейти на страницу "О нас"</a>
        </body>
      </html>
    `);

    
  } else if (req.url === "/about") {
    aboutViews++; 
    res.statusCode = 200;
    res.end(`
      <html>
        <head>
          <title>О нас</title>
        </head>
        <body>
          <h1>Это страница "О нас"</h1>
          <p>Количество просмотров: ${aboutViews}</p>
          <a href="/">Перейти на главную страницу</a>
        </body>
      </html>
    `);

    
  } else {
    res.statusCode = 404;
    res.end(`
      <html>
        <head>
          <title>Страница не найдена</title>
        </head>
        <body>
          <h1>404 - Страница не найдена</h1>
          <p>Извините, но такой страницы не существует.</p>
        </body>
      </html>
    `);
  }
});


server.listen(3000, () => {
  console.log("Сервер работает на http://localhost:3000");
});
