import { useTranslation } from "react-i18next"
import { Wrap } from "@/components/Wrap"
import { Reveal } from "@/components/Reveal"
import { SectionHead } from "@/components/SectionHead"
import { ContractCard } from "@/components/ContractCard"
import { contracts } from "@/data/contracts"

export function Experience() {
  const { t } = useTranslation()
  return (
    <section id="experience" className="bg-pattern border-b border-line py-20">
      <Wrap>
        <SectionHead title={t("exp.title")} meta={t("exp.subtitle")} />
        <div className="grid gap-8">
          {contracts.map((contract) => (
            <Reveal key={contract.id}>
              <ContractCard contract={contract} />
            </Reveal>
          ))}
        </div>
      </Wrap>
    </section>
  )
}
