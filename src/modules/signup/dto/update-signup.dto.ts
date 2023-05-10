import { PartialType } from '@nestjs/mapped-types';
import { CreateSignupDto } from './create-signup.dto';
import ISignupForm from 'src/interfaces/user_signup_form.interface';

export class UpdateSignupDto extends PartialType(CreateSignupDto) {
    singUp: ISignupForm
}
