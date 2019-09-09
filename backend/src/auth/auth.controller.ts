import { Controller, Post, Body, Get, Put, Delete, Param } from  '@nestjs/common';
import { AuthService } from  './auth.service';
import { User } from  './user.entity';
import { UserService } from './user/user.service';

@Controller()
export  class  AuthController {
    constructor(
        private  readonly authService:  AuthService,
        private readonly userService: UserService
        
        ) {}

    @Post('login')
    async login(@Body() user: User): Promise<any> {
      return this.authService.login(user);
    }  

    @Post('register')
    async register(@Body() user: User): Promise<any> {
      return this.authService.register(user);
    } 
    
    @Get('users')
    getUsers() {
      return this.userService.getUsers();
    }
  
    @Post('create')
    create(@Body() user: User) {
      return this.authService.register(user);
    }
  
    @Put('edit/:id')
    update(@Param() params, @Body() user : User) {
      return this.userService.update(params.id, user);
    }
  
    @Delete('delete/:id')
    deleteUser(@Param() params) {
      return this.userService.deleteUser(params.id);
    }
}