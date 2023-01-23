function generateMarkdown(data) {
  return( 
  `<!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="./assets/css/style.css">
    <title>Portfolio</title>
  </head>
  <body>
    <head>
      <nav>
        <ul>
          <li href="#about"></li>
          <li href="#work"></li>
          <li href="#contact"></li>
        </ul>
      </nav>
    </head>
    <main>
      <section id="about">
        /*<img src=${data.img} alt="a picture of me">*/
        <artical id="summary">
          <p>Hello, my name is ${data.name}</p>
          <p>I am from ${data.location}</p>
          <p>${data.personalBio}</p>
        </artical>
      </section>
      <section id="work">
        <artical></artical>
      </section>
      <section id="contact">
        <artical>
          <ul>
            <li id="email" ><a href="mailto:${data.email}">Email</a></li>
            <li id="github"><a href="${data.gitHub}" target="_blank"
              >GitHub</a
            ></li>
            <li id="linkedin"> <a
              href="${data.linkedIn}"
              target="_blank"
              >Linked-In</a
            ></li>
          </ul>
        </artical>
      </section>
    </main>
  </body>
  </html>
  `)
}

module.exports = generateMarkdown