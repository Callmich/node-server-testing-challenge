const request = require("supertest");

const server = require("./server.js");
const db = require('../data/dbConfig.js');

describe("server", function (){
  describe("GET /", function () {
    it("should return 200 OK", function () {
        return request(server)
          .get("/")
          .then(res => {
              expect(res.status).toBe(200)
          })
    })
  });

  describe("POST /dnd", function () {
    beforeEach(async ()=> {
        await db("dnd").truncate();
    })

    it("returns 201 on success", function (){
        return request(server)
          .post("/dnd")
          .send({ name: "cleric"})
          .then(res => {
              expect(res.status).toBe(201);
          })
    })

    it('should return a message saying class created', function () {
        return request(server)
          .post("/dnd")
          .send({ name: "cleric" })
          .then(res => {
            expect(res.body.message).toBe("Class Created!"); 
          })
    })

    it("add the class to the db", async function () {
        const className = "sorc";
  
        const existing = await db("dnd").where({ name: className });
        expect(existing).toHaveLength(0);
  
        await request(server)
          .post("/dnd")
          .send({ name: className })
          .then(res => {
            expect(res.body.message).toBe("Class Created!");
          });
        await request(server)
          .post("/dnd")
          .send({ name: "sam" })
          .then(res => {
            expect(res.body.message).toBe("Class Created!");
          });
  
        const inserted = await db("dnd"); //.where({ name: hobbitName });
        expect(inserted).toHaveLength(2);
      });

  })









})