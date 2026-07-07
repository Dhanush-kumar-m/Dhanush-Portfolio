/* =====================================================
   DHANUSH KUMAR M - PREMIUM PORTFOLIO INTERACTIVITY JS
===================================================== */

document.addEventListener("DOMContentLoaded", () => {
    initTypewriter();
    initThemeManager();
    initChatbot();
    initMobileNav();
    initCustomCursor();
    initMouseGlow();
    initParticleBackground();
    initScrollReveal();
    initSmoothScroll();
});

/* =====================================================
   TYPEWRITER EFFECT
===================================================== */
function initTypewriter() {
    const roles = [
        "Software Engineer",
        "Full Stack Developer",
        "AI Enthusiast",
        "Computer Science Engineer"
    ];
    
    let roleIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    const typingElement = document.getElementById("typing");
    
    if (!typingElement) return;
    
    function type() {
        const currentRole = roles[roleIndex];
        
        if (isDeleting) {
            typingElement.textContent = currentRole.substring(0, charIndex - 1);
            charIndex--;
        } else {
            typingElement.textContent = currentRole.substring(0, charIndex + 1);
            charIndex++;
        }
        
        let typeSpeed = isDeleting ? 30 : 60;
        
        if (!isDeleting && charIndex === currentRole.length) {
            // Wait at full word
            typeSpeed = 2000;
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            roleIndex = (roleIndex + 1) % roles.length;
            // Short pause before next word
            typeSpeed = 400;
        }
        
        setTimeout(type, typeSpeed);
    }
    
    type();
}

/* =====================================================
   THEME MANAGEMENT
===================================================== */
function initThemeManager() {
    const themeBtn = document.getElementById("themeBtn");
    if (!themeBtn) return;
    
    const savedTheme = localStorage.getItem("theme");
    
    // Default to dark mode unless light mode is explicitly saved
    if (savedTheme === "light") {
        document.body.classList.remove("dark");
        themeBtn.innerHTML = "🌙";
    } else {
        document.body.classList.add("dark");
        themeBtn.innerHTML = "☀️";
    }
    
    themeBtn.addEventListener("click", () => {
        document.body.classList.toggle("dark");
        
        if (document.body.classList.contains("dark")) {
            localStorage.setItem("theme", "dark");
            themeBtn.innerHTML = "☀️";
        } else {
            localStorage.setItem("theme", "light");
            themeBtn.innerHTML = "🌙";
        }
    });
}

/* =====================================================
   MOBILE NAVIGATION MENU
===================================================== */
function initMobileNav() {
    const hamburgerBtn = document.getElementById("hamburgerBtn");
    const navLinks = document.getElementById("navLinks");
    
    if (!hamburgerBtn || !navLinks) return;
    
    hamburgerBtn.addEventListener("click", () => {
        hamburgerBtn.classList.toggle("active");
        navLinks.classList.toggle("active");
    });
    
    // Close menu when clicking navigation links
    document.querySelectorAll(".nav-link").forEach(link => {
        link.addEventListener("click", () => {
            hamburgerBtn.classList.remove("active");
            navLinks.classList.remove("active");
        });
    });

    // Active link highlighting based on scroll position
    const sections = document.querySelectorAll("section[id]");
    window.addEventListener("scroll", () => {
        let scrollY = window.pageYOffset;
        sections.forEach(current => {
            const sectionHeight = current.offsetHeight;
            const sectionTop = current.offsetTop - 120;
            const sectionId = current.getAttribute("id");
            
            const navLink = document.querySelector(`.nav-links a[href*=${sectionId}]`);
            if (navLink) {
                if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                    navLink.classList.add("active");
                } else {
                    navLink.classList.remove("active");
                }
            }
        });
    });
}

