import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { NotFoundError } from 'src/util/not-found.error';
import { Repository } from 'typeorm';
import { User } from './user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  async findAll(): Promise<User[]> {
    return this.userRepository.find();
  }

  async findOne(id: string): Promise<User> {
    const user = await this.userRepository.findOneBy({ id });
    if (!user) throw new NotFoundError('User');
    return user;
  }

  async create(user: Partial<User>): Promise<User> {
    try {
      const createdUser = await this.userRepository.save(user);
      return createdUser;
    } catch (e) {
      if (e.code === '23505')
        throw new HttpException('User already exists', HttpStatus.BAD_REQUEST);
    }
  }

  async update(id: string, changes: Partial<User>): Promise<User> {
    const user = await this.findOne(id);
    return this.userRepository.save({ ...user, ...changes });
  }

  async delete(id: string): Promise<void> {
    await this.userRepository.delete(id);
  }
}
