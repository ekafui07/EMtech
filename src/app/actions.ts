'use server';

import { getPersonalizedPensionRecommendations, type PersonalizedPensionRecommendationsInput } from "@/ai/flows/personalized-pension-recommendations";

export async function fetchPensionRecommendations(input: PersonalizedPensionRecommendationsInput) {
    try {
        // Add a delay to simulate a network request
        await new Promise(resolve => setTimeout(resolve, 1500));
        const result = await getPersonalizedPensionRecommendations(input);
        return { success: true, data: result };
    } catch (error) {
        console.error(error);
        const errorMessage = error instanceof Error ? error.message : "An unknown error occurred.";
        return { success: false, error: `Failed to get recommendations: ${errorMessage}` };
    }
}
