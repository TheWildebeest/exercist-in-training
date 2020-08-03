export const hey = (message) => {
  if ((Array.from(new Set(message)).join("").trim() === "") || (Array.from(new Set(message)).length === 0)) {
    return "Fine. Be that way!"
  } else if ((/[A-Z]/.test(message)) && (message === message.toUpperCase())) {
    return message.trim().charAt(message.length - 1) === "?" ? "Calm down, I know what I\'m doing!" : "Whoa, chill out!";
  } else return message.trim().charAt((message.trim()).length - 1) === "?" ? "Sure." : "Whatever.";
}