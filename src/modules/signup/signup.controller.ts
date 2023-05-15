import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SignupService } from './signup.service';
import { CreateSignupDto } from './dto/create-signup.dto';
import { UpdateSignupDto } from './dto/update-signup.dto';

@Controller('api/signUp')
export class SignupController {
  constructor(private readonly signupService: SignupService) {}

  @Post('/')
  create(@Body() createSignupDto: CreateSignupDto) {
    return this.signupService.createUser(createSignupDto);
  }

  @Get()
  findAll() {
    return this.signupService.findAll();
  }

  @Get('/:username')
  findOne(@Param('name') username: string) {
    return this.signupService.getStudentByUsername(username);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSignupDto: UpdateSignupDto) {
    return this.signupService.update(id, updateSignupDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.signupService.remove(id);
  }
}
