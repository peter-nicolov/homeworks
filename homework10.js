//Task 1

// const http = require('http');
// const os = require('os');
// const path = require('path');

// const port = 5000;

// http.createServer((req, res) => {

//   const userInfo = os.userInfo();
//   const userName = userInfo.username;
//   const osType = os.type();
//   const uptimeMinutes = Math.floor(os.uptime() / 60);
//   const currentWorkingDirectory = process.cwd();
//   const serverFileName = path.basename(__filename);

//   const responseContent = `
//     <html>
//       <head>
//         <title>System Info</title>
//       </head>
//       <body>
//         <h1>System Information</h1>
//         <p><strong>User Name:</strong> ${userName}</p>
//         <p><strong>OS Type:</strong> ${osType}</p>
//         <p><strong>System Uptime (minutes):</strong> ${uptimeMinutes}</p>
//         <p><strong>Current Working Directory:</strong> ${currentWorkingDirectory}</p>
//         <p><strong>Server File Name:</strong> ${serverFileName}</p>
//       </body>
//     </html>
//   `;

//   res.writeHead(200, { 'Content-Type': 'text/html' });
//   res.end(responseContent);
// }).listen(port, () => {
//   console.log(`Server is listening on port ${port}`);
// });

// Task 2

// const http = require('http');
// const os = require('os');
// const getGreeting = require('./personalmodule');
// const port2 = 5000;

// http.createServer((request, response) => {
//     response.writeHead(200, { 'Content-Type': 'text/html' });

//     response.write('<div style="font-size: 20px;">');
//     response.write(`<p>Date of request: ${new Date().toLocaleString()}</p>`);
//     response.write(getGreeting(os.userInfo().username));
//     response.write('</div>');

//     response.end();
// }).listen(port2);

// console.log(`Server is running on http://localhost:${port2}/`);