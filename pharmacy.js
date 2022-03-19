import { DrugProperties } from "./drugProperties";

export class Drug {
  _name;
  _expiresIn;
  _benefit;
  constructor(name, expiresIn, benefit) {
    this.name = name;
    this.expiresIn = expiresIn;
    this.benefit = benefit;
  }

  get name() {
    return this._name;
  }

  set name(value) {
    this._name = value;
  }

  get expiresIn() {
    return this._expiresIn;
  }

  set expiresIn(value) {
    this._expiresIn = value;
  }

  set benefit(benefit) {
    if (benefit > 50) {
      benefit = 50
    } else if (benefit < 0) {
      benefit = 0
    }
    this._benefit = benefit
  }

  get benefit() {
    return this._benefit;
  }

}

export class Pharmacy {

  constructor(drugs = []) {
    this.drugs = drugs;
  }

  updateBenefitValue() {
    this.drugs.forEach((drug) => {
      let drugProperties = DrugProperties.findDrugProperties(drug);
      if (drugProperties.expires) {
        drug.expiresIn -= 1;
      }

      let benefitRule = DrugProperties.findBenefitRule(drug, drugProperties.benefitRules);
      if (benefitRule) {
        drug.benefit = DrugProperties.calculate(drug.benefit, benefitRule.outcome.operator, benefitRule.outcome.value)
      }

    });
    return this.drugs;
  }

}
