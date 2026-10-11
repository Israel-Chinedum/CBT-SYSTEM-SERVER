import { IsIn, IsNotEmpty, IsString } from "class-validator";

export class AnswersDTO {
  @IsString()
  @IsNotEmpty()
  id!: string;

  @IsString()
  @IsNotEmpty()
  @IsIn(["mathematics", "english", "chemistry", "physics"], {
    message: "Specified subject is not available!",
  })
  subject!: string;

  @IsString()
  @IsNotEmpty()
  answer!: string;
}
