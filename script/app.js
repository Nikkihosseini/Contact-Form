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
const contactUsgeneralInput = $.querySelector('.contactUs-general__input')


console.log(queryTypecheck(contactUsgeneralInput, contactUsSupportInput, contactUsGeneral, contactUsSupport))

function queryTypecheck(Input1 ,queryType1, Input2 , queryType2){
    Input1.checked = false;
    queryType1.classList.toggle("query-type--active");
    Input2.checked = true;
    queryType2.classList.toggle("query-type--active");
}


contactUsGeneral.addEventListener('click' , queryTypecheck(contactUsSupportInput, contactUsSupport, contactUsgeneralInput ,contactUsGeneral))
contactUsSupport.addEventListener('click' , queryTypecheck(contactUsgeneralInput, contactUsGeneral, contactUsSupportInput ,contactUsSupport))


// contactUsSupportInput.checked = false;
// contactUsSupport.classList.toggle("query-type--active");
// contactUsgeneralInput.checked = true;
// contactUsGeneral.classList.toggle("query-type--active");


const subBtn = $.querySelector('.contactUs-btn')



function nameValidation(inputValue , required){
    if(inputValue.value == ""){
        required.style.display = "block";
    }else{
        required.style.display = "none";
    }
}


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
   


})
    
