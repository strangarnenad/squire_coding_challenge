export class DrugProperties {

  static defaultProperties = {
    "name": "Default",
    "benefitRules": [
      {
        "conditions": [
          {
            "field": "expiresIn",
            "compare": "gt",
            "value": 0
          }
        ],
        "outcome": {
          "value": 1,
          "operator": "-"
        }
      },
      {
        "conditions": [
          {
            "field": "expiresIn",
            "compare": "lte",
            "value": 0
          }
        ],
        "outcome": {
          "value": 2,
          "operator": "-"
        }
      }
    ],
    "expires": true
  };

  static drugProperties = [
    {
      "name": "Magic Pill",
      "benefitRules": [],
      "expires": false
    },
    {
      "name": "Herbal Tea",
      "benefitRules": [
        {
          "conditions": [
            {
              "field": "expiresIn",
              "compare": "gt",
              "value": 0
            }
          ],
          "outcome": {
            "value": 1,
            "operator": "+"
          }
        },
        {
          "conditions": [
            {
              "field": "expiresIn",
              "compare": "lte",
              "value": 0
            }
          ],
          "outcome": {
            "value": 2,
            "operator": "+"
          }
        }
      ],
      "expires": true
    },
    {
      "name": "Fervex",
      "benefitRules": [
        {
          "conditions": [
            {
              "field": "expiresIn",
              "compare": "gt",
              "value": 10
            }
          ],
          "outcome": {
            "value": 1,
            "operator": "+"
          }
        },
        {
          "conditions": [
            {
              "field": "expiresIn",
              "compare": "lte",
              "value": 10
            },
            {
              "field": "expiresIn",
              "compare": "gt",
              "value": 5
            },
          ],
          "outcome": {
            "value": 2,
            "operator": "+"
          }
        },
        {
          "conditions": [
            {
              "field": "expiresIn",
              "compare": "lte",
              "value": 5
            },
            {
              "field": "expiresIn",
              "compare": "gt",
              "value": 0
            },
          ],
          "outcome": {
            "value": 3,
            "operator": "+"
          }
        },
        {
          "conditions": [
            {
              "field": "expiresIn",
              "compare": "lte",
              "value": 0
            }
          ],
          "outcome": {
            "value": 0,
            "operator": "*"
          }
        }
      ],
      "expires": true
    },
    {
      "name": "Dafalgan",
      "benefitRules": [
        {
          "conditions": [
            {
              "field": "expiresIn",
              "compare": "gt",
              "value": 0
            }
          ],
          "outcome": {
            "value": 2,
            "operator": "-"
          }
        },
        {
          "conditions": [
            {
              "field": "expiresIn",
              "compare": "lte",
              "value": 0
            }
          ],
          "outcome": {
            "value": 4,
            "operator": "-"
          }
        }
      ],
      "expires": true
    },
  ];

  static findDrugProperties(drug) {
    for (let i = 0; i < this.drugProperties.length; i++) {
      if (this.drugProperties[i].name === drug.name) {
        return this.drugProperties[i];
      }
    }
    return this.defaultProperties;
  }

  static findBenefitRule(drug, benefitRules) {
    const comparators = {
      "eq": (a, b) => a === b,
      "gt": (a, b) => a > b,
      "lt": (a, b) => a < b,
      "gte": (a, b) => a >= b,
      "lte": (a, b) => a <= b
    };

    for (let i = 0; i < benefitRules.length; i++) {
      const conditions = benefitRules[i].conditions;
      if (conditions.length) {
        let passed = true;
        for (let j = 0; j < conditions.length; j++) {
          const condition = conditions[j];
          if (!comparators[condition.compare](drug[condition.field], condition.value)) {
            passed = false;
          }
        }
        if (passed) {
          return benefitRules[i];
        }
      }
    }
    return false;
  }

  static calculate(a, operator, b) {
    const operators = {
      "+": (a, b) => a + b,
      "-": (a, b) => a - b,
      "*": (a, b) => a * b,
      "/": (a, b) => a * b
    };
    return operators[operator](a, b);
  }


}
