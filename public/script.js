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

    // Generar planes únicos en index.html
    if (plansGridIndex && plansGridIndex.children.length === 0) {
      plans.forEach((plan, index) => {
        setTimeout(() => {
          const card = document.createElement("div");
          card.className = "plan-card animate";
          card.dataset.plan = plan.name;
          card.innerHTML = `
            <div class="plan-speed">${plan.speed}</div>
            <h3>${plan.name}</h3>
            <div class="plan-price"><span class="price">${plan.price}</span></div>
            <ul class="plan-features">
              <li>✅ Internet ilimitado</li>
              <li>✅ Instalación incluida</li>
              <li>✅ Soporte 24/7</li>
            </ul>
            <button type="button" class="plan-cta" data-plan="${plan.name}">Ver Detalles</button>
          `;
          plansGridIndex.appendChild(card);
        }, index * 200);
      });

      // Click en cards index abre modal
      plansGridIndex.addEventListener("click", (e) => {
        if (e.target.closest(".plan-cta") || e.target.closest(".plan-card")) {
          const planName = e.target.closest("[data-plan]").dataset.plan;
          openPlanModal(planName);
        }
      });
    }

    // Manejo del formulario en index.html
    if (formCotizacionIndex) {
      formCotizacionIndex.addEventListener("submit", (e) => {
        e.preventDefault();
        showSuccessModal();
        formCotizacionIndex.reset();
      });
    }
  }

  // ==========================================
  // PÁGINA: planes.html
  // ==========================================
  if (currentPage === "planes.html") {
    const plansGrid = document.getElementById("plans-grid");

    if (plansGrid && plansGrid.children.length === 0) {
      plans.forEach((plan, index) => {
        setTimeout(() => {
          const card = document.createElement("div");
          card.className = "plan-card animate";
          card.dataset.plan = plan.name;
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
        }, index * 200);
      });
    }

    // Click en cards de planes.html abre modal
    plansGrid.addEventListener("click", (e) => {
      if (e.target.closest(".plan-cta") || e.target.closest(".plan-card")) {
        const planName = e.target.closest("[data-plan]").dataset.plan;
        openPlanModal(planName);
      }
    });
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
        showSuccessModal();
        formCotizacion.reset();
      });
    }
  }
});

// Funciones globales para modales y animaciones
function openPlanModal(planName) {
  const plans = [
    {
      name: "Básico",
      speed: "20 Mbps",
      price: "$50.000/mes",
      features: "Internet básico para navegación y streaming HD",
    },
    {
      name: "Hogar",
      speed: "50 Mbps",
      price: "$80.000/mes",
      features: "Perfecto para hogar con múltiples dispositivos",
    },
    {
      name: "Pro",
      speed: "100 Mbps",
      price: "$120.000/mes",
      features: "Para gamers y trabajo remoto de alta demanda",
    },
  ];
  const plan = plans.find((p) => p.name === planName);
  const modalHtml = `
    <div class="modal-overlay" id="plan-modal">
      <div class="modal">
        <button class="modal-close">&times;</button>
        <h2>${plan.name}</h2>
        <p><strong>Velocidad:</strong> ${plan.speed}</p>
        <p><strong>Precio:</strong> ${plan.price}</p>
        <p><strong>Ideal para:</strong> ${plan.features}</p>
        <ul>
          <li>✅ Internet ilimitado</li>
          <li>✅ Instalación incluida</li>
          <li>✅ Soporte 24/7</li>
        </ul>
        <a href="cotizacion.html?plan=${encodeURIComponent(plan.name)}" class="submit-cta">Cotizar Ahora</a>
      </div>
    </div>
  `;
  document.body.insertAdjacentHTML("beforeend", modalHtml);
  document.getElementById("plan-modal").classList.remove("hidden");
}

function showSuccessModal() {
  const modalHtml = `
    <div class="modal-overlay" id="success-modal">
      <div class="modal">
        <button class="modal-close">&times;</button>
        <h2>¡Éxito!</h2>
        <p>¡Solicitud enviada con éxito! Nos pondremos en contacto contigo pronto.</p>
        <button class="submit-cta" onclick="closeModal('success-modal')">Cerrar</button>
      </div>
    </div>
  `;
  document.body.insertAdjacentHTML("beforeend", modalHtml);
  document.getElementById("success-modal").classList.remove("hidden");
}

function closeModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) modal.remove();
}

// Close modals on overlay or close button
document.addEventListener("click", (e) => {
  if (
    e.target.classList.contains("modal-overlay") ||
    e.target.classList.contains("modal-close")
  ) {
    e.target.closest(".modal-overlay").remove();
  }
});

// LocalStorage for forms
function saveFormData(formId) {
  const formData = new FormData(document.getElementById(formId));
  const data = Object.fromEntries(formData);
  localStorage.setItem(formId, JSON.stringify(data));
}

function loadFormData(formId) {
  const saved = localStorage.getItem(formId);
  if (saved) {
    const data = JSON.parse(saved);
    Object.keys(data).forEach((key) => {
      const input = document.getElementById(key);
      if (input) input.value = data[key];
    });
  }
}

// Load saved data on pages
["form-cotizacion-index", "form-cotizacion"].forEach((id) => {
  if (document.getElementById(id)) {
    loadFormData(id);
    document
      .getElementById(id)
      .addEventListener("input", () => saveFormData(id));
  }
});
