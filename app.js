// setting up logo
const uploadBtn = document.querySelector('#upload');
const logo = document.querySelector('.logo');

uploadBtn.addEventListener('change', () => {
  if(uploadBtn.files && uploadBtn.files[0]){
      let reader = new FileReader(); // init the file reader

      reader.addEventListener('load', () => {
        // reader.result will return the src of the uploaded image
        logo.style.backgroundImage = `url('${reader.result}')`;
    })

    reader.readAsDataURL(uploadBtn.files[0]);
  }
})