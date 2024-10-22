const Node = require('./Node');

function combineRules(rules, combineWith = 'AND') {
    let combinedNode = new Node('operator', null, null, combineWith);
    
    rules.forEach(rule => {
        if (!combinedNode.left) {
            combinedNode.left = rule;
        } else if (!combinedNode.right) {
            combinedNode.right = rule;
        } else {
            combinedNode = new Node('operator', combinedNode, rule, combineWith);
        }
    });

    return combinedNode;
}

module.exports = combineRules;
