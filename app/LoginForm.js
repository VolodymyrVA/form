/*
 class Show {


 paintForm() {
 let idForm = document.body;
 let div = document.createElement('div');

 div.id = 'login-form';
 div.innerHTML = '<form class="input-block">' +
 '<div>' +
 '<input class="input-login" type="text" name="login" placeholder="login" autocomplete="of"/>' +
 '<input class="input-password" type="password" name="password" placeholder="password" autocomplete="of"/>' +
 '<button class="form-button" type="submit" value="Submit" >login</button>' +
 '<p>Not registred? <a href="">Create an account</a></p>' +
 '</div>' +
 '</form>';
 idForm.appendChild(div);


 let body = document.body,
 inputBlock = document.querySelector('.input-block'),
 lofinForm = document.getElementById('login-form');

 inputBlock.addEventListener('click', (e) =>{
 this.validationForm();
 e.stopPropagation();
 });


 lofinForm.addEventListener('click', (e) => {

 lofinForm.remove();

 });

 //this.validationForm();

 }

 createForm() {
 let listener = document.querySelector('.registration');
 //let cb = this.paintForm.bind();
 listener.addEventListener('click', () => this.paintForm())

 }


 validationForm(){
 let elemLogin = document.querySelector('.input-login'),
 elemPassword = document.querySelector('.input-password'),
 formButton = document.querySelector('.form-button'),
 inputBlock = document.querySelector('.input-block');

 console.log(elemLogin.value.length);
 if(elemLogin.value.length == 0) {
 let base = formButton.style;

 Object.assign(formButton.style, {
 background: 'gray',
 border: 'gray',
 })

 //.background = 'gray';
 //formButton.setAttribute('disabled', 'disabled');
 }else {
 formButton.style.border = 'green';
 formButton.style.background = 'green';
 formButton.removeAttribute('disabled')
 }

 }


 onListeners

 }

 export default Show
 */

import Drover from './Drover'

class LoginForm extends Drover {
    constructor(selector, callback) {
        super();
        this.userData = {};
        this.cb = callback;
        this.selector = selector;
        this.filds = {
            username: {type: 'text', class: 'input-username'},
            password: {type: "password", class: 'input-password'}
        };

    }

    init() {
        this.updateHtml(this.filds);
        this.show();
        this.hide();
    }

    onListeres(event) {

        addEventListener(event, (e) =>{

        });
    }

    ofListeners(element) {

    }

    show() {
        let buttonLog = document.querySelector('.log'),
            registration = document.querySelector('.registration');

        buttonLog.addEventListener('click', () => {
            registration.classList.remove('hidden');
        });
    }
    hide() {
        let submit = document.querySelector('.form-button'),
            registration = document.querySelector('.registration');

        registration.addEventListener('click', () => {
            registration.classList.add("hidden");
        })

        submit.addEventListener('click', (e) => {
            e.preventDefault();
            registration.classList.add("hidden");
            e.stopPropagation();
        })
    }

    destroy() {
    }
}


/*class Validator {
    validationForm() {
        let elemLogin = document.querySelector('.input-login'),
            elemPassword = document.querySelector('.input-password'),
            formButton = document.querySelector('.form-button'),
            inputBlock = document.querySelector('.input-block');

        console.log(elemLogin.value.length);
        if (elemLogin.value.length == 0) {
            let base = formButton.style;

            Object.assign(formButton.style, {
                background: 'gray',
                border: 'gray',
            })

            //.background = 'gray';
            //formButton.setAttribute('disabled', 'disabled');
        } else {
            formButton.style.border = 'green';
            formButton.style.background = 'green';
            formButton.removeAttribute('disabled')
        }

    }

}*/


export default LoginForm
/*let myForm = new LoginForm('body', (user) => {
 console.log(user);
 })*/
