import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { UserDTO } from './user.dto';
import { UserService } from './user.service';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  async findAll(): Promise<any> {
    return this.userService.findAll();
  }

  @Get('/:id')
  async findOne(@Param('id') id: string): Promise<UserDTO> {
    return this.userService.findOne(id); // TODO: cast to UserDTO
  }

  @Post()
  async create(@Body() userDTO: UserDTO): Promise<string> {
    const user = await this.userService.create(userDTO);
    return user.id;
  }

  @Patch('/:id')
  async update(
    @Param('id') id: string,
    @Body() userDTO: UserDTO,
  ): Promise<UserDTO> {
    return this.userService.update(id, userDTO);
  }

  @Delete('/:id')
  async delete(@Param('id') id: string): Promise<void> {
    return this.userService.delete(id);
  }
}
