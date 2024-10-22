const createRule = require('../ast/createRule');
const combineRules = require('../ast/combineRules');
const { evaluateRule } = require('../ast/evaluateRule');

// Test Cases
function runTests() {
    const rule = createRule("age > 30 AND department = 'Sales'");
    const data1 = { age: 35, department: 'Sales', salary: 60000, experience: 3 };
    const data2 = { age: 20, department: 'Marketing', salary: 40000, experience: 2 };

    console.log(evaluateRule(rule, data1)); // Expected: true
    console.log(evaluateRule(rule, data2)); // Expected: false
}

runTests();
