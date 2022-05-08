import '../public/style.css';

const secondHand = document.querySelector('.second-hand') as HTMLElement;
const minuteHand = document.querySelector('.minute-hand') as HTMLElement;
const hourHand = document.querySelector('.hour-hand') as HTMLElement;
// turn time into a degrees
const setDate = () => {
    try {
        const now = new Date();
        const seconds = now.getSeconds();
        /* Taking the seconds and dividing it by 60 to get the percentage of the minute that has passed.
        Then it is multiplying that by 360 to get the degrees of the minute that has passed. Then it is
        adding 90 to that to account for the 90 degrees that the second hand is offset by. */
        const secondsDegrees = ((seconds / 60) * 360) + 90;
       /* Setting the style of the secondHand to rotate by the amount of secondsDegrees. */
        secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
    
        const mins = now.getMinutes();
        const minsDegrees = ((mins / 60) * 360) + 90;
        minuteHand.style.transform = `rotate(${minsDegrees}deg)`;
    
        const hour = now.getHours();
        const hourDegrees = ((hour / 12) * 360) + 90;
        hourHand.style.transform = `rotate(${hourDegrees}deg)`;
    } catch (e) {
        console.log(e);
    }
}

setInterval(setDate, 1000)