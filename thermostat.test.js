const Thermostat = require("./thermostat.js");

describe("thermostat class", () => {
  it("initialises with a temp of 20 degrees", () => {
    const thermostat = new Thermostat();
    result = thermostat.getTemperature();
    expect(result).toEqual(20);
  });

  it("up method increases the temperature by one", () => {
    const thermostat = new Thermostat();
    thermostat.up();
    thermostat.up();
    expect(thermostat.getTemperature()).toEqual(22);
  });

  it("up method increases the temperature by more than one if called multiple times", () => {
    const thermostat = new Thermostat();
    thermostat.setPowerSavingMode();
    for (let i = 0; i < 10; i++) {
      thermostat.up();
    }

    expect(thermostat.getTemperature()).toEqual(30);
  });

  it("down method that decreses temperature by one", () => {
    const thermostat = new Thermostat();
    thermostat.up();
    thermostat.up();
    thermostat.down();
    expect(thermostat.getTemperature()).toEqual(21);
  });

  it("power saving method turns on and off", () => {
    const thermostat = new Thermostat();
    expect(thermostat.powerSaving).toEqual(true);
    thermostat.setPowerSavingMode();
    expect(thermostat.powerSaving).toEqual(false);
  });

  it("power saving on temp is maxed at 25", () => {
    const thermostat = new Thermostat();
    expect(thermostat.powerSaving).toEqual(true);
    for (let i = 0; i < 10; i++) {
      thermostat.up();
    }
    expect(thermostat.getTemperature()).toEqual(25);
  });

  it("power saving off temp is maxed at 32", () => {
    const thermostat = new Thermostat();
    thermostat.setPowerSavingMode();
    expect(thermostat.powerSaving).toEqual(false);
    for (let i = 0; i < 100; i++) {
      thermostat.up();
    }
    expect(thermostat.getTemperature()).toEqual(32);
  });

  it("resets the temp to 20", () => {
    const thermostat = new Thermostat();
    thermostat.up();
    thermostat.up();
    thermostat.up();
    thermostat.down();
    expect(thermostat.reset()).toEqual(20);
  });

  it("returns a low energy usage message", () => {
    const thermostat = new Thermostat();
    thermostat.down();
    thermostat.down();
    thermostat.down();
    expect(thermostat.energyUsage()).toMatch("low-usage");
  });
  it("returns a medium energy usage message", () => {
    const thermostat = new Thermostat();
    for (i = 0; i < 5; i++) {
      thermostat.up();
    }
    expect(thermostat.energyUsage()).toMatch("medium-usage");
  });

  it("returns a high energy usage message", () => {
    const thermostat = new Thermostat();
    thermostat.setPowerSavingMode();
    for (i = 0; i < 50; i++) {
      thermostat.up();
    }

    expect(thermostat.energyUsage()).toMatch("high-usage");
  });
});
