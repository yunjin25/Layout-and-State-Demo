const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.redirect('/layout');
});

app.get('/layout', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html>
    <head>
      <title>Button Layout Demo</title>
      <style>
        body {
          background-color: lightgray;
          text-align: center;
          font-family: Arial, sans-serif;
          margin: 0;
          padding: 0;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          height: 100vh;
        }
        .top-row {
          display: flex;
          justify-content: center;
          margin-top: 20px;
        }
        .button {
          padding: 15px 30px;
          color: white;
          border: none;
          margin: 5px;
          font-size: 16px;
          cursor: pointer;
        }
        .blue { background-color: blue; }
        .red { background-color: red; }
        .green { background-color: green; }
        .text {
          font-size: 20px;
          font-weight: bold;
        }
        .bottom-column {
          display: flex;
          flex-direction: column;
          align-items: center;
          margin-bottom: 20px;
        }
        .bottom-button {
          width: 90%;
          max-width: 400px;
          margin: 5px 0;
        }
      </style>
    </head>
    <body>
      <div class="top-row">
        <button class="button blue">BLUE BUTTON</button>
        <button class="button red">RED BUTTON</button>
        <button class="button green">GREEN BUTTON</button>
      </div>
      <div class="text">
        Write the code for this screen
      </div>
      <div class="bottom-column">
        <button class="button blue bottom-button">BLUE BUTTON</button>
        <button class="button red bottom-button">RED BUTTON</button>
        <button class="button green bottom-button">GREEN BUTTON</button>
      </div>
    </body>
    </html>
  `);
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}/layout`);
});
