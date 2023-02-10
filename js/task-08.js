const form = document.querySelector('.login-form');
form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
    event.preventDefault();

    const {
        elements: { email, password },
    } = event.currentTarget;

    if (email.value === '' || password.value === '') {
        return alert("Заповни всі поля!");
    }

    const userInfo = {
        email: email.value,
        password: password.value,
    };

    confirm.log(userInfo);

    event.currentTarget.reset();
}
