const fs = require("fs");
let text = fs.readFileSync("dele.txt", "utf-8");
console.log(text);
text = text.replace("Arsh", "Arshdeep");
console.log(text);

fs.writeFileSync("Arsh.txt", text);