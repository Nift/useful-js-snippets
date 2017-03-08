export default function (date) {
   if(date instanceof Date){
     let days = date.getDate();
     let month = (date.getMonth() +1)
     if(month < 10) month = "0"+month;
     if(days < 10) days = "0"+days;

     return days + "-" + month + "-" + date.getFullYear();
   }
   return date;
}
