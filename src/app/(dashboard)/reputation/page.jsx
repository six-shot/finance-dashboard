import React from "react";
import {
  InformationIcon,
  SendSqaure2Icon,
} from "@gomah/vuesax-icons-react/linear";
import Image from "next/image";
import arrowcircle from "../../../../public/svgs/arrow-circle.svg";
export default function page() {
  const cardData = [
    {
      title: "Content creation",
      count: 20,
      subtitle: "Posts made this month",
      icon: <SendSqaure2Icon />,
    },
    {
      title: "Consistency",
      count: 5,
      subtitle: "Days active this week",
      icon: <SendSqaure2Icon />,
    },
    {
      title: "Engagement Rate",
      count: 5,
      subtitle: "People who engage with your content",
      icon: <SendSqaure2Icon />,
    },
    {
      title: "Quality Score",
      count: 5,
      subtitle: "Based on likes and comments received",
      icon: <SendSqaure2Icon />,
    },
  ];
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
              Reputation Dashboard
            </h5>
            <p className="text-white/80 text-base font-[family-name:var(--font-satoshi-normal)] leading-[20px]">
              Track your reputation and earnings multiplie
            </p>
          </div>
        </div>
        <div className="mt-6 ">
          <div className="w-full card-bg py-5 px-6">
            <div className="flex justify-between items-center">
              <div className="flex flex-col gap-[2px]">
                <h5 className="text-[#101828] font-[family-name:var(--font-satoshi-medium)] leading-[24px] text-[16px]">
                  Reputation Dashboard
                </h5>
                <div className="flex gap-1 items-center">
                  <p className="text-[#475467]  text-sm font-[family-name:var(--font-satoshi-medium)] leading-[20px]">
                    Higher reputation = higher earning
                  </p>
                  <div className="w-5 h-5 text-[#101828]">
                    <InformationIcon />
                  </div>
                </div>
              </div>
            </div>
            <button className="w-full h-[48px] px-3 flex justify-between items-center my-4 bg-[#101010] border border-[#ffffff36] rounded-[12px]">
              <div className="flex items-center gap-1">
                <h5 className="font-[family-name:var(--font-satoshi-bold)] text-base text-white leading-6">
                  380
                </h5>
                <p className="text-xs text-white/80 leding-5 font-[family-name:var(--font-satoshi-normal)]  ">
                  points
                </p>
              </div>
              <div className="flex items-center gap-1">
                <h5 className="font-[family-name:var(--font-satoshi-bold)] text-base text-white leading-6">
                  Silver
                </h5>
                <p className="text-xs text-white/80 leding-5 font-[family-name:var(--font-satoshi-normal)]  ">
                  Tier
                </p>
              </div>
              <div className="flex items-center gap-1">
                <h5 className="font-[family-name:var(--font-satoshi-bold)] text-base text-white leading-6">
                  2.5X
                </h5>
                <p className="text-xs text-white/80 leding-5 font-[family-name:var(--font-satoshi-normal)]  ">
                  Multiplier
                </p>
              </div>
            </button>
            <div>
              <div className="flex justify-between items-center">
                <h5 className="text-[#101828] text-sm font-[family-name:var(--font-satoshi-medium)] leading-[20px]">
                  Silver
                </h5>
                <h5 className="text-[#101828] text-sm font-[family-name:var(--font-satoshi-medium)] leading-[20px]">
                  Gold
                </h5>
              </div>
              <div className="w-full h-1.5 bg-[#ffffff]/20 rounded-full my-[6px]">
                <div
                  className="h-full bg-[#FF8935] rounded-full"
                  style={{ width: "80%" }}
                />
              </div>
              <h5 className="text-[#101828] text-xs font-[family-name:var(--font-satoshi-normal)] leading-[16px] ">
                150 points to Gold
              </h5>
            </div>
          </div>
          <div className="py-6 grid grid-cols-4 gap-4">
            {cardData.map((card, index) => (
              <div key={index} className="mini-card-bg">
                <div className="py-3 border-b border-[#e4e7ec14] px-4">
                  <div className="w-5 h-5">{card.icon}</div>
                </div>
                <div className="pt-3 pb-4 px-4 flex gap-1 flex-col">
                  <h5 className="text-white text-sm font-[family-name:var(--font-satoshi-medium)] leading-[20px]">
                    {card.title}
                  </h5>
                  <p className="text-white text-[20px] font-[family-name:var(--font-satoshi-bold)] leading-[29px]">
                    {card.count}
                  </p>
                  <p className="text-[#D0D5DD] text-xs font-[family-name:var(--font-satoshi-medium)]">
                    {card.subtitle}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <h5 className="text-[#ffffff] font-[family-name:var(--font-satoshi-medium)] leading-[24px] text-[16px]">
            Recent Contributions
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
