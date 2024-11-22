
const buttons = document.querySelectorAll('.about-btn button');
const contents = document.querySelectorAll('.content');

buttons.forEach((button, index) => {
    button.addEventListener('click', () => {
        // Hide all contents
        contents.forEach(content => content.style.display = 'none');

        // Show the selected content
        contents[index].style.display = 'block';

        // Remove 'active' class from all buttons
        buttons.forEach(btn => btn.classList.remove('active'));

        // Add 'active' class to the clicked button
        button.classList.add('active');
    });
});



let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menuIcon.onclick = () => {
    menuIcon.classList.toggle("bx-x"); // Toggles between menu and close icon
    navbar.classList.toggle("active"); // Toggles the navbar visibility
};


document.getElementById('contactForm').addEventListener('submit', async function(e) {
    e.preventDefault();
    
    const formData = new FormData(this);
    const responseMessage = document.getElementById('responseMessage');
    
    try {
        const response = await fetch('http://localhost:3000/contact', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                name: formData.get('name'),
                email: formData.get('email'),
                message: formData.get('message')
            })
        });
        
        if (response.ok) {
            responseMessage.textContent = 'Thank you! Your message has been sent.';
            this.reset();
        } else {
            responseMessage.textContent = 'Something went wrong. Please try again later.';
        }
    } catch (error) {
        responseMessage.textContent = 'There was an error submitting the form.';
    }
});