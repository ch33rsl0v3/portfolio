import { useTranslation } from "react-i18next"
import { Wrap } from "@/components/Wrap"

export function Footer() {
  const { t } = useTranslation()
  return (
    <footer className="pb-16 pt-12 text-[11px] tracking-[0.1em] text-ink-mute">
      <Wrap className="flex flex-wrap justify-between gap-4">
        {/* "3303" year tooltip + random build hash are TODO interactives (see README). */}
        <div>
          © <span id="year-3303">3303</span> · {t("footer.solo")}
        </div>
        <div>
          v2.0 · build <span className="text-eva-purple" id="build">000000</span>
        </div>
      </Wrap>
    </footer>
  )
}
