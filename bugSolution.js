const http = require('http');

const server = http.createServer((req, res) => {
  try {
    const data = fetchData();
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end(data);
  } catch (error) {
    console.error('Error:', error);
    res.writeHead(500, { 'Content-Type': 'text/plain' });
    res.end('Internal Server Error');
  }
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