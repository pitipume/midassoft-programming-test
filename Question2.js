let getClockAngle = (time) => {

    let [hours, minutes] = time.split(':').map(Number);
  
    let Angle1 = (hours % 12) * 30 + (minutes / 60) * 30; //hour
    let Angle2 = (minutes / 60) * 360; //minute
  
    let AngleTotal = Math.abs(Angle1 - Angle2);
  
    return Math.min(AngleTotal, 360 - AngleTotal);
}

console.log("The angle of the clock =", getClockAngle("13:50"), "degrees");
