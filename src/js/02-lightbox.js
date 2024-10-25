import { galleryItems } from './gallery-items.js'
// Change code below this line

const galleryListRef = document.querySelector('.gallery')
galleryListRef.innerHTML = createGalleryMarkup(galleryItems)

function createGalleryMarkup(items) {
	return items
		.map(({ preview, original, description }) => {
			return `<li class="gallery__item">
   <a class="gallery__link" href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description}" />
   </a>
</li>`
		})
		.join(' ')
}

let gallery = new SimpleLightbox('.gallery__link', {
	captionsData: 'alt',
	captionPosition: 'bottom',
	captionDelay: 250,
})

console.log(gallery)
