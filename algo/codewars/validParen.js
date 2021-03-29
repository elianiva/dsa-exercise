

function validParentheses(parens) {
  if (!parens) return true;
  return /\(\)/g.test(parens) && validParentheses(parens.replace(/\(\)/g, ""));
}

console.log(validParentheses(""));
console.log(validParentheses(")"));
console.log(validParentheses("("));
console.log(validParentheses("()"));
console.log(validParentheses("()))"));
console.log(validParentheses("(("));
console.log(validParentheses(")((())))"));
console.log(validParentheses("))))"));
console.log(validParentheses("((()))"));
console.log(validParentheses("()()()()()()((()))"));
