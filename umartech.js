const myNumber = +2348037177814;

document.getElementById('myForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const name = encodeURIComponent(document.getElementById('name').value);
    const number = encodeURIComponent(document.getElementById('phoneNumber').value);
    const email = encodeURIComponent(document.getElementById('email').value);
    const message = `Name: ${name}%0APhone_Number: ${number}%0AEmail address: ${email}`;
    const url = `https://wa.me/${myNumber}?text=${message}`;
    window.open(url);
})
