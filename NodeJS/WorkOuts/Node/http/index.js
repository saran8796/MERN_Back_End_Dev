import http from "http";

const server = http.createServer();

const PORT = 4000;

server.listen(PORT, () => {
  console.log(`server running http://localhost/${PORT}`);
});
