import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";

/**
 * ReusableTabs - A clean tabs component where you can add your own content and styling
 *
 * @param {Array} tabs - Array of tab objects with name and content
 * @param {string} className - Custom className for the main container
 * @param {string} tabListClassName - Custom className for the tab list
 * @param {string} tabClassName - Custom className for individual tabs
 * @param {string} tabPanelClassName - Custom className for tab panels
 * @param {string} tabPanelsClassName - Custom className for the tab panels container
 * @param {object} customStyles - Custom inline styles for different parts
 */
export default function ReusableTabs({
  tabs = [],
  className = "",
  tabListClassName = "flex gap-2 bg-[rgba(255,255,255,0.05)] w-full h-[40px] rounded-lg border border-[rgba(234,236,240,0.08)] p-1",
  tabClassName = "rounded-lg p-1.5 px-3 text-sm font-[family-name:var(--font-satoshi-normal)] text-white focus:outline-none data-[hover]:bg-white/5 data-[focus]:outline-1 data-[focus]:outline-white data-[selected]:bg-[#DFE1E7] backdrop-blur-[20px]",
  tabPanelClassName = "rounded-xl bg-white/5 p-3",
  tabPanelsClassName = "mt-3",
  customStyles = {},
}) {
  const {
    containerStyle = {},
    tabListStyle = {},
    tabStyle = {},
    tabPanelStyle = {},
    tabPanelsStyle = {},
  } = customStyles;

  return (
    <div className={className} style={containerStyle}>
      <TabGroup>
        <TabList className={tabListClassName} style={tabListStyle}>
          {tabs.map(
            ({
              name,
              tabClassName: customTabClassName,
              tabStyle: customTabStyle,
            }) => (
              <Tab
                key={name}
                className={customTabClassName || tabClassName}
                style={customTabStyle || tabStyle}
              >
                {name}
              </Tab>
            )
          )}
        </TabList>
        <TabPanels className={tabPanelsClassName} style={tabPanelsStyle}>
          {tabs.map(
            ({
              name,
              content,
              tabPanelClassName: customTabPanelClassName,
              tabPanelStyle: customTabPanelStyle,
            }) => (
              <TabPanel
                key={name}
                className={customTabPanelClassName || tabPanelClassName}
                style={customTabPanelStyle || tabPanelStyle}
              >
                {content}
              </TabPanel>
            )
          )}
        </TabPanels>
      </TabGroup>
    </div>
  );
}
