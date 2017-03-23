class Drover {
    constructor() {
        this.form;
        this.divWrapper;
        this.formButtonClose;
        this.formButton;
    }

    createElement(element, className, attribute, value){
        let elem = document.createElement(element);
        if(className){
            elem.className = className;
        }
        if(attribute){
            for(let key in attribute){
                elem.setAttribute(key, attribute[key]);
            }
        }
        if(value){
            elem.innerHTML = value;
        }
        return elem;
    }


    createWrapper() {
        this.divWrapper = this.createElement('div', 'divWrapper hidden')
    }

    createForm(filde) {
        this.form =  this.createElement('form', 'log-form', {action: '#'} );
        this.formButtonClose = this.createElement('div', 'form-button-close', undefined ,'&times');

        this.form.appendChild(this.formButtonClose);


        for (let key in filde) {
            let input = this.createElement('input', 'input-form', {type: filde[key].type, placeholder: key, name: key});
            this.form.appendChild(input);
        }

        this.formButton = this.createElement('button', 'form-button-gray', {type: 'submit', value: 'submit', disabled: "disabled"}, 'login');
        this.form.appendChild(this.formButton);

        let text = this.createElement('p', undefined, undefined, 'Not registred?  '),
            aText = this.createElement('a', undefined, undefined, 'Create an account');
        text.appendChild(aText);
        this.form.appendChild(text);
        
        return this.form;
    }

    updateHtml(filde) {
        let body = document.body;

        this.createWrapper();
        this.createForm(filde);

        body.appendChild(this.divWrapper);

        this.divWrapper.appendChild(this.form);
    }

    show() {
        this.divWrapper.classList.remove('hidden');
    }

    hide() {
        this.divWrapper.classList.add('hidden');
    }

    validationButtonShow(boolean) {
        if(boolean){
            this.formButton.classList.remove('form-button-gray');
            this.formButton.classList.add('form-button-green');
            this.formButton.removeAttribute('disabled');
        }else {
            this.formButton.classList.remove('form-button-green');
            this.formButton.classList.add('form-button-gray');
            this.formButton.setAttribute('disabled', 'disabled');
        }

    }

}
export default Drover