function form () {
    let form = document.querySelector('.main-form')[0],
    formBottom = document.getElementById('form'),
    input = form.getElementsByTagName('input'),
    statusMessage = document.createElement('div');

    
    statusMessage.classList.add('status');

    function sendForm(elem) {
        elem.addEventListener('submit', function(e) {
            e.preventDefault();
                elem.appendChild(statusMessage);
                let formData = new FormData(elem);

                function postData(data) {
                    return new Promise(function(resolve, reject) {
                        let request = new XMLHttpRequest();

                        request.open("POST", 'server.php');

                        request.setRequestHeader('Content-type', 'application/json; charset=utf-8');

                        request.onreadystatechange = function() {
                            if(request.readyState < 4 ) {
                                resolve()
                            } else if (request.readyState === 4) {
                                if (request.status == 200 && request.status < 300) {
                                    resolve()
                                }
                                else {
                                    reject()
                                }
                            }
                        }
                        request.send(data);
                    })
                } //End postData

                function clearInput() {
                    for (let i = 0; i < input.length; i++) {
                        input[i].value = '';
                    }
                }

                postData(formData)
                    .then(() => statusMessage.innerHTML = message.loading)
                    .then(() => {
                        thanksModal.style.display = 'block';
                        mainModal.style.display = 'none';
                        statusMessage.innerHTML = '';
                    })
                    .catch(() => statusMessage.innerHTML = message.failure)
                    .then(clearInput)
        });
    }
    sendForm(form);
    sendForm(formBottom);
}


module.exports = form;