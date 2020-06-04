export const timeConvert = (n) => {
    var num = n / 60000;
    var hours = num / 60;
    var rhours = Math.floor(hours);
    var minutes = (hours - rhours) * 60;
    var rminutes = Math.round(minutes);
    return rhours + " Hora(s) & " + rminutes + " minuto(s).";
  }