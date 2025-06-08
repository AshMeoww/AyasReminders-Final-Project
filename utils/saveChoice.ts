export type EcoChoice = {
    id: string;
    water: number;
    carbon: number;
    waste: number;
  };
  
  export function saveChoice(choice: EcoChoice) {
    const prev = JSON.parse(localStorage.getItem("eco-choices") || "[]");
    const updated = [...prev, choice];
    localStorage.setItem("eco-choices", JSON.stringify(updated));
  }
  
  export function getEcoChoices(): EcoChoice[] {
    return JSON.parse(localStorage.getItem("eco-choices") || "[]");
  }
  
  export function resetEcoChoices() {
    localStorage.removeItem("eco-choices");
  }