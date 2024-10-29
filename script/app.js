const $ = document
let regex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/gmi;
const fnameInput = $.querySelector('.first-name__input');
const lnameInput = $.querySelector('.last-name__input');
const emailInput = $.querySelector('.contactUs-email__input');
const emailRequired = $.querySelector('.email-required')
const validEmail = $.querySelector('.valid-email')
const fmaneRequired = $.querySelector('.fmane-required')
const lnameRequired = $.querySelector('.lname-required')
const contactUsGeneral = $.querySelector('.contactUs-general')
const contactUsSupport = $.querySelector('.contactUs-support')
const contactUsSupportInput = $.querySelector('.contactUs-support__input')
const contactUsGeneralInput = $.querySelector('.contactUs-general__input')
const queryTypeRequired = $.querySelector('.queryType-required')
const contactUsGeneralLabel = $.querySelector('.contactUs-general__label')
const contactUsSupportLabel = $.querySelector('.contactUs-support__label')
const textarea = $.querySelector('.textarea')
const textareaRequired = $.querySelector('.textarea-required')
const contactUsCheckboxInput = $.querySelector('.contactUs-checkbox__input')
const checkboxRequired = $.querySelector('.checkbox-required')
const module = $.querySelector('.module')
const subBtn = $.querySelector('.contactUs-btn')

//! Functions//////////////////////////////////////////

function nameValidation(inputValue , required){
    if(inputValue.value == ""){
        required.style.display = "block";
    }else{
        required.style.display = "none";
    }
}

function queryTypeValidation(value1 , value2){
    if(value1.checked == true || value2.checked == true){
        queryTypeRequired.style.display = "none";
    }else if(value1.checked == false && value2.checked == false){
        queryTypeRequired.style.display = "block";
    }
}

function checkClassName(value1 , value2){
    value1.checked = true;
    value2.classList.toggle("query-type--active");
    if(value2.classList.contains("query-type--active")){
        value1.checked = true;
    } else {
        value1.checked = false;
    }
}

//* Submit Btn///////////////////////////////////////

subBtn.addEventListener('click', (event)=>{
    event.preventDefault()

    let emailValidation = regex.test(emailInput.value)
    console.log(emailValidation)
    
    
    nameValidation(fnameInput , fmaneRequired)
    nameValidation(lnameInput , lnameRequired)
   

    if(emailInput.value == ""){
        emailRequired.style.display = "block";
        validEmail.style.display = "none";
    }else if(emailValidation === false){
        validEmail.style.display = "block";
        emailRequired.style.display = "none";
    }else{
        emailRequired.style.display = "none";
        validEmail.style.display = "none";
    }

    queryTypeValidation(contactUsGeneralInput ,contactUsSupportInput)
    
    if(textarea.value == ""){
      textareaRequired.style.display = "block";
    } else{
       textareaRequired.style.display = "none";
    }

    if(contactUsCheckboxInput.checked == true){
        checkboxRequired.style.display = "none";
    }else{
        checkboxRequired.style.display = "block";
    }

    if(fnameInput.value == "" && lnameInput.value == "" && textarea.value == ""){
        module.style.display = 'none';
    }else if(emailInput.value == "" && emailValidation === false){
        module.style.display = 'none';
    }else if(contactUsCheckboxInput.checked == false){
        module.style.display = 'none';
    }else if (contactUsGeneralInput.checked == false && contactUsSupportInput.checked == false){
        module.style.display = 'none';
    }else {
        module.style.display = 'block';
        setInterval(() => { module.style.display = 'none'}, 5000);
    }


})

//? Query Type Event/////////////////////////////////////

contactUsGeneral.addEventListener('click' , () =>{
    contactUsSupportInput.checked = false;
    contactUsSupport.classList.remove("query-type--active");
    checkClassName(contactUsGeneralInput , contactUsGeneral)
})

contactUsSupport.addEventListener('click' , () =>{
    contactUsGeneralInput.checked = false;
    contactUsGeneral.classList.remove("query-type--active");
    checkClassName(contactUsSupportInput , contactUsSupport)
})

contactUsGeneralLabel.addEventListener('click', () =>{
    contactUsSupportInput.checked = false;
    contactUsSupport.classList.remove("query-type--active");
    checkClassName(contactUsGeneralInput , contactUsGeneral)
})
contactUsSupportLabel.addEventListener('click', () =>{
    contactUsGeneralInput.checked = false;
    contactUsGeneral.classList.remove("query-type--active");
    checkClassName(contactUsSupportInput , contactUsSupport)
})

    
