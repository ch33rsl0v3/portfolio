import { Wrap } from "@/components/Wrap"
import { ui } from "@/content/ui"
import { tc } from "@/lib/tc"
import { useLang } from "@/lib/useLang"

export function Footer() {
  useLang()
  return (
    <footer className="pb-16 pt-12 text-[11px] tracking-[0.1em] text-ink-mute">
      <Wrap className="flex flex-wrap justify-between gap-4">
        {/* "3303" year tooltip + random build hash are TODO interactives (see README). */}
        <div>
          © <span id="year-3303">3303</span> · {tc(ui.footer.solo)}
        </div>
        <div>
          v2.0 · build <span className="text-eva-purple" id="build">000000</span>
        </div>
      </Wrap>
    </footer>
  )
}
