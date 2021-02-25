const secondHand = document.querySelector(".secondHand");
const minuteHand = document.querySelector(".minuteHand");
const hourHand = document.querySelector(".hourHand");
 
const setDate = () => {
   const now = new Date();
   const seconds = now.getSeconds();
   const secondsDegree = ((seconds / 60) * 360) + 90;
   secondHand.style.transform = `rotate(${secondsDegree}deg)`;
 
   const mins = now.getMinutes();
   const minsDegree = ((mins / 60) * 360) + 90;
   minuteHand.style.transform = `rotate(${minsDegree}deg)`;
   const hours = now.getHours();
   const hoursDegree = ((hours) * 360) + 90;
   hourHand.style.transform = `rotate(${hoursDegree}deg)`;
}
 
setInterval(setDate, 1000); // will check every second