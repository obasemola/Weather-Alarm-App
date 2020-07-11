const cityForm = document.querySelector('form')
cityForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const city = cityForm.city.value.trim().toLowerCase();

  console.log(city)

  cityForm.reset();
})


