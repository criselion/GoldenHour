        // Menú móvil
        document.querySelector('.menu-toggle').addEventListener('click', function() {
            document.querySelector('.nav-links').classList.toggle('active');
        });

        // Cerrar menú al hacer clic en un enlace
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', function() {
                document.querySelector('.nav-links').classList.remove('active');
            });
        });

        // Header scroll effect
        window.addEventListener('scroll', function() {
            const header = document.getElementById('header');
            if (window.scrollY > 100) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });

        // Formulario de contacto
        document.getElementById('contactForm').addEventListener('submit', function(e) {
            e.preventDefault();
            alert('¡Gracias por tu interés rebelde! Te contactaremos pronto para coordinar tu sesión.');
            this.reset();
        });

        // Scroll suave
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const targetId = this.getAttribute('href');
                if(targetId === '#') return;
                
                const targetElement = document.querySelector(targetId);
                if(targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 80,
                        behavior: 'smooth'
                    });
                }
            });
        });

        // Efecto de escritura en el hero
        const heroText = "ATARDECERES PUNK VINTAGE";
        let i = 0;
        const typingEffect = () => {
            if (i < heroText.length) {
                document.querySelector('.hero h1').textContent = heroText.substring(0, i+1);
                i++;
                setTimeout(typingEffect, 100);
            }
        };
        
        // Iniciar efecto typing cuando la página cargue
        window.addEventListener('load', typingEffect);
        
        // Efecto de movimiento en stickers
        document.querySelectorAll('.sticker').forEach(sticker => {
            sticker.addEventListener('mouseenter', function() {
                this.style.transform = this.style.transform.replace('deg', '') + ' scale(1.2)';
            });
            
            sticker.addEventListener('mouseleave', function() {
                this.style.transform = this.style.transform.replace(' scale(1.2)', '');
            });
        });