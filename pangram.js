export const isPangram = (string) => new Set(string.toLowerCase().match(/[a-z]/g)).size === 26