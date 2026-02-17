$(document).ready(function() {
  // Toggle tema claro/oscuro
  $("#themeToggle").click(function() {
    $("body").toggleClass("dark-theme light-theme");
    if ($("body").hasClass("dark-theme")) {
      $("#themeToggle").text("Cambiar Tema");
    } else {
      $("#themeToggle").text("Volver a Oscuro");
    }
  });

  // Animaciones al desplazarse
  function checkVisibility() {
    $(".animate-on-scroll").each(function() {
      var elementTop = $(this).offset().top;
      var windowBottom = $(window).scrollTop() + $(window).height();
      if (elementTop < windowBottom - 50) {
        $(this).addClass("visible");
      }
    });
  }
  $(window).on("scroll", checkVisibility);
  checkVisibility();

  // Scroll suave al hacer clic en navbar
  $(".nav-link").on("click", function(e) {
    e.preventDefault();
    var target = $(this).attr("href");
    $("html, body").animate({
      scrollTop: $(target).offset().top - 70
    }, 600);
  });

  // Validación en tiempo real del formulario
  $("#contactForm input, #contactForm textarea").on("input", function() {
    if (this.checkValidity()) {
      $(this).removeClass("is-invalid").addClass("is-valid");
    } else {
      $(this).removeClass("is-valid").addClass("is-invalid");
    }
  });

  // Validación al enviar formulario
  $("#contactForm").on("submit", function(event) {
    event.preventDefault();
    if (this.checkValidity()) {
      alert("Formulario enviado correctamente!");
      this.reset();
      $("#contactForm input, #contactForm textarea").removeClass("is-valid is-invalid");
    } else {
      $(this).find(":input").each(function() {
        if (!this.checkValidity()) {
          $(this).addClass("is-invalid");
        }
      });
    }
  });
});
