import { ArgumentMetadata, Inject, Injectable, PipeTransform } from "@nestjs/common";
import { TaskNotFoundException } from "../../../shared/exceptions/task-not-found.exception";
import { TaskService } from "../services/task.service";

@Injectable()
export class TaskByIdPipe implements PipeTransform<number, Promise<number>> {
    constructor(@Inject(TaskService) private readonly taskService: TaskService) {}

    async transform(id: number, metadata: ArgumentMetadata): Promise<number> {
        if (!(await this.taskService.findById(id))) {
            throw new TaskNotFoundException(`Task with id ${id} was not found`);
        }
        return id;
    }
}
