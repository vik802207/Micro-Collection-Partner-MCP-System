function evaluateRule(node, data) {
    if (node.type === 'operator') {
        const leftResult = evaluateRule(node.left, data);
        const rightResult = evaluateRule(node.right, data);
        
        if (node.value === 'AND') return leftResult && rightResult;
        if (node.value === 'OR') return leftResult || rightResult;
    } else if (node.type === 'operand') {
        return evalCondition(node.value, data);
    }
}

function evalCondition(condition, data) {
    const [field, operator, value] = condition.match(/(\w+)\s*(>|<|=)\s*([\w\d']+)/).slice(1);
    const fieldValue = data[field];
    
    switch (operator) {
        case '>': return fieldValue > parseInt(value, 10);
        case '<': return fieldValue < parseInt(value, 10);
        case '=': return fieldValue === value.replace(/'/g, '');
        default: return false;
    }
}

module.exports = { evaluateRule };
