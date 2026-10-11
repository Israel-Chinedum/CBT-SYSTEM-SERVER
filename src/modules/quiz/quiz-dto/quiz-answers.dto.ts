import { Type } from "class-transformer";
import { IsArray, ValidateNested } from "class-validator";
import { AnswersDTO } from "./answers.dto.js";

export class QuizAnswersDTO {
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => AnswersDTO)
  answers!: AnswersDTO[];
}
