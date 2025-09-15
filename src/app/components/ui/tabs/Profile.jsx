import ReusableTabs from "../ReusableTabs";

// ProfileTabs component - now just a wrapper for ReusableTabs
export function ProfileTabs({ categories = [], ...props }) {
  return <ReusableTabs categories={categories} {...props} />;
}
