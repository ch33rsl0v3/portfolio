import { Wrap } from "@/components/Wrap"
import { Reveal } from "@/components/Reveal"
import { SectionHead } from "@/components/SectionHead"
import { ContractCard } from "@/components/ContractCard"
import { contracts } from "@/content/contracts"
import { sectionHeads } from "@/content/ui"
import { tc } from "@/lib/tc"
import { useLang } from "@/lib/useLang"

export function Experience() {
  useLang()
  return (
    <section id="experience" className="bg-pattern border-b border-line py-20">
      <Wrap>
        <SectionHead title={tc(sectionHeads.experience.title)} meta={tc(sectionHeads.experience.subtitle!)} />
          <div className="grid grid-cols-1 gap-8">
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
