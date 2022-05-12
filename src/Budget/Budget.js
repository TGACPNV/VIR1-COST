import { BudgetsClient, CreateBudgetCommand } from "@aws-sdk/client-budgets";

/**
 * @typedef {Object} Budget
 * @attribute {string} name
 *
 *
 */
module.exports = class Budget {
    constructor(AccountId, name, limitAmount, limitUnit, type, timeUnit) {
        this.accountId = AccountId;
        this.name = name;
        this.limitAmount = limitAmount;
        this.limitUnit = limitUnit;
        this.type = type;
        this.timeUnit = timeUnit;
        this.client = new BudgetsClient({region: "eu-west-3"});
    }

    createBudget() {
        let command = new CreateBudgetCommand({
            AccountId: this.accountId,
            Budget: {
                BudgetLimit: {
                    Amount: this.limitAmount,
                    Unit: this.limitUnit
                },
                BudgetName: this.name,
                BudgetType: this.type,
                TimeUnit: this.timeUnit
            }
        });
    }
  }