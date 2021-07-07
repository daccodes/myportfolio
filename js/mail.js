console.clear();

(function() {
    emailjs.init("user_XW2bGukwTaEOwzfUe5bf0");
    })();

    const btn = document.getElementById('button');

    document.getElementById('contact-form')
    .addEventListener('submit', function(event) {
      event.preventDefault();

      btn.value = 'Invio in corso...';

      const serviceID = 'default_service';
      const templateID = 'template_s2mqd7e';

      emailjs.sendForm(serviceID, templateID, this)
        .then(() => {
          btn.value = 'Inviato!';
          //alert('Inviato!');
          location.reload();
          
        }, (err) => {
          btn.value = 'Inviato!';
          alert(JSON.stringify(err));
        });
    });
