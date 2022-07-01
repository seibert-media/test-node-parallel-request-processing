# Testserver for parallel request processing in node

This repo provides an express server to demonstrate how parallel request processing works in node.js in different 
cases. It shows that parallel processing of many requests works well if your code does much io operations.

## How to try it yourself

Clone this repo and run 

`npm run start`

A webserver will be opened on localhost:9000 and you can try this URL in your browser to open the different test
cases:

[http://locahost:9000/file](http://locahost:9000/file)
: server reads a local file end returns the content.

[http://locahost:9000/cpu](http://locahost:9000/cpu)
: Do some intense math calculations.

[http://locahost:9000/sleepy](http://locahost:9000/sleepy)
: server "sleeps" for a second and returns.

[http://locahost:9000/readfromserver](http://locahost:9000/readfromserver)
: Server makes a http request to itself (sleepy-url) and returns the url.


## Test the server with parallel load

You can use the tool ["loadtest"](https://www.npmjs.com/package/loadtest) to make parallel requests to your server.
This is a tool similar to [apaches ab](https://httpd.apache.org/docs/2.4/programs/ab.html).

`npx loadtest -n 1000 -c 100 http://localhost:9000/file`

`npx loadtest -n 1000 -c 100 http://localhost:9000/cpu`

`npx loadtest -n 1000 -c 100 http://localhost:9000/sleepy`

`npx loadtest -n 1000 -c 100 http://localhost:9000/readfromserver`
