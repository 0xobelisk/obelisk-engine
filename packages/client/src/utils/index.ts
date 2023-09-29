export function capitalizeFirstLetter(input: string): string {
  return input.charAt(0).toUpperCase() + input.slice(1);
}

export function normalizeHexAddress(input: string): string | null {
  const hexRegex = /^(0x)?[0-9a-fA-F]{64}$/;

  if (hexRegex.test(input)) {
    // 如果输入字符串以 "0x" 开头，直接返回
    if (input.startsWith('0x')) {
      return input;
    } else {
      // 如果输入字符串不以 "0x" 开头，添加 "0x" 前缀并返回
      return '0x' + input;
    }
  } else {
    // 如果输入字符串不是合法的 64 位十六进制地址，返回 null 或者抛出错误，具体取决于你的需求
    return null;
  }
}

export function numberToAddressHex(num: number): string {
  const hex = num.toString(16);
  const paddedHex = '0x' + hex.padStart(64, '0');
  return paddedHex;
}
