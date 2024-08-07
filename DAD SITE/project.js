// Modal functionality
const modal = document.getElementById("projectModal");
const modalImages = document.getElementById("modal-images");
const modalVideo = document.getElementById("modal-video");
const span = document.getElementsByClassName("close")[0];
document.getElementById("modal-video").muted = true;
const projects = {
    1: {
        images: ["photos/EinGedi/WhatsApp Image 2024-07-27 at 14.28.54.jpeg", "photos/EinGedi/WhatsApp Image 2024-07-27 at 14.28.54.jpeg", "photos/EinGedi/WhatsApp Image 2024-07-27 at 12.13.57 (1).jpeg", "photos/EinGedi/WhatsApp Image 2024-07-27 at 12.17.47.jpeg"],
        video: "photos/EinGedi/WhatsApp Video 2024-07-27 at 14.28.54.mp4"
    },
    2: {
        images: ["photos/Shfahim/WhatsApp Image 2024-07-19 at 22.43.58.jpeg", "photos/Shfahim/WhatsApp Image 2024-07-19 at 22.43.58 (1).jpeg", "photos/project2-3.jpg", "photos/project2-4.jpg"],
        video: "videos/project2.mp4"
    },
    3: {
        images: ["photos/project3-1.jpg", "photos/project3-2.jpg", "photos/project3-3.jpg", "photos/project3-4.jpg"],
        video: "videos/project3.mp4"
    },
    4: {
        images: ["photos/project4-1.jpg", "photos/project4-2.jpg", "photos/project4-3.jpg", "photos/project4-4.jpg"],
        video: "videos/project4.mp4"

    },
    5: {
        images: ["photos/project4-1.jpg", "photos/project4-2.jpg", "photos/project4-3.jpg", "photos/project4-4.jpg"],
        video: "videos/project4.mp4"
    },
    6: {
        images: ["photos/project4-1.jpg", "photos/project4-2.jpg", "photos/project4-3.jpg", "photos/project4-4.jpg"],
        video: "videos/project4.mp4"

    },
    7: {
        images: ["photos/project4-1.jpg", "photos/project4-2.jpg", "photos/project4-3.jpg", "photos/project4-4.jpg"],
        video: "videos/project4.mp4"

    },

};

document.querySelectorAll('.portfolio-item').forEach(item => {
    item.addEventListener('click', function () {
        const projectId = this.getAttribute('data-project');
        const project = projects[projectId];

        modalImages.innerHTML = project.images.map(src => `<img src="${src}" alt="Project Image" class="gallery-slide">`).join('');
        modalVideo.innerHTML = `<video controls src="${project.video}" class="gallery-slide"></video>`;

        slides = document.querySelectorAll('.gallery-slide');
        currentSlideIndex = 0;
        showSlide(currentSlideIndex);

        modal.style.display = "block";
    });
});

span.onclick = function () {
    modal.style.display = "none";
}

window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
