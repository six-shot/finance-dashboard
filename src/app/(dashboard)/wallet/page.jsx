import React from "react";
import {
  InformationIcon,
} from "@gomah/vuesax-icons-react/linear";
import Image from "next/image";
import arrowcircle from "../../../../public/svgs/arrow-circle.svg";
import { Button } from "@/app/components/ui/button";
export default function page() {

  const activityData = [
    {
      icon: arrowcircle, // Replace with actual import
      title: "Posted original content",
      time: "5:42 AM",
      value: "=25",
      bgColor: "bg-[rgba(254,244,230,0.08)]",
    },
    {
      icon: arrowcircle, // Replace with actual import
      title: "Posted original content",
      time: "5:42 AM",
      value: "=25",
      bgColor: "bg-[rgba(254,244,230,0.08)]",
    },
    {
      icon: arrowcircle, // Replace with actual import
      title: "Posted original content",
      time: "5:42 AM",
      value: "=25",
      bgColor: "bg-[rgba(254,244,230,0.08)]",
    },
    {
      icon: arrowcircle, // Replace with actual import
      title: "Posted original content",
      time: "5:42 AM",
      value: "=25",
      bgColor: "bg-[rgba(254,244,230,0.08)]",
    },
    {
      icon: arrowcircle, // Replace with actual import
      title: "Posted original content",
      time: "5:42 AM",
      value: "=25",
      bgColor: "bg-[rgba(254,244,230,0.08)]",
    },
    {
      icon: arrowcircle, // Replace with actual import
      title: "Posted original content",
      time: "5:42 AM",
      value: "=25",
      bgColor: "bg-[rgba(254,244,230,0.08)]",
    },
    {
      icon: arrowcircle, // Replace with actual import
      title: "Posted original content",
      time: "5:42 AM",
      value: "=25",
      bgColor: "bg-[rgba(254,244,230,0.08)]",
    },
    {
      icon: arrowcircle, // Replace with actual import
      title: "Posted original content",
      time: "5:42 AM",
      value: "=25",
      bgColor: "bg-[rgba(254,244,230,0.08)]",
    },
    {
      icon: arrowcircle, // Replace with actual import
      title: "Posted original content",
      time: "5:42 AM",
      value: "=25",
      bgColor: "bg-[rgba(254,244,230,0.08)]",
    },
    {
      icon: arrowcircle, // Replace with actual import
      title: "Posted original content",
      time: "5:42 AM",
      value: "=25",
      bgColor: "bg-[rgba(254,244,230,0.08)]",
    },
  ];

  return (
    <div className="p-6 h-[100svh]">
      <div className="border border-[#ffffff0a] bg-[#101010] shadow-[0_0_0_2px_rgba(255,255,255,0.04)] w-full h-full rounded-[12px] p-6 overflow-y-auto scroll-container">
        <div className="flex justify-between items-center">
          <div className="flex flex-col gap-1">
            <h5 className="text-white text-[20px] font-[family-name:var(--font-satoshi-medium)] leading-[28px] ">
              Wallet
            </h5>
            <p className="text-white/80 text-base font-[family-name:var(--font-satoshi-normal)] leading-[20px]">
              Manage your REPT tokens
            </p>
          </div>
        </div>
        <div className="mt-6 ">
          <div className="w-full wallet-bg py-5 px-6">
            <div className="flex justify-between items-center">
              <div className="flex flex-col gap-[2px]">
                <h5 className="text-[#ffff] font-[family-name:var(--font-satoshi-medium)] leading-[24px] text-[16px]">
                  Token Balance
                </h5>
                <div className="flex gap-1 items-center">
                  <p className="text-[#ffffff]/80  text-sm font-[family-name:var(--font-satoshi-medium)] leading-[20px]">
                    Your earned REPT tokens
                  </p>
                  <div className="w-5 h-5 text-[#ffffff]">
                    <InformationIcon />
                  </div>
                </div>
              </div>
            </div>
            <div className="py-4">
              <h5 className="text-white text-[24px] font-[family-name:var(--font-satoshi-bold)] leading-[36px]">
                285.75 REPT
              </h5>
              <p className="text-white/80 font-[family-name:var(--font-satoshi-normal)] leading-[20px]">
                ≈ $142.88
              </p>
            </div>
            <div className="mt-4 flex items-center gap-4">
              <DepositButton />
              <WithdrawButton />
            </div>
          </div>
          <div className="pt-[35px] pb-6">
            <h5 className="text-[#ffffff] pb-6 font-[family-name:var(--font-satoshi-medium)] leading-[24px] text-[16px]">
              Staking
            </h5>
            <div className="bg-[#101010] border border-[rgba(240,242,245,0.08)] h-[254px] rounded-[12px] p-4">
              <div className="flex flex-col gap-[2px]">
                <h5 className="text-[#ffff] font-[family-name:var(--font-satoshi-medium)] leading-[24px] text-[16px]">
                  Reputation Boost
                </h5>
                <div className="flex gap-1 items-center">
                  <p className="text-[#ffffff]/80  text-sm font-[family-name:var(--font-satoshi-medium)] leading-[20px]">
                    Increase your reputation by staking token
                  </p>
                  <div className="w-5 h-5 text-[#ffffff]">
                    <InformationIcon />
                  </div>
                </div>
                <div className="py-4 grid grid-cols-3 gap-2">
                  <div className="w-full h-[104px] bg-[rgba(255,255,255,0.03)] rounded-lg  flex justify-center items-center flex-col gap-1">
                    <h5 className="text-white text-[18px] font-[family-name:var(--font-satoshi-bold)] leading-[28px]">
                      50 REPT
                    </h5>
                    <h6 className="text-[#ffffff]/80 text-sm font-[family-name:var(--font-satoshi-normal)] tracking-[-0.084px] leading-[20px]">
                      1.25x Boost
                    </h6>
                  </div>
                  <div className="w-full h-[104px] yellow-stake rounded-lg  flex justify-center items-center flex-col gap-1">
                    <h5 className="text-[#FF7F24] text-[18px] font-[family-name:var(--font-satoshi-bold)] leading-[28px]">
                      100 REPT
                    </h5>
                    <h6 className="text-[#ff7f24] text-sm font-[family-name:var(--font-satoshi-normal)] tracking-[-0.084px] leading-[20px]">
                      1.25x Boost
                    </h6>
                  </div>
                  <div className="w-full h-[104px] bg-[rgba(255,255,255,0.03)] rounded-lg  flex justify-center items-center flex-col gap-1">
                    <h5 className="text-white text-[18px] font-[family-name:var(--font-satoshi-bold)] leading-[28px]">
                      50 REPT
                    </h5>
                    <h6 className="text-[#ffffff]/80 text-sm font-[family-name:var(--font-satoshi-normal)] tracking-[-0.084px] leading-[20px]">
                      1.25x Boost
                    </h6>
                  </div>
                </div>
                <StakeButton/>
              </div>
            </div>
          </div>
          <h5 className="text-[#ffffff] font-[family-name:var(--font-satoshi-medium)] leading-[24px] text-[16px]">
            Transaction history
          </h5>
          <div className="flex flex-col gap-4 mt-[17px]">
            {activityData.map((item, index) => (
              <div
                key={index}
                className="w-full h-20 rounded border border-[rgba(240,242,245,0.08)] p-3 flex justify-between items-start"
              >
                <div className="flex items-center gap-6">
                  <div
                    className={`w-[56px] h-[56px] rounded ${item.bgColor} flex items-center justify-center`}
                  >
                    <Image src={item.icon} alt="activity-icon" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <h5 className="text-white text-base font-[family-name:var(--font-satoshi-medium)] leading-[22px]">
                      {item.title}
                    </h5>
                    <h5 className="text-white text-sm font-[family-name:var(--font-satoshi-medium)] leading-[16px]">
                      {item.time}
                    </h5>
                  </div>
                </div>
                <h5 className="font-[family-name:var(--font-inter)] font-semibold text-white text-[16px] leading-[22px]">
                  {item.value}
                </h5>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export function DepositButton({ isLoading }) {
  return (
    <Button type="submit" className=" w-full" disabled={isLoading}>
      Deposit
    </Button>
  );
}

export function WithdrawButton() {
  return (
    <Button type="submit" variant="secondary" className=" w-full">
     Withdraw
    </Button>
  );
}


export function StakeButton() {
  return (
    <Button type="submit" variant="secondary" className=" w-full">
      Stake
    </Button>
  );
}