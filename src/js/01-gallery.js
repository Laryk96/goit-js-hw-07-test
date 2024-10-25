import { galleryItems } from './gallery-items.js'
// Change code below this line

const galleryListRef = document.querySelector('.gallery')

galleryListRef.innerHTML = createGalleryMarkup(galleryItems)
galleryListRef.addEventListener('click', handleSelectedItem)

function createGalleryMarkup(items) {
	return items
		.map(({ preview, original, description }) => {
			return `<li class='gallery__item'><a href='${original}'  class='gallery__link'><img src="${preview}" alt="${description}" data-src='${original}' class='gallery__image'></a></li>`
		})
		.join(' ')
}

function showTargetImg(target) {
	const {
		alt,
		dataset: { src },
	} = target

	const instance = basicLightbox.create(
		` <div><img src="${src}" alt="${alt}"></div>`,
		{
			onShow: instance => {
				const checkEscapeBtn = e => {
					const isEscape = e.code === 'Escape'

					if (!isEscape) {
						return
					}

					instance.close()
					window.removeEventListener('keydown', checkEscapeBtn)
				}

				window.addEventListener('keydown', checkEscapeBtn)
			},
		}
	)

	instance.show()
}

function handleSelectedItem(e) {
	e.preventDefault()

	const isImgTarget = e.target.nodeName === 'IMG'

	if (!isImgTarget) {
		return
	}

	showTargetImg(e.target)
}
