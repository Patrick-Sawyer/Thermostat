'use strict';

describe ('Thermostat', function() {

  let thermostat;

  beforeEach(function() {

    thermostat = new Thermostat();

  });

  it('starts at 20 degrees', function() {
    expect(thermostat.getCurrentTemperature()).toEqual(20);
  });

  it('increase in temperature with up', function() {
    thermostat.up();
    expect(thermostat.getCurrentTemperature()).toEqual(21)
  });

  it('decreases in temperature with down', function() {
    thermostat.down()
    expect(thermostat.getCurrentTemperature()).toEqual(19)
  });

  it('has a minimum of 10 degrees', function(){
    for (let i = 0; i < 11; i++) {
      thermostat.down()
    }
    expect(thermostat.getCurrentTemperature()).toEqual(10);
  });

});