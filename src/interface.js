$(document).ready(function() {
  var thermostat = new Thermostat();
  updateTemperature();

  $('#temperature-up').on( 'click', function(){
    thermostat.up();
    updateTemperature();
  })

  $('#temperature-down').click(function() {
    thermostat.down();
    updateTemperature();
  })

  $('#temperature-reset').click(function(){
    thermostat.resetTemperature();
    updateTemperature();
  });

  $('#powersaving-on').click(function(){
    thermostat.switchPowerSavingModeOn();
    $('#power-saving-status').text('on');
    $('#powersaving-off').css("color", "black");
    $('#powersaving-on').css("color", "#db5a37");
    updateTemperature();
  });

  $('#powersaving-off').click(function() {
    thermostat.switchPowerSavingModeOff();
    $('#power-saving-status').text('off');
    updateTemperature();
    $('#powersaving-off').css("color", "#db5a37");
    $('#powersaving-on').css("color", "black");
  })

  displayWeather('london');

  // $('#current-city-select').change(function() {
  //   let city = $('#current-city-select').val();
  //   displayWeather(city);
  // });

  $('#select-city').submit(function(event){
    event.preventDefault();
    let city = $('#current-city').val();
    displayWeather(city);
  });

  function updateTemperature(){
      $('#temperature').text(thermostat.temperature)
      $('#temperature').attr('class', thermostat.energyUsage());
  };

  function displayWeather(city) {
    let url = 'http://api.openweathermap.org/data/2.5/weather?q=' + city;
    let token = '&appid=a3d9eb01d4de82b9b8d0849ef604dbed';
    let units = '&units=metric';
    $.get(url + token + units, function(data) {
      $('#current-temperature').text(data.main.temp);
    });
  };
})
