document.addEventListener('input', function (e) {
  const sliderStep = document.getElementById('contacts-slider').value;

  document.querySelector('#perMonth').style.display = 'block';

  if (sliderStep == 1) {
    document.querySelector('#price').textContent = '$39';
    document.querySelector('#label').textContent = '1,000';
  } else if (sliderStep == 2) {
    document.querySelector('#price').textContent = '$79';
    document.querySelector('#label').textContent = '5,000';
  } else if (sliderStep == 3) {
    document.querySelector('#price').textContent = '$99';
    document.querySelector('#label').textContent = '10,000';
  } else if (sliderStep == 4) {
    document.querySelector('#price').textContent = '$149';
    document.querySelector('#label').textContent = '15,000';
  } else if (sliderStep == 5) {
    document.querySelector('#price').textContent = '$199';
    document.querySelector('#label').textContent = '20,000';
  } else if (sliderStep == 6) {
    document.querySelector('#price').textContent = '$249';
    document.querySelector('#label').textContent = '25,000';
  } else if (sliderStep == 7) {
    document.querySelector('#price').textContent = '$299';
    document.querySelector('#label').textContent = '30,000';
  } else if (sliderStep == 8) {
    document.querySelector('#price').textContent = '$349';
    document.querySelector('#label').textContent = '35,000';
  } else if (sliderStep == 9) {
    document.querySelector('#price').textContent = '$399';
    document.querySelector('#label').textContent = '40,000';
  } else if (sliderStep == 10) {
    document.querySelector('#price').textContent = '$499';
    document.querySelector('#label').textContent = '50,000';
  } else if (sliderStep == 11) {
    document.querySelector('#price').textContent = 'Contact us for pricing';
    document.querySelector('#label').textContent = '50,000+';
    document.querySelector('#perMonth').style.display = 'none';
  }
});
