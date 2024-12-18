

document.addEventListener("DOMContentLoaded", function() {
    const input = document.getElementById("input");

    // Function to handle button clicks
    function PressButton(item) {
        input.value += item.innerHTML;
    }

    // Function to clear the input
    function ClearAll() {
        input.value = "";
    }

    // Function to calculate the result
    function Answer() {
        try {
            input.value = eval(input.value.replace(/✕/g, "*")); // Replace '✕' with '*' for multiplication
        } catch (error) {
            input.value = "Error";
        }
    }

    // Function to clear the last character
    function clearLast() {
        input.value = input.value.slice(0, -1);
    }

    // Attach event listeners to buttons
    document.querySelectorAll(".btn").forEach(button => {
        button.addEventListener("click", function() {
            if (this.innerHTML === "=") {
                Answer();
            } else if (this.innerHTML === "C") {
                ClearAll();
            } else if (this.innerHTML.includes("fa-backspace")) {
                clearLast();
            } else {
                PressButton(this);
            }
        });
    });

    // Handle keyboard input
    input.addEventListener("keypress", function(e) {
        if (e.key === "Enter") {
            Answer();
        } else {
            const invalidChars = /[^\d\+\-\*\/\%\.✕]/;
            if (invalidChars.test(e.key)) {
                e.preventDefault();
            }
        }
    });
});
