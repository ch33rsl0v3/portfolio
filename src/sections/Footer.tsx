import { Wrap } from "@/components/Wrap"
import { ui } from "@/content/ui"
import { tc } from "@/lib/tc"

export function Footer() {
  return (
    <footer className="pb-16 pt-12 text-[11px] tracking-[0.1em] text-ink-mute">
      <Wrap className="flex flex-wrap justify-between gap-4">
        {/* "3303" year tooltip is a TODO interactive (see README). */}
        <div>
          © <span id="year-3303">3303</span> · {tc(ui.footer.solo)}
        </div>
        <div>
          v2.0 · build <span className="text-eva-purple" id="build">{__BUILD__}</span>
        </div>
      </Wrap>
    </footer>
  )
}
