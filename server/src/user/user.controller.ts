import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { UserReponseDTO } from './dto/user-reponse.dto';
import { UserRequestDTO } from './dto/user-request.dto';
import { UserService } from './user.service';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  async findAll(): Promise<any> {
    return this.userService.findAll();
  }

  @Get('/:id')
  async findOne(@Param('id') id: string): Promise<UserReponseDTO> {
    return this.userService.findOne(id);
  }

  @Post()
  async create(@Body() userDTO: UserRequestDTO): Promise<string> {
    const user = await this.userService.create(userDTO);
    return user.id;
  }

  @Patch('/:id')
  async update(
    @Param('id') id: string,
    @Body() userDTO: UserRequestDTO,
  ): Promise<UserReponseDTO> {
    return this.userService.update(id, userDTO);
  }

  @Delete('/:id')
  async delete(@Param('id') id: string): Promise<void> {
    return this.userService.delete(id);
  }
}
