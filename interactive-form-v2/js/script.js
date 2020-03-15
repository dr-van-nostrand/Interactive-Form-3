//focus first field
document.getElementById('name').focus();

// Target Other Job Field and make it not visible
const otherJob = document.getElementById('other-title');
otherJob.style.display = 'none';
document.addEventListener('input', function(event) {
	// Only run for #title select
	if (event.target.id !== 'title') return;
	if (event.target.value === 'other') {
		////// aca iria tu codigo /////////
		document.getElementById('other-title').style.display = 'block';
	} else {
		document.getElementById('other-title').style.display = 'none';
	}
}, false);

// ”T-Shirt Info” section
// ● Hide the “Select Theme” `option` element in the “Design” menu.
const selectShirt = document.querySelectorAll('#design option');
selectShirt[0].hidden = true;

//Hide the "Color" label and select menu until a T-Shirt design is selected from the "Design" menu.
const hideColorLabel = document.getElementById('colors-js-puns');
hideColorLabel.style.display = 'none';
console.log(hideColorLabel);

// Update the “Color” field to read “Please select a T-shirt theme”.
const newItem = document.createElement('option');
const textnode = document.createTextNode('Please select a T-shirt theme');
newItem.appendChild(textnode);
const list = document.getElementById('color');

list.insertBefore(newItem, list.childNodes[0]);
list[0].selected = true;

// ● Hide the colors in the “Color” drop down menu.
const selectColor = document.getElementById('color');
for (let i = 0; i < selectColor.length; i++) {
	selectColor[i].hidden = true;
}

// appropriate colors should show in the “Color” drop down menu
const designSelectElement = document.querySelector('#design');
designSelectElement[0].value = 'Select Theme';
designSelectElement.addEventListener('change', (e) => {
	for (let i = 1; i <= 3; i++) {
		if (e.target.value === 'js puns') {
			selectColor[i].hidden = false
			list[1].selected = true;
			hideColorLabel.style.display = 'block';

		} else {
			selectColor[i].hidden = true
		}
	}
	for (let i = 4; i <= 6; i++) {
		if (e.target.value === 'heart js') {
			selectColor[i].hidden = false
			list[4].selected = true;
			hideColorLabel.style.display = 'block';

		} else {
			selectColor[i].hidden = true
		}
	}
	for (let i = 1; i <= 6; i++) {
		if (e.target.value === 'Select Theme') {
			list[0].selected = true;
		}
	}
});

//Register for Activities
const element = document.createElement('element');
document.querySelector('.activities').appendChild(element);
element.innerHTML = "Total: $0";
let totalActivityCost = 0;
const checkboxes = document.querySelectorAll('.activities input');
document.querySelector('.activities').addEventListener('change', (e) => {
	const clicked = e.target;
	const clickedType = parseInt(clicked.getAttribute('data-cost'));
	if (clicked.checked) {
		totalActivityCost = totalActivityCost + clickedType;
	} else {
		totalActivityCost = totalActivityCost - clickedType;
	}
	element.innerHTML = "Total: $" + totalActivityCost;
	const clickedTime = clicked.getAttribute('data-day-and-time');
	for (let i = 0; i < checkboxes.length; i++) {
		const checkboxTime = checkboxes[i].getAttribute('data-day-and-time');
		if (clickedTime === checkboxTime && clicked !== checkboxes[i]) {
			if (clicked.checked) {
				checkboxes[i].disabled = true;
			} else {
				checkboxes[i].disabled = false;
			}
		}
	}
});

//Payment Section
// Hide the “Select Payment Method” `option` so it doesn’t show up in the drop down menu.
const selectPaymentInfo = document.querySelectorAll('#payment option');
selectPaymentInfo[0].style.display = 'none'; 
selectPaymentInfo[1].setAttribute('selected', true);
//Get the value of the payment select element, and if it’s equal to ‘credit card’, set the credit card payment section in the form to show, and set the other two options to hide.
const designPaymentMethod = document.querySelector('#payment');
const creditcard = document.getElementById('credit-card');
const paypal = document.getElementById('paypal');
paypal.hidden = true;
const bitcoin = document.getElementById('bitcoin');
bitcoin.hidden = true;
designPaymentMethod.addEventListener('change', (e) => {
	if (e.target.value === 'credit-card') {
		creditcard.hidden = true;
		paypal.hidden = true;
		bitcoin.hidden = true;
	} else {
		creditcard.hidden = false;
	}
	if (e.target.value === 'paypal') {
		paypal.hidden = false;
		creditcard.hidden = true;
		bitcoin.hidden = true;
	} else {
		paypal.hidden = true;
	}
	if (e.target.value === 'bitcoin') {
		bitcoin.hidden = false;
		creditcard.hidden = true;
		paypal.hidden = true;
	} else {
		bitcoin.hidden = true;
	}
});


//form Validator
const form = document.querySelector("form");
const name = document.querySelector("#name");
const labelName = document.getElementsByTagName('label');

const email = document.querySelector("#mail");
const selectActivity = document.querySelector('.activities');
const activityLegend = document.querySelector('.activities legend');
const activitiesInput = document.querySelectorAll(".activities input");
const cc = document.querySelector("#cc-num");
const zip = document.querySelector("#zip");
const cvv = document.querySelector("#cvv");


