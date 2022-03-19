import { Drug, Pharmacy } from "./pharmacy";

describe("Pharmacy", () => {
  it("should decrease the benefit and expiresIn", () => {
    expect(new Pharmacy([new Drug("test", 2, 3)]).updateBenefitValue()).toEqual(
      [new Drug("test", 1, 2)]
    );
  });

  it("should not decrease the benefit and expiresIn (Magic Pill)", () => {
    expect(new Pharmacy([new Drug("Magic Pill", 2, 3)]).updateBenefitValue()).toEqual(
      [new Drug("Magic Pill", 2, 3)]
    );
  });

  it("should decrease the benefit by 2 (Dafalgan)", () => {
    expect(new Pharmacy([new Drug("Dafalgan", 2, 4)]).updateBenefitValue()).toEqual(
      [new Drug("Dafalgan", 1, 2)]
    );
  });

  it("should decrease the benefit by 4 (Dafalgan)", () => {
    expect(new Pharmacy([new Drug("Dafalgan", 1, 8)]).updateBenefitValue()).toEqual(
      [new Drug("Dafalgan", 0, 4)]
    );
  });

  it("should increase the benefit by 1 (Fervex)", () => {
    expect(new Pharmacy([new Drug("Fervex", 15, 10)]).updateBenefitValue()).toEqual(
      [new Drug("Fervex", 14, 11)]
    );
  });

  it("should increase the benefit by 2 (Fervex)", () => {
    expect(new Pharmacy([new Drug("Fervex", 10, 10)]).updateBenefitValue()).toEqual(
      [new Drug("Fervex", 9, 12)]
    );
  });

  it("should increase the benefit by 3 (Fervex)", () => {
    expect(new Pharmacy([new Drug("Fervex", 5, 10)]).updateBenefitValue()).toEqual(
      [new Drug("Fervex", 4, 13)]
    );
  });

  it("should set the benefit to 0 (Fervex)", () => {
    expect(new Pharmacy([new Drug("Fervex", 1, 10)]).updateBenefitValue()).toEqual(
      [new Drug("Fervex", 0, 0)]
    );
  });





});
