import { Injectable } from '@nestjs/common';
import { CreateSignupDto } from './dto/create-signup.dto';
import { UpdateSignupDto } from './dto/update-signup.dto';
import { SignUp, SignUpDocument } from 'src/schemas/signup_form.schema';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';


@Injectable()
export class SignupService {
  constructor(
    @InjectModel(SignUp.name)
    private signUpModel:Model<SignUpDocument>
  ){}

  async create(createSignupDto: CreateSignupDto) {
    return await new this.signUpModel(createSignupDto).save(); 
  }

  findAll() {
    return `This action returns all signup`;
  }

  findOne(id: number) {
    return `This action returns a #${id} signup`;
  }

  update(id: number, updateSignupDto: UpdateSignupDto) {
    return `This action updates a #${id} signup`;
  }

  remove(id: number) {
    return `This action removes a #${id} signup`;
  }
}
