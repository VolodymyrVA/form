class Drover {
    constructor() {
        this.wrapper = null;
        this.form = "";
    }


    createWrapper(classElem) {
        let div = document.createElement('div');
        div.className = classElem, 'hidden';
        this.wrapper = div;
        return this.wrapper;
    }

    createForm(filde) {
        this.form = '<form class="log-form">';
        for (let i in filde) {
            this.form += '<input placeholder="' + i + '" type="' + filde[i].type + '" class="' + filde[i].class + '" />';
        }
        this.form += '<button class="form-button" type="submit" value="Submit" >login</button>' +
                     '<p>Not registred? <a href="">Create an account</a></p>' +
                     '</form>';
        return this.form;
    }

    updateHtml(filde) {
        let body = document.body;

        this.createWrapper('registration');
        this.createForm(filde);

        this.wrapper.innerHTML = this.form;

        body.appendChild(this.wrapper);
    }

}
export default Drover