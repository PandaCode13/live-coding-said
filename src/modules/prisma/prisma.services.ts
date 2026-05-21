import { Injectable, OnModuleInit, OnModuleDestroy } from "@nestjs/common";
import prismaClient from "../../lib/prisma";

@Injectable()
export class PrismaService implements OnModuleInit, OnModuleDestroy {
    readonly prismaClient = prismaClient;

    async onModuleInit() {
        // Connect to the database when the module is initialized
        await this.prismaClient.$connect();
        console.log("Connected to the database");
    }

    async onModuleDestroy() {
        // Disconnect from the database when the module is destroyed
        await this.prismaClient.$disconnect();
        console.log("Disconnected from the database");
    }

}