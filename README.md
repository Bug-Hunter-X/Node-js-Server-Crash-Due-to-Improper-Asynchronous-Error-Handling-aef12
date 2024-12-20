# Node.js Asynchronous Error Handling Bug

This repository demonstrates a common error in Node.js applications involving improper asynchronous error handling.  The code simulates an asynchronous operation (`fetchData`) that may throw an error.  The problem is that the HTTP response is sent *before* the potential error is handled, causing the server to crash silently instead of gracefully handling the error.

## Bug Description
The server crashes because an error is thrown within an asynchronous operation (`fetchData`), but the response is sent to the client before the `try...catch` block can handle it. This results in an uncaught exception and the server's termination.

## How to Reproduce
1. Clone this repository.
2. Run `node bug.js`.
3. The server will start and likely crash after a few requests due to the random error simulation.  Refresh the browser several times to see the crash.

## Solution
The `bugSolution.js` file demonstrates a corrected version.  The crucial fix is to handle the error *before* sending the response. This ensures that even if `fetchData` throws an error, the server will handle it gracefully and avoid crashing.
