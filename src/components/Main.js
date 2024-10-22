// const createRule = require('./src/ast/createRule');
const CreateRule=require('../ast/CreateRule')
const combineRules = require('../ast/combineRules');
const { evaluateRule } = require('../ast/evaluateRule');

const rule1 = CreateRule("((age > 30 AND department = 'Sales') OR (age < 25 AND department = 'Marketing')) AND (salary > 50000 OR experience > 5)");
const rule2 = CreateRule("((age > 30 AND department = 'Marketing')) AND (salary > 20000 OR experience > 5)");

const combinedRule = combineRules([rule1, rule2], 'OR');

const data = {
    age: 35,
    department: 'Sales',
    salary: 60000,
    experience: 3
};

console.log(evaluateRule(combinedRule, data));
