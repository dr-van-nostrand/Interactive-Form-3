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
		} else {
			selectColor[i].hidden = true
		}
	}
	for (let i = 4; i <= 6; i++) {
		if (e.target.value === 'heart js') {
			selectColor[i].hidden = false
			list[4].selected = true;
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
selectPaymentInfo[0].hidden = true;

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
const usernameInput = document.getElementById('name');
const emailInput = document.getElementById('mail');
const checkboxInput = document.querySelector('.activities input');
const ccInput = document.getElementById('cc-num');
const zipInput = document.getElementById('zip');
const cvvInput = document.getElementById('cvv');


function isValidUsername(name) {
	return /^[a-z]+$/.test(name);
}

function isValidEmail(email) {
	return /\b(?:3[47]\d|(?:4\d|5[1-5]|65)\d{2}|6011)\d{12}\b/.test(email)
}

//validator for Visa, Mastercard, Amex & Discover
function isValidCc(ccNumber) {
	return /\b(?:3[47]\d|(?:4\d|5[1-5]|65)\d{2}|6011)\d{12}\b/.test(ccNumber);
}

function isValidZip(zipNumber) {
	return /^\d{5}(?:[-\s]\d{4})?$/.test(zipNumber);
}

function isValidCvv(cvvNumber) {
	return /^[0-9]{3,4}$/.test(cvvNumber);
}

function showOrHideTip(show, element) {
	// show element when show is true, hide when false
	if (show) {
		element.style.display = "inherit";
	} else {
		element.style.display = "none";
	}
}

function createListener(validator) {
	return e => {
		const text = e.target.value;
		const valid = validator(text);
		const showTip = text !== "" && !valid;
		const tooltip = e.target.nextElementSibling;
		showOrHideTip(showTip, tooltip);
	};
}

usernameInput.addEventListener("input", createListener(isValidUsername));
emailInput.addEventListener("input", createListener(isValidEmail));
ccInput.addEventListener("input", createListener(isValidCc));
zipInput.addEventListener("input", createListener(isValidZip));
cvvInput.addEventListener("input", createListener(isValidCvv));



const btn = document.querySelectorAll("button[type='submit']")[0];

