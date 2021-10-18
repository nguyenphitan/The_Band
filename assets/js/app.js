const header = document.getElementById('header');
const mobileMenu = document.querySelector('#header .mobile-menu-btn');
const headerHeight = header.clientHeight;


// open / close menu
mobileMenu.addEventListener('click', () => {
    let isClose = header.clientHeight === headerHeight;
    if(isClose) {
        header.style.height = 'auto';
        mobileMenu.style.backgroundColor = '#ccc';
    }
    else {
        header.style.height = null;
        mobileMenu.style.backgroundColor = null;
    }
})


// go to subnav item and close menu
const menuItems = document.querySelectorAll('#nav li a[href*="#"]');

for(let i in menuItems) {
    let mItem = menuItems[i];
    let check = 0;
    mItem.onclick = function(event) {
        let isParentMenu = this.nextElementSibling && this.nextElementSibling.classList.contains('subnav');
        if(isParentMenu) {
            event.preventDefault();
        }
        else {
            header.style.height = null;
            mobileMenu.style.backgroundColor = null;
        }
    }
}

// open / close subnav
const moreNav = document.querySelector('.js-more');
const subNav = document.querySelector('#nav .subnav');
const navItemMore = document.querySelector('.js-nav-item');

if(screen.availWidth >= 740) { // PC & Tablet
    navItemMore.addEventListener('mousemove', function(event) {
        subNav.style.display = 'block';
        moreNav.style.backgroundColor = '#ccc';
        moreNav.style.color = '#000';
    })
}
else {  // Mobile
    moreNav.onclick = function(event) {
        event.preventDefault();
        if(subNav.clientHeight != 0) {
            subNav.style.display = 'none';
            moreNav.style.backgroundColor = '#000';
            moreNav.style.color = '#fff';
        }
        else {
            subNav.style.display = 'block';
            moreNav.style.backgroundColor = '#ccc';
            moreNav.style.color = '#000';
        }
    }
}
// close subnav (All)
navItemMore.addEventListener('mouseout', function(event) {
    subNav.style.display = 'none';
    if(subNav.clientHeight === 0) {
        moreNav.style.backgroundColor = '#000';
        moreNav.style.color = '#fff';
    }
})




// Modal
const modal = document.querySelector('.js-modal');
const modalContainer = document.querySelector('.js-modal-container');
const buyBtns = document.querySelectorAll('.js-buy-ticket');
const modalClose = document.querySelector('.js-modal-close');

// open modal
function showBuyTickets() {
    modal.classList.add('modal-open');
}

// close modal
function hideBuyTickets() {
    modal.classList.remove('modal-open');
}

//
for(const buyBtn of buyBtns) {
    buyBtn.addEventListener('click', showBuyTickets);
}

modalClose.addEventListener('click', hideBuyTickets);

modal.addEventListener('click', hideBuyTickets);

modalContainer.addEventListener('click', function(event) {
    event.stopPropagation();
})