const nameValidator = () => {
	const nameVal = name.value;
	console.log(nameVal);
	if (/[^a-zA-Z]/.test(nameVal)) {
		labelName[0].innerHTML = 'Only letters are allowed:';
		name.style.border = '1px solid red';
		labelName[0].style.color = 'red';
		return false;
	} 	else if (/^[A-Za-z]+$/.test(nameVal)) {
		labelName[0].innerHTML = 'Name:';
		labelName[0].style.color = 'black';
		name.style.border = '1px solid Green';
		return true;
	} else {
		labelName[0].innerHTML = "Name field can't be blank:";
		labelName[0].style.color = 'red';
		name.style.border = '1px solid Red';

		return false;
	} 
}
const emailValidator = () => {
	const emailVal = email.value;
	const atSymb = emailVal.indexOf('@');
	const lastIn = emailVal.lastIndexOf('.');

	if (emailVal <= 2) {
		labelName[1].innerHTML = "Email field can't be blank:";
		email.style.border = '1px solid Red';
		labelName[1].style.color = 'red';
		return false;
	} else if (atSymb > 1 && lastIn > atSymb + 1) {
		labelName[1].innerHTML = 'Email:';
		labelName[1].style.color = 'black';
		email.style.border = '1px solid Green';
		return true;
	} 	else {
		labelName[1].innerHTML =  "Enter a valid email";
		labelName[1].style.color = 'red';
		email.style.border = '1px solid Red';
		return false;
	}
}

const activityValidator = () => {
	for (let i = 0; i < activitiesInput.length; i++) {
		if (activitiesInput[i].checked) {
			activityLegend.textContent = 'Register for Activities';
			activityLegend.style.color = 'black';
			return true;
		}
	}
	activityLegend.style.color = 'red';
	activityLegend.innerHTML = 'Please choose at least one activity';
	return false;
}


//credit cards allowed to make a test:
// VISA 4012888888881881 
// MasterCard 5105105105105100 
// Amex 371449635398431 
// Discover 6011111111111117 

const paymentValidator = () => {
	const creditcardVal = cc.value;

	if ( creditcardVal < 16) {
		labelName[14].innerHTML = "Credit Card field can't be blank:";
		labelName[14].style.color = 'red';
		cc.style.border = '1px solid Red';
		return false;
	} else if ( /\b(?:3[47]\d|(?:4\d|5[1-5]|65)\d{2}|6011)\d{12}\b/.test(creditcardVal)) {
		labelName[14].innerHTML = 'Card Number:';
		labelName[14].style.color = 'black';

		cc.style.border = '1px solid Green';
		return true;
	} else {
		labelName[14].innerHTML = 'Please enter a number that is between 13 and 16 digits long:';
		labelName[14].style.color = 'red';

		cc.style.border = '1px solid Red';

		return false;
	} 
}

const zipValidator = () => {
	const zipValue = zip.value;

	if ( zipValue <= 0) {
		
		labelName[15].innerHTML = "Zip field can't be blank:";
		labelName[15].style.color = 'red';
		zip.style.border = '1px solid Red';
		return false;
	} else if ( /^\d{5}(?:[-\s]\d{4})?$/.test(zipValue)) {
		labelName[15].innerHTML = 'Zip Code:';
		labelName[15].style.color = 'black';
		zip.style.border = '1px solid Green';
		return true;
	} else {
		labelName[15].innerHTML = 'Please enter a 5 digit Zip Code:';
		labelName[15].style.color = 'red';
		zip.style.border = '1px solid Red';

		return false;
	} 
}

const cvvValidator = () => {
	const cvvValue = cvv.value;

	if ( cvvValue <= 0 )  {
		labelName[16].innerHTML = "CVV field can't be blank:";
		labelName[16].style.color = 'red';
		cvv.style.border = '1px solid Red';
		return false;
	} else if ( /^[0-9]{3,4}$/.test(cvvValue)) {
		labelName[16].innerHTML = 'CVV:';
		labelName[16].style.color = 'black';
		cvv.style.border = '1px solid Green';
		return true;
	} else {
		labelName[16].innerHTML = 'Please enter a 3 digit CVV:';
		labelName[16].style.color = 'red';
		cvv.style.border = '1px solid Red';

		return false;
	} 
}

//real time validators
name.addEventListener('keyup', nameValidator);
email.addEventListener('keyup', emailValidator);
cc.addEventListener('keyup', paymentValidator);
zip.addEventListener('keyup', zipValidator);
cvv.addEventListener('keyup', cvvValidator);
selectActivity.addEventListener('change', activityValidator);

form.addEventListener('submit', (e) => {
	if (!nameValidator()) {
		e.preventDefault();
	}
	if (!emailValidator()) {
		e.preventDefault();
	}
	if (!activityValidator()) {
		e.preventDefault();
	}
	if (!paymentValidator()) {
		e.preventDefault();
	}
	if (!zipValidator()) {
		e.preventDefault();
	}
	if (!cvvValidator()) {
		e.preventDefault();
	}
	console.log('Submit handler is functional!');
});
