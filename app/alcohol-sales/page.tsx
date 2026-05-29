import Link from "next/link";
import type { Metadata } from "next";
import { siteConfig } from "../../config/site";

export const metadata: Metadata = {
  title: `酒類販売管理者標識｜${siteConfig.farmName}`,
  description: `${siteConfig.farmName}の酒類販売管理者標識です。`
};

const rows = [
  {
    label: "販売場の名称及び所在地",
    value: `${siteConfig.farmName}\n${siteConfig.locationLabel}`
  },
  {
    label: "酒類販売管理者の氏名",
    value: "澤登　芳英"
  },
  {
    label: "酒類販売管理研修受講年月日",
    value: "令和7年2月18日"
  },
  {
    label: "次回研修の受講期限",
    value: "令和10年2月17日"
  },
  {
    label: "研修実施団体名",
    value: "山梨県小売酒販組合連合会"
  }
];

export default function AlcoholSalesPage() {
  return (
    <main className="legalPage">
      <header className="legalHeader">
        <Link href="/" className="legalBack">
          {siteConfig.farmName}
        </Link>
      </header>
      <section className="legalPanel">
        <p className="eyebrow">License</p>
        <h1>酒類販売管理者標識</h1>
        <dl className="legalList">
          {rows.map((row) => (
            <div key={row.label}>
              <dt>{row.label}</dt>
              <dd>{row.value}</dd>
            </div>
          ))}
        </dl>
      </section>
    </main>
  );
}
