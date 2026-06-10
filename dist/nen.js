"use strict";
// Listing % for Nen type output
const affinities = {
    Enhancement: {
        Enhancement: 100,
        Emission: 80,
        Transmutation: 80,
        Manipulation: 60,
        Conjuration: 60,
        Specialization: 0
    },
    Emission: {
        Enhancement: 80,
        Emission: 100,
        Transmutation: 60,
        Manipulation: 80,
        Conjuration: 40,
        Specialization: 0
    },
    Transmutation: {
        Enhancement: 80,
        Emission: 60,
        Transmutation: 100,
        Manipulation: 40,
        Conjuration: 80,
        Specialization: 0
    },
    Manipulation: {
        Enhancement: 60,
        Emission: 80,
        Transmutation: 40,
        Manipulation: 100,
        Conjuration: 60,
        Specialization: 0
    },
    Conjuration: {
        Enhancement: 60,
        Emission: 40,
        Transmutation: 80,
        Manipulation: 60,
        Conjuration: 100,
        Specialization: 0
    },
    Specialization: {
        Enhancement: 0,
        Emission: 0,
        Transmutation: 0,
        Manipulation: 0,
        Conjuration: 0,
        Specialization: 100
    }
};
// Current Nen % (with no roll) is 0
let currentType = null;
// gets ID
const button = document.getElementById("button");
// gets classes
const enhancementPercent = document.querySelector(".enhancement-percent");
const emissionPercent = document.querySelector(".emission-percent");
const transmutationPercent = document.querySelector(".transmutation-percent");
const manipulationPercent = document.querySelector(".manipulation-percent");
const conjurationPercent = document.querySelector(".conjuration-percent");
const specializationPercent = document.querySelector(".specialization-percent");
// wWhen rolls, remove from all Nen circles the glow.
function clearGlows() {
    document.querySelectorAll(".nen").forEach(node => {
        node.classList.remove("glow-green");
        node.classList.remove("glow-yellow");
        node.classList.remove("glow-purple");
        node.classList.remove("glow-gray");
        node.classList.remove("glow-red");
        node.classList.remove("glow-blue");
    });
}
// Update the new % for the Nen type
function updatePercentages(type) {
    enhancementPercent.textContent =
        affinities[type].Enhancement + "%";
    emissionPercent.textContent =
        affinities[type].Emission + "%";
    transmutationPercent.textContent =
        affinities[type].Transmutation + "%";
    manipulationPercent.textContent =
        affinities[type].Manipulation + "%";
    conjurationPercent.textContent =
        affinities[type].Conjuration + "%";
    specializationPercent.textContent =
        affinities[type].Specialization + "%";
}
// Selects the glow for the Nen type that has been rolled
function glowSelectedType(type, element) {
    if (type === "Enhancement") {
        element.classList.add("glow-green");
    }
    if (type === "Emission") {
        element.classList.add("glow-yellow");
    }
    if (type === "Transmutation") {
        element.classList.add("glow-purple");
    }
    if (type === "Manipulation") {
        element.classList.add("glow-gray");
    }
    if (type === "Conjuration") {
        element.classList.add("glow-red");
    }
    if (type === "Specialization") {
        element.classList.add("glow-blue");
    }
}
// when clicked, it starts the function
button.addEventListener("click", () => {
    // all Nen types
    const types = [
        "Enhancement",
        "Emission",
        "Transmutation",
        "Manipulation",
        "Conjuration",
        "Specialization"
    ];
    // Randomoizer 
    const randomIndex = Math.floor(Math.random() * types.length);
    // select random the current Nen type
    currentType = types[randomIndex];
    // clears the glow from earlier nen types
    clearGlows();
    // selects the right Nen circle
    const selectedNen = document.querySelector(`[data-type="${currentType}"]`);
    // if selected, go on
    if (!selectedNen) {
        return;
    }
    // selects the right glow
    glowSelectedType(currentType, selectedNen);
    // Selects the right %
    updatePercentages(currentType);
    // remove the button, since it is a one time roll
    button.remove();
});
