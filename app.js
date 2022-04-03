const sections = document.querySelectorAll('.section');
const sectionBtns = document.querySelectorAll('.controls');
const sectionBtn = document.querySelectorAll('.control');
const allSections = document.querySelector('.main-content');

function PageTransitions(){
    //Button click active class
    for(let i = 0; i < sectionBtn.length; i++){
        sectionBtn[i].addEventListener('click', function(){
            let currentBtn = document.querySelectorAll('.active-btn');
            currentBtn[0].className = currentBtn[0].className.replace(' active-btn', '');
            this.className += ' active-btn';
        });
    }

    //Sections active class
    allSections.addEventListener('click', function(e){
        const id = e.target.dataset.id;
        if(id){
            // remove selected class from all sections
            sectionBtns.forEach((btn) => {
                btn.classList.remove('active');
            })
            // e.target.classList.add('active');

            //hide other sections
            sections.forEach((section) => {
                section.classList.remove('active');
            })

            const element = document.getElementById(id);
            element.classList.add('active');
        }
    });

    // Toggle Theme
    const themeBtn = document.querySelector('.theme-btn');
    themeBtn.addEventListener('click', function(){
        let element = document.body;
        element.classList.toggle('light-mode');
    })
}

PageTransitions();