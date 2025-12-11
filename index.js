const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="id">
    <head>
      <meta charset="UTF-8" />
      <title>Kelompok 9 - Komputasi Awan dan Terdistribusi</title>

      <!-- Google Font -->
      <link rel="preconnect" href="https://fonts.googleapis.com">
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
      <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600&display=swap" rel="stylesheet">

      <style>
        body {
          margin: 0;
          padding: 0;
          background: #eef2f7;
          font-family: "Poppins", sans-serif;
        }

        .wrapper {
          display: flex;
          justify-content: center;
          align-items: center;
          min-height: 100vh;
          padding: 20px;
        }

        .card {
          background: white;
          width: 90%;
          max-width: 650px;
          padding: 35px 50px;
          border-radius: 18px;
          box-shadow: 0 8px 25px rgba(0,0,0,0.1);
          animation: fadeIn 0.6s ease;
        }

        h1 {
          margin: 0;
          text-align: center;
          font-size: 32px;
          font-weight: 600;
          color: #2b3d55;
        }

        h2 {
          margin-top: 5px;
          text-align: center;
          font-size: 20px;
          font-weight: 400;
          color: #556477;
        }

        ol, ul {
          margin-top: 20px;
          font-size: 17px;
          line-height: 1.6;
          color: #333;
        }

        li {
          margin-bottom: 6px;
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      </style>
    </head>

    <body>
      <div class="wrapper">
        <div class="card">
          <h1>Kelompok 9</h1>
          <h2>Mata Kuliah Komputasi Awan dan Terdistribusi</h2>

          <ol>
            <li>Michelina Patricia Simangunsong (103012300223)</li>
            <li>Jeffry Kurniawan Visnu (103012300186)</li>
            <li>Azzahra Indah (103012300238)</li>
            <li>Alicia Mazza (10301233089)</li>
          </ol>
        </div>
      </div>
    </body>
    </html>
  `);
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log("Server running on port " + port);
});
