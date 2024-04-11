import { Controller, Get, Param, UseGuards } from '@nestjs/common';
import { UserService } from './user.service';
import { JtwGuard } from 'src/auth/guards/jwt.guard';

@Controller('user')
export class UserController {
    constructor(private userService: UserService){}

    @UseGuards(JtwGuard)
    @Get(':id')
    async getUserProfile(@Param('id') id: number) {
        const user =  await this.userService.findById(id)
        return user;
    }
}
