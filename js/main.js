let buttonStyle = document.getElementById('btn').style;
buttonStyle.background = 'transparent';
buttonStyle.border = '1px solid red';
buttonStyle.color = '#DD3142';

let input = document.getElementsByTagName('input');
input[0].value = '';
input[1].value = 'example';
input[2].placeholder = 'email@mail.com';

document.getElementsByClassName('main-form-item')[4].remove('label');

document.getElementById('agree').checked = true;

for (var i = 0; i < input.length; i++) {
	input[i].style.borderColor = 'black';
}