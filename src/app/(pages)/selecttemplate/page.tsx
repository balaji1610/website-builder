import dynamic from "next/dynamic";

const SelectTemplate = dynamic(
  () => import("@/app/components/selectTemplate"),
  {
    ssr: false,
  }
);

export default function SelectTemplatePage() {
  return (
    <>
      <SelectTemplate />
    </>
  );
}
