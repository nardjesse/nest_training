import {Controller, Get, Param} from '@nestjs/common';
import { UserService} from './user.service';

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) {}

    @Get(':username')
    getOne(@Param() params) {
        return this.userService.getOne(params.username);
    }
}
