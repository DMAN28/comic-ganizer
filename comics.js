// Comic book list based on the provided grid
const comics = [
    {
        title: "New Mutants #98",
        year: "1991",
        image: "images/new_mutants_98.jpg", // Replace with actual image path
        price: 500,
        checked: false,
        notes: ""
    },
    {
        title: "Amazing Spider-Man #300",
        year: "1988",
        image: "images/amazing_spiderman_300.jpg",
        price: 500,
        checked: false,
        notes: ""
    },
    {
        title: "Batman #404",
        year: "1987",
        image: "images/batman_404.jpg",
        price: 150,
        checked: false,
        notes: ""
    },
    // Add all other comics here based on the list
];

// Load comics from localStorage if available
const savedComics = JSON.parse(localStorage.getItem("comics"));
if (savedComics) {
    comics.forEach((comic, index) => {
        comics[index] = { ...comic, ...savedComics[index] };
    });
}

document.addEventListener("DOMContentLoaded", function() {
    const comicList = document.getElementById("comic-list");

    comics.forEach((comic, index) => {
        const li = document.createElement("li");

        const img = document.createElement("img");
        img.src = comic.image;
        img.alt = comic.title;

        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.checked = comic.checked;
        checkbox.addEventListener("change", () => {
            comic.checked = checkbox.checked;
        });

        const title = document.createElement("span");
        title.textContent = `${comic.title} (${comic.year})`;

        const priceInput = document.createElement("input");
        priceInput.type = "number";
        priceInput.value = comic.price;
        priceInput.addEventListener("input", () => {
            comic.price = parseFloat(priceInput.value);
        });

        const notesInput = document.createElement("textarea");
        notesInput.placeholder = "Notes...";
        notesInput.value = comic.notes;
        notesInput.addEventListener("input", () => {
            comic.notes = notesInput.value;
        });

        li.appendChild(img);
        li.appendChild(checkbox);
        li.appendChild(title);
        li.appendChild(priceInput);
        li.appendChild(notesInput);
        comicList.appendChild(li);
    });
});

function saveSelections() {
    localStorage.setItem("comics", JSON.stringify(comics));
    alert("Selections saved!");
}
