import { Request, Response, NextFunction } from "express";

import { is18Plus } from "../middleWares";

let _ = require('lodash');

let res: Response;
let next: NextFunction;

beforeEach(() => {
  // mocked response
  res = {
    status: jest.fn(status => ({
      json: jest.fn(resObj => ({
        res: { status: status, ...resObj }
      })),
    })),
  } as unknown as Response;

  // mocked next
  next = (err: any) => err as unknown as NextFunction;
})


describe("is18Plus", () => {
    it("should continue to the next middleware or function if query (is18) is true", async () => {
        // mocked request
        const req = {
            query:{is18: "true"},
        } as unknown as Request;
  
        const result = is18Plus(req as Request, res as Response, next as NextFunction);

        expect(result).toBeFalsy();
    });

    it("should show error page if query (is18) is false", async () => {
        // mocked request
        const req = {
            query:{is18: "false"},
        } as unknown as Request;
    
        const result = _.cloneDeep(is18Plus(req as Request, res as Response, next as NextFunction));

        expect(result.res.status).toEqual(404);
        expect(result.res.response).toEqual("Drink is 18+");
    });
})