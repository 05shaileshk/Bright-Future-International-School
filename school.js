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
    if (event) event.preventDefault(); // Default reload rokega

    const form = document.getElementById('admissionForm');
    const toast = document.getElementById('successToast');

    // 1. Browser ki HTML5 native validation manually check karein
    // Agar koi required field khali hai, toh ye submit ko yahin rok dega
    if (form && !form.checkValidity()) {
        form.reportValidity(); // Khali fields par browser ka default alert dikhayega
        return false;
    }

    // 2. Agar sab sahi bhara hai, tabhi ye success message chalega
    if (toast) {
        toast.style.display = "flex"; 
        toast.style.opacity = "1";
        toast.style.visibility = "visible";
        toast.style.transform = "translateY(0)";
        toast.classList.add('show');

        // Form clear karein
        if (form) form.reset();

        // 4 Second baad toast hide karein
        setTimeout(() => {
            toast.classList.remove('show');
            toast.style.opacity = "0";
            toast.style.visibility = "hidden";
            toast.style.transform = "translateY(-20px)";
        }, 4000);
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

// Contact Form Submit Handler


function handleContactSubmit(event) {
    if (event) event.preventDefault();

    const form = document.getElementById('contactForm');
    const toast = document.getElementById('contactToast');

    // 1. Manually check required fields
    if (form && !form.checkValidity()) {
        form.reportValidity();
        return false;
    }

    // 2. Show Success Message
    if (toast) {
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
    }
}


 

