export function parseAiResponse(content: string) {
  const jsonMatch = content.match(/```json\s*([\s\S]*?)\s*```/);
  if (!jsonMatch || jsonMatch.length < 2) {
    throw new Error('Failed to extract JSON from AI response');
  }

  try {
    return JSON.parse(jsonMatch[1]);
  } catch {
    throw new Error('Invalid JSON format in AI response');
  }
}
