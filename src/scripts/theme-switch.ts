
  // toggle the theme
  const toggleTheme = () => {
    const body = document.body;
    const currentTheme = body.classList.contains("light") ? "light" : "dark";
    const newTheme = currentTheme === "light" ? "dark" : "light";
    body.classList.replace(currentTheme, newTheme);
    localStorage.setItem("theme", newTheme);
  };

  // get the user's preferred theme
  const getPreferredTheme = () => {
    const browserPreference = localStorage.getItem("theme");
    if (browserPreference) {
      return browserPreference;
    }

    const osTheme = window.matchMedia("(prefers-color-scheme: dark)");
    const hasPreference = typeof osTheme.matches === "boolean";
    if (hasPreference) {
      return osTheme.matches ? "dark" : "light";
    }

    return "light"; // Default to "light" if no preference is found
  };

  // Set the initial theme
  const initialTheme = getPreferredTheme();
  const body = document.body;
  body.classList.add(initialTheme);

  // Attach click event to the theme switch button
  const button = document.querySelector(".theme-switch");
  button?.addEventListener("click", toggleTheme);