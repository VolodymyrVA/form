import LoginForm from './LoginForm'

import './Show.css'

let filds = {
    username: {type: 'text', required: true},
    password: {type: "password", required: true},
    password2: {type: "password", required: true},
    password3: {type: "password", required: true},
    age: {type: 'text'}
};

let loginForm = new LoginForm(filds, 'log', (data) => {
    console.log(data);
});
loginForm.init();