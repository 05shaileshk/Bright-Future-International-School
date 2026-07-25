// javascript to handle mobile menu

 const menuBtn = document.getElementById('menuBtn');
 const navBar = document.getElementById('navBar');

     menuBtn.addEventListener('click', () => {
      navBar.classList.toggle('active');
            
    // Icon transformation (Bars to Cross mark)
    const icon = menuBtn.querySelector('i');
     if (navBar.classList.contains('active')) {
          icon.classList.replace('fa-bars', 'fa-times');
            } else {
                icon.classList.replace('fa-times', 'fa-bars');
            }
        });
// Academics tabs system logic

function openTab(evt, tabName) {
            const tabContent = document.getElementsByClassName("tab-content");
            for (let i = 0; i < tabContent.length; i++) {
                tabContent[i].classList.remove("active");
            }

            const tabButtons = document.getElementsByClassName("tab-btn");
            for (let i = 0; i < tabButtons.length; i++) {
                tabButtons[i].classList.remove("active");
            }

            document.getElementById(tabName).classList.add("active");
            evt.currentTarget.classList.add("active");
        }

// Admission Form Submit Handler
function handleFormSubmit(event) {
    if (event) event.preventDefault(); // Page reload rokega

    const toast = document.getElementById('successToast');
    const form = document.getElementById('admissionForm');
    
    if (toast) {
        // Forcefully CSS styles aur show class apply karein
        toast.style.display = "flex"; 
        toast.style.opacity = "1";
        toast.style.visibility = "visible";
        toast.style.transform = "translateY(0)";
        toast.classList.add('show');

        // Form ko clear karein
        if (form) form.reset();

        // 4 Second baad toast ko automatic hide karein
        setTimeout(() => {
            toast.classList.remove('show');
            toast.style.opacity = "0";
            toast.style.visibility = "hidden";
            toast.style.transform = "translateY(-20px)";
        }, 4000);
    } else {
        console.error("Error: successToast element nahi mila!");
    }
}

//    

        // 2. Lightbox Open
        function openLightbox(imgSrc, captionText) {
            const modal = document.getElementById('lightboxModal');
            const modalImg = document.getElementById('lightboxImg');
            const caption = document.getElementById('lightboxCaption');

            modal.style.display = 'flex';
            modalImg.src = imgSrc;
            caption.innerText = captionText;
        }

        // 3. Lightbox Close
        function closeLightbox() {
            document.getElementById('lightboxModal').style.display = 'none';
        }

        // Keyboard 'Esc' key event for Lightbox close
        window.addEventListener('keydown', function(e) {
            if (e.key === 'Escape') {
                closeLightbox();
            }
        });

        // 4. Category Filter Functionality
        function filterGallery(event, category) {
            // Button active status change
            const buttons = document.querySelectorAll('.filter-btn');
            buttons.forEach(btn => btn.classList.remove('active'));
            event.target.classList.add('active');

            // Image Filtering logic
            const items = document.querySelectorAll('.gallery-item');
            items.forEach(item => {
                if (category === 'all' || item.classList.contains(category)) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
        } 

function handleContactSubmit(event) {
    if (event) event.preventDefault();

    const toast = document.getElementById('contactToast');
    const form = document.getElementById('contactForm');
    
    if (toast) {
        // Forcefully CSS styles aur show class apply karein
        toast.style.display = "flex";
        toast.style.opacity = "1";
        toast.style.visibility = "visible";
        toast.style.transform = "translateY(0)";
        toast.classList.add('show');

        if (form) form.reset();

        setTimeout(() => {
            toast.classList.remove('show');
            toast.style.opacity = "0";
            toast.style.visibility = "hidden";
            toast.style.transform = "translateY(-20px)";
        }, 4000);
    } else {
        console.error("Error: contactToast element nahi mila!");
    }
}

// Manual Close Function (Dono Toast ke liye)
function closeToast() {
    const successToast = document.getElementById('successToast');
    const contactToast = document.getElementById('contactToast');
    
    [successToast, contactToast].forEach(toast => {
        if (toast) {
            toast.classList.remove('show');
            toast.style.opacity = "0";
            toast.style.visibility = "hidden";
            toast.style.transform = "translateY(-20px)";
        }
    });
}




 

