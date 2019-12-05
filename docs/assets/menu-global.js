// Menu Global generator

let menuGlobal = document.createElement('div');
menuGlobal.className = "menu-global";

const menuItems = [
  { 
    name: 'Intro', 
    icon: "⌂", 
    link: "/", 
    class:"" 
  },
  { 
    name: 'Brand', 
    icon: "⎈", 
    link: "/brand", 
    class:"" 
  },
  { 
    name: 'Icons', 
    icon: "♘", 
    link: "/icons", 
    class:"" 
  },
  { 
    name: 'UI', 
    icon: "▥", 
    link: "/ui", 
    class:"" 
  },
  { 
    name: 'Stock', 
    icon: "❖", 
    link: "/stock",
    class:"" 
  },
  { 
    name: 'Motion', 
    icon: "⭆", 
    link: "/motion",
    class:"" 
  }
];

const menuGlobalTemplate = `
  <ul>
      ${menuItems.map(item => `
        <li>
          <a id="menu-${item.name}.toLowerCase();" href="${item.link}" class="${item.class}">
            <span class="menu-global-item-icon">${item.icon}</span>
            <span class="menu-global-item-text">${item.name}</span>
          </a>
        </li>
      `).join('')}
  </ul>
`;

const menuGlobalStyles = `
<style>

  /* Docsify */

  .sidebar {
    left: 68px;
    transform: translateX(0px);
  }

  main > .content {
    margin-left: calc(var(--sidebar-width) + 74px);
  }

  .sidebar-toggle .sidebar-toggle-button {
    left: 68px;
    display: none;
  }

  /* Navigation menu */

  :root {
    --primary: #000000;
    --body-bg: #F7F7F7;
    --header-bg: var(--primary);
    --nav-bg: #383838;
    --nav-global-bg: #262626;
  }

  body,
  html {
    padding: 0;
    margin: 0;
  }

  .menu-global {
    position: fixed;
    background: var(--nav-global-bg);
    width: 68px;
    height: 100vh;
    overflow: auto;
    z-index: 9999;
    font-family: sans-serif;
  }

  .menu-global a {
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: rgba(255,255,255,0.6);
    text-decoration: none;
    transition: 0.3s;
  }

  .menu-global a:hover {
    color: rgba(255,255,255,0.9);
    background: rgba(255,255,255,0.1);
    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;
  }

  .menu-global a.active {
    color: rgba(255,255,255,1);
    background: #999;
    background: royalblue;
    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;
  }

  .menu-global-item-text {
    margin-top: -6px;
  }

  .menu-global ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  .menu-global li {
    height: 68px;
    width: 68px;
    margin: 0;
    text-align: center;
    font-size: 12px;
    color: white;
  }

  .menu-global-item-icon {
    font-size: 24px;
  }


</style>
`;

menuGlobal.innerHTML = menuGlobalTemplate + menuGlobalStyles;
document.body.insertAdjacentElement("afterbegin", menuGlobal);

// Based on https://css-tricks.com/snippets/jquery/add-active-navigation-class-based-on-url/
(function() {
  var nav = document.getElementsByClassName('menu-global'),
      link = nav.getElementsByTagName('a'),
      current = window.location.pathname.split('/')[1];
      for (var i = 0; i < link.length; i++) {
      if(link[i].href == current) {
          link[i].className = "active";
      }
  }
})();