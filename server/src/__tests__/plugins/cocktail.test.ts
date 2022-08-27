import { isAlcoholic, is18} from "../../plugIns";

describe("cocktail - isAlcoholic", () => {
    it("should true if parameter (alcoholic) is true", async () => {
      let alcoholic: string = "true"
  
      const result = isAlcoholic(alcoholic);
      expect(result).toBeTruthy();
    })

    it("should false if parameter (alcoholic) is false", async () => {
      let alcoholic: string = "false"
  
      const result = isAlcoholic(alcoholic);
      expect(result).toBeFalsy();
    })
})

describe("cocktail - is18", () => {
  it("should true if parameter (age) is true", async () => {
    let age: string = "true"

    const result = is18(age);
    expect(result).toBeTruthy();
  })

  it("should false if parameter (age) is false", async () => {
    let age: string = "false"

    const result = is18(age);
    expect(result).toBeFalsy();
  })
})