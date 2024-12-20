import { TabList } from "@/components/tab-list";
import { Input } from "@/components/ui/input";

export function meta() {
  return [{ title: "Imbuement Costs" }];
}

export default function Home() {
  return (
    <div className="m-auto max-w-md space-y-10">
      <TabList />
      <div>
        <div className="flex gap-2 items-center">
          <img src="/gold-token.png" alt="gold token icon" className="size-8" />
          <p>Gold Token</p>
        </div>
        <Input />
      </div>
    </div>
  );
}
