let know = $('#About').offset().top;


$(window).scroll(function () { 
    let wscroll = $(window).scrollTop();
    console.log(wscroll,know);
    if (wscroll >= know) {
        // $('nav').css('backgroundColor','black');
        $('#btn').fadeIn(500);
    }
    else
    {
        // $('nav').css('backgroundColor','transparent');
        $('#btn').fadeOut(500);
    }
   
});


$('#btn').on('click', function () {

     $('html,body').animate({scrollTop:'0px'},5)
});


$('nav a[href^="#"]').click(function(e)
{
   let link = $(e.targrt).attr('href');
   let off=$(link).offset().top;
   $('html , body').animate({scrollTop:off+'px'})

})

$(document).ready(function () {
    $('#loading .spinner').fadeOut(1000 , ()=>{
        $('#loading').fadeOut(1000 , ()=>{
            $('body').css('overflow-y','auto')
        })
    });
});




let menu = document.querySelector('.menu')
let navItem = document.getElementsByClassName('navLink')
let bars = document.querySelector('.open-menu')
let times = document.querySelector('.close-menu')


bars.addEventListener('click',()=> {
    menu.style.right = '0'
})

times.addEventListener('click',()=> {
    menu.style.right = '-100%'
})

for (let i = 0; i < navItem.length; i++) {
    
    navItem[i].addEventListener('click',()=> {
        menu.style.right = '-100%'
    })
}







