const doctors = [
    {
        name: "Dr. Jan Kowalski",
        specialization: "Pediatra",
        image: "img/lek1.jpg",
        workingDays: ["poniedziałki 8:00-16:00", "wtorki 8:00-11:00"],
        availableDates: ["Brak terminów."],
        profileLink: "lekarz1.html"
    },
    {
        name: "Dr. Anna Nowak",
        specialization: "Pediatra",
        image: "img/lek2.jpg",
        workingDays: ["środy 13:00-17:00", "piątki 8:00-13:00"],
        availableDates: ["31.12.2023"],
        profileLink: "lekarz2.html"
    },
    {
        name: "Dr. Maria Wiśniewska",
        specialization: "Lekarz Rodzinny",
        image: "img/lek3.jpg",
        workingDays: ["środy 8:00-13:00","czwartki 8:00-16:00"],
        availableDates: ["30.12.2023"],
        profileLink: "lekarz3.html"

    },
    {
        name: "Dr. Piotr Nowak",
        specialization: "Lekarz Rodzinny",
        image: "img/lek4.jpg",
        workingDays: ["wtorki 10:00-16:00","czwartki: 13:00-17:00","piątki: 8:00-13:00"],
        availableDates: ["31.12.2023"],
        profileLink: "lekarz4.html"

    }
];

function renderDoctorCards() {
    const doctorList = document.getElementById("doctor-list");

    doctors.forEach(doctor => {
        const card = document.createElement("div");
        card.classList.add("doctor-card");

        const imageLink = document.createElement("a");
        imageLink.href = doctor.profileLink;
        const image = document.createElement("img");
        image.src = doctor.image;
        image.alt = doctor.name;
        image.classList.add("doctor-image");
        imageLink.appendChild(image);

        const name = document.createElement("h2");
        name.textContent = doctor.name;

        const specialization = document.createElement("p");
        specialization.textContent = doctor.specialization;

        const availability = document.createElement("p");
        availability.textContent = "Dni pracy: " + doctor.workingDays.join(", ");
        availability.textContent = "Terminy w tym tygodniu: " + doctor.availableDates.join(", ");

        card.appendChild(imageLink);
        card.appendChild(name);
        card.appendChild(specialization);
        card.appendChild(availability);

        doctorList.appendChild(card);
    });
}

renderDoctorCards();
