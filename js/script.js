/*!
 * Color mode toggler for Bootstrap's docs (https://getbootstrap.com/)
 * Copyright 2011-2023 The Bootstrap Authors
 * Licensed under the Creative Commons Attribution 3.0 Unported License.
 */

(() => {
  "use strict";

  const getStoredTheme = () => localStorage.getItem("theme");
  const setStoredTheme = (theme) => localStorage.setItem("theme", theme);
  const getPreferredTheme = () => {
    const storedTheme = getStoredTheme();
    if (storedTheme) {
      return storedTheme;
    }

    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  };

  const setTheme = (theme) => {
    if (theme === "auto" && window.matchMedia("(prefers-color-scheme: dark)").matches) {
      document.documentElement.setAttribute("data-bs-theme", "dark");
    } else {
      document.documentElement.setAttribute("data-bs-theme", theme);
    }
  };

  setTheme(getPreferredTheme());

  const showActiveTheme = (theme, focus = false) => {
    const themeSwitcher = document.querySelector("#bd-theme");

    if (!themeSwitcher) {
      return;
    }

    const themeSwitcherText = document.querySelector("#bd-theme-text");
    const btnToActive = document.querySelector(`[data-bs-theme-value="${theme}"]`);

    document.querySelectorAll("[data-bs-theme-value]").forEach((element) => {
      element.classList.remove("active");
      element.setAttribute("aria-pressed", "false");
    });

    btnToActive.classList.add("active");
    btnToActive.setAttribute("aria-pressed", "true");
    const themeSwitcherLabel = `${themeSwitcherText.textContent} (${btnToActive.dataset.bsThemeValue})`;
    themeSwitcher.setAttribute("aria-label", themeSwitcherLabel);

    if (focus) {
      themeSwitcher.focus();
    }
  };

  window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", () => {
    const storedTheme = getStoredTheme();
    if (storedTheme !== "light" && storedTheme !== "dark") {
      setTheme(getPreferredTheme());
    }
  });

  window.addEventListener("DOMContentLoaded", () => {
    showActiveTheme(getPreferredTheme());

    document.querySelectorAll("[data-bs-theme-value]").forEach((toggle) => {
      toggle.addEventListener("click", () => {
        const theme = toggle.getAttribute("data-bs-theme-value");
        setStoredTheme(theme);
        setTheme(theme);
        showActiveTheme(theme, true);
      });
    });
  });
})();

if (localStorage.getItem("theme") == "dark") {
  changeIcon("ri-moon-line");
} else if (localStorage.getItem("theme") == "light") {
  changeIcon("ri-sun-line");
} else {
  changeIcon("ri-contrast-line");
}

function changeIcon(icon){
  const toggle = document.querySelector("#iconActive");
  toggle.className = icon;
}

function store() {
  let name = document.getElementById("sigem");
  let pw = document.getElementById("sigpa");

  if (name.value.length == 0) {
    alert("Please fill in email");
  } else if (pw.value.length == 0) {
    alert("Please fill in password");
  } else if (name.value.length == 0 && pw.value.length == 0) {
    alert("Please fill in email and password");
  } else if (pw.value.length > 8) {
    alert("Max of 8");
  } else {
    localStorage.setItem("name", name.value);
    localStorage.setItem("pw", pw.value);
    alert("Your account has been created");
    location.href = "login.html";
  }
}

function check() {
  let storedName = localStorage.getItem("name");
  let storedPw = localStorage.getItem("pw");

  let userName = document.getElementById("logem");
  let userPw = document.getElementById("logpa");
  let userRemember = document.getElementById("rememberMe");

  if (userName.value == storedName && userPw.value == storedPw) {
    localStorage.setItem("login", "true");
    alert("You are logged in.");
    location.href="index.html";
  } else {
    alert("Error on login, 1. sign up first 2. fill the input");
  }
}

function logout(){
  let conf = confirm("Are sure to logout?");
  if(conf){
    localStorage.removeItem("login");
    alert("You have successfully logged out");
    location.reload();
  }
}

if(localStorage.getItem("login") == "true") {
  let h1 = document.querySelector("#hide1");
  h1.style.display = 'none';
  let h2 = document.querySelector("#hide2");
  h2.style.display = 'none';
  let h3 = document.querySelector("#hide3");
  h3.style.display = 'none';
  let h4 = document.querySelector("#hide4");
  h4.style.display = 'none';
  let s1 = document.querySelector("#show1");
  s1.style.display = 'block';
  let s2 = document.querySelector("#show2");
  s2.style.display = 'block';
} else {
  let h1 = document.querySelector("#hide1");
  h1.style.display = "block";
  let h2 = document.querySelector("#hide2");
  h2.style.display = "block";
  let h3 = document.querySelector("#hide3");
  h3.style.display = "block";
  let h4 = document.querySelector("#hide4");
  h4.style.display = "block";
  let s1 = document.querySelector("#show1");
  s1.style.display = "none";
  let s2 = document.querySelector("#show2");
  s2.style.display = "none";
}