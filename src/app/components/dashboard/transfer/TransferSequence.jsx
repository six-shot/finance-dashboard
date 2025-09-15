"use client";

import React, { useState } from "react";
import RecipientSelection from "./steps/RecipientSelection";
import MethodDetails from "./steps/MethodDetails";
import SourceAmount from "./steps/SourceAmount";
import TransferSummary from "./steps/TransferSummary";
import { CaretLeft } from "../../ui/jsx/icons";

const TransferSequence = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [transferData, setTransferData] = useState({
    recipient: null,
    paymentMethod: null,
    bankDetails: null,
    fundingSource: null,
    amount: "",
    description: "",
    isRecurring: false,
  });

  const steps = [
    { id: 1, title: "Recipient Selection", component: RecipientSelection },
    { id: 2, title: "Method & Details", component: MethodDetails },
    { id: 3, title: "Source & Amount", component: SourceAmount },
    { id: 4, title: "Transfer Summary", component: TransferSummary },
  ];

  const handleNext = () => {
    if (currentStep < steps.length) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleStepClick = (stepId) => {
    if (stepId <= currentStep) {
      setCurrentStep(stepId);
    }
  };

  const updateTransferData = (newData) => {
    setTransferData((prev) => ({ ...prev, ...newData }));
  };

  const CurrentStepComponent = steps[currentStep - 1].component;

  return (
    <div className="min-h-screen flex justify-center font-[family-name:var(--font-inter)] p-2">
      <div className="flex max-w-6xl w-full bg-white rounded-2xl overflow-hidden">
        {/* Left Sidebar - Transfer Sequence */}
        <div className="w-[264px] rounded-[16px] bg-[#F5F7FA] py-6 px-4 flex flex-col">
          <div className="mb-3">
            <h2 className="text-xs font-medium leading-4 text-[#99A0AE] uppercase tracking-[0.48px]">
              Transfer Sequence
            </h2>
          </div>

          <div className="flex-1 space-y-2">
            {steps.map((step, index) => (
              <div
                key={step.id}
                className={`flex items-center justify-between h-[36px] px-2 rounded-[10px] cursor-pointer transition-all ${
                  currentStep === step.id
                    ? "bg-white shadow-[0_1px_2px_0_rgba(10,_13,_20,_0.03)]"
                    : "hover:bg-white hover:shadow-[0_1px_2px_0_rgba(10,_13,_20,_0.03)]"
                }`}
                onClick={() => handleStepClick(step.id)}
              >
                <div className="flex items-center  gap-2.5">
                  <div
                    className={`w-5 h-5 rounded-full flex items-center justify-center text-xs font-medium ${
                      currentStep > step.id
                        ? "bg-[#1FC16B] text-white"
                        : currentStep === step.id
                        ? "bg-[#335CFF] text-white"
                        : "bg-white text-[#525866] shadow-[0_1px_2px_0_rgba(10,_13,_20,_0.03)]"
                    }`}
                  >
                    {currentStep > step.id ? (
                      <svg
                        className="w-4 h-4"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    ) : (
                      step.id
                    )}
                  </div>
                  <span
                    className={`text-sm leading-5 tracking-[-0.084px] ${
                      currentStep === step.id
                        ? "text-[#0E121B] "
                        : currentStep > step.id
                        ? "text-gray-700"
                        : "text-gray-500"
                    }`}
                  >
                    {step.title}
                  </span>
                </div>
                {currentStep === step.id && (
                  <div>
                    {" "}
                    <CaretLeft />
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Help Section */}
          <div className="mt-8 space-y-4">
            <div className="text-sm text-gray-600">
              Having trouble with transfer?
            </div>
            <button className="w-full bg-white border border-gray-300 rounded-lg px-4 py-2 flex items-center justify-center space-x-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              <span>Contact</span>
            </button>
            <div className="text-xs text-gray-500 text-center">
              © 2023 Apex Financial
            </div>
          </div>
        </div>

        {/* Right Content Area */}
        <div className="flex-1 bg-white relative">
          <CurrentStepComponent
            transferData={transferData}
            updateTransferData={updateTransferData}
            onNext={handleNext}
            onBack={handleBack}
            currentStep={currentStep}
            totalSteps={steps.length}
          />
        </div>
      </div>
    </div>
  );
};

export default TransferSequence;
