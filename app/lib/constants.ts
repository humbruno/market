export const TABS = ["strike", "void", "vampirism"] as const;
export const DEFAULT_TAB: Record<string, Tab> = { tab: "strike" };
export type Tab = (typeof TABS)[number];
