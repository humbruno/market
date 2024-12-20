import { TabList } from "@/components/tab-list";

export function meta() {
  return [{ title: "Imbuement Costs" }];
}

export default function Home() {
  return (
    <div className="h-screen bg-black grid place-items-center">
      <TabList />
    </div>
  );
}
