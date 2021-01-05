const deadline = "";

let timer = () => {
	const deadlineDate = new Date(deadline);
	const currentDate = new Date();
	console.log(deadlineDate - currentDate);
} 