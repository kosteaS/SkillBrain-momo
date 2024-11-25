const adviceIdElement = document.getElementById('advice-id');
const adviceTextElement = document.getElementById('advice-text');
const adviceButton = document.getElementById('generate-advice');

async function fetchAdvice() {
    const response = await fetch('https://api.adviceslip.com/advice');         
    const data = await response.json();
    const { slip } = data;

    try {
        adviceIdElement.textContent = slip.id;
        adviceTextElement.textContent = `"${slip.advice}"`;
    } catch (error) {
        adviceTextElement.textContent = "Oops! Something went wrong.";
        console.error("Error fetching advice:", error);
    }
}

adviceButton.addEventListener('click', fetchAdvice);

fetchAdvice();