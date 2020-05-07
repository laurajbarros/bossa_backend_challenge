const { chai, server, should } = require("./testConfig");
const Tools = require("../models/ToolsModel");

/**
 * Tests all possible API routes:
 * (1) List Tools
 * (2) List Tools based on Query
 * (3) Create Tool
 * (4) Delete Tool
 */

describe("Tool", () => {
  before((done) => {
		Tools.deleteMany({}, (err) => {
			done();
		});
	});

  const sampleData = {
    "title":"Github",
		"description":"GitHub is a Git repository hosting service, but it adds many of its own features. While Git is a command line tool, GitHub provides a Web-based graphical interface. It also provides access control and several collaboration features, such as a wikis and basic task management tools for every project",
		"link":"www.github.com",
    "tags": ["repository","collaboration"]
	};

  describe("/POST tool", () => {
		it("should create a new tool", (done) => {
			chai.request(server)
				.post("/api/tools")
        .set('Content-Type', 'application/json')
				.send(sampleData)
				.end((err, res) => {
					res.should.have.status(201);
          res.body.should.have.property("message").eql("New Tool added with Success.");
          res.body.data.should.have.property('title');
          res.body.data.should.have.property('link');
          res.body.data.should.have.property('description');
          res.body.data.should.have.property('tags');
          res.body.data.should.have.property('id');
					done();
				});
		});
	});

  describe("/POST tool", () => {
		it("should not POST a tool without title", (done) => {
      const missingData = {
    		"description":"GitHub is a Git repository hosting service, but it adds many of its own features. While Git is a command line tool, GitHub provides a Web-based graphical interface. It also provides access control and several collaboration features, such as a wikis and basic task management tools for every project",
    		"link":"www.github.com",
        "tags": ["repository","collaboration"]
    	};
			chai.request(server)
				.post("/api/tools")
        .set('Content-Type', 'application/json')
				.send(missingData)
				.end((err, res) => {
					res.should.have.status(400);
					res.body.should.have.property("message").eql("Validation Error.");
					done();
				});
		});
	});

  describe("/POST tool", () => {
		it("should not create a tool if it exists already in db with same title", (done) => {
			chai.request(server)
				.post("/api/tools")
        .set('Content-Type', 'application/json')
				.send(sampleData)
				.end((err, res) => {
					res.should.have.status(400);
					res.body.should.have.property("message").eql("Validation Error.");
					done();
				});
		});
	});


  describe("/GET tools", () => {
		it("should lists all tools", (done) => {
			chai.request(server)
				.get("/api/tools")
				.end((err, res) => {
					res.should.have.status(200);
					res.body.data.should.be.a('array');
					res.body.data.length.should.be.eql(1);
					res.body.should.have.property("message").eql("Operation completed with success");
					sampleData._id = res.body.data[0]._id;
					done();
				});
		});
	});

  describe("/GET/:id tool", () => {
    it("should get tool by the given Id", (done) => {
      chai.request(server)
        .get("/api/tools/" + sampleData._id)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.data.should.be.a('object');
          res.body.data.should.have.property("_id").eql(sampleData._id);
          res.body.should.have.property("message").eql("Operation completed with success");
          done();
        });
    });
  });


  describe("/GET tools with search query", () => {
		it("lists all tools that have repository tag", (done) => {
			chai.request(server)
				.get("/api/tools?tags=repository")
				.end((err, res) => {
					res.should.have.status(200);
					res.body.should.have.property("message").eql("Operation completed with success");
					done();
				});
		});
	});

  describe("/DELETE/:id Tool", () => {
		it("deletes the tool with such id", (done) => {
			chai.request(server)
				.delete("/api/tools/"+ sampleData._id)
				.end((err, res) => {
					res.should.have.status(204);
          done();
				});
		});
	});
});
