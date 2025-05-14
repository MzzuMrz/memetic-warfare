"use client"
import { useRef, useState } from "react"
import {
  Brain,
  Network,
  Dna,
  AlertTriangle,
  Shield,
  Skull,
  Sparkles,
  Eye,
  Zap,
  FileText,
  Candy,
  History,
} from "lucide-react"

interface SchemaViewProps {
  activeSection: number
  setActiveSection: (index: number) => void
}

export function SchemaView({ activeSection, setActiveSection }: SchemaViewProps) {
  const svgRef = useRef<SVGSVGElement>(null)
  const [hoveredNode, setHoveredNode] = useState<number | null>(null)

  // Contenido más interesante basado en el texto proporcionado
  const sections = [
    {
      name: "Memedrome",
      icon: Skull,
      color: "#ef4444",
      quote: "The retina becomes the screen. The screen becomes the retina.",
    },
    {
      name: "Attention Economy",
      icon: Eye,
      color: "#dc2626",
      quote: "Freedom becomes self-exploitation",
    },
    {
      name: "Meme Definition",
      icon: FileText,
      color: "#10b981",
      quote: "Minimal units of cultural transmission",
    },
    {
      name: "Memes as Mycelia",
      icon: Network,
      color: "#10b981",
      quote: "Spores in a vast symbolic mycelium",
    },
    {
      name: "Information Snacks",
      icon: Candy,
      color: "#b91c1c",
      quote: "Small hits of meaning designed to feel like knowledge",
    },
    {
      name: "Laws of Contagion",
      icon: Dna,
      color: "#b91c1c",
      quote: "Information projectiles targeting your moral core",
    },
    {
      name: "Memetic Saturation",
      icon: AlertTriangle,
      color: "#991b1b",
      quote: "You breathe propaganda",
    },
    {
      name: "Advanced Infection",
      icon: Brain,
      color: "#7f1d1d",
      quote: "You don't know if you're thinking or being thought",
    },
    {
      name: "Countermeasures",
      icon: Shield,
      color: "#059669",
      quote: "If you don't compile your mind, someone else will",
    },
    {
      name: "Personal Experience",
      icon: History,
      color: "#b91c1c",
      quote: "The chainsaw cut through the symbolic tissue of the nation",
    },
    {
      name: "Llao Llao Project",
      icon: Sparkles,
      color: "#047857",
      quote: "Composting noise into insight",
    },
    {
      name: "Final Reminder",
      icon: Zap,
      color: "#ef4444",
      quote: "Every meme you share reprograms you",
    },
  ]

  // Conceptos más profundos del texto
  const concepts = [
    ["Semiotic viruses", "Recursive media loop"],
    ["Algorithms hijack nervous system", "Psychopolitics"],
    ["Dawkins' cultural replicators", "Pezeshki's structural memetics"],
    ["Cultural transmission units", "Symbolic architecture"],
    ["INTERNET → MEME → REALITY", "Videodrome reference"],
    ["Speed beats truth", "Outrage fuels virality", "Noise is the weapon"],
    ["Cognitive anoxia", "90m of daily scrolling"],
    ["Memory burn", "Phantom dopamine"],
    ["Memetic vaccines", "Structural empathy", "Digital sabbaths"],
    ["Chainsaw meme", "Ritualized symbolic warfare"],
    ["Mycelial ecosystem", "Regenerative narratives"],
    ["Social structure defines knowledge", "Delayed retweet"],
  ]

  const handleNodeClick = (index: number) => {
    setActiveSection(index)
  }

  return (
    <div className="h-full w-full flex flex-col items-center justify-center pt-4 digital-noise overflow-hidden">
      <h2 className="text-3xl font-bold mb-4 text-center text-glow-red">MEMEDROME: Memetic Warfare Map</h2>

      <div className="relative w-full h-[600px] overflow-hidden">
        <svg ref={svgRef} className="w-full h-full" viewBox="0 0 800 600" preserveAspectRatio="xMidYMid meet">
          {/* Central node */}
          <g transform="translate(400, 300)">
            <circle r="50" fill="#ef4444" className="node-pulse" />
            <text textAnchor="middle" dy="-8" fill="white" fontSize="14" fontWeight="bold">
              Memetic
            </text>
            <text textAnchor="middle" dy="14" fill="white" fontSize="14" fontWeight="bold">
              Warfare
            </text>

            {/* Main nodes */}
            {sections.map((section, i) => {
              const angle = i * ((2 * Math.PI) / sections.length) - Math.PI / 2
              const x = Math.cos(angle) * 180
              const y = Math.sin(angle) * 180

              const isHovered = hoveredNode === i
              const isActive = activeSection === i

              return (
                <g
                  key={i}
                  transform={`translate(${x}, ${y})`}
                  onMouseEnter={() => setHoveredNode(i)}
                  onMouseLeave={() => setHoveredNode(null)}
                >
                  <circle
                    r="40"
                    fill={section.color}
                    opacity={isActive || isHovered ? 1 : 0.9}
                    className={isActive ? "node-pulse" : ""}
                    style={{ cursor: "pointer" }}
                    onClick={() => handleNodeClick(i)}
                  />

                  {/* Text for main node - centered and bold */}
                  <text
                    textAnchor="middle"
                    dy="0"
                    fill="white"
                    fontSize="12"
                    fontWeight="bold"
                    className="pointer-events-none"
                  >
                    {section.name.split(" ").map((word, j) => (
                      <tspan key={j} x="0" dy={j === 0 ? -4 : 16}>
                        {word}
                      </tspan>
                    ))}
                  </text>

                  {/* Connection to center */}
                  <line x1="0" y1="0" x2={-x} y2={-y} stroke={section.color} strokeWidth="2" strokeOpacity="0.8" />

                  {/* Quote that appears on hover */}
                  {(isHovered || isActive) && (
                    <foreignObject x="-80" y="45" width="160" height="60" className="pointer-events-none">
                      <div
                        className="bg-black/70 p-2 rounded text-center text-xs text-white border border-opacity-30"
                        style={{ borderColor: section.color }}
                      >
                        "{section.quote}"
                      </div>
                    </foreignObject>
                  )}

                  {/* Sub-concepts */}
                  {concepts[i].map((concept, j) => {
                    // Limitar a máximo 2 conceptos visibles por nodo para simplificar
                    if (j >= 2 && !isHovered && !isActive) return null

                    const conceptCount = Math.min(concepts[i].length, isHovered || isActive ? concepts[i].length : 2)
                    const arcRange = isHovered || isActive ? 1.2 : 0.8
                    const startAngle = angle - arcRange / 2
                    const conceptAngle = startAngle + (j * arcRange) / (conceptCount - 1 || 1)

                    // Distancia ajustada según si está hover o no
                    const distance = isHovered || isActive ? 90 : 80

                    const subX = Math.cos(conceptAngle) * distance
                    const subY = Math.sin(conceptAngle) * distance

                    return (
                      <g key={`${i}-${j}`} transform={`translate(${subX}, ${subY})`}>
                        <circle r="25" fill={section.color} opacity="0.8" />
                        <text
                          textAnchor="middle"
                          dy="4"
                          fill="white"
                          fontSize="9"
                          fontWeight="medium"
                          className="pointer-events-none"
                        >
                          {concept.length > 15 ? (
                            concept.split(" ").map((word, k) => (
                              <tspan key={k} x="0" dy={k === 0 ? -4 : 10}>
                                {word}
                              </tspan>
                            ))
                          ) : (
                            <tspan>{concept}</tspan>
                          )}
                        </text>
                      </g>
                    )
                  })}
                </g>
              )
            })}
          </g>
        </svg>
      </div>

      <div className="mt-4 text-center max-w-2xl mx-auto px-4">
        <p className="text-lg text-muted-foreground">
          This map represents memetic warfare and its interconnected components. Click on any node to navigate to that
          section of the presentation.
        </p>
      </div>
    </div>
  )
}
