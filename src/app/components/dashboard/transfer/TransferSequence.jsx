"use client";

import React, { useState } from "react";
import RecipientSelection from "./steps/RecipientSelection";
import MethodDetails from "./steps/MethodDetails";
import SourceAmount from "./steps/SourceAmount";
import TransferSummary from "./steps/TransferSummary";
import { CaretLeft } from "../../ui/jsx/icons";
import { Button } from "../../ui/button";

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
          <div className="">
            <div className="text-sm text-[#525866] leading-5 tracking-[-0.084px] text-center">
              Having trouble with transfer?
            </div>
            <Button
              variant="outline"
              className="w-full flex justify-center items-center mt-4 mb-3"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="21"
                height="20"
                viewBox="0 0 21 20"
                fill="none"
              >
                <path
                  d="M10.5 4C8.9087 4 7.38258 4.63214 6.25736 5.75736C5.13214 6.88258 4.5 8.4087 4.5 10H6.75C7.14782 10 7.52936 10.158 7.81066 10.4393C8.09196 10.7206 8.25 11.1022 8.25 11.5V15.25C8.25 15.6478 8.09196 16.0294 7.81066 16.3107C7.52936 16.592 7.14782 16.75 6.75 16.75H4.5C4.10218 16.75 3.72064 16.592 3.43934 16.3107C3.15804 16.0294 3 15.6478 3 15.25V10C3 5.85775 6.35775 2.5 10.5 2.5C14.6423 2.5 18 5.85775 18 10V15.25C18 15.6478 17.842 16.0294 17.5607 16.3107C17.2794 16.592 16.8978 16.75 16.5 16.75H14.25C13.8522 16.75 13.4706 16.592 13.1893 16.3107C12.908 16.0294 12.75 15.6478 12.75 15.25V11.5C12.75 11.1022 12.908 10.7206 13.1893 10.4393C13.4706 10.158 13.8522 10 14.25 10H16.5C16.5 8.4087 15.8679 6.88258 14.7426 5.75736C13.6174 4.63214 12.0913 4 10.5 4ZM4.5 11.5V15.25H6.75V11.5H4.5ZM14.25 11.5V15.25H16.5V11.5H14.25Z"
                  fill="#525866"
                />
              </svg>
              <span>Contact</span>
            </Button>
            <div className="text-xs text-[#99A0AE] text-center">
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
