const request = require("supertest");
const app = require("../app");

let server;

beforeAll((done) => {
  server = app.listen(3000, () => {
    done();
  });
});

afterAll((done) => {
  server.close(done);
});

describe("Todo API", () => {
  it("GET /todos should return list of todos", async () => {
    const res = await request(server).get("/todos");
    expect(res.statusCode).toEqual(200);
    expect(Array.isArray(res.body)).toBe(true);
  });
});

