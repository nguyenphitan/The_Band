const header = document.getElementById('header');
const mobileMenu = document.querySelector('#header .mobile-menu-btn');
const headerHeight = header.clientHeight;
// open / close menu
mobileMenu.addEventListener('click', () => {
    let isClose = header.clientHeight === headerHeight;
    if(isClose) {
        header.style.height = 'auto';
    }
    else {
        header.style.height = null;
    }

})


const menuItems = document.querySelectorAll('#nav li a[href*="#"]');

for(let i in menuItems) {
    let mItem = menuItems[i];
    mItem.onclick = function(event) {
        let isParentMenu = this.nextElementSibling && this.nextElementSibling.classList.contains('subnav');
        if(isParentMenu) {
            event.preventDefault();
        }
        else {
            header.style.height = null;
        }
    }
}


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


