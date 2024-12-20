import { DEFAULT_TAB, type Tab } from "@/lib/constants";
import { useSearchParams } from "react-router";

export function useActiveTab() {
  const [params, setParams] = useSearchParams(DEFAULT_TAB);
  const activeTab: Tab = params.get("tab") as Tab;

  function setTab(tab: Tab) {
    setParams((prev) => {
      prev.set("tab", tab);
      return prev;
    });
  }

  return { activeTab, setTab };
}
