import { qaDatabase, botConfig } from '../../data/chatbotData';

export function getBotResponse(userInput) {
  const input = userInput.toLowerCase().trim();
  
  // Score each entry by counting trigger matches
  let bestMatch = null;
  let highestScore = 0;
  
  for (const entry of qaDatabase) {
    let score = 0;
    
    for (const trigger of entry.triggers) {
      const triggerLower = trigger.toLowerCase();
      
      // Exact match
      if (input.includes(triggerLower)) {
        score += 2;
      }
      // Partial match - check if trigger words appear in input
      else {
        const triggerWords = triggerLower.split(' ');
        const inputWords = input.split(' ');
        
        for (const word of triggerWords) {
          if (word.length > 2 && inputWords.some(inputWord => inputWord.includes(word))) {
            score += 0.5;
          }
        }
      }
      
      // Check if input words appear as substrings of triggers
      const inputWords = input.split(' ');
      for (const word of inputWords) {
        if (word.length > 3 && triggerLower.includes(word)) {
          score += 0.3;
        }
      }
    }
    
    if (score > highestScore) {
      highestScore = score;
      bestMatch = entry;
    }
  }
  
  // Return match if score is above threshold, otherwise fallback
  if (bestMatch && highestScore >= 1) {
    return { answer: bestMatch.answer, id: bestMatch.id };
  }
  
  return { answer: botConfig.fallback, id: 'fallback' };
}
