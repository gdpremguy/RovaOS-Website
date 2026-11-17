"use strict";

for (const button of document.querySelectorAll("[data-copy]")) {
  button.hidden = false;
  button.addEventListener("click", async () => {
    const target = document.getElementById(button.dataset.copy);
    const status = document.getElementById("copy-status");
    try {
      if (!navigator.clipboard) throw new Error("Clipboard unavailable");
      await navigator.clipboard.writeText(target.textContent.trim());
      status.textContent = "Checksum copied.";
      button.textContent = "Copied";
    } catch {
      const range = document.createRange();
      range.selectNodeContents(target);
      const selection = window.getSelection();
      selection.removeAllRanges();
      selection.addRange(range);
      status.textContent = "Automatic copying is unavailable. The checksum is selected; copy it manually.";
      button.textContent = "Selected — copy manually";
    }
  });
}
