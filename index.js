const { setupServer } = require("./server");

const server = setupServer();
const port = 9999 || process.env.PORT;
  server.listen(9999, () => {
    console.log(`🎉 Server running at https://localhost:${port}!`)
  });