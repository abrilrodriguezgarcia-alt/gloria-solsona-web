// Endpoint del servei d'enviament (p. ex. Formspree: https://formspree.io/f/XXXXXXX).
// PENDENT: la clienta ha de confirmar compte/endpoint (docs/legal-requirements.md
// §Formulari de contacte). Mentre estigui buit, el formulari no envia cap
// dada enlloc: només mostra un avís i deixa les dades introduïdes intactes.
const FORM_ENDPOINT = '';

export function initContactForm() {
  const form = document.querySelector('.contacte-form');
  if (!form) return;

  const status = form.querySelector('.contacte-form__status');
  const submitButton = form.querySelector('.contacte-form__submit');
  const isSpanish = document.documentElement.lang === 'es';

  const messages = isSpanish
    ? {
        notReady: 'El formulario aún no está activo. Mientras tanto, puedes escribirnos por teléfono o correo electrónico.',
        success: 'Gracias por tu mensaje. Te responderemos lo antes posible.',
        error: 'No se ha podido enviar el mensaje. Inténtalo de nuevo o escríbenos por correo electrónico.',
      }
    : {
        notReady: "El formulari encara no està actiu. Mentrestant, pots escriure'ns per telèfon o correu electrònic.",
        success: 'Gràcies pel teu missatge. Et respondrem al més aviat possible.',
        error: "No s'ha pogut enviar el missatge. Torna-ho a provar o escriu-nos per correu electrònic.",
      };

  function showStatus(state, text) {
    status.textContent = text;
    status.dataset.state = state;
    status.hidden = false;
  }

  form.addEventListener('submit', async (event) => {
    event.preventDefault();

    if (!FORM_ENDPOINT) {
      showStatus('error', messages.notReady);
      return;
    }

    submitButton.disabled = true;

    try {
      const response = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: new FormData(form),
      });

      if (response.ok) {
        form.reset();
        showStatus('success', messages.success);
      } else {
        showStatus('error', messages.error);
      }
    } catch {
      showStatus('error', messages.error);
    } finally {
      submitButton.disabled = false;
    }
  });
}
