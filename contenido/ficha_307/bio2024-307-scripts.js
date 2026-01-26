// tabs-images.js
document.addEventListener("DOMContentLoaded", function () {
  const tabs = document.querySelectorAll(".image-tab");
  const tabPanes = document.querySelectorAll(".image-tab-pane");

  // Función para cambiar de tab
  function switchTab(targetId) {
    // Remover clase active de todos los tabs
    tabs.forEach((tab) => tab.classList.remove("active"));
    tabPanes.forEach((pane) => pane.classList.remove("active"));

    // Activar tab seleccionado
    const activeTab = document.querySelector(
      `.image-tab[data-target="${targetId}"]`
    );
    const activePane = document.getElementById(`image-${targetId}`);

    if (activeTab && activePane) {
      activeTab.classList.add("active");
      activePane.classList.add("active");
    }
  }

  // Agregar event listeners a los tabs
  tabs.forEach((tab) => {
    tab.addEventListener("click", function () {
      const targetId = this.getAttribute("data-target");
      switchTab(targetId);
    });
  });

  // Inicializar con el primer tab activo
  const firstTab = document.querySelector(".image-tab.active");
  if (firstTab) {
    const targetId = firstTab.getAttribute("data-target");
    switchTab(targetId);
  }
});
