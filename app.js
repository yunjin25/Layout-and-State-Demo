const express = require('express');
const app = express();
const port = 3000;

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
        }
        .button-row {
          margin: 20px;
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
          margin: 40px 0;
          font-weight: bold;
        }
      </style>
    </head>
    <body>
      <div class="button-row">
        <button class="button blue">BLUE BUTTON</button>
        <button class="button red">RED BUTTON</button>
        <button class="button green">GREEN BUTTON</button>
      </div>
      <div class="text">
        Write the code for this screen
      </div>
      <div class="button-row">
        <button class="button blue">BLUE BUTTON</button>
        <button class="button red">RED BUTTON</button>
        <button class="button green">GREEN BUTTON</button>
      </div>
    </body>
    </html>
  `);
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
