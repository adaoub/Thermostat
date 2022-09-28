class Thermostat {
  constructor() {
    this.temp = 20;
    this.powerSaving = true;
  }

  getTemperature() {
    if (this.temp >= 25 && this.powerSaving === true) {
      return (this.temp = 25);
    }
    if (this.temp >= 32 && this.powerSaving === false) {
      return (this.temp = 32);
    }
    return this.temp;
  }

  up() {
    return (this.temp += 1);
  }

  down() {
    return (this.temp -= 1);
  }

  setPowerSavingMode() {
    if (this.powerSaving === true) {
      return (this.powerSaving = false);
    } else {
      return (this.powerSaving = true);
    }
  }

  reset() {
    return (this.temp = 20);
  }

  energyUsage() {
    if (this.temp < 18) {
      return "low-usage";
    } else if (this.temp <= 25 && this.temp > 18) {
      return "medium-usage";
    } else {
      return "high-usage";
    }
  }
}

module.exports = Thermostat;
