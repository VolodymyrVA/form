class View {
    createForm(){
        let idForm = document.getElementById('form');
        let div = document.createElement('div');
        div.className = 'login-form';
        div.innerHTML = '<form>' +
                '<div class="input-block">' +
                '<input class="form-input" type="text" name="login" placeholder="login" autocomplete="of"/>' +
                '<input class="form-input" type="password" name="password" placeholder="password" autocomplete="of"/>' +
                '<button class="form-button">submit</button>' +
                '</div>' +
            '</form>';

        idForm.appendChild(div);
    }
}

export default View
