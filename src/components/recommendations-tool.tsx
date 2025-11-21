"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { fetchPensionRecommendations } from "@/app/actions";
import { Loader2, Sparkles } from "lucide-react";

const formSchema = z.object({
  age: z.coerce.number().min(18, "Age must be at least 18.").max(100, "Age must be 100 or less."),
  income: z.coerce.number().min(0, "Income cannot be negative."),
  riskTolerance: z.enum(["low", "medium", "high"], {
    required_error: "You need to select a risk tolerance level.",
  }),
});

export default function RecommendationsTool() {
  const [recommendation, setRecommendation] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      age: 35,
      income: 60000,
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);
    setRecommendation(null);
    setError(null);
    const result = await fetchPensionRecommendations(values);
    if (result.success && result.data) {
      setRecommendation(result.data.recommendations);
    } else {
      setError(result.error || "An unexpected error occurred.");
    }
    setIsLoading(false);
  }

  return (
    <section id="recommendations" className="w-full py-12 md:py-24 lg:py-32 bg-secondary">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">AI-Powered Recommendations</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Answer a few simple questions and let our AI-driven tool provide you with a personalized pension plan suggestion.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-start gap-8 lg:grid-cols-2 lg:gap-12 mt-12">
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle>Your Financial Profile</CardTitle>
              <CardDescription>This information will help us tailor recommendations for you.</CardDescription>
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                  <FormField
                    control={form.control}
                    name="age"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Age</FormLabel>
                        <FormControl>
                          <Input type="number" placeholder="e.g., 35" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="income"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Annual Income (£)</FormLabel>
                        <FormControl>
                          <Input type="number" placeholder="e.g., 60000" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="riskTolerance"
                    render={({ field }) => (
                      <FormItem className="space-y-3">
                        <FormLabel>Risk Tolerance</FormLabel>
                        <FormControl>
                          <RadioGroup
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                            className="flex flex-col space-y-1"
                          >
                            <FormItem className="flex items-center space-x-3 space-y-0">
                              <FormControl>
                                <RadioGroupItem value="low" />
                              </FormControl>
                              <FormLabel className="font-normal">Low</FormLabel>
                            </FormItem>
                            <FormItem className="flex items-center space-x-3 space-y-0">
                              <FormControl>
                                <RadioGroupItem value="medium" />
                              </FormControl>
                              <FormLabel className="font-normal">Medium</FormLabel>
                            </FormItem>
                            <FormItem className="flex items-center space-x-3 space-y-0">
                              <FormControl>
                                <RadioGroupItem value="high" />
                              </FormControl>
                              <FormLabel className="font-normal">High</FormLabel>
                            </FormItem>
                          </RadioGroup>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button type="submit" className="w-full" disabled={isLoading}>
                    {isLoading ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Generating...
                      </>
                    ) : (
                      <>
                        <Sparkles className="mr-2 h-4 w-4" />
                        Get My Recommendation
                      </>
                    )}
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>
          <div className="flex items-center justify-center">
            <Card className="w-full bg-primary text-primary-foreground min-h-[300px] flex flex-col justify-center items-center p-6 shadow-lg transition-all duration-500">
              <CardHeader>
                <CardTitle className="text-center text-2xl flex items-center gap-2"><Sparkles /> Your Personal Recommendation</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow flex items-center justify-center">
                {isLoading && (
                  <div className="flex flex-col items-center gap-2 text-primary-foreground/70">
                    <Loader2 className="h-8 w-8 animate-spin" />
                    <p>Our AI is crafting your plan...</p>
                  </div>
                )}
                {error && <p className="text-destructive-foreground">{error}</p>}
                {recommendation && (
                  <p className="text-center text-lg animate-fade-in-up">{recommendation}</p>
                )}
                {!isLoading && !error && !recommendation && (
                  <p className="text-center text-primary-foreground/70">
                    Your personalized pension recommendation will appear here.
                  </p>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
