import Drover from './Drover'
import Validator from './Validator'

class LoginForm {
    constructor(data, button, callback) {
        this.cb = callback;
        this.data = data;
        this.button = document.getElementById(button);

        this.drover = new Drover();
        this.validator = new Validator(this.data);
    }

    init() {
        this.drover.updateHtml(this.data);
        this.onListeres();



    }



    onListeres(event) {
        this.button.addEventListener('click', (e) => this.drover.show());

        this.drover.divWrapper.addEventListener('click', (e) => this.drover.hide());

        this.drover.form.addEventListener('click', (e) => e.stopPropagation());

        this.drover.formButtonClose.addEventListener('click', (e) => {
            e.preventDefault();
            this.drover.hide()
        });

        this.drover.form.addEventListener('keydown', (e) => {
            let isValid = this.validator.validationForm(this.collectionDateForm());
            this.drover.validationButtonShow(isValid);
        });

        this.drover.formButton.addEventListener('click', (e) => {
            e.preventDefault();
            let result = this.collectionDateForm();
            this.cb(result)
        })

    }

    ofListeners(element) {
        this.drover.divWrapper.removeEventListener('click', (e) => this.drover.hide());
    }

    collectionDateForm (){
        let inputsElem = this.drover.form.querySelectorAll('input'),
            loginData = {};



        inputsElem.forEach((input) => {
            loginData[input.name] = input.value;
        });

        return loginData;
    }

}

export default LoginForm

