"use client";

import { useState } from "react";
import DreamInput from "@/components/DreamInput";
import DreamInterpretation from "@/components/DreamInterpretation";
import DreamVisualization from "@/components/DreamVisualization";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import axios from "axios";

interface DreamIntepretationResponse {
  interpretation: string;
  imageUrl: string;
}

export default function DreamIt() {
  const [dreamDescription, setDreamDescription] = useState("");
  const [mood, setMood] = useState("");
  const [interpretation, setInterpretation] = useState("");
  const [style, setStyle] = useState("fantasy");
  const [imageUrl, setImageUrl] = useState("");

  const handleDreamSubmit = async (
    description: string,
    selectedMood: string
  ) => {
    if (!description) return;
    setInterpretation("");
    setImageUrl("");

    setDreamDescription(description);
    setMood(selectedMood);
    try {
      const response = await axios.post<DreamIntepretationResponse>(
        `${process.env.NEXT_PUBLIC_API_HOST}/api/interpret-dream`,
        {
          description,
          mood,
          style,
        }
      );

      setInterpretation(response.data.interpretation);
      setImageUrl(response.data.imageUrl);
    } catch (error) {
      console.error(error);
      alert("An error occurred during generation.");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-400 to-pink-500 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-white text-center mb-8">
          DreamIt - Imagining Your Dreams
        </h1>
        <Card>
          <CardContent className="p-6">
            <DreamInput onSubmit={handleDreamSubmit} />
            {interpretation && (
              <DreamInterpretation interpretation={interpretation} />
            )}
            {imageUrl && <DreamVisualization imageUrl={imageUrl} />}
            {(interpretation || imageUrl) && (
              <div className="mt-6 text-center">
                <Button
                  onClick={() => {
                    setInterpretation("");
                    setImageUrl("");
                  }}
                >
                  Start Over
                </Button>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
