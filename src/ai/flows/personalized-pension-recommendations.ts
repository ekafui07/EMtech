'use server';

/**
 * @fileOverview Provides personalized pension plan recommendations based on user input.
 *
 * - getPersonalizedPensionRecommendations - A function that provides personalized pension plan recommendations.
 * - PersonalizedPensionRecommendationsInput - The input type for the getPersonalizedPensionRecommendations function.
 * - PersonalizedPensionRecommendationsOutput - The return type for the getPersonalizedPensionRecommendations function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const PersonalizedPensionRecommendationsInputSchema = z.object({
  age: z.number().describe('The user\'s age.'),
  income: z.number().describe('The user\'s annual income.'),
  riskTolerance: z
    .enum(['low', 'medium', 'high'])
    .describe('The user\'s risk tolerance.'),
});
export type PersonalizedPensionRecommendationsInput = z.infer<
  typeof PersonalizedPensionRecommendationsInputSchema
>;

const PersonalizedPensionRecommendationsOutputSchema = z.object({
  recommendations: z
    .string()
    .describe('Personalized pension plan recommendations.'),
});
export type PersonalizedPensionRecommendationsOutput = z.infer<
  typeof PersonalizedPensionRecommendationsOutputSchema
>;

export async function getPersonalizedPensionRecommendations(
  input: PersonalizedPensionRecommendationsInput
): Promise<PersonalizedPensionRecommendationsOutput> {
  return personalizedPensionRecommendationsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'personalizedPensionRecommendationsPrompt',
  input: {schema: PersonalizedPensionRecommendationsInputSchema},
  output: {schema: PersonalizedPensionRecommendationsOutputSchema},
  prompt: `You are an expert financial advisor specializing in pension plans.

Based on the user's age, income, and risk tolerance, provide personalized pension plan recommendations.

Age: {{{age}}}
Income: {{{income}}}
Risk Tolerance: {{{riskTolerance}}}

Recommendations:`,
});

const personalizedPensionRecommendationsFlow = ai.defineFlow(
  {
    name: 'personalizedPensionRecommendationsFlow',
    inputSchema: PersonalizedPensionRecommendationsInputSchema,
    outputSchema: PersonalizedPensionRecommendationsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
