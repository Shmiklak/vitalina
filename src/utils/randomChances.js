export const chance = (percentage) => {
    if (percentage <= 0) return false;
    if (percentage >= 100) return true;

    const roll = Math.random() * 100;
    return roll < percentage;
}