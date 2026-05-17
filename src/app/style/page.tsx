"use client";

import { PageLayout } from "@/components/PageLayout";
import { StyleWizard } from "@/components/StyleWizard/StyleWizard";
import {
  DEFAULT_STYLE_CONFIG,
  encodeStyleConfig,
  type StyleConfig,
} from "@/styles";
import type { ModelId } from "@/types/generation";
import type { NextPage } from "next";
import { useRouter, useSearchParams } from "next/navigation";
import { Suspense, useState } from "react";

function StylePageContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const prompt = searchParams.get("prompt") || "";
  const model = (searchParams.get("model") || "gpt-5.2:low") as ModelId;

  const [isNavigating, setIsNavigating] = useState(false);

  const handleSubmit = (config: StyleConfig) => {
    setIsNavigating(true);
    const encoded = encodeStyleConfig(config);
    const params = new URLSearchParams({
      prompt,
      model,
      style: encoded,
    });
    router.push(`/generate?${params.toString()}`);
  };

  if (!prompt) {
    return (
      <PageLayout>
        <div className="flex flex-col items-center justify-center flex-1 px-4">
          <p className="text-muted-foreground">
            No prompt provided.{" "}
            <a href="/" className="text-accent underline">
              Go back
            </a>{" "}
            to enter a prompt first.
          </p>
        </div>
      </PageLayout>
    );
  }

  return (
    <PageLayout showLogoAsLink>
      <div className="flex-1 px-8 py-8 max-w-5xl mx-auto w-full">
        <div className="mb-6">
          <div className="text-xs text-muted-foreground mb-1">Your prompt</div>
          <p className="text-base text-foreground font-medium line-clamp-2">
            {prompt}
          </p>
        </div>

        <StyleWizard
          initialConfig={DEFAULT_STYLE_CONFIG}
          onSubmit={handleSubmit}
        />
      </div>
    </PageLayout>
  );
}

const StylePage: NextPage = () => {
  return (
    <Suspense
      fallback={
        <PageLayout>
          <div className="flex flex-col items-center justify-center flex-1">
            <p className="text-muted-foreground">Loading...</p>
          </div>
        </PageLayout>
      }
    >
      <StylePageContent />
    </Suspense>
  );
};

export default StylePage;
