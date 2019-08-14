import { AppModule } from "../src/app.module";
import { Test } from "@nestjs/testing";
import * as request from "supertest";
import { TemplateService } from "../src/shared/services/template.service";
import { NestApplication } from "@nestjs/core";
import { PuzzleService } from "../src/shared/services/puzzle.service";
import { SectionService } from "../src/shared/services/section.service";
import { TemplateServiceMock } from "../src/shared/mocks/template.service.mock";
import { PuzzleServiceMock } from "../src/shared/mocks/puzzle.service.mock";
import { SectionServiceMock } from "../src/shared/mocks/section.service.mock";

const payload = require("../src/modules/template/test/template.json");

describe("TemplateController (e2e)", () => {
    let app: NestApplication;
    const templateService = new TemplateServiceMock();
    const puzzleService = new PuzzleServiceMock();
    const sectionService = new SectionServiceMock();

    beforeEach(async () => {
        const imports = [AppModule];
        const moduleFixture = await Test.createTestingModule({ imports })
            .overrideProvider(TemplateService)
            .useValue(templateService)
            .overrideProvider(PuzzleService)
            .useValue(puzzleService)
            .overrideProvider(SectionService)
            .useValue(sectionService)
            .compile();

        app = moduleFixture.createNestApplication();
        (await app.setGlobalPrefix("v1")).init();
    });

    afterEach(async () => await app.close());

    it("GET /v1/templates", async () => {
        jest.spyOn(templateService, "findAll").mockImplementation(async () => []);
        return request(app.getHttpServer())
            .get("/v1/templates")
            .expect(200)
            .expect({ success: 1, total: 0, templates: await templateService.findAll() });
    });

    it("POST /v1/template", async () => {
        return request(app.getHttpServer())
            .post("/v1/templates")
            .send({ template: payload })
            .expect(201)
            .expect({ success: 1, template_id: 0 });
    });

    it("GET /v1/template/0", async () => {
        return request(app.getHttpServer())
            .get("/v1/templates/0")
            .expect(200)
            .then(res => {
                const body = res.body;
                body.template = JSON.parse(body.template);
                expect(body).toStrictEqual({ success: 1, template: payload });
            });
    });

    it("GET /v1/template/1", async () => {
        return request(app.getHttpServer())
            .get("/v1/templates/1")
            .expect(404)
            .expect({
                error: "Not Found",
                message: "Template with id 1 was not found",
                statusCode: 404,
            });
    });

    it("DELETE /v1/templates/0", async () => {
        return request(app.getHttpServer())
            .delete("/v1/templates/0")
            .expect(200)
            .expect({ success: 1 });
    });

    it("DELETE /v1/templates/1", async () => {
        return request(app.getHttpServer())
            .delete("/v1/templates/1")
            .expect(404)
            .expect({
                error: "Not Found",
                message: "Template with id 1 was not found",
                statusCode: 404,
            });
    });

    it("PUT /v1/templates/0", async () => {
        return request(app.getHttpServer())
            .put("/v1/templates/0")
            .send({ template: payload })
            .expect(200)
            .expect({ success: 1, template_id: 0 });
    });

    it("PUT /v1/templates/1", async () => {
        return request(app.getHttpServer())
            .put("/v1/templates/1")
            .send({ template: payload })
            .expect(404)
            .expect({
                error: "Not Found",
                message: "Template with id 1 was not found",
                statusCode: 404,
            });
    });
});