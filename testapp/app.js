const express = require('express');
const app = express();
const port = 3001;

app.get('/ten', (req, res) => {
  const htmlResponse = `
    <!DOCTYPE html>
    <html>
    <head>
      <title>Simple Node.js App</title>
    </head>
    <body>
      <h1>Welcome to a web page</h1>
      <p>It has exactly ten words.</p>
      <script>var test = "These words should be conditionally ignored." </script>
    </body>
    </html>`;

  res.send(htmlResponse);
});
app.get('/five', (req, res) => {
    const htmlResponse = `
      <!DOCTYPE html>
      <html>
      <head>
        <title>Simple Node.js App</title>
      </head>
      <body>
        <h1>Five</h1>
        <p>words <span>are</span></p>
        <div>Scattered</div>
        <strong>here</strong>
        <script>var test = "These words should be conditionally ignored." </script>
      </body>
      </html>`;
  
    res.send(htmlResponse);
  });

  app.get('/six', (req, res) => {
    const htmlResponse = `
      <!DOCTYPE html>
      <html>
      <head>
        <title>Simple Node.js App</title>
      </head>
      <body>
        <h1>Are... -- there six</h1>
        <p>words </p>
        <div>Scattered</div>
        <strong>here?</strong>
        <script>var test = "These words should be conditionally ignored." </script>
      </body>
      </html>`;
  
    res.send(htmlResponse);
  });
  app.get('/json', (req, res) => {
    const jsonResponse = {message: "Hi", data:{field1:"Apple",field2:"Pie"}};
      res.json(jsonResponse);
  });
  app.get('/*', (req, res) => {
    const htmlResponse = `
      <!DOCTYPE html>
      <html>
      <head>
        <title>Simple Node.js App</title>
      </head>
      <body>
        <h1>This wildcard has a whole 9 words in it!</h1>
      </body>
      </html>`;
  
    res.send(htmlResponse);
  });
// Start the server
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});