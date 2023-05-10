import { Injectable } from '@nestjs/common';
import { CreateSignupDto } from './dto/create-signup.dto';
import { UpdateSignupDto } from './dto/update-signup.dto';
import { SignUp, SignUpDocument } from 'src/schemas/signup_form.schema';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import ISignupForm from 'src/interfaces/user_signup_form.interface';


@Injectable()
export class SignupService {
  constructor(
    @InjectModel(SignUp.name)
    private signUpModel:Model<SignUpDocument>
  ){}

  async create(signUp: ISignupForm) {
    return await new this.signUpModel(signUp).save(); 
  }

  async findAll() {
    return await this.signUpModel.find();
  }

  async findOne(id: string) {
    return await this.signUpModel.findById(id);
  }

  async update(id: string, updateSignupDto: UpdateSignupDto) {
    return await this.signUpModel.findByIdAndUpdate(
      id,
      updateSignupDto.singUp
    );
  }

  async remove(id: string) {
    return await this.signUpModel.findByIdAndRemove(id);
  }
}
