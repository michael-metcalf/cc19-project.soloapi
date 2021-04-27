const { expect } = require("chai");
const chai = require("chai");
const chaiHttp = require("chai-http");
chai.use(chaiHttp);
const { setupServer } = require("../server");

const server = setupServer();

describe("DDR Scores API Server", () => {
  let request;
  beforeEach(() => {
    request = chai.request(server);
  });

  describe("GET /api/ddrscores/:id get score by id", () => {
    it("should return a score according to its id", async () => {
      const res = await request.get("/api/ddrscores/1");
      console.log(res.body);
      expect(res.body[0].song_title).to.equal("Lets Groove");
    });
  });

  // describe("POST /api/ddrscores add a score", () => {
  //   it("should add a score", async () => {
  //     const res = 
  //       await request.post("/api/ddrscores")
  //       .type("form")
  //       .send({
  //         song_title: 'Do It Right',
  //         score: 875469
  //       });
  //     console.log(res.body);
  //     res.should.be.status(201);
  //   });
  // });
});