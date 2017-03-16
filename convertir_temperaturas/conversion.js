  function convertirCelsius(farenheit){
   var far=document.getElementById('farenheit');
   far.value=(far.value-32)*5/9
   alert( " farenheit convertido a  celsius: " + far.value)
  }

  function convertirFarenheit(celsius){
    var cel=document.getElementById('celsius');
    cel.value=(cel.value*1.8)+32;
    alert ("Celsius convertido  a farenheit"+ cel.value);
  }
