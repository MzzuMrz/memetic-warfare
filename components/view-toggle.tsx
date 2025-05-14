"use client"
import { Grid, Layers } from "lucide-react"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

interface ViewToggleProps {
  view: "narrative" | "schema"
  setView: (view: "narrative" | "schema") => void
}

export function ViewToggle({ view, setView }: ViewToggleProps) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon" className="bg-black/50 border-emerald-500/20 backdrop-blur-sm">
          {view === "narrative" ? (
            <Layers className="h-[1.2rem] w-[1.2rem] text-emerald-500" />
          ) : (
            <Grid className="h-[1.2rem] w-[1.2rem] text-emerald-500" />
          )}
          <span className="sr-only">Toggle view</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="bg-black/80 border-emerald-500/20 backdrop-blur-sm">
        <DropdownMenuItem onClick={() => setView("narrative")}>Narrative View</DropdownMenuItem>
        <DropdownMenuItem onClick={() => setView("schema")}>Schema View</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
