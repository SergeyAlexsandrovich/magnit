import { ArgumentMetadata, Inject, PipeTransform } from "@nestjs/common";
import { TemplateNotFoundException } from "../../../shared/exceptions/template-not-found.exception";
import { TemplateService } from "../../template/services/template.service";

export class TemplatesByIdsPipe implements PipeTransform<number[], Promise<number[]>> {
    constructor(@Inject(TemplateService) private readonly templateService: TemplateService) {}

    async transform(ids: number[], metadata: ArgumentMetadata): Promise<number[]> {
        const promises = ids.map(async id => this.templateService.findOneOrFail(id.toString()));
        try {
            await Promise.all(promises);
        } catch (error) {
            throw new TemplateNotFoundException(
                `Template with ID ${ids.join(" or ")} was not found`,
            );
        }
        return ids;
    }
}
