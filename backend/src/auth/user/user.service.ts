import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm'
import { User } from '../user.entity';

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User)
        private userRepository: Repository<User>,
    ) { }

    async findByEmail(email: string): Promise<User> {
        return await this.userRepository.findOne({
            where: {
                email: email,
            }
        });
    }

    async create(user: User): Promise<User> {
        const entity = Object.assign(new User(), user);
        return await this.userRepository.save(entity);
    }

    public async register(user: User): Promise<any>{
        return this.userRepository.create(user)
    } 

    async getUsers(): Promise<User[]> {
        return await this.userRepository.find();
    }
    
    async deleteUser(user: User) {
        this.userRepository.delete(user);
    }

    async update(id: number, _user: User): Promise<User> {
        let toUpdate = await this.userRepository.findOne(id);
    
        let updated = Object.assign(toUpdate, _user);
        return await this.userRepository.save(updated);
      }
}