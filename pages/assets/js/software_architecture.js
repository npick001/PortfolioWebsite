// Database of architectural details for each project
const architectureData = {
    portfolio: {
        title: "Portfolio Website Architecture",
        image: "/assets/images/PortfolioWebsiteArchitecture.png",
        content: `
            <p><strong>Overview:</strong> This website is served dynamically using the Drogon C++14/17/20 based HTTP application framework. It is designed for maximum throughput and minimal latency.</p>
            <ul>
                <li><strong>Backend:</strong> C++ Drogon Framework handling RESTful API routing and static file serving.</li>
                <li><strong>Frontend:</strong> Vanilla HTML/CSS/JS architecture (No heavy frameworks like React/Angular) for near-instant load times.</li>
                <li><strong>Deployment:</strong> Containerized via Docker and routed securely through a Cloudflare Zero Trust Tunnel.</li>
            </ul>
        `
    },
    cnn: {
        title: "Distributed CNN Training Architecture",
        image: "/assets/images/CNNTrainingArchitecture.png",
        content: `
            <p><strong>Overview:</strong> Designed to leverage High-Performance Computing (HPC) clusters to accelerate deep learning workflows.</p>
            <ul>
                <li><strong>Job Orchestration:</strong> SLURM workload manager allocates GPU resources across multiple distributed nodes.</li>
                <li><strong>Framework:</strong> PyTorch utilizing DistributedDataParallel (DDP) to synchronize gradients across GPUs.</li>
                <li><strong>Data Pipeline:</strong> Asynchronous data loading and pre-fetching to prevent GPU starvation during evaluation phases.</li>
            </ul>
        `
    },
    reactor: {
        title: "Reactor Control System Architecture",
        image: "/assets/images/ReactorControl.png",
        content: `
            <p><strong>Overview:</strong> A robust, fault-tolerant control loop managing volatile simulated fission reactions.</p>
            <ul>
                <li><strong>Controller:</strong> Written in Lua running on simulated ComputerCraft hardware.</li>
                <li><strong>Telemetry Loop:</strong> Continuously polls temperature, coolant levels, and burn rates every server tick.</li>
                <li><strong>Safety Interlocks:</strong> SCRAM protocols automatically deploy control rods if telemetry indicates a coolant deficit or temperature spike, preventing catastrophic failure.</li>
            </ul>
        `
    }
};

document.addEventListener('DOMContentLoaded', () => {
    const archButtons = document.querySelectorAll('.arch-toggle');
    const displayContainer = document.getElementById('architecture-display');
    const archTitle = document.getElementById('arch-title');
    const archContent = document.getElementById('arch-content');
    const closeBtn = document.getElementById('close-arch');

    // Attach click events to all "Software Architecture" buttons
    archButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            const projectKey = e.target.getAttribute('data-project');
            const data = architectureData[projectKey];

            if (data) {
                archTitle.innerText = data.title;
                
                // Build the image HTML if an image exists
                let imageHTML = '';
                if (data.image) {
                    imageHTML = `<img src="${data.image}" alt="${data.title} Diagram" class="arch-diagram">`;
                }

                // Inject BOTH the image and the text content
                archContent.innerHTML = imageHTML + data.content;

                // Show the container
                displayContainer.classList.remove('hidden');
                displayContainer.classList.add('visible');

                // Smooth scroll down to the architecture section
                displayContainer.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });

    // Close button logic
    closeBtn.addEventListener('click', () => {
        displayContainer.classList.remove('visible');
        displayContainer.classList.add('hidden');
    });

    const modal = document.getElementById('image-modal');
    const modalImg = document.getElementById('modal-image');
    const modalClose = document.querySelector('.modal-close');

    // Listen for clicks inside the architecture content area
    archContent.addEventListener('click', (e) => {
        // If the clicked element is an image with the class 'arch-diagram'
        if (e.target && e.target.classList.contains('arch-diagram')) {
            modal.classList.remove('hidden');
            modal.classList.add('visible');
            modalImg.src = e.target.src; // Copy the clicked image's source to the fullscreen modal
            document.body.style.overflow = 'hidden'; // Prevent scrolling the page while viewing the image
        }
    });

    // Close the modal when the "X" is clicked
    modalClose.addEventListener('click', () => {
        closeModal();
    });

    // Close the modal when clicking anywhere in the dark background
    modal.addEventListener('click', (e) => {
        if (e.target !== modalImg) { // Don't close if they clicked the image itself
            closeModal();
        }
    });

    // Helper function to handle closing
    function closeModal() {
        modal.classList.remove('visible');
        modal.classList.add('hidden');
        document.body.style.overflow = 'auto'; // Re-enable page scrolling
    }
});

