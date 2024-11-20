"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Check, AlertCircle, ChevronDown } from "lucide-react";
import type { Product } from "@/types/product";

interface CollapsibleSectionProps {
  title: string;
  isOpen: boolean;
  onToggle: () => void;
  children: React.ReactNode;
}

function CollapsibleSection({ title, isOpen, onToggle, children }: CollapsibleSectionProps) {
  return (
    <div className="border-b last:border-b-0">
      <button
        onClick={onToggle}
        className="flex items-center justify-between w-full py-4 px-6 text-left"
      >
        <h2 className="text-xl font-semibold">{title}</h2>
        <ChevronDown className={`h-5 w-5 transition-transform ${isOpen ? 'transform rotate-180' : ''}`} />
      </button>
      {isOpen && (
        <div className="px-6 pb-6">
          {children}
        </div>
      )}
    </div>
  );
}

export function ProductDetails({ product }: { product: Product }) {
  const [openSections, setOpenSections] = useState({
    highlights: true, // Open by default
    overview: false,
    specifications: false,
  });

  const toggleSection = (section: keyof typeof openSections) => {
    setOpenSections(prev => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  return (
    <Card className="mb-12">
      <CollapsibleSection
        title="What We Love / What to Consider"
        isOpen={openSections.highlights}
        onToggle={() => toggleSection('highlights')}
      >
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4 flex items-center">
              <Check className="h-5 w-5 text-emerald-600 mr-2" />
              What We Love
            </h3>
            <ul className="space-y-3">
              {product.highlights.loves.map((point, index) => (
                <li key={index} className="flex items-start">
                  <span className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0 mr-3 mt-0.5">
                    <Check className="h-4 w-4 text-emerald-600" />
                  </span>
                  <span className="text-muted-foreground">{point}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4 flex items-center">
              <AlertCircle className="h-5 w-5 text-slate-500 mr-2" />
              What to Consider
            </h3>
            <ul className="space-y-3">
              {product.highlights.considers.map((point, index) => (
                <li key={index} className="flex items-start">
                  <span className="w-6 h-6 rounded-full bg-slate-100 flex items-center justify-center flex-shrink-0 mr-3 mt-0.5">
                    <AlertCircle className="h-4 w-4 text-slate-500" />
                  </span>
                  <span className="text-muted-foreground">{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </CollapsibleSection>

      <CollapsibleSection
        title="Product Overview"
        isOpen={openSections.overview}
        onToggle={() => toggleSection('overview')}
      >
        <div className="space-y-4">
          <p className="text-muted-foreground leading-relaxed">
            {product.overview}
          </p>
        </div>
      </CollapsibleSection>

      <CollapsibleSection
        title="Technical Specifications"
        isOpen={openSections.specifications}
        onToggle={() => toggleSection('specifications')}
      >
        <dl className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {Object.entries(product.specifications).map(([key, value]) => (
            <div key={key} className="border rounded-lg p-4">
              <dt className="font-medium text-muted-foreground mb-1">{key}</dt>
              <dd className="text-lg">{value}</dd>
            </div>
          ))}
        </dl>
      </CollapsibleSection>
    </Card>
  );
}