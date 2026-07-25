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


function handleFormSubmit(event) {
    event.preventDefault(); // Page refresh hone se rokta hai

    const toast = document.getElementById('successToast');
    
    // Toast ko screen par slide-down karein
    toast.classList.add('show');

    // Form clear karein
    document.getElementById('admissionForm').reset();

    // 4 seconds (4000ms) 
    setTimeout(() => {
        toast.classList.remove('show');
    }, 4000);
}

// Cross (X) icon par click 
function closeToast() {
    document.getElementById('successToast').classList.remove('show');
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

// contact form submit handle function

// Contact Form Submit Handler Function
function handleContactSubmit(event) {
    event.preventDefault(); // Default Page Reload ko Rokega

    const toast = document.getElementById('contactToast');
    const form = document.getElementById('contactForm');
    
    if (toast) {
        // Class add karke Toast dikhayein
        toast.classList.add('show');

        // Form fields clear karein (agar form element exit karta hai)
        if (form) {
            form.reset();
        }

        // 4 Second baad Toast ko automatic hide kar dein
        setTimeout(() => {
            toast.classList.remove('show');
        }, 4000);
    } else {
        console.error("Error: 'contactToast' element HTML mein nahi mila!");
    }
}

// Manual Close Toast Notification Function
function closeToast() {
    const toast = document.getElementById('contactToast');
    if (toast) {
        toast.classList.remove('show');
    }
}




 

