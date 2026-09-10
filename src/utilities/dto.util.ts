import { plainToInstance } from "class-transformer";
import type { NextFunction, Request, Response } from "express";
import { validate } from "class-validator";

export const valReq = (dto: any) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      const reqDto = plainToInstance(dto, req.body);

      const errors = await validate(reqDto);
      if (errors.length > 0) {
        const err = Object.values(errors[0]?.constraints!)[0];
        return res.status(400).json({ error: err });
      }

      next();
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: "Internal server error!" });
    }
  };
};
