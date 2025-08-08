/**
 * Format a number as currency with proper comma separation
 * @param amount - The number to format
 * @param currency - The currency symbol (default: '$')
 * @param decimals - Number of decimal places (default: 2)
 * @returns Formatted currency string
 */
export const formatCurrency = (
  amount: number,
  currency: string = "$",
  decimals: number = 2
): string => {
  return `${currency}${amount.toLocaleString("en-US", {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  })}`;
};

/**
 * Format a number with proper comma separation
 * @param num - The number to format
 * @param decimals - Number of decimal places (default: 0)
 * @returns Formatted number string
 */
export const formatNumber = (num: number, decimals: number = 0): string => {
  return num.toLocaleString("en-US", {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  });
};

/**
 * Format a number as a percentage
 * @param num - The number to format as percentage
 * @param decimals - Number of decimal places (default: 1)
 * @returns Formatted percentage string
 */
export const formatPercentage = (num: number, decimals: number = 1): string => {
  return `${num.toFixed(decimals)}%`;
};

/**
 * Compact number formatting (e.g., 1.2K, 1.5M, 2.1B)
 * @param num - The number to format
 * @param decimals - Number of decimal places (default: 1)
 * @returns Compact formatted number string
 */
export const formatCompactNumber = (
  num: number,
  decimals: number = 1
): string => {
  const formatter = new Intl.NumberFormat("en-US", {
    notation: "compact",
    compactDisplay: "short",
    minimumFractionDigits: 0,
    maximumFractionDigits: decimals,
  });

  return formatter.format(num);
};
