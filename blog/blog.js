const articles = [
{
id: 1,
title: "Septimus Heap Book One: Magyk",
date: "July 5, 2022",
description:
"If you enjoy stories about seventh sons of seventh sons and magyk this is the book for you.",
imgSrc: "https://upload.wikimedia.org/wikipedia/en/5/5f/Magkycover2.jpg",
imgAlt: "Book cover for Septimus Heap 1",
ages: "10-14",
genre: "Fantasy",
stars: "****"
},
{
id: 2,
title: "Magnus Chase Book One: Sword of Summer",
date: "December 12, 2021",
description:
"The anticipated new novel by Rick Riordan. After Greek mythology (Percy Jackson), Greek/Roman (Heroes of Olympus), and Egyptian (Kane Chronicles), Rick decides to try his hand with Norse Mythology, and the end result is good.",
imgSrc:
"https://books.google.com/books/content/images/frontcover/xWuyBAAAQBAJ?fife=w300",
imgAlt: "Book cover for Magnus Chase 1",
ages: "12-16",
genre: "Fantasy",
stars: "⭐⭐⭐⭐"
},
{
id: 3,
title: "Belgariad Book One: Pawn of Prophecy",
date: "Feb 12, 2022",
description:
"A fierce dispute among the Gods and the theft of a powerful Orb leaves the World divided into five kingdoms. Young Garion, with his 'Aunt Pol' and an elderly man calling himself Wolf --a father and daughter granted near-immortality by one of the Gods -- set out on a complex mission.",
imgSrc:
"https://images-na.ssl-images-amazon.com/images/I/41ZxXA+nInL.jpg",
imgAlt: "Book cover for Pawn of Prophecy",
ages: "12-16",
genre: "Fantasy",
stars: "⭐⭐⭐⭐⭐"
}
];

const mainContent = document.querySelector(".main-content")

function displayArticles() {
	articles.forEach(item => {
		const newDiv1 = document.createElement("div")
		newDiv1.classList.add("book-info")

		newDiv1.innerHTML = `
			<div>
				<h2>${item.date}</h2>
				<h3>${item.ages}</h3>
				<h3>${item.genre}</h3>
				<p>${item.stars}</p>
			</div>`

		mainContent.appendChild(newDiv1)
		
		const newDiv2 = document.createElement("div")
		newDiv2.classList.add("book")

		newDiv2.innerHTML = `
			<div>    
				<h2>${item.title}</h2>
				<img src="${item.imgSrc}" alt="${item.imgAlt}" width="250px">
				<p>${item.description}</p>
			</div>`

		mainContent.appendChild(newDiv2)
		
		const newDiv3 = document.createElement("div")
		newDiv3.classList.add("filter")

		newDiv3.innerHTML = `
			<div>
                <p></p>
            </div>`

		mainContent.appendChild(newDiv3)
	})
}

displayArticles()