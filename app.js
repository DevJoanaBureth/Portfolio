/* A propos de moi */

    var tablinks = document.getElementsByClassName("tab-links");
    var tabcontents = document.getElementsByClassName("tab-contents");

    function opentab(tabname){
        for(tablink of tablinks){
            tablink.classList.remove("active-link");
        }
        for(tabcontent of tabcontents){
            tabcontent.classList.remove("active-tab");
        }
        event.currentTarget.classList.add("active-link");
        document.getElementById(tabname).classList.add("active-tab");
    }

    /* Menu mobile */

    var sidemeu = document.getElementById("sidemenu");

    function openmenu(){
        sidemeu.style.right = "0";
    }
    function closemenu(){
        sidemeu.style.right = "-200px";
    }

/* Porfolio */

    function tabsFilters() {
        const tabs = document.querySelectorAll('.projet-filters a');
        const projets = document.querySelectorAll('.realisation .card');

        const resetActiveLinks = () => {
            tabs.forEach(elem => {
            elem.classList.remove('active');
            })
        }

        const showProjets = (elem) => {
            console.log(elem);
            projets.forEach(projet => {
                let filter = projet.getAttribute('data-category');
                if (elem === 'all') {
                    projet.parentNode.classList.remove('hide');
                return
                }
                if (filter !== elem){
                    projet.parentNode.classList.add('hide');
                } else{
                    projet.parentNode.classList.remove('hide');
                }
            });
        }

        tabs.forEach(elem => {
            elem.addEventListener('click', (event) => {
                event.preventDefault();
                let filter = elem.getAttribute('data-filter');
                showProjets(filter)
                resetActiveLinks();
                elem.classList.add('active');
            });
        })
    }

    tabsFilters()

    function showProjectDetails() {
        const links = document.querySelectorAll('.card-link');
        const modals = document.querySelectorAll('.modal');
        const btns = document.querySelectorAll('.modal-close');

        const hideModals = () => {
            modals.forEach(modal => {
            modal.classList.remove('show');
            });
        }

        links.forEach(elem => {
            elem.addEventListener('click', (event) => {
            event.preventDefault();
            document.querySelector(`[id=${elem.dataset.id}]`).classList.add('show');
            });
        });

        btns.forEach(btn => {
            btn.addEventListener('click', (event) => {
            hideModals();
            });
        });

    }

    showProjectDetails();

/* Effets */

    const observerIntersectionAnimation = () => {
    const sections = document.querySelectorAll('section');
    const skills = document.querySelectorAll('.skills .bar');

    sections.forEach((section, index) => {
        if (index === 0) return;
        section.style.opacity = "0";
        section.style.transition = "all 1.6s";
    });

    skills.forEach((elem, index) => {

        elem.style.width = "0";
        elem.style.transition = "all 1.6s";
    });

    let sectionObserver = new IntersectionObserver(function (entries, observer) {
        entries.forEach(entry => {
        if (entry.isIntersecting) {
            let elem = entry.target;
            elem.style.opacity = 1;
        }
        });
    });

    sections.forEach(section => {
        sectionObserver.observe(section);
    });

    let skillsObserver = new IntersectionObserver(function (entries, observer) {
        entries.forEach(entry => {
        if (entry.isIntersecting) {
            let elem = entry.target;
            elem.style.width = elem.dataset.width + '%';
        }
        });
    });

    skills.forEach(skill => {
        skillsObserver.observe(skill);
    });
    }

    observerIntersectionAnimation();