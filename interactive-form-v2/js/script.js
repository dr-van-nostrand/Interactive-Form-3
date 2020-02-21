//focus first field
const nameField = document.getElementById('name').focus();
// const other = document.getElementById('title');

const otherJob = document.getElementById('other-title');
otherJob.style.display = 'none';

document.addEventListener('input', function (event) {

    // Only run for #title select
    if (event.target.id !== 'other') return;
  
    if (event.target.value === 'designer') {
        ////// aca iria tu codigo /////////
        document.getElementById('other-title').style.display = 'block';
    } else {
        document.getElementById('other-title').style.display = 'none';
    }
  
  }, false);
  