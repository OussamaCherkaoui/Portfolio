$(document).ready(function() {
  // MagnificPopup
  var magnifPopup = function() {
    $('.popup-image').magnificPopup({
      type: 'image',
      removalDelay: 300,
      mainClass: 'mfp-with-zoom',
      gallery:{
        enabled:true
      },
      zoom: {
        enabled: true, // By default it's false, so don't forget to enable it

        duration: 300, // duration of the effect, in milliseconds
        easing: 'ease-in-out', // CSS transition easing function

        // The "opener" function should return the element from which popup will be zoomed in
        // and to which popup will be scaled down
        // By defailt it looks for an image tag:
        opener: function(openerElement) {
        // openerElement is the element on which popup was initialized, in this case its <a> tag
        // you don't need to add "opener" option if this code matches your needs, it's defailt one.
        return openerElement.is('img') ? openerElement : openerElement.find('img');
        }
      }
    });
  };
  
  // Call the functions 
  magnifPopup();

});

document.getElementById('send-btn').addEventListener('click', function () {
  const serviceID = "service_kvk0ise"; 
  const templateID = "template_lac9qb5"; 

  const params = {
      name: document.getElementById('name').value,
      email: document.getElementById('email').value,
      message: document.getElementById('message').value,
  };

  if (!params.name || !params.email || !params.message) {
    alert("Kindly provide all the required details before submitting.");
    return; // Arrête le traitement si un champ est vide
}

  emailjs.send(serviceID, templateID, params)
      .then(response => {
          alert("Message sent successfully!");
          document.getElementById('contact-form').reset();
      })
      .catch(error => {
        alert("Error sending the message. Please try again.");
          console.error("Error:", error);
      });
});