/* =====================================================
   CUSTOM CURSOR
===================================================== */
function initCustomCursor() {
    const cursorDot = document.querySelector("[data-cursor]");
    const cursorOutline = document.querySelector("[data-cursor-outline]");
    
    if (!cursorDot || !cursorOutline) return;
    
    // Only activate cursor if the device supports hover (desktop)
    if (window.matchMedia("(hover: hover)").matches) {
        document.body.classList.add("custom-cursor-active");
        
        let mouseX = 0;
        let mouseY = 0;
        let outlineX = 0;
        let outlineY = 0;
        
        window.addEventListener("mousemove", (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
            
            // Dot moves instantly
            cursorDot.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0) translate(-50%, -50%)`;
        });
        
        // Elastic outline lag animation
        const animateOutline = () => {
            const distX = mouseX - outlineX;
            const distY = mouseY - outlineY;
            
            outlineX += distX * 0.15;
            outlineY += distY * 0.15;
            
            cursorOutline.style.transform = `translate3d(${outlineX}px, ${outlineY}px, 0) translate(-50%, -50%)`;
            
            requestAnimationFrame(animateOutline);
        };
        
        animateOutline();
        
        // Event delegation for cursor hover scaling effects
        document.addEventListener("mouseover", (e) => {
            if (e.target.closest("a, button, .card, .project-card, .cert-card, .skill-card, .timeline-content, .chip, #themeBtn")) {
                document.body.classList.add("cursor-hover");
            }
        });
        
        document.addEventListener("mouseout", (e) => {
            if (!e.target.closest("a, button, .card, .project-card, .cert-card, .skill-card, .timeline-content, .chip, #themeBtn")) {
                document.body.classList.remove("cursor-hover");
            }
        });
    }
}

/* =====================================================
   MOUSE SPOTLIGHT GLOW BACKGROUND
===================================================== */
function initMouseGlow() {
    const mouseGlow = document.getElementById("mouseGlow");
    if (!mouseGlow) return;
    
    // Only bind glow on devices with pointer hover capability
    if (window.matchMedia("(hover: hover)").matches) {
        window.addEventListener("mousemove", (e) => {
            mouseGlow.style.setProperty("--mouse-x", `${e.clientX}px`);
            mouseGlow.style.setProperty("--mouse-y", `${e.clientY}px`);
        });
    }
}

/* =====================================================
   9-PHASE CYCLIC SPACE-TO-EARTH STORY ANIMATION (8K 3D ENGINE)
===================================================== */
function initParticleBackground() {
    const canvas = document.getElementById("particleCanvas");
    if (!canvas) return;
    
    const ctx = canvas.getContext("2d");
    
    let elapsedSeconds = 0;
    let centerX = canvas.width / 2;
    let centerY = canvas.height / 2;
    
    // 3D Camera Configuration
    let camX = 0, camY = 0, camZ = 0;
    let camYaw = 0, camPitch = 0;
    let aspectScale = 1.0;
    
    // High-density assets
    let galaxyStars = [];
    let bhParticles = [];
    let bgStars = [];
    let solarGranules = [];
    let solarWind = [];
    let earthClouds = [];
    let fireflies = [];
    let fallingLeaves = [];
    let scanlineY = -120;
    
    let mouse = { x: null, y: null };

    // Geographically precise India coordinates (centered relative to 0,0)
    const indiaPath = [
        { x: 0, y: -100, z: 0 },     // North Kashmir
        { x: 15, y: -95, z: 0 },     // Ladakh / Karakoram
        { x: 25, y: -80, z: 0 },     // Himachal Pradesh
        { x: 38, y: -72, z: 0 },     // Uttarakhand
        { x: 50, y: -75, z: 0 },     // Nepal Border corner
        { x: 62, y: -68, z: 0 },     // Sikkim
        { x: 74, y: -74, z: 0 },     // Bhutan Border
        { x: 95, y: -78, z: 0 },     // Arunachal Pradesh
        { x: 98, y: -65, z: 0 },     // Nagaland
        { x: 90, y: -50, z: 0 },     // Manipur
        { x: 92, y: -40, z: 0 },     // Mizoram
        { x: 78, y: -45, z: 0 },     // Tripura
        { x: 72, y: -58, z: 0 },     // Meghalaya
        { x: 62, y: -40, z: 0 },     // Bengal border
        { x: 65, y: -30, z: 0 },     // Bangladesh crescent loop
        { x: 52, y: -15, z: 0 },     // Odisha coast
        { x: 45, y: 15, z: 0 },      // Andhra coast
        { x: 28, y: 55, z: 0 },      // Chennai / TN north
        { x: 18, y: 80, z: 0 },      // Tamil Nadu east coast
        { x: 10, y: 95, z: 0 },      // Kanyakumari (Southern Tip)
        { x: 2, y: 80, z: 0 },       // Kerala coast
        { x: -5, y: 60, z: 0 },      // Karnataka coast
        { x: -18, y: 25, z: 0 },     // Mumbai / Maharashtra coast
        { x: -22, y: 10, z: 0 },     // Surat / Gujarat bay recess
        { x: -48, y: 15, z: 0 },     // Kathiawar Peninsula (Gujarat bulge snout)
        { x: -55, y: -2, z: 0 },     // Gulf of Kutch
        { x: -46, y: -15, z: 0 },    // Pakistan border
        { x: -38, y: -42, z: 0 },    // Rajasthan border
        { x: -24, y: -75, z: 0 },    // Punjab border
        { x: -12, y: -92, z: 0 }     // Jammu border
    ];

    // Easing helper functions
    function easeInOutCubic(x) {
        return x < 0.5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2;
    }
    
    // Core 3D Camera Projection matrix
    function project3D(x, y, z) {
        // 1. Rotate around Y-axis (Yaw)
        let cosY = Math.cos(camYaw);
        let sinY = Math.sin(camYaw);
        let x1 = x * cosY - z * sinY;
        let z1 = x * sinY + z * cosY;

        // 2. Rotate around X-axis (Pitch)
        let cosX = Math.cos(camPitch);
        let sinX = Math.sin(camPitch);
        let y2 = y * cosX - z1 * sinX;
        let z2 = y * sinX + z1 * cosX;

        // 3. Translate relative to camera coordinates
        let rx = x1 - camX;
        let ry = y2 - camY;
        let rz = z2 - camZ;

        const fov = 350;
        let rzFinal = rz + fov;
        let scale = (fov * aspectScale) / Math.max(1, rzFinal);
        
        return {
            x: centerX + rx * scale,
            y: centerY + ry * scale,
            projSize: size => size * scale,
            rz: rzFinal,
            visible: rzFinal > 10
        };
    }

    // Initialize elements
    function initSpaceElements() {
        // Deep space stars
        bgStars = [];
        for (let i = 0; i < 250; i++) {
            bgStars.push({
                x: (Math.random() - 0.5) * 1600,
                y: (Math.random() - 0.5) * 1200,
                z: (Math.random() - 0.5) * 1200,
                size: Math.random() * 1.8 + 0.4,
                opacity: Math.random() * 0.95 + 0.05,
                phase: Math.random() * Math.PI * 2
            });
        }
        
        // Milky Way Spiral arm stars
        galaxyStars = [];
        const armCount = 3;
        for (let i = 0; i < 600; i++) {
            let armIdx = i % armCount;
            let distance = Math.pow(Math.random(), 1.5) * 180 + 5;
            let angle = (distance * 0.018) + (armIdx * (Math.PI * 2 / armCount)) + (Math.random() * 0.3 - 0.15);
            galaxyStars.push({
                r: distance,
                angle: angle,
                speed: Math.random() * 0.2 + 0.8,
                size: Math.random() * 1.8 + 0.3,
                y: (Math.random() - 0.5) * 20,
                color: ["#6366f1", "#06b6d4", "#a78bfa", "#ffffff", "#bae6fd"][Math.floor(Math.random() * 5)]
            });
        }
        
        // Gargantua Accretion Disk Particles
        bhParticles = [];
        for (let i = 0; i < 300; i++) {
            bhParticles.push({
                r: Math.random() * 125 + 32,
                angle: Math.random() * Math.PI * 2,
                speed: Math.random() * 0.028 + 0.01,
                size: Math.random() * 2.2 + 0.4
            });
        }

        // Solar photospere granules
        solarGranules = [];
        for (let i = 0; i < 55; i++) {
            let angle = Math.random() * Math.PI * 2;
            let dist = Math.random() * 21;
            solarGranules.push({
                x: Math.cos(angle) * dist,
                y: Math.sin(angle) * dist,
                size: Math.random() * 3.8 + 1.8,
                opacity: Math.random(),
                speed: Math.random() * 0.07 + 0.025
            });
        }

        // Solar Wind particles
        solarWind = [];
        for (let i = 0; i < 30; i++) {
            solarWind.push({
                angle: Math.random() * Math.PI * 2,
                r: Math.random() * 22 + 25,
                speed: Math.random() * 1.5 + 0.8,
                size: Math.random() * 1.8 + 0.5,
                opacity: Math.random() * 0.8 + 0.2
            });
        }

        // Volumetric clouds
        earthClouds = [];
        for (let i = 0; i < 20; i++) {
            earthClouds.push({
                x: (Math.random() - 0.5) * 280,
                y: (Math.random() - 0.5) * 280,
                rX: Math.random() * 40 + 20,
                rY: Math.random() * 12 + 4,
                angle: Math.random() * 0.28 - 0.14,
                speed: Math.random() * 0.04 + 0.02
            });
        }

        // Fireflies in the garden
        fireflies = [];
        for (let i = 0; i < 15; i++) {
            fireflies.push({
                x: Math.random() * 200 - 40,
                y: Math.random() * 60 + 20,
                vx: (Math.random() - 0.5) * 0.6,
                vy: (Math.random() - 0.5) * 0.4,
                size: Math.random() * 2.0 + 1.0,
                glow: Math.random() * Math.PI
            });
        }

        // Falling leaves
        fallingLeaves = [];
        for (let i = 0; i < 6; i++) {
            fallingLeaves.push({
                x: Math.random() * 60 - 220,
                y: Math.random() * 50 - 20,
                speedY: Math.random() * 0.4 + 0.2,
                speedX: (Math.random() - 0.5) * 0.3,
                angle: Math.random() * Math.PI,
                rotSpeed: Math.random() * 0.04 - 0.02
            });
        }
    }

    function resize() {
        const dpr = window.devicePixelRatio || 1;
        canvas.width = window.innerWidth * dpr;
        canvas.height = window.innerHeight * dpr;
        canvas.style.width = window.innerWidth + "px";
        canvas.style.height = window.innerHeight + "px";
        ctx.scale(dpr, dpr);
        
        centerX = window.innerWidth / 2;
        // Push centerY down on mobile screens to prevent hero text overlapping celestial projections
        centerY = window.innerWidth < 768 ? (window.innerHeight * 0.62) : (window.innerHeight * 0.5);
        aspectScale = window.innerWidth < 768 ? 0.62 : 1.0;
        initSpaceElements();
    }

    window.addEventListener("resize", resize);
    
    window.addEventListener("mousemove", (e) => {
        mouse.x = e.clientX;
        mouse.y = e.clientY;
    });

    window.addEventListener("mouseleave", () => {
        mouse.x = null;
        mouse.y = null;
    });

    window.addEventListener("touchmove", (e) => {
        if (e.touches.length > 0) {
            mouse.x = e.touches[0].clientX;
            mouse.y = e.touches[0].clientY;
        }
    }, { passive: true });

    window.addEventListener("touchend", () => {
        mouse.x = null;
        mouse.y = null;
    });

    function getPhaseAlpha(t, start, end, fadeDuration = 1.0) {
        if (t < start || t > end) return 0;
        if (t < start + fadeDuration) {
            return (t - start) / fadeDuration;
        }
        if (t > end - fadeDuration) {
            return (end - t) / fadeDuration;
        }
        return 1;
    }

    // RENDER SYSTEM (PAINTER'S ALGORITHM DEPTH-SORTING QUEUE)
    let renderQueue = [];
    
    function drawBGStars3D(alpha, warpCenter = null) {
        bgStars.forEach(s => {
            let pt = project3D(s.x, s.y, s.z);
            if (!pt.visible) return;
            
            renderQueue.push({
                rz: pt.rz,
                draw: () => {
                    let tw = s.opacity * (0.75 + 0.25 * Math.sin(elapsedSeconds * 4.0 + s.phase));
                    let sx = pt.x;
                    let sy = pt.y;
                    
                    if (warpCenter) {
                        let dx = pt.x - warpCenter.x;
                        let dy = pt.y - warpCenter.y;
                        let dist = Math.sqrt(dx*dx + dy*dy);
                        if (dist < 320) {
                            let warpFactor = 1.0 + (3500 / (dist * dist + 150));
                            sx = warpCenter.x + dx * warpFactor;
                            sy = warpCenter.y + dy * warpFactor;
                        }
                    }
                    
                    ctx.save();
                    ctx.globalAlpha = alpha;
                    ctx.fillStyle = `rgba(255, 255, 255, ${tw})`;
                    ctx.beginPath();
                    ctx.arc(sx, sy, pt.projSize(s.size), 0, Math.PI * 2);
                    ctx.fill();
                    ctx.restore();
                }
            });
        });
    }

    // MAIN ANIMATION LOOP WITH INERTIAL 3D CAMERA PROJECTOR
    function animate() {
        ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
        renderQueue = []; // Reset queue
        
        elapsedSeconds += 1 / 60;
        
        const totalDuration = 90;
        let t = elapsedSeconds % totalDuration;
        let progress = (t % 10) / 10.0;
        let ep = easeInOutCubic(progress);
        
        // --- 3D CAMERA STAGE CONTROLLERS ---
        if (t >= 0 && t < 10) { // Phase 1: Galaxy Flyby
            camX = 0; camY = 0; camZ = 600 - ep * 550;
            camYaw = 0.5 + ep * 0.7; camPitch = 0.6;
            
            let alpha = getPhaseAlpha(t, 0, 10);
            drawBGStars3D(alpha);
            
            //Swirling galaxy particles in 3D
            let currentAngle = elapsedSeconds * 0.24;
            galaxyStars.forEach(s => {
                let a = s.angle + currentAngle * s.speed;
                let gx = Math.cos(a) * s.r;
                let gz = Math.sin(a) * s.r;
                let gy = s.y;
                
                let pt = project3D(gx, gy, gz);
                if (pt.visible) {
                    renderQueue.push({
                        rz: pt.rz,
                        draw: () => {
                            ctx.save();
                            ctx.globalAlpha = alpha;
                            ctx.fillStyle = s.color;
                            ctx.beginPath();
                            ctx.arc(pt.x, pt.y, pt.projSize(s.size), 0, Math.PI * 2);
                            ctx.fill();
                            ctx.restore();
                        }
                    });
                }
            });

            // Milky Way Galaxy HUD Name Pointer
            let gCenter = project3D(0, 0, 0);
            if (gCenter.visible) {
                renderQueue.push({
                    rz: gCenter.rz - 10,
                    draw: () => {
                        ctx.save();
                        ctx.globalAlpha = alpha;
                        // Leader Line
                        ctx.strokeStyle = "rgba(255, 255, 255, 0.4)";
                        ctx.lineWidth = 0.8;
                        ctx.beginPath();
                        ctx.moveTo(gCenter.x, gCenter.y);
                        ctx.lineTo(gCenter.x + 50, gCenter.y - 50);
                        ctx.lineTo(gCenter.x + 160, gCenter.y - 50);
                        ctx.stroke();
                        
                        // Text label
                        ctx.fillStyle = "#ffffff";
                        ctx.font = "bold 11px 'Inter', sans-serif";
                        ctx.textAlign = "left";
                        ctx.fillText("Milky Way Galaxy 🌌", gCenter.x + 55, gCenter.y - 56);
                        ctx.restore();
                    }
                });
            }
        }
        
        else if (t >= 10 && t < 20) { // Phase 2: Gargantua Black Hole 3D orbit
            camX = 0; camY = 0; camZ = 150 - ep * 75;
            camYaw = -0.4 + ep * 0.8; camPitch = 0.3 + ep * 0.3;
            
            let alpha = getPhaseAlpha(t, 10, 20);
            drawBGStars3D(alpha, { x: centerX, y: centerY });
            
            // Event horizon center projection
            let bhCenter = project3D(0, 0, 0);
            
            if (bhCenter.visible) {
                // Swirling accretion disk particles depth-sorted
                bhParticles.forEach(p => {
                    p.angle += p.speed;
                    let px = Math.cos(p.angle) * p.r;
                    let pz = Math.sin(p.angle) * p.r;
                    let py = (Math.random() - 0.5) * 4;
                    
                    let pt = project3D(px, py, pz);
                    if (pt.visible) {
                        renderQueue.push({
                            rz: pt.rz,
                            draw: () => {
                                ctx.save();
                                ctx.globalAlpha = alpha;
                                // Doppler beaming shift color (left is brighter hot-white, right is dim red)
                                ctx.fillStyle = px < 0 ? "#ffffff" : "rgba(239, 68, 68, 0.75)";
                                ctx.beginPath();
                                ctx.arc(pt.x, pt.y, pt.projSize(p.size), 0, Math.PI * 2);
                                ctx.fill();
                                ctx.restore();
                            }
                        });
                    }
                });

                // INTERSTELLAR-STYLE DUAL ACCRETION DISK GAS PLANES
                for (let rDisk = 45; rDisk <= 135; rDisk += 15) {
                    // Back-side warped lensed rings (drawn behind horizon shadow)
                    renderQueue.push({
                        rz: bhCenter.rz + 2,
                        draw: () => {
                            ctx.save();
                            ctx.globalAlpha = alpha;
                            let rRad = bhCenter.projSize(rDisk);
                            
                            // Doppler Beaming Gradient (left is approaching white-hot, right is receding red)
                            let diskGrad = ctx.createLinearGradient(bhCenter.x - rRad, bhCenter.y, bhCenter.x + rRad, bhCenter.y);
                            diskGrad.addColorStop(0, "rgba(255, 255, 255, 0.85)"); // hot white
                            diskGrad.addColorStop(0.3, "rgba(253, 224, 71, 0.7)"); // yellow
                            diskGrad.addColorStop(0.7, "rgba(249, 115, 22, 0.5)");  // orange
                            diskGrad.addColorStop(1.0, "rgba(239, 68, 68, 0.12)"); // dim red
                            
                            ctx.strokeStyle = diskGrad;
                            ctx.lineWidth = bhCenter.projSize(3.8);
                            
                            // Top Einstein lensing arc
                            ctx.beginPath();
                            ctx.ellipse(bhCenter.x, bhCenter.y, rRad, rRad * 0.78, 0.05, Math.PI, 0); 
                            ctx.stroke();
                            
                            // Bottom Einstein lensing arc
                            ctx.beginPath();
                            ctx.ellipse(bhCenter.x, bhCenter.y, rRad, rRad * 0.78, 0.05, 0, Math.PI); 
                            ctx.stroke();
                            ctx.restore();
                        }
                    });
                    
                    // Front-side equatorial crossing disk plane (drawn in front of horizon shadow)
                    renderQueue.push({
                        rz: bhCenter.rz - 2,
                        draw: () => {
                            ctx.save();
                            ctx.globalAlpha = alpha;
                            let rRad = bhCenter.projSize(rDisk);
                            
                            let diskGrad = ctx.createLinearGradient(bhCenter.x - rRad, bhCenter.y, bhCenter.x + rRad, bhCenter.y);
                            diskGrad.addColorStop(0, "rgba(255, 255, 255, 0.85)"); // hot white
                            diskGrad.addColorStop(0.3, "rgba(253, 224, 71, 0.7)");
                            diskGrad.addColorStop(0.7, "rgba(249, 115, 22, 0.5)");
                            diskGrad.addColorStop(1.0, "rgba(239, 68, 68, 0.12)");
                            
                            ctx.strokeStyle = diskGrad;
                            ctx.lineWidth = bhCenter.projSize(3.8);
                            
                            // Front equatorial crossing arc
                            ctx.beginPath();
                            ctx.ellipse(bhCenter.x, bhCenter.y, rRad, rRad * 0.18, -0.05, 0, Math.PI); 
                            ctx.stroke();
                            ctx.restore();
                        }
                    });
                }

                // Event horizon shadow core queue
                renderQueue.push({
                    rz: bhCenter.rz,
                    draw: () => {
                        ctx.save();
                        ctx.globalAlpha = alpha;
                        let eventHorizonRadius = bhCenter.projSize(32);
                        
                        // Einstein Lensing Background Glow (corona halo)
                        let haloGrad = ctx.createRadialGradient(bhCenter.x, bhCenter.y, eventHorizonRadius * 0.9, bhCenter.x, bhCenter.y, eventHorizonRadius * 2.8);
                        haloGrad.addColorStop(0, "rgba(0, 0, 0, 1)");
                        haloGrad.addColorStop(0.12, "#ffffff");
                        haloGrad.addColorStop(0.35, "rgba(249, 115, 22, 0.8)");
                        haloGrad.addColorStop(0.7, "rgba(239, 68, 68, 0.25)");
                        haloGrad.addColorStop(1.0, "rgba(0, 0, 0, 0)");
                        ctx.fillStyle = haloGrad;
                        ctx.beginPath();
                        ctx.arc(bhCenter.x, bhCenter.y, eventHorizonRadius * 2.8, 0, Math.PI * 2);
                        ctx.fill();

                        // Event horizon shadow core
                        ctx.fillStyle = "#000000";
                        ctx.beginPath();
                        ctx.arc(bhCenter.x, bhCenter.y, eventHorizonRadius, 0, Math.PI * 2);
                        ctx.fill();
                        
                        // Photon sphere fine loop
                        ctx.strokeStyle = "rgba(255, 255, 255, 0.85)";
                        ctx.lineWidth = 0.8;
                        ctx.beginPath();
                        ctx.arc(bhCenter.x, bhCenter.y, bhCenter.projSize(32.5), 0, Math.PI * 2);
                        ctx.stroke();
                        ctx.restore();
                    }
                });

                // Gargantua Black Hole HUD Name Pointer
                renderQueue.push({
                    rz: bhCenter.rz - 10,
                    draw: () => {
                        ctx.save();
                        ctx.globalAlpha = alpha;
                        // Leader Line
                        ctx.strokeStyle = "rgba(255, 255, 255, 0.4)";
                        ctx.lineWidth = 0.8;
                        ctx.beginPath();
                        ctx.moveTo(bhCenter.x, bhCenter.y);
                        ctx.lineTo(bhCenter.x + 60, bhCenter.y - 60);
                        ctx.lineTo(bhCenter.x + 195, bhCenter.y - 60);
                        ctx.stroke();
                        
                        // Text label
                        ctx.fillStyle = "#ffffff";
                        ctx.font = "bold 11px 'Inter', sans-serif";
                        ctx.textAlign = "left";
                        ctx.fillText("Gargantua Black Hole 🕳️", bhCenter.x + 65, bhCenter.y - 66);
                        ctx.restore();
                    }
                });
            }
        }
        
                else if (t >= 20 && t < 30) { // Phase 3: Boiling 8K Realistic Sun
            camX = 0; camY = 0; camZ = 70 + ep * 70;
            camYaw = ep * 1.5; camPitch = 0.2;
            
            let alpha = getPhaseAlpha(t, 20, 30);
            drawBGStars3D(alpha);
            
            // Solar Wind ejection particles in 3D space
            solarWind.forEach(w => {
                w.r += w.speed;
                if (w.r > 120) {
                    w.r = 22 + Math.random() * 10;
                    w.angle = Math.random() * Math.PI * 2;
                }
                let wx = Math.cos(w.angle) * w.r;
                let wz = Math.sin(w.angle) * w.r;
                let wy = (Math.random() - 0.5) * 15;
                
                let pt = project3D(wx, wy, wz);
                if (pt.visible) {
                    renderQueue.push({
                        rz: pt.rz,
                        draw: () => {
                            ctx.save();
                            ctx.globalAlpha = alpha;
                            let wOpacity = (1.0 - (w.r / 120)) * w.opacity;
                            ctx.fillStyle = `rgba(254, 240, 138, ${Math.max(0, wOpacity)})`;
                            ctx.beginPath();
                            ctx.arc(pt.x, pt.y, pt.projSize(w.size), 0, Math.PI * 2);
                            ctx.fill();
                            ctx.restore();
                        }
                    });
                }
            });

            // Sun Core
            let sunCenter = project3D(0, 0, 0);
            if (sunCenter.visible) {
                renderQueue.push({
                    rz: sunCenter.rz,
                    draw: () => {
                        ctx.save();
                        ctx.globalAlpha = alpha;
                        let sunRad = sunCenter.projSize(22);
                        
                        // 1. Layered Corona volumetric glows
                        let sunGlow = ctx.createRadialGradient(sunCenter.x, sunCenter.y, sunRad * 0.3, sunCenter.x, sunCenter.y, sunRad * 5.2);
                        sunGlow.addColorStop(0, "#ffffff");
                        sunGlow.addColorStop(0.18, "#fffbeb");
                        sunGlow.addColorStop(0.38, "#fef08a");
                        sunGlow.addColorStop(0.65, "rgba(249, 115, 22, 0.52)"); // orange
                        sunGlow.addColorStop(0.85, "rgba(239, 68, 68, 0.18)"); // red corona edge
                        sunGlow.addColorStop(1.0, "rgba(0, 0, 0, 0)");
                        ctx.fillStyle = sunGlow;
                        ctx.beginPath();
                        ctx.arc(sunCenter.x, sunCenter.y, sunRad * 5.2, 0, Math.PI * 2);
                        ctx.fill();

                        // 2. High-fidelity magnetic solar loops (prominences) using Bezier curves
                        ctx.strokeStyle = "rgba(249, 115, 22, 0.65)";
                        ctx.lineWidth = sunRad * 0.08;
                        for (let i = 0; i < 8; i++) {
                            let angleStart = (i / 8) * Math.PI * 2 + elapsedSeconds * 0.1;
                            let angleEnd = angleStart + 0.35 + Math.sin(elapsedSeconds + i) * 0.05;
                            
                            // Bezier control coordinates outwards
                            let midAngle = (angleStart + angleEnd) / 2;
                            let peakRad = sunRad * (1.45 + Math.sin(elapsedSeconds * 3.5 + i) * 0.12);
                            
                            let startX = sunCenter.x + Math.cos(angleStart) * sunRad;
                            let startY = sunCenter.y + Math.sin(angleStart) * sunRad;
                            let cpX = sunCenter.x + Math.cos(midAngle) * peakRad;
                            let cpY = sunCenter.y + Math.sin(midAngle) * peakRad;
                            let endX = sunCenter.x + Math.cos(angleEnd) * sunRad;
                            let endY = sunCenter.y + Math.sin(angleEnd) * sunRad;
                            
                            ctx.beginPath();
                            ctx.moveTo(startX, startY);
                            ctx.quadraticCurveTo(cpX, cpY, endX, endY);
                            ctx.stroke();
                        }

                        // 3. Main Photosphere sphere core
                        ctx.fillStyle = "#ffffff";
                        ctx.beginPath();
                        ctx.arc(sunCenter.x, sunCenter.y, sunRad, 0, Math.PI * 2);
                        ctx.fill();

                        // 4. Detailed boiling convective granules cells (8K density)
                        for (let g = 0; g < 120; g++) {
                            let gAngle = (g * 137.5) * Math.PI / 180; // Fermat spiral angle
                            let gDist = Math.sqrt(g) * (sunRad / 11);
                            if (gDist < sunRad - 2) {
                                let gx = sunCenter.x + Math.cos(gAngle) * gDist;
                                let gy = sunCenter.y + Math.sin(gAngle) * gDist;
                                let gSize = (1.2 + Math.sin(elapsedSeconds * 4.0 + g) * 0.4) * (sunRad / 22);
                                
                                // Color gradient representing convective heat cells
                                ctx.fillStyle = g % 3 === 0 ? "rgba(255, 255, 255, 0.7)" : 
                                                g % 3 === 1 ? "rgba(254, 240, 138, 0.65)" : "rgba(249, 115, 22, 0.55)";
                                ctx.beginPath();
                                ctx.arc(gx, gy, gSize, 0, Math.PI * 2);
                                ctx.fill();
                            }
                        }

                        // 5. Dark magnetic active sunspots
                        ctx.fillStyle = "rgba(40, 10, 0, 0.82)";
                        let spotX1 = sunCenter.x - sunRad * 0.35;
                        let spotY1 = sunCenter.y + sunRad * 0.2;
                        ctx.beginPath();
                        ctx.ellipse(spotX1, spotY1, sunRad * 0.12, sunRad * 0.08, 0.15, 0, Math.PI * 2);
                        ctx.fill();

                        let spotX2 = sunCenter.x + sunRad * 0.28;
                        let spotY2 = sunCenter.y - sunRad * 0.3;
                        ctx.beginPath();
                        ctx.ellipse(spotX2, spotY2, sunRad * 0.09, sunRad * 0.06, -0.22, 0, Math.PI * 2);
                        ctx.fill();
                        
                        ctx.restore();
                    }
                });

                // Sun HUD Name Pointer
                renderQueue.push({
                    rz: sunCenter.rz - 10,
                    draw: () => {
                        ctx.save();
                        ctx.globalAlpha = alpha;
                        // Leader Line
                        ctx.strokeStyle = "rgba(255, 255, 255, 0.4)";
                        ctx.lineWidth = 0.8;
                        ctx.beginPath();
                        ctx.moveTo(sunCenter.x, sunCenter.y);
                        ctx.lineTo(sunCenter.x + 50, sunCenter.y - 50);
                        ctx.lineTo(sunCenter.x + 160, sunCenter.y - 50);
                        ctx.stroke();
                        
                        // Text label
                        ctx.fillStyle = "#ffffff";
                        ctx.font = "bold 11px 'Inter', sans-serif";
                        ctx.textAlign = "left";
                        ctx.fillText("The Sun (Sol) ☀️", sunCenter.x + 55, sunCenter.y - 56);
                        ctx.restore();
                    }
                });
            }
        }
        
                else if (t >= 30 && t < 40) { // Phase 4: 3D Solar System (zoom in to Earth)
            let alpha = getPhaseAlpha(t, 30, 40);
            drawBGStars3D(alpha);
            
            let earthAngle = elapsedSeconds * 0.18 * 0.9;
            let earthX = Math.cos(earthAngle) * 90;
            let earthZ = Math.sin(earthAngle) * 90;
            
            // Interpolate camera to track and zoom into Earth
            camX = ep * earthX;
            camY = 0;
            camZ = 500 - ep * 380; // Zoom in from 500 to 120
            camYaw = 0.2 + ep * (earthAngle - 0.2); 
            camPitch = 1.1 - ep * 0.7; // Tilt from high angle to orbit angle (0.4)
            
            // Draw Orbits in 3D (highlight Earth's orbit)
            const orbits = [45, 65, 90, 115, 150, 195, 235, 270];
            orbits.forEach(rBound => {
                renderQueue.push({
                    rz: 9999, // Render far in background
                    draw: () => {
                        ctx.save();
                        ctx.globalAlpha = alpha * (1.0 - ep); // Fade orbits out as we zoom in
                        if (rBound === 90) {
                            ctx.strokeStyle = "rgba(6, 182, 212, 0.32)"; // Highlight Earth in bright cyan
                            ctx.setLineDash([3, 4]);
                            ctx.lineWidth = 1.0;
                        } else {
                            ctx.strokeStyle = "rgba(99, 102, 241, 0.08)"; // Faint indigo
                            ctx.lineWidth = 0.6;
                        }
                        ctx.beginPath();
                        for (let j = 0; j <= 64; j++) {
                            let theta = (j / 64) * Math.PI * 2;
                            let ox = Math.cos(theta) * rBound;
                            let oz = Math.sin(theta) * rBound;
                            let pt = project3D(ox, 0, oz);
                            if (pt.visible) {
                                if (j === 0) ctx.moveTo(pt.x, pt.y);
                                else ctx.lineTo(pt.x, pt.y);
                            }
                        }
                        ctx.stroke();
                        ctx.restore();
                    }
                });
            });

            // Sun sphere
            let sunCenter = project3D(0, 0, 0);
            if (sunCenter.visible) {
                renderQueue.push({
                    rz: sunCenter.rz,
                    draw: () => {
                        ctx.save();
                        ctx.globalAlpha = alpha;
                        let sunGlow = ctx.createRadialGradient(sunCenter.x, sunCenter.y, 2, sunCenter.x, sunCenter.y, sunCenter.projSize(22));
                        sunGlow.addColorStop(0, "#ffffff");
                        sunGlow.addColorStop(0.3, "#fef08a");
                        sunGlow.addColorStop(1, "rgba(0, 0, 0, 0)");
                        ctx.fillStyle = sunGlow;
                        ctx.beginPath();
                        ctx.arc(sunCenter.x, sunCenter.y, sunCenter.projSize(22), 0, Math.PI * 2);
                        ctx.fill();
                        ctx.restore();
                    }
                });
            }

            // Planets 3D positions with night shadow overlays
            const planets = [
                { name: "Mercury", r: 45, size: 2.2, color: "#94a3b8", speed: 1.6 },
                { name: "Venus", r: 65, size: 4.2, color: "#e2e8f0", speed: 1.2 },
                { name: "Earth", r: 90, size: 5.2, color: "#3b82f6", speed: 0.9 },
                { name: "Mars", r: 115, size: 3.5, color: "#ef4444", speed: 0.7 },
                { name: "Jupiter", r: 150, size: 11, color: "#f97316", speed: 0.4 },
                { name: "Saturn", r: 195, size: 8, color: "#eab308", speed: 0.25, hasRings: true },
                { name: "Uranus", r: 235, size: 6.2, color: "#06b6d4", speed: 0.12 },
                { name: "Neptune", r: 270, size: 5.8, color: "#2563eb", speed: 0.08 }
            ];

            planets.forEach(p => {
                let angle = elapsedSeconds * 0.18 * p.speed;
                let px = Math.cos(angle) * p.r;
                let pz = Math.sin(angle) * p.r;
                
                let pt = project3D(px, 0, pz);
                if (pt.visible) {
                    renderQueue.push({
                        rz: pt.rz,
                        draw: () => {
                            ctx.save();
                            ctx.globalAlpha = alpha;
                            
                            // Interpolate Earth size to match Phase 5 start size
                            let currentSize = p.name === "Earth" ? (p.size + ep * (65 - p.size)) : p.size;
                            let pRad = pt.projSize(currentSize);
                            
                            // 3D Shading relative to Sun
                            let pGrad = ctx.createRadialGradient(
                                pt.x - px * (pRad * 0.08 / p.r), pt.y, pRad * 0.1,
                                pt.x, pt.y, pRad
                            );
                            pGrad.addColorStop(0, p.color);
                            pGrad.addColorStop(0.85, p.color);
                            pGrad.addColorStop(1.0, "rgba(0, 0, 0, 0.95)");
                            
                            ctx.fillStyle = pGrad;
                            ctx.beginPath();
                            ctx.arc(pt.x, pt.y, pRad, 0, Math.PI * 2);
                            ctx.fill();
                            
                            if (p.hasRings) {
                                ctx.strokeStyle = "rgba(234, 179, 8, 0.35)";
                                ctx.lineWidth = pRad * 0.25;
                                ctx.beginPath();
                                ctx.ellipse(pt.x, pt.y, pRad * 1.7, pRad * 0.55, -0.05, 0, Math.PI * 2);
                                ctx.stroke();
                            }
                            
                            // Planet label
                            if (ep < 0.8) {
                                ctx.fillStyle = "rgba(255, 255, 255, 0.4)";
                                ctx.font = "8px 'Inter', sans-serif";
                                ctx.fillText(p.name, pt.x + pRad + 3, pt.y + 2);
                            }
                            ctx.restore();
                        }
                    });
                }
            });
        }
        
        else if (t >= 40 && t < 50) { // Phase 5: Zoom Earth, Moon & Telemetry Satellite orbits
            let earthAngle = elapsedSeconds * 0.18 * 0.9;
            camX = 0; camY = 0; camZ = 120 - ep * 20; // Continue from 120 down to 100
            camYaw = earthAngle + (ep * 1.5); // Smooth continuation of yaw orbit
            camPitch = 0.4;
            
            let alpha = getPhaseAlpha(t, 40, 50);
            drawBGStars3D(alpha);

            // Draw Moon Orbit Path in 3D (dashed, faint white)
            renderQueue.push({
                rz: 9998, // Draw in background behind Moon/Earth
                draw: () => {
                    ctx.save();
                    ctx.globalAlpha = alpha;
                    ctx.strokeStyle = "rgba(255, 255, 255, 0.12)";
                    ctx.setLineDash([3, 4]); // Dashed orbit line
                    ctx.lineWidth = 0.8;
                    ctx.beginPath();
                    for (let j = 0; j <= 64; j++) {
                        let theta = (j / 64) * Math.PI * 2;
                        let mx = Math.cos(theta) * 150;
                        let mz = Math.sin(theta) * 150;
                        let pt = project3D(mx, 0, mz);
                        if (pt.visible) {
                            if (j === 0) ctx.moveTo(pt.x, pt.y);
                            else ctx.lineTo(pt.x, pt.y);
                        }
                    }
                    ctx.stroke();
                    ctx.restore();
                }
            });

            // Draw Satellite Orbit Path in 3D (dashed, faint cyan polar orbit)
            renderQueue.push({
                rz: 9998,
                draw: () => {
                    ctx.save();
                    ctx.globalAlpha = alpha;
                    ctx.strokeStyle = "rgba(6, 182, 212, 0.15)";
                    ctx.setLineDash([2, 3]);
                    ctx.lineWidth = 0.6;
                    ctx.beginPath();
                    for (let j = 0; j <= 64; j++) {
                        let theta = (j / 64) * Math.PI * 2;
                        let sx = Math.cos(theta) * 105;
                        let sy = Math.sin(theta) * 105;
                        let pt = project3D(sx, sy, 0); // Polar orbit plane z=0
                        if (pt.visible) {
                            if (j === 0) ctx.moveTo(pt.x, pt.y);
                            else ctx.lineTo(pt.x, pt.y);
                        }
                    }
                    ctx.stroke();
                    ctx.restore();
                }
            });
            
            // Earth core sphere in 3D queue
            let earthCenter = project3D(0, 0, 0);
            if (earthCenter.visible) {
                renderQueue.push({
                    rz: earthCenter.rz,
                    draw: () => {
                        ctx.save();
                        ctx.globalAlpha = alpha;
                        let earthRad = earthCenter.projSize(65);
                        
                        // Atmosphere Glow Layers
                        let atm = ctx.createRadialGradient(earthCenter.x, earthCenter.y, earthRad - 5, earthCenter.x, earthCenter.y, earthRad + 22);
                        atm.addColorStop(0, "rgba(59, 130, 246, 0.72)");
                        atm.addColorStop(0.4, "rgba(6, 182, 212, 0.3)");
                        atm.addColorStop(1, "rgba(0, 0, 0, 0)");
                        ctx.fillStyle = atm;
                        ctx.beginPath();
                        ctx.arc(earthCenter.x, earthCenter.y, earthRad + 22, 0, Math.PI * 2);
                        ctx.fill();

                        // Ocean base sphere
                        ctx.fillStyle = "#1d4ed8";
                        ctx.beginPath();
                        ctx.arc(earthCenter.x, earthCenter.y, earthRad, 0, Math.PI * 2);
                        ctx.fill();

                        // Detailed continents contours on globe
                        ctx.fillStyle = "#10b981";
                        ctx.beginPath();
                        ctx.ellipse(earthCenter.x - earthRad * 0.3, earthCenter.y - earthRad * 0.15, earthRad * 0.4, earthRad * 0.28, 0.2, 0, Math.PI * 2);
                        ctx.ellipse(earthCenter.x + earthRad * 0.35, earthCenter.y + earthRad * 0.12, earthRad * 0.49, earthRad * 0.34, -0.3, 0, Math.PI * 2);
                        ctx.fill();
                        
                        // Detailed Mini India on the globe texture
                        ctx.fillStyle = "#16a34a";
                        ctx.beginPath();
                        ctx.moveTo(earthCenter.x + earthRad * 0.28, earthCenter.y - earthRad * 0.06);
                        ctx.lineTo(earthCenter.x + earthRad * 0.37, earthCenter.y + earthRad * 0.12);
                        ctx.lineTo(earthCenter.x + earthRad * 0.25, earthCenter.y + earthRad * 0.3); // Peninsula tip
                        ctx.lineTo(earthCenter.x + earthRad * 0.18, earthCenter.y + earthRad * 0.15);
                        ctx.closePath();
                        ctx.fill();

                        // Clouds overlay
                        ctx.fillStyle = "rgba(255, 255, 255, 0.38)";
                        ctx.beginPath();
                        ctx.ellipse(earthCenter.x - earthRad * 0.08, earthCenter.y - earthRad * 0.34, earthRad * 0.62, earthRad * 0.15, -0.15, 0, Math.PI * 2);
                        ctx.ellipse(earthCenter.x + earthRad * 0.18, earthCenter.y + earthRad * 0.34, earthRad * 0.69, earthRad * 0.14, 0.1, 0, Math.PI * 2);
                        ctx.fill();
                        
                        // Simple clean label showing name "Earth" next to Earth sphere
                        ctx.fillStyle = "rgba(255, 255, 255, 0.72)";
                        ctx.font = "bold 11.5px 'Inter', sans-serif";
                        ctx.textAlign = "left";
                        ctx.fillText("Earth 🌎", earthCenter.x + earthRad + 12, earthCenter.y + 4);
                        
                        ctx.restore();
                    }
                });
            }
            
            // Moon in 3D orbit            // Moon in 3D orbit
            let moonAngle = elapsedSeconds * 0.45;
            let moonX = Math.cos(moonAngle) * 150;
            let moonZ = Math.sin(moonAngle) * 150;
            
            let moonPt = project3D(moonX, 0, moonZ);
            if (moonPt.visible) {
                renderQueue.push({
                    rz: moonPt.rz,
                    draw: () => {
                        ctx.save();
                        ctx.globalAlpha = alpha;
                        let mRad = moonPt.projSize(11);
                        
                        ctx.fillStyle = "#cbd5e1";
                        ctx.beginPath();
                        ctx.arc(moonPt.x, moonPt.y, mRad, 0, Math.PI * 2);
                        ctx.fill();
                        
                        // Craters details
                        ctx.fillStyle = "#94a3b8";
                        ctx.beginPath();
                        ctx.arc(moonPt.x - mRad * 0.27, moonPt.y - mRad * 0.27, mRad * 0.2, 0, Math.PI * 2);
                        ctx.arc(moonPt.x + mRad * 0.18, moonPt.y + mRad * 0.18, mRad * 0.16, 0, Math.PI * 2);
                        ctx.arc(moonPt.x - mRad * 0.18, moonPt.y + mRad * 0.27, mRad * 0.13, 0, Math.PI * 2);
                        ctx.fill();
                        ctx.restore();
                    }
                });
            }

            // Telemetry satellite in 3D polar orbit
            let satAngle = elapsedSeconds * 0.85;
            let satX = Math.cos(satAngle) * 105;
            let satY = Math.sin(satAngle) * 105; // orbit tilted along Y axis
            
            let satPt = project3D(satX, satY, 0);
            if (satPt.visible) {
                renderQueue.push({
                    rz: satPt.rz,
                    draw: () => {
                        ctx.save();
                        ctx.globalAlpha = alpha;
                        let sRad = satPt.projSize(3.5);
                        
                        ctx.translate(satPt.x, satPt.y);
                        ctx.rotate(satAngle + Math.PI / 2);
                        
                        // Blue Solar panel wings
                        ctx.fillStyle = "#2563eb";
                        ctx.fillRect(-sRad * 4.5, -sRad * 0.5, sRad * 2.5, sRad);
                        ctx.fillRect(sRad * 2.0, -sRad * 0.5, sRad * 2.5, sRad);
                        // Core metal body
                        ctx.fillStyle = "#cbd5e1";
                        ctx.fillRect(-sRad, -sRad * 1.4, sRad * 2, sRad * 2.8);
                        // Antenna
                        ctx.strokeStyle = "#94a3b8";
                        ctx.lineWidth = 1;
                        ctx.beginPath();
                        ctx.moveTo(0, sRad * 1.4);
                        ctx.lineTo(0, sRad * 2.8);
                        ctx.stroke();
                        ctx.restore();

                        // Blinking telemetry pulses
                        if (Math.sin(elapsedSeconds * 8) > 0) {
                            ctx.save();
                            ctx.globalAlpha = alpha;
                            ctx.strokeStyle = "rgba(6, 182, 212, 0.35)";
                            ctx.lineWidth = 1.0;
                            ctx.beginPath();
                            ctx.arc(satPt.x, satPt.y, sRad * 3.4, 0, Math.PI * 2);
                            ctx.stroke();
                            ctx.restore();
                        }
                    }
                });
            }
        }
        
        else if (t >= 50 && t < 60) { // Phase 6: Zoom Earth Close-Up (Asia & India 3D Ocean)
            let alpha = getPhaseAlpha(t, 50, 60);
            drawBGStars3D(alpha);

            // Geographically detailed Asian continent outline centered on Earth surface
            const asiaOutline = [
                { x: -140, y: -90 }, // Mid East north
                { x: -130, y: -40 },
                { x: -165, y: -10 }, // Red Sea bend
                { x: -150, y: 15 },  // Arabian tip
                { x: -110, y: 10 },  // Persian Gulf
                { x: -70, y: -5 },   // Pakistan coast
                { x: -35, y: 35 },   // India West Coast (Mumbai snout)
                { x: -15, y: 70 },   // Southern tip of India (Kanyakumari)
                { x: 5, y: 30 },     // India East Coast (Chennai / Odisha)
                { x: 10, y: 5 },     // Bangladesh / Ganges delta
                { x: 35, y: 25 },    // Myanmar / Indochina west
                { x: 50, y: 45 },    // Malay Peninsula tip
                { x: 65, y: 20 },    // Vietnam coast
                { x: 90, y: -10 },   // China coast south
                { x: 120, y: -30 },  // Shanghai bulge
                { x: 130, y: -70 },  // Yellow Sea
                { x: 110, y: -110 }, // Korea
                { x: 140, y: -130 }, // Vladivostok
                { x: 150, y: -180 }, // Kamchatka
                { x: 80, y: -220 },  // Siberia north
                { x: -20, y: -200 }, // Ural corner
                { x: -80, y: -150 }  // Caspian region
            ];
            
            // 3D camera pan focusing directly onto India coordinates on the globe
            let targetIndiaX = -15 * (480 / 400); 
            let targetIndiaY = 70 * (480 / 400);  
            
            camX = ep * targetIndiaX;
            camY = ep * targetIndiaY;
            camZ = 120 - ep * 290; // Deep plunge from 120 down to -170
            camYaw = 0.5;
            camPitch = 0.5 + ep * 0.35;
            
            // Giant Earth sea and continents in background
            let earthCenter = project3D(0, 0, -400); 
            if (earthCenter.visible) {
                renderQueue.push({
                    rz: 9999, // Keep at back of queue
                    draw: () => {
                        ctx.save();
                        ctx.globalAlpha = alpha;
                        let eRad = earthCenter.projSize(480);
                        
                        // 1. Shaded Blue Ocean Sphere
                        let radialSea = ctx.createRadialGradient(earthCenter.x, earthCenter.y, eRad * 0.1, earthCenter.x, earthCenter.y, eRad);
                        radialSea.addColorStop(0, "#2563eb");
                        radialSea.addColorStop(0.7, "#1d4ed8");
                        radialSea.addColorStop(1.0, "#1e3a8a"); // deep edge shadow
                        ctx.fillStyle = radialSea;
                        ctx.beginPath();
                        ctx.arc(earthCenter.x, earthCenter.y, eRad, 0, Math.PI * 2);
                        ctx.fill();

                        // 2. Animated Specular Sunlight Hotspot Glints (3D ocean reflections)
                        let glintX = earthCenter.x - eRad * 0.28;
                        let glintY = earthCenter.y - eRad * 0.28;
                        let glintRad = eRad * 0.45;
                        let glint = ctx.createRadialGradient(glintX, glintY, 2, glintX, glintY, glintRad);
                        glint.addColorStop(0, "rgba(255, 255, 255, 0.42)");
                        glint.addColorStop(0.35, "rgba(6, 182, 212, 0.14)");
                        glint.addColorStop(1.0, "rgba(0, 0, 0, 0)");
                        ctx.fillStyle = glint;
                        ctx.beginPath();
                        ctx.arc(earthCenter.x, earthCenter.y, eRad, 0, Math.PI * 2);
                        ctx.fill();

                        // 3. Concentric 3D wave ripples moving across ocean
                        ctx.strokeStyle = "rgba(6, 182, 212, 0.16)";
                        ctx.lineWidth = 1.6;
                        for (let w = 0; w < 12; w++) {
                            let waveLat = -0.6 + w * 0.1 + Math.sin(elapsedSeconds * 1.6 + w) * 0.02; // latitude angle
                            let waveAngleStart = -0.55 + Math.cos(elapsedSeconds * 0.6 + w) * 0.04;
                            let waveAngleEnd = 0.55 + Math.cos(elapsedSeconds * 0.6 + w) * 0.04;
                            
                            ctx.beginPath();
                            ctx.ellipse(
                                earthCenter.x,
                                earthCenter.y + Math.sin(waveLat) * eRad * 0.3,
                                eRad * Math.cos(waveLat) * 0.96,
                                eRad * 0.16,
                                0.04,
                                Math.PI * waveAngleStart,
                                Math.PI * waveAngleEnd
                            );
                            ctx.stroke();
                        }

                        // 4. Geographically detailed Asian continent outline
                        ctx.fillStyle = "#10b981"; // Forest green land
                        ctx.strokeStyle = "#16a34a";
                        ctx.lineWidth = 1.0;
                        ctx.beginPath();
                        asiaOutline.forEach((pt, index) => {
                            let ax = earthCenter.x + pt.x * (eRad / 400);
                            let ay = earthCenter.y + pt.y * (eRad / 400);
                            if (index === 0) ctx.moveTo(ax, ay);
                            else ctx.lineTo(ax, ay);
                        });
                        ctx.closePath();
                        ctx.fill();
                        ctx.stroke();
                        ctx.restore();
                    }
                });
            }

            // Drifting volumetric clouds in front (depth-sorted)
            earthClouds.forEach((c, idx) => {
                let pt = project3D(c.x, c.y, -120 + idx * 8);
                if (pt.visible) {
                    renderQueue.push({
                        rz: pt.rz,
                        draw: () => {
                            ctx.save();
                            ctx.globalAlpha = alpha * 0.85;
                            ctx.fillStyle = "rgba(255, 255, 255, 0.22)";
                            ctx.translate(pt.x, pt.y);
                            ctx.rotate(c.angle);
                            ctx.beginPath();
                            ctx.ellipse(0, 0, pt.projSize(c.rX), pt.projSize(c.rY), 0, 0, Math.PI * 2);
                            ctx.fill();
                            ctx.restore();
                        }
                    });
                }
            });
        }
        
                else if (t >= 60 && t < 70) { // Phase 7: Geographically precise India map & Tamil Nadu beacon
            camX = ep * 20; camY = ep * 120; camZ = 150 - ep * 100;
            camYaw = ep * 0.3; camPitch = 0.5 + ep * 0.4; // Tilted pitch projection
            
            let alpha = getPhaseAlpha(t, 60, 70);
            
            // Grid Coordinate Plane drawn at Z = 0
            renderQueue.push({
                rz: 9999,
                draw: () => {
                    ctx.save();
                    ctx.globalAlpha = alpha;
                    ctx.strokeStyle = "rgba(99, 102, 241, 0.04)";
                    ctx.lineWidth = 0.5;
                    const gridGap = 35;
                    for (let l = -250; l <= 250; l += gridGap) {
                        // Vertical lines
                        let pStart = project3D(l, -250, 0);
                        let pEnd = project3D(l, 250, 0);
                        if (pStart.visible && pEnd.visible) {
                            ctx.beginPath();
                            ctx.moveTo(pStart.x, pStart.y);
                            ctx.lineTo(pEnd.x, pEnd.y);
                            ctx.stroke();
                        }
                        
                        // Horizontal lines
                        let pStartH = project3D(-250, l, 0);
                        let pEndH = project3D(250, l, 0);
                        if (pStartH.visible && pEndH.visible) {
                            ctx.beginPath();
                            ctx.moveTo(pStartH.x, pStartH.y);
                            ctx.lineTo(pEndH.x, pEndH.y);
                            ctx.stroke();
                        }
                    }
                    ctx.restore();
                }
            });

            // Draw precise geographical map of India (30 coords projected in 3D)
            renderQueue.push({
                rz: 9998,
                draw: () => {
                    ctx.save();
                    ctx.globalAlpha = alpha;
                    ctx.strokeStyle = "rgba(99, 102, 241, 0.35)";
                    ctx.lineWidth = 1.5;
                    ctx.fillStyle = "rgba(16, 185, 129, 0.08)";
                    
                    ctx.beginPath();
                    indiaPath.forEach((pt, index) => {
                        let proj = project3D(pt.x * 1.5, pt.y * 1.5, 0);
                        if (index === 0) ctx.moveTo(proj.x, proj.y);
                        else ctx.lineTo(proj.x, proj.y);
                    });
                    ctx.closePath();
                    ctx.fill();
                    ctx.stroke();

                    // Highlight Tamil Nadu region (Peninsula Southern Tip segment)
                    ctx.fillStyle = "rgba(6, 182, 212, 0.38)";
                    ctx.strokeStyle = "#06b6d4";
                    ctx.lineWidth = 2.0;
                    ctx.beginPath();
                    let pt1 = project3D(indiaPath[17].x * 1.5, indiaPath[17].y * 1.5, 0);
                    let pt2 = project3D(indiaPath[18].x * 1.5, indiaPath[18].y * 1.5, 0);
                    let pt3 = project3D(indiaPath[19].x * 1.5, indiaPath[19].y * 1.5, 0); // Southern Tip
                    let pt4 = project3D(indiaPath[20].x * 1.5, indiaPath[20].y * 1.5, 0); 
                    ctx.moveTo(pt1.x, pt1.y);
                    ctx.lineTo(pt2.x, pt2.y);
                    ctx.lineTo(pt3.x, pt3.y);
                    ctx.lineTo(pt4.x, pt4.y);
                    ctx.closePath();
                    ctx.fill();
                    ctx.stroke();
                    ctx.restore();
                }
            });

            // Sweeping laser scanline on map
            scanlineY += 1.5;
            if (scanlineY > 150) scanlineY = -150;
            
            renderQueue.push({
                rz: 9997,
                draw: () => {
                    ctx.save();
                    ctx.globalAlpha = alpha;
                    ctx.strokeStyle = "rgba(6, 182, 212, 0.22)";
                    ctx.lineWidth = 2.0;
                    let pStart = project3D(-90, scanlineY, 0);
                    let pEnd = project3D(90, scanlineY, 0);
                    if (pStart.visible && pEnd.visible) {
                        ctx.beginPath();
                        ctx.moveTo(pStart.x, pStart.y);
                        ctx.lineTo(pEnd.x, pEnd.y);
                        ctx.stroke();
                    }
                    ctx.restore();
                }
            });

            // Radar target beacon on Tamil Nadu
            let tnX = 13 * 1.5;
            let tnY = 86 * 1.5;
            let beaconPt = project3D(tnX, tnY, 0);
            if (beaconPt.visible) {
                renderQueue.push({
                    rz: beaconPt.rz,
                    draw: () => {
                        ctx.save();
                        ctx.globalAlpha = alpha;
                        let pulseRad = 12 + Math.sin(elapsedSeconds * 7.0) * 7;
                        
                        ctx.strokeStyle = "#d946ef";
                        ctx.lineWidth = 1.2;
                        ctx.beginPath();
                        ctx.arc(beaconPt.x, beaconPt.y, pulseRad, 0, Math.PI * 2);
                        ctx.stroke();

                        ctx.fillStyle = "#d946ef";
                        ctx.beginPath();
                        ctx.arc(beaconPt.x, beaconPt.y, 3.5, 0, Math.PI * 2);
                        ctx.fill();

                        // HUD pointer details
                        ctx.strokeStyle = "rgba(255, 255, 255, 0.4)";
                        ctx.lineWidth = 0.8;
                        ctx.beginPath();
                        ctx.moveTo(beaconPt.x, beaconPt.y);
                        ctx.lineTo(beaconPt.x + 60, beaconPt.y - 60);
                        ctx.lineTo(beaconPt.x + 130, beaconPt.y - 60);
                        ctx.stroke();

                        ctx.fillStyle = "#ffffff";
                        ctx.font = "bold 11px 'Inter', sans-serif";
                        ctx.textAlign = "left";
                        ctx.fillText("Tamil Nadu, India", beaconPt.x + 65, beaconPt.y - 66);
                        ctx.restore();
                    }
                });
            }
        }
        
        else if (t >= 70 && t < 80) { // Phase 8: Living Garden Family Residence (3D Parallax horizontal pan)
            camX = -150 + ep * 260; camY = -10; camZ = 160;
            camYaw = 0; camPitch = 0.2;
            
            let alpha = getPhaseAlpha(t, 70, 80);
            
            // Ground lawn plane at Y = 80
            renderQueue.push({
                rz: 9999,
                draw: () => {
                    ctx.save();
                    ctx.globalAlpha = alpha;
                    ctx.strokeStyle = "rgba(99, 102, 241, 0.4)";
                    ctx.lineWidth = 2.0;
                    
                    let pStart = project3D(-280, 80, 0);
                    let pEnd = project3D(280, 80, 0);
                    if (pStart.visible && pEnd.visible) {
                        ctx.beginPath();
                        ctx.moveTo(pStart.x, pStart.y);
                        ctx.lineTo(pEnd.x, pEnd.y);
                        ctx.stroke();
                    }

                    // Swaying grass blades in 3D space
                    ctx.strokeStyle = "rgba(16, 185, 129, 0.45)";
                    ctx.lineWidth = 0.8;
                    for (let gx = -260; gx <= 260; gx += 12) {
                        let sway = Math.sin(elapsedSeconds * 3.0 + gx) * 3;
                        let gStart = project3D(gx, 80, 0);
                        let gEnd = project3D(gx + sway, 70, 0);
                        if (gStart.visible && gEnd.visible) {
                            ctx.beginPath();
                            ctx.moveTo(gStart.x, gStart.y);
                            ctx.lineTo(gEnd.x, gEnd.y);
                            ctx.stroke();
                        }
                    }
                    ctx.restore();
                }
            });

            // Modern Villa House (3D coordinates: x: -110, y: 80, z: 0)
            let houseBase = project3D(-110, 80, 0);
            if (houseBase.visible) {
                renderQueue.push({
                    rz: houseBase.rz,
                    draw: () => {
                        ctx.save();
                        ctx.globalAlpha = alpha;
                        let hScale = houseBase.projSize(1);
                        
                        // Base wall structure
                        ctx.fillStyle = "rgba(30, 41, 59, 0.7)";
                        ctx.strokeStyle = "#6366f1";
                        ctx.lineWidth = 2;
                        ctx.fillRect(houseBase.x - 50 * hScale, houseBase.y - 65 * hScale, 100 * hScale, 65 * hScale);
                        ctx.strokeRect(houseBase.x - 50 * hScale, houseBase.y - 65 * hScale, 100 * hScale, 65 * hScale);

                        // Angled roof slab
                        ctx.fillStyle = "#b45309"; 
                        ctx.fillRect(houseBase.x - 58 * hScale, houseBase.y - 75 * hScale, 116 * hScale, 10 * hScale);
                        ctx.strokeStyle = "#7c2d12";
                        ctx.strokeRect(houseBase.x - 58 * hScale, houseBase.y - 75 * hScale, 116 * hScale, 10 * hScale);

                        // Windows
                        ctx.fillStyle = "rgba(6, 182, 212, 0.15)";
                        ctx.fillRect(houseBase.x - 38 * hScale, houseBase.y - 55 * hScale, 30 * hScale, 32 * hScale);
                        ctx.strokeRect(houseBase.x - 38 * hScale, houseBase.y - 55 * hScale, 30 * hScale, 32 * hScale);

                        // Door
                        ctx.fillStyle = "#7c2d12";
                        ctx.fillRect(houseBase.x + 10 * hScale, houseBase.y - 48 * hScale, 24 * hScale, 48 * hScale);
                        ctx.strokeRect(houseBase.x + 10 * hScale, houseBase.y - 48 * hScale, 24 * hScale, 48 * hScale);
                        
                        // Porch light glow
                        let lx = houseBase.x + 22 * hScale;
                        let ly = houseBase.y - 54 * hScale;
                        let lampGlow = ctx.createRadialGradient(lx, ly, 1, lx, houseBase.y, 30 * hScale);
                        lampGlow.addColorStop(0, "rgba(254, 240, 138, 0.8)");
                        lampGlow.addColorStop(1, "rgba(254, 240, 138, 0)");
                        ctx.fillStyle = lampGlow;
                        ctx.beginPath();
                        ctx.moveTo(lx - 4 * hScale, ly);
                        ctx.lineTo(lx + 4 * hScale, ly);
                        ctx.lineTo(lx + 16 * hScale, houseBase.y);
                        ctx.lineTo(lx - 16 * hScale, houseBase.y);
                        ctx.closePath();
                        ctx.fill();
                        ctx.restore();
                    }
                });
            }

            // Tree (3D coordinates: x: -195, y: 80, z: 20)
            let treeBase = project3D(-195, 80, 20);
            if (treeBase.visible) {
                renderQueue.push({
                    rz: treeBase.rz,
                    draw: () => {
                        ctx.save();
                        ctx.globalAlpha = alpha;
                        let tScale = treeBase.projSize(1);
                        
                        // Trunk
                        ctx.fillStyle = "#451a03";
                        ctx.fillRect(treeBase.x - 4.5 * tScale, treeBase.y - 35 * tScale, 9 * tScale, 35 * tScale);
                        
                        // Foliage leaves
                        ctx.fillStyle = "rgba(16, 185, 129, 0.6)";
                        ctx.strokeStyle = "#10b981";
                        ctx.lineWidth = 1.2;
                        ctx.beginPath();
                        ctx.arc(treeBase.x, treeBase.y - 42 * tScale, 22 * tScale, 0, Math.PI * 2);
                        ctx.arc(treeBase.x - 10 * tScale, treeBase.y - 55 * tScale, 18 * tScale, 0, Math.PI * 2);
                        ctx.arc(treeBase.x + 10 * tScale, treeBase.y - 55 * tScale, 18 * tScale, 0, Math.PI * 2);
                        ctx.fill();
                        ctx.stroke();
                        ctx.restore();
                    }
                });
            }

            // Falling leaves (depth-sorted)
            fallingLeaves.forEach(lf => {
                lf.y += lf.speedY;
                lf.x += lf.speedX + Math.sin(elapsedSeconds + lf.y) * 0.2;
                lf.angle += lf.rotSpeed;
                
                if (lf.y > 80) {
                    lf.y = -20;
                    lf.x = Math.random() * 60 - 220;
                }
                
                let pt = project3D(lf.x, lf.y, 10);
                if (pt.visible) {
                    renderQueue.push({
                        rz: pt.rz,
                        draw: () => {
                            ctx.save();
                            ctx.globalAlpha = alpha;
                            ctx.translate(pt.x, pt.y);
                            ctx.rotate(lf.angle);
                            ctx.fillStyle = "#15803d";
                            ctx.beginPath();
                            ctx.ellipse(0, 0, pt.projSize(4), pt.projSize(2), 0, 0, Math.PI*2);
                            ctx.fill();
                            ctx.restore();
                        }
                    });
                }
            });

            // Family members silhouettes
            const family = [
                { name: "Father", x: 10, h: 62, color: "#60a5fa", label: "Father", wave: true },
                { name: "Mother", x: 50, h: 57, color: "#f472b6", label: "Mother" },
                { name: "Dhanush", x: 90, h: 48, color: "#34d399", label: "Son (Dhanush)", wave: true },
                { name: "Sister", x: 130, h: 38, color: "#fb7185", label: "Sister" }
            ];

            family.forEach(f => {
                let pt = project3D(f.x, 80, -10);
                if (pt.visible) {
                    renderQueue.push({
                        rz: pt.rz,
                        draw: () => {
                            ctx.save();
                            ctx.globalAlpha = alpha;
                            let fScale = pt.projSize(1);
                            let fy = pt.y;
                            let fx = pt.x;
                            let fh = f.h * fScale;
                            
                            // Body structure
                            ctx.fillStyle = f.color;
                            ctx.beginPath();
                            ctx.fillRect(fx - 4 * fScale, fy - 22 * fScale, 3 * fScale, 22 * fScale);
                            ctx.fillRect(fx + 1 * fScale, fy - 22 * fScale, 3 * fScale, 22 * fScale);
                            ctx.ellipse(fx, fy - 32 * fScale, 7 * fScale, (f.h/2 - 9) * fScale, 0, 0, Math.PI * 2);
                            ctx.fill();
                            
                            // Head
                            ctx.beginPath();
                            ctx.arc(fx, fy - fh + 8 * fScale, 6.5 * fScale, 0, Math.PI * 2);
                            ctx.fill();
                            
                            // Hand waving
                            if (f.wave) {
                                ctx.strokeStyle = f.color;
                                ctx.lineWidth = 2.5 * fScale;
                                let handAngle = Math.sin(elapsedSeconds * 6.0 + f.x) * 0.4 - 0.8;
                                ctx.beginPath();
                                ctx.moveTo(fx + 5 * fScale, fy - 36 * fScale);
                                ctx.lineTo(fx + 12 * fScale, fy - 36 * fScale + Math.sin(handAngle) * 12 * fScale);
                                ctx.stroke();
                            }
                            
                            // Labels
                            ctx.fillStyle = "#ffffff";
                            ctx.font = "bold 9px 'Inter', sans-serif";
                            ctx.textAlign = "center";
                            ctx.fillText(f.name, fx, fy - fh - 6 * fScale);
                            ctx.restore();
                        }
                    });
                }
            });

            // Glowing fireflies (depth-sorted)
            fireflies.forEach(ff => {
                ff.x += ff.vx;
                ff.y += ff.vy;
                ff.glow += 0.05;
                if (ff.x > 200 || ff.x < -100) ff.vx = -ff.vx;
                if (ff.y > 80 || ff.y < 0) ff.vy = -ff.vy;
                
                let pt = project3D(ff.x, ff.y, 5);
                if (pt.visible) {
                    renderQueue.push({
                        rz: pt.rz,
                        draw: () => {
                            ctx.save();
                            ctx.globalAlpha = alpha;
                            let ffOpacity = Math.max(0.1, 0.4 + 0.5 * Math.sin(ff.glow));
                            ctx.fillStyle = `rgba(163, 230, 53, ${ffOpacity})`;
                            ctx.beginPath();
                            ctx.arc(pt.x, pt.y, pt.projSize(ff.size), 0, Math.PI * 2);
                            ctx.fill();
                            ctx.restore();
                        }
                    });
                }
            });
        }
        
        else if (t >= 80 && t < 90) { // Phase 9: 3D Educational Timeline road tracking
            camX = -200 + ep * 350; camY = -20; camZ = 180 - ep * 60;
            camYaw = -0.2 + ep * 0.4; camPitch = 0.3;
            
            let alpha = getPhaseAlpha(t, 80, 90);
            let phaseTime = t - 80;
            
            // Timeline 3D Road / pathway
            renderQueue.push({
                rz: 9999,
                draw: () => {
                    ctx.save();
                    ctx.globalAlpha = alpha;
                    ctx.strokeStyle = "rgba(99, 102, 241, 0.28)";
                    ctx.lineWidth = 4.0;
                    
                    let pStart = project3D(-240, 70, 0);
                    let pEnd = project3D(240, 70, 0);
                    if (pStart.visible && pEnd.visible) {
                        ctx.beginPath();
                        ctx.moveTo(pStart.x, pStart.y);
                        ctx.lineTo(pEnd.x, pEnd.y);
                        ctx.stroke();
                    }
                    ctx.restore();
                }
            });

            // 3D structural landmarks
            const landmarks = [
                { name: "RKR GRKS 🏫", x: -150, color: "#60a5fa", tower: true },
                { name: "Nachimuthu Poly ⚙️", x: 0, color: "#a78bfa", sawtooth: true },
                { name: "Dr. MCET 🎓", x: 150, color: "#34d399", dome: true }
            ];

            landmarks.forEach(m => {
                let base = project3D(m.x, 70, 0);
                if (base.visible) {
                    renderQueue.push({
                        rz: base.rz,
                        draw: () => {
                            ctx.save();
                            ctx.globalAlpha = alpha;
                            let lScale = base.projSize(1);
                            
                            // Draw building block
                            ctx.fillStyle = "rgba(30, 41, 59, 0.65)";
                            ctx.strokeStyle = m.color;
                            ctx.lineWidth = 1.5;
                            ctx.fillRect(base.x - 25 * lScale, base.y - 30 * lScale, 50 * lScale, 30 * lScale);
                            ctx.strokeRect(base.x - 25 * lScale, base.y - 30 * lScale, 50 * lScale, 30 * lScale);
                            
                            if (m.tower) {
                                ctx.fillRect(base.x - 8 * lScale, base.y - 48 * lScale, 16 * lScale, 18 * lScale);
                                ctx.strokeRect(base.x - 8 * lScale, base.y - 48 * lScale, 16 * lScale, 18 * lScale);
                                ctx.fillStyle = m.color;
                                ctx.beginPath();
                                ctx.moveTo(base.x - 10 * lScale, base.y - 48 * lScale);
                                ctx.lineTo(base.x, base.y - 58 * lScale);
                                ctx.lineTo(base.x + 10 * lScale, base.y - 48 * lScale);
                                ctx.closePath();
                                ctx.fill();
                            }
                            
                            if (m.sawtooth) {
                                ctx.fillStyle = m.color;
                                ctx.beginPath();
                                ctx.moveTo(base.x - 25 * lScale, base.y - 30 * lScale);
                                ctx.lineTo(base.x - 12 * lScale, base.y - 38 * lScale);
                                ctx.lineTo(base.x - 12 * lScale, base.y - 30 * lScale);
                                ctx.lineTo(base.x + 12 * lScale, base.y - 38 * lScale);
                                ctx.lineTo(base.x + 12 * lScale, base.y - 30 * lScale);
                                ctx.lineTo(base.x + 25 * lScale, base.y - 30 * lScale);
                                ctx.closePath();
                                ctx.fill();
                            }
                            
                            if (m.dome) {
                                ctx.beginPath();
                                ctx.arc(base.x, base.y - 30 * lScale, 15 * lScale, Math.PI, 0);
                                ctx.fillStyle = "rgba(52, 211, 153, 0.35)";
                                ctx.fill();
                                ctx.stroke();
                            }

                            // Bullet joint dot on timeline
                            ctx.fillStyle = m.color;
                            ctx.beginPath();
                            ctx.arc(base.x, base.y, 5 * lScale, 0, Math.PI * 2);
                            ctx.fill();

                            ctx.fillStyle = "#ffffff";
                            ctx.font = "bold 9px 'Inter', sans-serif";
                            ctx.textAlign = "center";
                            ctx.fillText(m.name, base.x, base.y - 64 * lScale);
                            ctx.restore();
                        }
                    });
                }
            });

            // Son walking stride physics along the 3D road
            let sonX = -240;
            let message = "";
            
            if (phaseTime >= 0 && phaseTime < 3.0) {
                let p = phaseTime / 3.0;
                sonX = -240 + p * 90;
                message = "Dhanush starts schooling at RKR GRKS Matric School... 📚";
            } else if (phaseTime >= 3.0 && phaseTime < 6.0) {
                let p = (phaseTime - 3.0) / 3.0;
                sonX = -150 + p * 150;
                message = "Completed study at Nachimuthu Polytechnic College... ⚙️";
            } else if (phaseTime >= 6.0 && phaseTime < 9.0) {
                let p = (phaseTime - 6.0) / 3.0;
                sonX = 0 + p * 150;
                message = "Completed B.E. Computer Science & Engineering at Dr. MCET (CGPA: 7.6)! 🎓";
            } else {
                sonX = 150;
                message = "Education completed. Ready to build scalable software! 🚀";
            }

            let sonPt = project3D(sonX, 70, 0);
            if (sonPt.visible) {
                renderQueue.push({
                    rz: sonPt.rz,
                    draw: () => {
                        ctx.save();
                        ctx.globalAlpha = alpha;
                        let sScale = sonPt.projSize(1);
                        
                        ctx.translate(sonPt.x, sonPt.y);
                        ctx.fillStyle = "#34d399";
                        ctx.strokeStyle = "#34d399";
                        ctx.lineWidth = 2.5 * sScale;
                        
                        // Walking joint math
                        let stride = Math.sin(sonX * 0.12) * 6 * sScale;
                        ctx.beginPath();
                        ctx.moveTo(0, -10 * sScale);
                        ctx.lineTo(-stride, 0);
                        ctx.stroke();
                        
                        ctx.beginPath();
                        ctx.moveTo(0, -10 * sScale);
                        ctx.lineTo(stride, 0);
                        ctx.stroke();
                        
                        ctx.shadowColor = "#34d399";
                        ctx.shadowBlur = 8 * sScale;
                        ctx.beginPath();
                        ctx.ellipse(0, -14 * sScale, 4.5 * sScale, 6 * sScale, 0, 0, Math.PI * 2);
                        ctx.fill();
                        ctx.beginPath();
                        ctx.arc(0, -23 * sScale, 5 * sScale, 0, Math.PI * 2);
                        ctx.fill();
                        ctx.restore();

                        // HUD timeline text box
                        ctx.save();
                        ctx.globalAlpha = alpha;
                        ctx.fillStyle = "rgba(6, 182, 212, 0.15)";
                        ctx.strokeStyle = "#06b6d4";
                        ctx.lineWidth = 1;
                        ctx.fillRect(centerX - 150, centerY - 110, 300, 30);
                        ctx.strokeRect(centerX - 150, centerY - 110, 300, 30);

                        ctx.fillStyle = "#ffffff";
                        ctx.font = "bold 9.5px 'Inter', sans-serif";
                        ctx.textAlign = "center";
                        ctx.fillText(message, centerX, centerY - 92);
                        ctx.restore();

                        // Floating graduation achievement bubbles (Phase 9)
                        if (phaseTime >= 8.5) {
                            ctx.save();
                            let floatY = centerY - 140 - ((phaseTime - 8.5) * 12);
                            let floatAlpha = Math.max(0, 1.0 - (phaseTime - 8.5) / 1.5);
                            ctx.fillStyle = `rgba(52, 211, 153, ${floatAlpha})`;
                            ctx.font = "bold 11px 'Inter', sans-serif";
                            ctx.textAlign = "center";
                            ctx.fillText("B.E. CSE 🎓", centerX + 150 * sScale, floatY);
                            ctx.fillText("CGPA: 7.6 🌟", centerX + 150 * sScale, floatY - 14);
                            ctx.restore();
                        }
                    }
                });
            }
        }
        
        // Depth-Sort and render all elements (Painter's Algorithm)
        renderQueue.sort((a, b) => b.rz - a.rz);
        renderQueue.forEach(item => item.draw());
        
        requestAnimationFrame(animate);
    }

    resize();
    animate();
}

/* =====================================================
   SCROLL REVEAL ANIMATIONS
===================================================== */
function initScrollReveal() {
    const revealElements = document.querySelectorAll(".reveal");
    
    if (revealElements.length === 0) return;
    
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("revealed");
                // Stop observing once revealed to improve performance
                revealObserver.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: "0px 0px -40px 0px"
    });
    
    revealElements.forEach(el => revealObserver.observe(el));
}

/* =====================================================
   SMOOTH SCROLL FALLBACK
===================================================== */
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener("click", function(e) {
            const hrefAttr = this.getAttribute("href");
            if (hrefAttr === "#") return;
            
            e.preventDefault();
            const target = document.querySelector(hrefAttr);
            if (target) {
                const headerOffset = 90;
                const elementPosition = target.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                
                window.scrollTo({
                    top: offsetPosition,
                    behavior: "smooth"
                });
            }
        });
    });
}

/* =====================================================
   CHATBOT WIDGET LOGIC
===================================================== */
function initChatbot() {
    const chatToggle = document.getElementById("chatToggle");
    const chatbot = document.getElementById("chatbot");
    const closeChat = document.getElementById("closeChat");
    const userInput = document.getElementById("userInput");
    
    if (chatToggle && chatbot) {
        chatToggle.addEventListener("click", () => {
            chatbot.style.display = "flex";
            chatToggle.style.display = "none";
            
            // Scroll to bottom of chat
            const chatBody = document.getElementById("chat-body");
            if (chatBody) chatBody.scrollTop = chatBody.scrollHeight;
        });
    }
    
    if (closeChat && chatbot) {
        closeChat.addEventListener("click", () => {
            chatbot.style.display = "none";
            if (chatToggle) chatToggle.style.display = "flex";
        });
    }
    
    if (userInput) {
        userInput.addEventListener("keydown", (e) => {
            if (e.key === "Enter") {
                e.preventDefault();
                sendMessage();
            }
        });
    }
}

// Global Suggestion Handler
window.sendSuggested = function(option) {
    const input = document.getElementById("userInput");
    if (input) {
        input.value = option;
        sendMessage();
    }
};

window.sendMessage = function() {
    const input = document.getElementById("userInput");
    const chat = document.getElementById("chat-body");
    
    if (!input || !chat) return;
    
    const originalMessage = input.value.trim();
    if (originalMessage === "") return;
    
    const msg = originalMessage.toLowerCase();
    
    // Add user bubble
    chat.innerHTML += `<div class="user">${originalMessage}</div>`;
    chat.scrollTop = chat.scrollHeight;
    
    input.value = "";
    
    // Create a unique ID for this message's typing indicator
    const typingId = `typing-${Date.now()}`;
    
    // Add the typing indicator bubble
    chat.innerHTML += `
        <div class="bot typing-bubble" id="${typingId}">
            <span class="dot"></span>
            <span class="dot"></span>
            <span class="dot"></span>
        </div>
    `;
    chat.scrollTop = chat.scrollHeight;
    
    let reply = "";
    
    if (msg.includes("hi") || msg.includes("hello") || msg.includes("hey")) {
        const greetings = [
            "Hey there! 👋 A very warm welcome. I'm Dhanush's virtual assistant. How's your day going? What can I help you discover about him today?",
            "Hello! 😊 Thanks for dropping by. I can tell you all about Dhanush's projects, skills, certifications, or how to reach him directly. What are you curious about?",
            "Hi! 👋 Great to connect. I'm here to chat about Dhanush's technical work and experience. Ask me anything, or tap one of the suggestion chips below!"
        ];
        reply = greetings[Math.floor(Math.random() * greetings.length)];
    } else if (msg.includes("about") || msg.includes("profile") || msg.includes("dhanush")) {
        reply = "Dhanush is a driven Computer Science and Engineering graduate who absolutely loves solving real-world problems with software. 👨‍💻 He finished his B.E. at Dr. Mahalingam College of Engineering and Technology with a CGPA of 7.6. He focuses on Full Stack development, building interactive AI tools, and deployment on the cloud. He's a quick learner, details-driven, and excited to join collaborative tech teams! What else would you like to know?";
    } else if (msg.includes("skill")) {
        reply = "He's built up a really versatile developer toolkit! 💻 Here's a breakdown of what he works with:<br><br>" +
                "• <b>Frontend:</b> He loves creating rich UIs using React.js, JavaScript, HTML5, and CSS3.<br>" +
                "• <b>Backend:</b> Node.js, Express.js, and Java.<br>" +
                "• <b>Databases:</b> MongoDB (NoSQL) and MySQL (SQL).<br>" +
                "• <b>Systems & Version Control:</b> Git/GitHub, Linux, and computer networking.<br><br>" +
                "He's always happy to expand his stack and adapt to new technologies. Is there a specific stack you're looking for?";
    } else if (msg.includes("project")) {
        reply = "He's built some really interesting projects! 🚀 Here are three featured ones:<br><br>" +
                "1. <b>Flood Monitoring & Alert System:</b> An IoT-powered setup that tracks water levels and sends instant alerts.<br>" +
                "2. <b>OpsMind AI:</b> An intelligent SOP Search assistant built using RAG (Retrieval-Augmented Generation).<br>" +
                "3. <b>AdVantage Gen AI:</b> A generator tool that creates complete marketing assets from a single prompt.<br><br>" +
                "Which one of these would you like to hear more about? Just ask me (e.g. <i>'Tell me about OpsMind'</i>)!";
    } else if (msg.includes("opsmind")) {
        reply = "<b>OpsMind AI</b> is a really smart assistant! 🧠 Dhanush built it to solve the trouble of looking up details in long Standard Operating Procedure (SOP) files. He used a <b>RAG (Retrieval-Augmented Generation)</b> architecture. When a user asks a question, the backend retrieves relevant text chunks from the vector database and feeds them to an LLM to write a concise, context-aware answer. The UI is built in React and the backend is Python-based. It makes looking up corporate guidelines instant!";
    } else if (msg.includes("flood") || msg.includes("alert") || msg.includes("monitoring")) {
        reply = "The <b>Flood Monitoring & Alert System</b> is designed for public safety! 🌊 Dhanush combined <b>IoT hardware</b> (water level sensors, microcontrollers) with API services. It continuously tracks river/reservoir levels, and if they cross a predefined danger threshold, it instantly broadcasts warning alerts via SMS and Email using Twilio. It is a vital warning system built to aid disaster response.";
    } else if (msg.includes("advantage") || msg.includes("marketing") || msg.includes("ad")) {
        reply = "<b>AdVantage Gen AI</b> is built to supercharge content creators! 📣 Dhanush built this platform using <b>Next.js</b> for the frontend and <b>Node.js/Express.js</b> on the backend. By integrating LLM APIs (like OpenAI), a user can just type in their product name and target audience, and the app automatically generates high-performing ad copy, hashtags, target keywords, and even visual concepts. It makes launch planning a breeze!";
    } else if (msg.includes("internship") || msg.includes("experience") || msg.includes("work") || msg.includes("job")) {
        reply = "Dhanush has completed three hands-on internships to build his professional capabilities: <br><br>" +
                "• <b>Infotact Solutions:</b> Full Stack Development Intern (built web systems using React, Node.js, Express.js, and MongoDB).<br>" +
                "• <b>Skilled Answer Info Solutions:</b> Web Development Intern (worked on user feedback integration and cross-browser layouts).<br>" +
                "• <b>Nandha Info Tech:</b> Full Stack Developer Intern (collaborated in agile git sprints to deploy new user features).<br><br>" +
                "He knows how to work in teams, write clean code, and tackle bugs under pressure!";
    } else if (msg.includes("certificate") || msg.includes("certification")) {
        reply = "He sure does! Dhanush holds several professional credentials to validate his skills. 📜 Notable ones include:<br><br>" +
                "• <b>AWS Cloud Foundations:</b> Understanding cloud models, networking, databases, EC2 instances, and serverless compute.<br>" +
                "• <b>IoT & Web Development:</b> Practical training certificates in embedded system engineering and full-stack software development.<br><br>" +
                "Feel free to click 'View Credentials' on any of his certificate cards on the main page!";
    } else if (msg.includes("resume") || msg.includes("cv")) {
        reply = "Certainly! 📄 You can download Dhanush's complete resume by clicking the <b>Download Resume</b> button in the hero section at the top of the page. It's a clean PDF file with all his contact info, technical skill ratings, and full descriptions. Let me know if you have trouble finding it!";
    } else if (msg.includes("contact") || msg.includes("email") || msg.includes("reach") || msg.includes("phone")) {
        reply = "He would love to connect with you! 🤝 Here are his direct contact details:<br><br>" +
                "• 📧 <b>Email:</b> <a href='mailto:kumardhanush6494@gmail.com'>kumardhanush6494@gmail.com</a><br>" +
                "• 📱 <b>Phone:</b> <a href='tel:+918637431104'>+91 86374 31104</a><br>" +
                "• 💼 <b>LinkedIn:</b> Available on the Contact page, or search for <i>Dhanush Kumar M</i>!<br><br>" +
                "You can also use the contact form on the <b>Contact</b> page to send a message directly to his inbox.";
    } else if (msg.includes("thank") || msg.includes("great") || msg.includes("awesome") || msg.includes("cool")) {
        reply = "Aw, thank you! 😊 Happy to help! Dhanush is really friendly, so definitely consider shooting him an email or connecting on LinkedIn. Let me know if you want to chat about anything else!";
    } else {
        reply = "Hmm, I didn't quite catch that! 🤖 Since I'm a virtual assistant, my responses are based on key words. But I'd love to tell you more! Try asking me about:<br><br>" +
                "• His **skills** or **experience**<br>" +
                "• Particular **projects** (e.g. <i>OpsMind</i>, <i>Flood System</i>, or <i>AdVantage</i>)<br>" +
                "• His **resume** or **certifications**<br>" +
                "• How to **contact** him";
    }
    
    // Simulate a natural human typing delay (scales slightly with message length)
    const delay = Math.min(800 + msg.length * 10, 1600);
    
    setTimeout(() => {
        // Remove typing indicator bubble
        const indicator = document.getElementById(typingId);
        if (indicator) indicator.remove();
        
        // Append actual bot response
        chat.innerHTML += `<div class="bot">${reply}</div>`;
        chat.scrollTop = chat.scrollHeight;
    }, delay);
};

/* =====================================================
   CONTACT FORM SUBMIT HANDLER
===================================================== */
const contactForm = document.getElementById("contactForm");
if (contactForm) {
    contactForm.addEventListener("submit", function(e) {
        e.preventDefault();
        
        const submitBtn = this.querySelector(".send-btn");
        const btnText = submitBtn.querySelector("span");
        const btnIcon = submitBtn.querySelector("i");
        
        // Extract inputs
        const name = document.getElementById("formName").value;
        const email = document.getElementById("formEmail").value;
        const subject = document.getElementById("formSubject").value;
        const message = document.getElementById("formMessage").value;
        
        // Find selected radio button
        const selectedMethod = this.querySelector('input[name="contactMethod"]:checked').value;
        
        // Construct target action based on selection
        let redirectUrl = "";
        
        if (selectedMethod === "whatsapp") {
            const waMessage = `Hi Dhanush, my name is ${name} (Email: ${email}).\n\nSubject: ${subject}\n\nMessage: ${message}`;
            redirectUrl = `https://wa.me/918637431104?text=${encodeURIComponent(waMessage)}`;
        } else if (selectedMethod === "email") {
            const emailSubject = `Portfolio Contact: ${subject}`;
            const emailBody = `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`;
            redirectUrl = `mailto:kumardhanush6494@gmail.com?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;
        } else if (selectedMethod === "linkedin") {
            const copyText = `Hi Dhanush, my name is ${name}.\n\nSubject: ${subject}\n\nMessage: ${message}`;
            navigator.clipboard.writeText(copyText).then(() => {
                alert("Awesome! We've copied your message to the clipboard. Click OK to visit Dhanush's LinkedIn profile and paste it directly to connect!");
            }).catch(() => {
                alert("We will open Dhanush's LinkedIn profile now. Feel free to connect and send him a message!");
            });
            redirectUrl = "https://www.linkedin.com/in/dhanush-kumar-m-b19877295";
        }
        
        // Disable and show loading spinner
        submitBtn.disabled = true;
        btnText.textContent = "Connecting...";
        btnIcon.className = "fas fa-spinner fa-spin";
        
        setTimeout(() => {
            // Trigger connection redirect
            if (selectedMethod === "email") {
                window.location.href = redirectUrl;
            } else {
                window.open(redirectUrl, "_blank");
            }
            
            // Reset button
            submitBtn.disabled = false;
            btnText.textContent = "Send Message";
            btnIcon.className = "fas fa-paper-plane";
            
            contactForm.reset();
        }, 1200);
    });
}
