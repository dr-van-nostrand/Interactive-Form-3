//focus first field
document.getElementById('name').focus();

// Target Other Job Field and make it not visible
const otherJob = document.getElementById('other-title');
otherJob.style.display = 'none';

document.addEventListener('input', function (event) {

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

selectShirt[0].hidden = false;
console.log(selectShirt[0]);

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
console.log(designSelectElement[0]);
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
    if (e.target.value === 'Select Theme' ) {
        list[0].selected = true;
    } 
}
});
