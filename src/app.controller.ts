import { Controller,Get } from "@nestjs/common"
import { ConfigService } from "@nestjs/config"

@Controller()
export class AppController
{
    constructor(private configService:ConfigService){}
    @Get()
    get()
    {
        return `Yabi Backend ${this.configService.get<string>("NODE_ENV")} Version 0.0.0`
    }
}