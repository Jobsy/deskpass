import { isDeskpassPresent } from "../../plugIns";

describe("country - isDeskpassPresent", () => {
    it("should true  query string (country) is found or not", async () => {
      let country: string = "nigeria"
  
      const result = isDeskpassPresent(country);
      expect(result).toBeTruthy();
    })
  
    it("should false if parameter (country) is false", async () => {
      let country: string = "Europe"
  
      const result = isDeskpassPresent(country);
      expect(result).toBeFalsy();
    })
  })