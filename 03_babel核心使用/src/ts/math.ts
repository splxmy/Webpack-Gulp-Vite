export function sum(num1: number, num2: number) {
  return num1 + num2
}

console.log(sum(20, 100))

export function formatPrice(priceString: string) {
  // 需要polyfill提供支持
  if (priceString.includes('$')) {
    return 'xxxx'
  } else {
    return 'yyyy'
  }
}
