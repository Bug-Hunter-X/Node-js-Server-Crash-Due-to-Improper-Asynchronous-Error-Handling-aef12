const http = require('http');

const server = http.createServer((req, res) => {
  // Simulate an asynchronous operation that might throw an error
  const data = fetchData();

  // The following line will cause an error if fetchData throws an error
  // Because the response is sent before the error is caught. 
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello World!');

  //Error handling should be done before sending the response
});

function fetchData() {
  //Simulate an error, replace with actual async operation
  if (Math.random() < 0.5) {
    throw new Error('Failed to fetch data');
  }
  return 'Data fetched successfully';
}

const port = 3000;
server.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});