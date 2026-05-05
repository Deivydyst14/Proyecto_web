// Esperamos a que el DOM esté listo
document.addEventListener("DOMContentLoaded", () => {
  const currentPage = window.location.pathname.split("/").pop();

  // Datos de planes
  const plans = [
    { name: "Básico", speed: "20 Mbps", price: "$50.000/mes" },
    { name: "Hogar", speed: "50 Mbps", price: "$80.000/mes" },
    { name: "Pro", speed: "100 Mbps", price: "$120.000/mes" },
  ];

  // ==========================================
  // PÁGINA: index.html (todo en uno)
  // ==========================================
  if (
    currentPage === "index.html" ||
    currentPage === "" ||
    currentPage === "Inicio.html"
  ) {
    const plansGridIndex = document.getElementById("plans-grid-index");
    const formCotizacionIndex = document.getElementById(
      "form-cotizacion-index",
    );
    const planSelectIndex = document.getElementById("plan-index");

    // Generar tarjetas de planes en index.html
    if (plansGridIndex) {
      plans.forEach((plan) => {
        const card = document.createElement("div");
        card.className = "plan-card";
        card.innerHTML = `
          <div class="plan-speed">${plan.speed}</div>
          <h3>${plan.name}</h3>
          <div class="plan-price"><span class="price">${plan.price}</span></div>
          <ul class="plan-features">
            <li>✅ Internet ilimitado</li>
            <li>✅ Instalación incluida</li>
            <li>✅ Soporte 24/7</li>
          </ul>
          <button type="button" class="plan-cta" data-plan="${plan.name}">Cotizar ${plan.name}</button>
        `;
        plansGridIndex.appendChild(card);
      });

      // Botones de cotizar hacen scroll al formulario y preseleccionan plan
      plansGridIndex.querySelectorAll(".plan-cta").forEach((btn) => {
        btn.addEventListener("click", () => {
          const planName = btn.getAttribute("data-plan");
          if (planSelectIndex) {
            planSelectIndex.value = planName;
          }
          document
            .getElementById("cotizacion")
            .scrollIntoView({ behavior: "smooth" });
        });
      });
    }

    // Manejo del formulario en index.html
    if (formCotizacionIndex) {
      formCotizacionIndex.addEventListener("submit", (e) => {
        e.preventDefault();
        alert(
          "¡Solicitud enviada con éxito! Nos pondremos en contacto contigo pronto.",
        );
        formCotizacionIndex.reset();
      });
    }
  }

  // ==========================================
  // PÁGINA: planes.html
  // ==========================================
  if (currentPage === "planes.html") {
    const plansGrid = document.getElementById("plans-grid");

    if (plansGrid) {
      plans.forEach((plan) => {
        const card = document.createElement("div");
        card.className = "plan-card";
        card.innerHTML = `
          <div class="plan-speed">${plan.speed}</div>
          <h3>${plan.name}</h3>
          <div class="plan-price"><span class="price">${plan.price}</span></div>
          <ul class="plan-features">
            <li>✅ Internet ilimitado</li>
            <li>✅ Instalación incluida</li>
            <li>✅ Soporte 24/7</li>
          </ul>
          <a href="cotizacion.html?plan=${encodeURIComponent(plan.name)}" class="plan-cta">Cotizar ${plan.name}</a>
        `;
        plansGrid.appendChild(card);
      });
    }
  }

  // ==========================================
  // PÁGINA: cotizacion.html
  // ==========================================
  if (currentPage === "cotizacion.html") {
    const formCotizacion = document.getElementById("form-cotizacion");
    const planSelect = document.getElementById("plan");

    // Si viene un plan por URL, lo preseleccionamos
    const urlParams = new URLSearchParams(window.location.search);
    const planFromUrl = urlParams.get("plan");
    if (planFromUrl && planSelect) {
      const options = Array.from(planSelect.options);
      const match = options.find((opt) => opt.value === planFromUrl);
      if (match) planSelect.value = planFromUrl;
    }

    if (formCotizacion) {
      formCotizacion.addEventListener("submit", (e) => {
        e.preventDefault();
        alert(
          "¡Solicitud enviada con éxito! Nos pondremos en contacto contigo pronto.",
        );
        formCotizacion.reset();
      });
    }
  }
});
