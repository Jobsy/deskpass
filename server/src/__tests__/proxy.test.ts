import { Request, Response, NextFunction } from "express";

import proxy from "../proxy";

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
    sendFile: jest.fn(sendFile => ({
      res: { sendFile: sendFile.split('.')[0] }
    }))
  } as unknown as Response;

  // mocked next
  next = (err: any) => err as unknown as NextFunction;
})

describe("proxy", () => {
  it("should continue to the next middleware or function if deskpassApprovedFetchSites is provided", async () => {
    // mocked request
    const req = {
      url: "/deskpass/dog/by_bread",
    } as Request;

    const result = _.cloneDeep(proxy(req as Request, res as Response, next as NextFunction));
    console.log("resu: ", result)
    expect(result).toBeFalsy();
  })

  it("should display error message if a wrong fetch/sites are provided", async () => {
    // mocked request
    const req = {
      url: "/deskpass/wrongfetch",
    } as Request;

    const result = _.cloneDeep(proxy(req as Request, res as Response, next as NextFunction));      

    expect(result.res.status).toEqual(404);
    expect(result.res.response).toEqual("Unapproved site");
  })
  
  it("should route to the service path if deskpassApprovedServices is provided", async () => {
    // mocked request
    const req = {
      url: "/servicea",
    } as Request;

    const result = _.cloneDeep(proxy(req as Request, res as Response, next as NextFunction)); 
  
    expect(result.res.sendFile).toEqual(req.url.split('/')[1]);
  })

  it("should display error message if a wrong services are provided", async () => {
    // mocked request
    const req = {
      url: "/wrongServicea",
    } as Request;

    const result = _.cloneDeep(proxy(req as Request, res as Response, next as NextFunction));      

    expect(result.res.status).toEqual(404);
    expect(result.res.response).toEqual("Unapproved site");
  })
});