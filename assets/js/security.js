document.addEventListener("contextmenu", function (e) {
    e.preventDefault(); // Disable right-click
  });
  
  document.addEventListener("keydown", function (e) {
    // Keys combinations for disabling Developer Tools and View Source
    const forbiddenCombos = [
      { ctrl: true, shift: false, key: "u" }, // Ctrl+U (View Source)
      { ctrl: true, shift: true, key: "I" }, // Ctrl+Shift+I (DevTools)
      { ctrl: true, shift: true, key: "J" }, // Ctrl+Shift+J (DevTools)
      { ctrl: true, shift: true, key: "C" }, // Ctrl+Shift+C (Inspect Element)
      { ctrl: true, shift: true, key: "K" }, // Ctrl+Shift+K (DevTools Console)
      { ctrl: true, shift: true, key: "U" }, // Ctrl+Shift+U (View Source)
      { ctrl: true, shift: true, key: "R" }, // Ctrl+Shift+R (Hard Refresh)
      { ctrl: true, key: "c" },              // Ctrl+C (Copy)
      { ctrl: true, key: "x" },              // Ctrl+X (Cut)
      { ctrl: true, key: "a" },              // Ctrl+A (Select All)
    ];
  
    // Check for F12 (open DevTools)
    if (e.key === "F12") {
      e.preventDefault();
    }
  
    // Check for forbidden key combinations
    forbiddenCombos.forEach(combo => {
      if (
        e.ctrlKey === combo.ctrl &&
        e.shiftKey === (combo.shift || false) &&
        e.key === combo.key
      ) {
        e.preventDefault();
      }
    });
  });
  