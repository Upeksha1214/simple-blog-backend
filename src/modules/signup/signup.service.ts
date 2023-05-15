import { Injectable } from '@nestjs/common';
import { CreateSignupDto } from './dto/create-signup.dto';
import { UpdateSignupDto } from './dto/update-signup.dto';
import { SignUp, SignUpDocument } from 'src/schemas/signup_form.schema';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
const bcrypt = require('bcrypt');



@Injectable()
export class SignupService {
  constructor(
    @InjectModel(SignUp.name)
    private signUpModel:Model<SignUpDocument>
  ){}

  async createUser(requestDto:CreateSignupDto) {
    const { password } =requestDto.singUp;
    try{
      const encryptedPassword = await bcrypt.hash(password,10);
      const saveUser = await new this.signUpModel({
        ...requestDto,
        password:encryptedPassword
      }).save();

      // Password should not be returned
      const { email, _id, } = saveUser;

      return Object.freeze({ email, _id });

    }catch(exception){
      console.log(exception)
    }
     
  }

  async findAll() {
    return await this.signUpModel.find();
  }

  async getStudentByUsername(username:string) {
    return await this.signUpModel.findOne({email:username});
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
