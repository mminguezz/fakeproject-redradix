(function() {
  // menu
  var menuBurguer = document.querySelector(".js-menu-toggle");
  var menu = document.querySelector(".js-menu");

  menuBurguer.addEventListener("click", function(event) {
    var menuOpen = menu.classList.contains("is-open");
    var menuStatus = !menuOpen;

    menuBurguer.setAttribute("aria-expanded", menuStatus);
    menu.classList.toggle("is-open");
  });
  
  
  // tabs - https://inclusive-components.design/
  const tabs = document.querySelector('.js-tabs');
  const tablist = tabs.querySelector('ul');
  const tabsitems = tablist.querySelectorAll('li');
  const tabslinks = tablist.querySelectorAll('a');
  const panels = tabs.querySelectorAll('[id^="section"]');
  
  const switchTab = (oldTab, newTab) => {
    newTab.focus();
    newTab.removeAttribute('tabindex');
    newTab.setAttribute('aria-selected', 'true');
    newTab.scrollIntoView({block: "end", behavior: "smooth"});
    oldTab.removeAttribute('aria-selected');
    oldTab.setAttribute('tabindex', '-1');
    
    let index = Array.prototype.indexOf.call(tabslinks, newTab);
    let oldIndex = Array.prototype.indexOf.call(tabslinks, oldTab);
    
    tabsitems[oldIndex].classList.remove("is-active");
    tabsitems[index].classList.add("is-active");
    panels[oldIndex].hidden = true;
    panels[index].hidden = false;
  };
  
  Array.prototype.forEach.call(tabslinks, (tab, i) => {
    tab.addEventListener('click', e => {
      e.preventDefault();
      let currentTab = tablist.querySelector('[aria-selected]');
      if (e.currentTarget !== currentTab) {
        switchTab(currentTab, e.currentTarget);
      }
    });
    
    // Handle keydown events for keyboard users
    tab.addEventListener('keydown', e => {
      // Get the index of the current tab in the tabs node list
      let index = Array.prototype.indexOf.call(tabslinks, e.currentTarget);
      // Work out which key the user is pressing and
      // Calculate the new tab's index where appropriate
      let dir = e.which === 37 ? index - 1 : e.which === 39 ? index + 1 : e.which === 40 ? 'down' : null;
      if (dir !== null) {
        e.preventDefault();
        // If the down key is pressed, move focus to the open panel,
        // otherwise switch to the adjacent tab
        dir === 'down' ? panels[i].focus() : tabslinks[dir] ? switchTab(e.currentTarget, tabslinks[dir]) : void 0;
      }
    });
  });
  
  // Scoring Progress Bar
  setTimeout(function(){ 
    document.querySelector('.c-scoring').style.setProperty('--c-scoring-bar--percent', '87%');
  }, 1200);
  
  // expandable Read more
  var expandable = document.querySelector(".js-expandable");
  $(".js-expandable-action").addEventListener('click', function(event) {
    var isOpen = expandable.classList.contains("is-open");
    var expandableStatus = !isOpen;
    
    expandable.setAttribute("aria-expanded", expandableStatus);
    expandable.classList.toggle("is-open");
  });

  
})();
