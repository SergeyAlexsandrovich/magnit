import { Body, Controller, Get, Inject, Param, Post, Put, Query } from "@nestjs/common";
import {
    ApiCreatedResponse,
    ApiImplicitBody,
    ApiImplicitQuery,
    ApiNotFoundResponse,
    ApiOkResponse,
    ApiUseTags,
} from "@nestjs/swagger";
import { TaskService } from "./services/task.service";
import { GetTasksResponse } from "./responses/get-tasks.response";
import { Task, TTaskStatus } from "./entities/task.entity";
import { TaskDto } from "./dto/task.dto";
import { CreateTaskResponse } from "./responses/create-task.response";
import { ErrorResponse } from "../template/responses/error.response";
import { TaskByIdPipe } from "./pipes/task-by-id.pipe";
import { UpdateTaskResponse } from "./responses/update-task.response";
import { GetTaskResponse } from "./responses/get-task.response";
import { AddTemplatesDto } from "./dto/add-templates.dto";
import { Template } from "../template/entities/template.entity";
import { TemplateService } from "../template/services/template.service";
import { TemplatesByIdsPipe } from "./pipes/templates-by-ids.pipe";
import { ITaskService } from "../../shared/interfaces/task.service.interface";
import { ITemplateService } from "../../shared/interfaces/template.service.interface";

@ApiUseTags("tasks")
@Controller("tasks")
export class TaskController {
    constructor(
        @Inject(TaskService) private readonly taskService: ITaskService,
        @Inject(TemplateService) private readonly templateService: ITemplateService
    ) {}

    @Get("/")
    @ApiImplicitQuery({ name: "offset", description: "Defaults to 0" })
    @ApiImplicitQuery({ name: "limit", description: "Defaults to 10" })
    @ApiImplicitQuery({ name: "sort", enum: ["ASC", "DESC"], description: "Defaults to ASC" })
    @ApiImplicitQuery({ name: "name", description: "Query Task by name" })
    @ApiOkResponse({ type: GetTasksResponse, description: "Get all Tasks" })
    async findAll(
        @Query("offset") offset: number = 0,
        @Query("limit") limit: number = 10,
        @Query("sort") sort: "ASC" | "DESC" = "ASC",
        @Query("status") status?: TTaskStatus,
        @Query("name") name?: string
    ) {
        const tasks = await this.taskService.findAll(offset, limit, sort, status, name);
        return { success: 1, total: tasks.length, tasks };
    }

    @Post("/")
    @ApiImplicitBody({ name: "task", type: TaskDto, description: "Task JSON" })
    @ApiCreatedResponse({ type: CreateTaskResponse, description: "ID of created Task" })
    async create(@Body("task") taskDto: TaskDto) {
        const task = new Task(taskDto);
        const saved = await this.taskService.save(task);
        return { success: 1, task_id: saved.id };
    }

    @Put("/:id")
    @ApiImplicitBody({ name: "task", type: TaskDto, description: "Task JSON" })
    @ApiOkResponse({ type: UpdateTaskResponse, description: "ID of updated Template" })
    @ApiNotFoundResponse({ type: ErrorResponse, description: "No Task with this ID found" })
    async update(@Param("id", TaskByIdPipe) id: string, @Body("task") taskDto: TaskDto) {
        const task = await this.taskService.findById(id);
        const updated = await this.taskService.save({ ...task, ...taskDto });
        return { success: 1, task_id: updated.id };
    }

    @Get("/:id")
    @ApiOkResponse({ type: GetTaskResponse, description: "Task JSON" })
    @ApiNotFoundResponse({ type: ErrorResponse, description: "No Task with this ID found" })
    async findById(@Param("id", TaskByIdPipe) id: string) {
        const task = await this.taskService.findById(id);
        const templates = await this.templateService.findByTaskId(task.id.toString());
        return { success: 1, task: { ...task, templates: templates.map(template => template.id) } };
    }

    @Put("/:id/templates")
    @ApiImplicitBody({
        name: "templates",
        type: AddTemplatesDto,
        description: "IDs of Templates to add",
    })
    @ApiNotFoundResponse({ type: ErrorResponse, description: "Template with ID was not found" })
    @ApiNotFoundResponse({ type: ErrorResponse, description: "No Task with this ID found" })
    async addTemplates(
        @Param("id", TaskByIdPipe) id: string,
        @Body("templates", TemplatesByIdsPipe) ids: number[]
    ) {
        const templates: Template[] = [];
        for (const id of ids) {
            const template = await this.templateService.findById(id.toString());
            templates.push(template);
        }
        const task = await this.taskService.findById(id);
        task.templates = templates;
        await this.taskService.save(task);
        return { success: 1 };
    }
}
