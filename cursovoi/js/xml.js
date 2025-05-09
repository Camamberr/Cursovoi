document.addEventListener('DOMContentLoaded', function() {
    function loadXML(url, callback) {
        const xhr = new XMLHttpRequest();
        xhr.open('GET', url, true);
        xhr.overrideMimeType('application/xml'); 

        xhr.onload = function() {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    callback(xhr.responseXML);
                } else {
                    console.error('Error loading XML:', xhr.statusText);
                }
            }
        };

        xhr.onerror = function() {
            console.error('Network error while loading XML.');
        };

        xhr.send();
    }

    function processXML(xmlDoc) {
        const gallerySection = document.querySelector('section.gallery'); 

        if (!gallerySection) {
            console.error('Error: <section class="gallery"> not found in the document.');
            return;
        }

        const galleryElement = document.createElement('div');
        galleryElement.classList.add('gallery');

        const artworks = xmlDoc.querySelectorAll('artwork');

        artworks.forEach(artwork => {
            const artworkElement = document.createElement('div');
            artworkElement.classList.add('artwork');

            const imgElement = document.createElement('img');
            imgElement.src = artwork.querySelector('img').getAttribute('src');
            imgElement.alt = artwork.querySelector('img').getAttribute('alt');

            const descriptionElement = document.createElement('div');
            descriptionElement.classList.add('description');

            const artistElement = document.createElement('div');
            artistElement.classList.add('artist');
            artistElement.textContent = artwork.querySelector('description > artist').textContent; 

            const titleElement = document.createElement('div');
            titleElement.classList.add('title');
            titleElement.textContent = artwork.querySelector('description > title').textContent; 

            descriptionElement.appendChild(artistElement);
            descriptionElement.appendChild(titleElement);

            artworkElement.appendChild(imgElement);
            artworkElement.appendChild(descriptionElement);

            galleryElement.appendChild(artworkElement);
        });

        gallerySection.appendChild(galleryElement);
    }

    loadXML('xml/xml.xml', processXML);
});