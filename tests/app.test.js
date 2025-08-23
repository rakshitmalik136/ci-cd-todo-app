const request = require("supertest");
const express = require("express");

let app;
beforeAll(() => {
  app = require("../app");
});

describe("Todo API", () => {
  it("GET /todos should return list of todos", async () => {
    const res = await request("http://localhost:3000").get("/todos");
    expect(res.statusCode).toEqual(200);
    expect(Array.isArray(res.body)).toBe(true);
  });
});

