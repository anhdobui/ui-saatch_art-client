export const convertVNDToUSD = (amountVND: number) => {
  const exchangeRate = 25455.0 // Tỷ giá cố định
  const convertedAmount = (amountVND / exchangeRate).toFixed(2)
  return convertedAmount
}
export const convertUSDToVND = (amountUSD: number) => {
  const exchangeRate = 25455 // Tỷ giá cố định
  const convertedAmount = Math.round(amountUSD * exchangeRate)
  return convertedAmount
}
export const roundToTwoDecimals = (num: number) => {
  return Math.round(num * 100) / 100
}
