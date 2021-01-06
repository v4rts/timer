const daysP = document.getElementById('days');
const hoursP = document.getElementById('hours');
const minutesP = document.getElementById('mins');
const secondsP = document.getElementById('secs');

const deadline = "28 Sep 2021";

let timer = () => {
	const deadlineDate = new Date(deadline);
	const currentDate = new Date();

	const difference = (deadlineDate - currentDate) / 1000;

	const seconds = Math.floor(difference) % 60;
	const minutes = Math.floor(difference / 60) % 60;
	const hours = Math.floor(difference / 3600) % 24; 
	const days = Math.floor(difference / 3600 / 24); 

	daysP.innerHTML = days;
	hoursP.innerHTML = format(hours); 
	minutesP.innerHTML = format(minutes); 
	secondsP.innerHTML = format(seconds);
} 

let format = (time) => {
	if (time < 10){
		return `0${time}`;
	}
	else
	{
		return time;
	}
}

timer();

setInterval(timer, 1000);

