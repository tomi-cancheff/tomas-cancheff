        // Init
        setTimeout(() => { document.getElementById('loading-bar').style.width = '100%'; }, 100);
        setTimeout(() => { document.getElementById('start-btn').style.display = 'block'; }, 1200);
        document.getElementById('start-btn').addEventListener('click', () => {
            document.getElementById('loader').style.opacity = '0';
            setTimeout(() => { document.getElementById('loader').style.display = 'none'; }, 500);
            initGrid();
        });

        // Scroll Controls Script
        function scrollSideQuests(direction) {
            const container = document.getElementById('sq-container');
            const scrollAmount = 400; 
            container.scrollBy({ left: direction * scrollAmount, behavior: 'smooth' });
        }
        window.scrollSideQuests = scrollSideQuests;

        // Scroll HP
        function updateScrollHp() {
            const st = window.scrollY;
            const dh = document.documentElement.scrollHeight - window.innerHeight;
            const sp = 100 - ((st / Math.max(dh, 1)) * 100);
            const rem = Math.max(0, Math.min(100, Math.round(sp)));
            const bar = document.getElementById('scroll-hp');
            bar.style.width = `${rem}%`;
            document.getElementById('hp-text').innerText = `${rem}/100`;
            if(rem < 30) bar.className = "h-full bg-red-600 w-full transition-all duration-100 animate-pulse";
            else if (rem < 60) bar.className = "h-full bg-yellow-500 w-full transition-all duration-100";
            else bar.className = "h-full bg-gradient-to-r from-red-500 via-yellow-500 to-green-500 w-full transition-all duration-100";
        }

        let scrollTicking = false;
        window.addEventListener('scroll', () => {
            if (scrollTicking) return;
            scrollTicking = true;
            requestAnimationFrame(() => {
                updateScrollHp();
                scrollTicking = false;
            });
        }, { passive: true });
        updateScrollHp();

        // Translations
        const translations = {
            es: {
                nav_stats: "STATS", nav_exp: "EXP", nav_inv: "TABLERO", nav_side: "SIDE QUESTS", nav_skills: "SKILLS", nav_edu: "ACADEMIC",
                hero_status: "SISTEMA LISTO", 
                hero_role: "GAME DESIGNER & DEVELOPER",
                hero_desc: "Aquí comienza tu misión. ¿Estás listo?",
                btn_start: "INICIAR MISIÓN", 
                stats_title: "CHARACTER STATS",
                bio_title: "Tomas Cancheff | Game Designer & Developer",
                bio_text: "Game Designer y Developer con más de dos años de experiencia profesional, especializado en diseño de sistemas y prototipado de mecánicas tanto en Unity (C#) como en Unreal Engine (Blueprints). Actualmente enfocado en el sector de Serious games y gamificación de procesos o capacitaciones corporativas.",
                skill_prog: "SCRIPTING TÉCNICO", 
                skill_theory: "DISEÑO DE JUEGOS Y SISTEMAS", 
                skill_ld: "DISEÑO DE NIVELES", 
                skill_proto: "PROTOTIPADO RÁPIDO",
                exp_title: "EXPERIENCE POINTS", 
                exp1_role: "GAME DESIGNER | <a href='https://tgacompany.com/' target='_blank' rel='noopener noreferrer' class='text-neon-blue hover:underline'>TGA Company</a>", 
                exp1_date: "Noviembre 2023 – Actualidad",
                exp1_p1: "Lidero el game design de tres títulos B2B EdTech para clientes de LATAM y EE.UU.",
                exp1_p2: "Impulso flujos de trabajo asistidos por IA para prototipado rápido, reduciendo tiempos de producción aproximadamente un 20-30%.",
                exp1_p3: "Diseño sistemas de juego escalables junto con su documentación (GDDs, Briefs, Spec Docs).",
                exp1_p4: "Colaboro estrechamente con los equipos de narrativa, desarrollo, arte, comercial e instruccional.",
                sq_title: "SIDE QUESTS",
                sq1_desc: "Juego arcade de combate 3D con multijugador local y soporte multiplataforma.",
                sq_kyle_desc: "Prototipado de una escena tipo \"selector de personaje\" en Unity 6.0 utilizando la ayuda del asistente de Unity AI integrado en el editor. Las animaciones, sonidos, música y background así como texturas fueron creadas e iteradas con el agente.",
                sq_essentials_desc: "Proyecto basado en el trayecto de Unity Essentials, con múltiples escenas demo y una breve jugable, mostrando competencias básicas del editor, C#, diseño de niveles y diseño de juego.",
                sq_numbra_desc: "Aventura de acción Cyberpunk con puzzles y exploración. Foco en el diseño de niveles y estructuración del Game Design.",
                sq2_date: "UE4 (Blueprints) | Ago 2023",
                sq2_desc: "Título de terror 3D, integración de Blueprints para IA enemiga.",
                sq3_date: "Unity (C#) | Sep 2021",
                sq3_desc: "Arcade de minigolf basado en físicas y diseño de niveles.",
                skill_tree_title: "SKILL TREE", st_engines: "MOTORES & CÓDIGO", 
                st_gd_1: "• Sistemas de Juego", st_gd_2: "• Diseño de Niveles", st_gd_3: "• Balanceo de Mecánicas", st_gd_4: "• Documentación (GDD, Feature Briefs, Spec Docs, High Concepts)", st_gd_5: "• QA & Playtesting",
                st_ai: "IA Y PROTOTIPADO", st_ai_desc: "Uso de agentes para aceleración de procesos de prototipado como creación de código o asistencia en el armado de documentación.", st_tools: "HERRAMIENTAS", st_lang: "IDIOMAS", 
                lang_en: "Inglés", lang_es: "Español (Nativo)",
                edu_title: "REGISTRO ACADÉMICO", edu_degree: "Técnico Universitario en Desarrollo de Software y Videojuegos", edu_focus: "Enfoque: Game Design técnico, C# y Diseño de Juegos en Unity/Unreal.", edu_date: "<i class='fa-solid fa-calendar'></i> Ago 2019 – Dic 2023", btn_show: "VER TÍTULO",
                contact_title: "TABLERO DE MISIONES", label_name: "NOMBRE JUGADOR", label_msg: "DESCRIPCIÓN QUEST", btn_send: "ENVIAR MENSAJE",
                lvl: "LVL. 28", hp_scroll: "HP (SCROLL)", nav_inv: "TABLERO"
            },
            en: {
                nav_stats: "STATS", nav_exp: "EXP", nav_inv: "QUEST BOARD", nav_side: "SIDE QUESTS", nav_skills: "SKILLS", nav_edu: "ACADEMIC",
                hero_status: "SYSTEM READY", 
                hero_role: "GAME DESIGNER & DEVELOPER",
                hero_desc: "Here starts your mission. Are you ready?",
                btn_start: "START MISSION", 
                stats_title: "CHARACTER STATS",
                bio_title: "Tomas Cancheff | Game Designer & Developer",
                bio_text: "Game Designer and Developer with over two years of professional experience, specialized in system design and mechanics prototyping in both Unity (C#) and Unreal Engine (Blueprints). Currently focused on the Serious Games sector and gamification of corporate processes or training.",
                skill_prog: "TECHNICAL SCRIPTING", 
                skill_theory: "GAME DESIGN & SYSTEMS", 
                skill_ld: "LEVEL DESIGN", 
                skill_proto: "RAPID PROTOTYPING",
                exp_title: "EXPERIENCE POINTS", 
                exp1_role: "GAME DESIGNER | <a href='https://tgacompany.com/' target='_blank' rel='noopener noreferrer' class='text-neon-blue hover:underline'>TGA Company</a>", 
                exp1_date: "November 2023 – Present",
                exp1_p1: "Leading game design for three B2B EdTech titles for LATAM and US clients.",
                exp1_p2: "Driving AI-assisted workflows for rapid prototyping, reducing production times by approximately 20-30%.",
                exp1_p3: "Designing scalable game systems along with documentation (GDDs, Briefs, Spec Docs).",
                exp1_p4: "Collaborating closely with narrative, development, art, commercial, and instructional teams.",
                sq_title: "SIDE QUESTS",
                sq1_desc: "3D arcade combat game with local multiplayer and cross-platform support.",
                sq_kyle_desc: "Prototyping of a 'character selector' scene in Unity 6.0 using the integrated Unity AI assistant. Animations, sounds, music, backgrounds, and textures were created and iterated with the agent.",
                sq_essentials_desc: "Project based on the Unity Essentials pathway, featuring multiple demo scenes and a short playable one, showcasing basic skills in the Editor, C#, Level Design, and Game Design.",
                sq_numbra_desc: "Cyberpunk action-adventure featuring puzzles and exploration. Development focused on level design and Game Design structuring.",
                sq2_date: "UE4 (Blueprints) | Aug 2023",
                sq2_desc: "3D horror title, integrating Blueprints for AI enemy behavior.",
                sq3_date: "Unity (C#) | Sep 2021",
                sq3_desc: "Physics-based minigolf arcade game and level design.",
                skill_tree_title: "SKILL TREE", st_engines: "ENGINES & CODE", 
                st_gd_1: "• Game Systems", st_gd_2: "• Level Design", st_gd_3: "• Mechanics Balancing", st_gd_4: "• Documentation (GDD, Feature Briefs, Spec Docs, High Concepts)", st_gd_5: "• QA & Playtesting",
                st_ai: "AI & PROTOTYPING", st_ai_desc: "Using agents to accelerate prototyping processes such as code creation or documentation assistance.", st_tools: "TOOLS", st_lang: "LANGUAGES", 
                lang_en: "English", lang_es: "Spanish (Native)",
                edu_title: "ACADEMIC LOG", edu_degree: "Associate's Degree in Software & Game Development", edu_focus: "Focus: Technical Game Design, C# and Game Design in Unity/Unreal.", edu_date: "<i class='fa-solid fa-calendar'></i> Aug 2019 – Dec 2023", btn_show: "SHOW DEGREE",
                contact_title: "QUEST BOARD", label_name: "PLAYER NAME", label_msg: "QUEST DESCRIPTION", btn_send: "SEND MESSAGE",
                lvl: "LVL. 28", hp_scroll: "HP (SCROLL)", nav_inv: "QUEST BOARD"
            }
        };

        let currentLang = 'es';
        const langBtn = document.getElementById('lang-btn');
        const htmlTranslationKeys = new Set(['exp1_role', 'edu_date']);
        langBtn.addEventListener('click', () => {
            currentLang = currentLang === 'es' ? 'en' : 'es';
            langBtn.innerText = currentLang.toUpperCase();
            document.querySelectorAll('[data-translate]').forEach(el => {
                const key = el.getAttribute('data-translate');
                const translatedValue = translations[currentLang][key];
                if (!translatedValue) return;
                if (htmlTranslationKeys.has(key)) el.innerHTML = translatedValue;
                else el.textContent = translatedValue;
            });
        });

        // Contact
        document.getElementById('send-msg-btn').addEventListener('click', () => {
            const name = document.getElementById('contact-name').value;
            const message = document.getElementById('contact-message').value;
            if(!name || !message) { alert('Please fill out all fields!'); return; }
            window.location.href = `mailto:tomicancheff@gmail.com?subject=${encodeURIComponent(`New Quest from ${name}`)}&body=${encodeURIComponent(`Player Name: ${name}\n\nQuest Description:\n${message}`)}`;
        });

        // Grid
        function initGrid() {
            const canvas = document.getElementById('bg-grid'), ctx = canvas.getContext('2d');
            let w = canvas.width = window.innerWidth, h = canvas.height = window.innerHeight;
            let mx = w/2, my = h/2;
            let animationFrameId = null;
            let isGridVisible = true;
            document.addEventListener('mousemove', e => { mx = e.clientX; my = e.clientY; });
            window.addEventListener('resize', () => { w = canvas.width = window.innerWidth; h = canvas.height = window.innerHeight; });
            
            const gs = 40;
            function draw() {
                if (!isGridVisible) return;

                ctx.fillStyle = '#050510';
                ctx.fillRect(0,0,w,h);
                const base = 'rgba(0,243,255,0.15)';
                const active = '#00f3ff';
                const myMove = (Date.now()*0.05)%gs;

                ctx.lineWidth = 1;
                for(let i=0; i<w; i+=gs) {
                    let d = Math.abs(i-mx), s = Math.max(0,50-d)*0.5, x = i<mx ? i-s : i+s;
                    ctx.strokeStyle = base; ctx.beginPath(); ctx.moveTo(x,0); ctx.lineTo(x,h); ctx.stroke();
                }
                for(let j=-gs; j<h; j+=gs) {
                    let y = j+myMove, d = Math.abs(y-my), s = Math.max(0,50-d)*0.5, yp = y<my ? y-s : y+s;
                    ctx.strokeStyle = Math.abs(yp-my)<100 ? active : base;
                    ctx.beginPath(); ctx.moveTo(0,yp); ctx.lineTo(w,yp); ctx.stroke();
                }
                
                ctx.strokeStyle = active; ctx.lineWidth = 2; ctx.strokeRect(mx-10,my-10,20,20);
                
                animationFrameId = requestAnimationFrame(draw);
            }

            document.addEventListener('visibilitychange', () => {
                isGridVisible = !document.hidden;
                if (isGridVisible && animationFrameId === null) {
                    draw();
                }
                if (!isGridVisible && animationFrameId !== null) {
                    cancelAnimationFrame(animationFrameId);
                    animationFrameId = null;
                }
            });

            draw();
        }
        
        // Konami
        const k = ['ArrowUp','ArrowUp','ArrowDown','ArrowDown','ArrowLeft','ArrowRight','ArrowLeft','ArrowRight','b','a'];
        let ki = 0;
        document.addEventListener('keydown', e => {
            const pressedKey = e.key.length === 1 ? e.key.toLowerCase() : e.key;
            if (pressedKey === k[ki]) {
                ki++;
                if (ki === k.length) {
                    alert('★ GOD MODE ACTIVATED ★');
                    document.body.style.filter = "hue-rotate(90deg) contrast(1.2)";
                    ki = 0;
                }
            } else {
                ki = 0;
            }
        });
    
