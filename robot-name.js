export class Robot {
  constructor() {
    this._name = Robot.releaseNames();
  }
  static usedRoboNames = new Set;
  static releaseNames = () => {
    let newRoboName = `${String.fromCharCode(Math.floor(Math.random() * 26) + 65)}${String.fromCharCode(Math.floor(Math.random() * 26) + 65)}${Math.floor(Math.random() * 9)}${Math.floor(Math.random() * 9)}${Math.floor(Math.random() * 9)}`;
    if (!(Robot.usedRoboNames.has(newRoboName))) {
      Robot.usedRoboNames.add(newRoboName);
      return newRoboName;
    } else {
    }
  }
  get name() {
    return this._name;
  }

  set name(x) {
    throw "One does not simply set a RoboName with a value of " + x;
  }
  reset = () => {
    this._name = Robot.releaseNames();
  }
}

