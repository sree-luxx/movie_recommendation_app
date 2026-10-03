const TimeFormat=(minutes)=>{
   const hour=Math.floor(minutes/60);
   const minutesRemainder=minutes%60;

   return `${hour}h ${minutesRemainder}m`
}

export default TimeFormat