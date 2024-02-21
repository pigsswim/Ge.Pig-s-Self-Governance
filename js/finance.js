window.addEventListener('load',() => {
    document.body.style.backgroundColor = localStorage.bgcolor;
    document.body.style.color = localStorage.elemcolor;
    const head1 = document.getElementById('head1')
    head1.style.color = localStorage.homeTextcolor;
})

function dayTheme() {
    localStorage.setItem('bgcolor','white');
    localStorage.setItem('elemcolor','black');
    localStorage.setItem('wrappercolor', '#f8f8f8');
    localStorage.setItem('homeTextColor','black');
    document.body.style.backgroundColor = localStorage.bgcolor;
    document.body.style.color = localStorage.elemcolor;
    const head1 = document.getElementById('head1')
    head1.style.color = localStorage.homeTextcolor;
}

function nightTheme() {
    localStorage.setItem('bgcolor','black');
    localStorage.setItem('elemcolor', 'white');
    localStorage.setItem('wrappercolor','#0c0c0c');
    localStorage.setItem('homeTextColor','#FBFCF8');
    document.body.style.backgroundColor = localStorage.bgcolor;
    document.body.style.color = localStorage.elemcolor;
    const head1 = document.getElementById('head1')
    head1.style.color = localStorage.homeTextcolor;
}

