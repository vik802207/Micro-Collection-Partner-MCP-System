const Node = require('./Node');

function createRule(ruleString) {
    const operators = ['AND', 'OR'];
    const tokens = ruleString.match(/(\w+|\(|\)|'[^']+'|\d+|>|<|=|AND|OR)/g);

    function parse(tokens) {
        let stack = [];
        let current = new Node('root');

        tokens.forEach(token => {
            if (token === '(') {
                stack.push(current);
                current = new Node('operator');
            } else if (token === ')') {
                let temp = current;
                current = stack.pop();
                if (!current.left) current.left = temp;
                else current.right = temp;
            } else if (operators.includes(token)) {
                current.type = 'operator';
                current.value = token;
            } else {
                if (!current.left) {
                    current.left = new Node('operand', null, null, token);
                } else {
                    current.right = new Node('operand', null, null, token);
                }
            }
        });

        return current;
    }

    return parse(tokens);
}

module.exports = createRule;
