import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { resolve } from "path";
import { ConnectionOptionsReader } from "typeorm";
import { AssetModule } from "./modules/asset/asset.module";
import { AirwatchAuthModule } from "./modules/auth/airwatch.auth.module";
import { TaskModule } from "./modules/task/task.module";
import { TemplateModule } from "./modules/template/template.module";
import { CustomFileLogger } from "./shared/providers/custom.file.logger";

const reader = new ConnectionOptionsReader({ root: resolve(__dirname, "..") });

const imports = [
    TypeOrmModule.forRootAsync({
        useFactory: async () => ({
            ...(await reader.get("default")),
            entities: [__dirname + "/**/*.entity{.ts,.js}"],
            ...(process.env.NODE_ENV === "production"
                ? { logger: new CustomFileLogger("all") }
                : {}),
        }),
    }),
    TemplateModule,
    TaskModule,
    AssetModule,
    AirwatchAuthModule,
];

@Module({ imports })
export class AppModule {}