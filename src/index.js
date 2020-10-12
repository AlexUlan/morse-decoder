const MORSE_TABLE = {
  ".-": "a",
  "-...": "b",
  "-.-.": "c",
  "-..": "d",
  ".": "e",
  "..-.": "f",
  "--.": "g",
  "....": "h",
  "..": "i",
  ".---": "j",
  "-.-": "k",
  ".-..": "l",
  "--": "m",
  "-.": "n",
  "---": "o",
  ".--.": "p",
  "--.-": "q",
  ".-.": "r",
  "...": "s",
  "-": "t",
  "..-": "u",
  "...-": "v",
  ".--": "w",
  "-..-": "x",
  "-.--": "y",
  "--..": "z",
  ".----": "1",
  "..---": "2",
  "...--": "3",
  "....-": "4",
  ".....": "5",
  "-....": "6",
  "--...": "7",
  "---..": "8",
  "----.": "9",
  "-----": "0",
};

function decode(expr) {
  function lettertoMorse(leter) {
    switch (leter) {
      case ".-":
        return "A";
      case "-...":
        return "B";
      case ".--":
        return "W";
      case "--.":
        return "G";
      case "-..":
        return "D";
      case ".":
        return "E";
      case "...-":
        return "V";
      case "--..":
        return "Z";
      case "..":
        return "I";
      case ".---":
        return "J";
      case "-.-":
        return "K";
      case ".-..":
        return "L";
      case "-.-":
        return "K";
      case "--":
        return "M";
      case "-.":
        return "N";
      case "---":
        return "O";
      case ".--.":
        return "P";
      case ".-.":
        return "R";
      case "...":
        return "S";
      case "-":
        return "T";
      case "..-":
        return "U";
      case "..-.":
        return "F";
      case "....":
        return "H";
      case "-.-.":
        return "C";
      case "--.-":
        return "Q";
      case "-.--":
        return "Y";
      case "-..-":
        return "X";
      case ".----":
        return "1";
      case "..---":
        return "2";
      case "...--":
        return "3";
      case "....-":
        return "4";
      case ".....":
        return "5";
      case "-....":
        return "6";
      case "--...":
        return "7";
      case "---..":
        return "8";
      case "----.":
        return "9";
      case "-----":
        return "0";
      default:
        break;
    }
  }

  function numberToNumber(number) {
    if (number == "11") {
      return "-";
    } else {
      return ".";
    }
  }

  let decodedSring = "";
  let letterArray = expr.match(/.{1,10}/g);

  for (let i = 0; i < letterArray.length; i++) {
    if (letterArray[i] !== "**********") {
      let tempString = "";
      let tempArray = "";
      let tempNumber = +letterArray[i];
      tempArray = tempNumber.toString().match(/.{1,2}/g);
      for (let k = 0; k < tempArray.length; k++) {
        tempString += numberToNumber(tempArray[k]);
      }
      decodedSring += lettertoMorse(tempString);
    } else {
      decodedSring += " ";
    }
  }

  return decodedSring.toLowerCase();
}

module.exports = {
  decode,
};
