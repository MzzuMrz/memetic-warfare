"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Network, Workflow, GitBranch } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

interface MycelialMetaphorProps {
  onNext: () => void;
}

export function MycelialMetaphor({ onNext }: MycelialMetaphorProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });

  return (
    <div
      ref={ref}
      className="min-h-full flex flex-col justify-center digital-noise"
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.7 }}
      >
        <div className="flex items-center gap-3 mb-6">
          <div className="bg-black/50 p-2 rounded-full border border-emerald-500/50">
            <Network className="w-6 h-6 text-emerald-500" />
          </div>
          <h2 className="text-3xl font-bold text-glow">
            The Memetic Architecture
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          <div className="relative overflow-hidden rounded-xl cyber-box h-48 md:h-56">
            <div className="absolute inset-0 flex items-center justify-center">
              <Image
                src="/images/cat-mycelium.png"
                alt="Cat traversing between reality and digital realms"
                width={400}
                height={300}
                className="object-cover w-full h-full"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-4">
              <p className="text-white text-sm md:text-base font-medium">
                "Like a cat, living between the real world and the spiritual
                world"
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <Card className="section-card bg-black/50 backdrop-blur-sm border-emerald-500/20">
              <CardContent className="pt-6">
                <div className="flex items-center gap-3 mb-4">
                  <Workflow className="w-5 h-5 text-emerald-500" />
                  <h3 className="text-xl font-semibold">Symbolic Mycelium</h3>
                </div>
                <p className="text-muted-foreground">
                  Memes behave not as isolated jokes but as spores in a vast
                  symbolic mycelium. A meme is never understandable in
                  isolation—it must be read within the lore of the network that
                  contains it.
                </p>
              </CardContent>
            </Card>

            <Card className="section-card bg-black/50 backdrop-blur-sm border-red-500/20">
              <CardContent className="pt-6">
                <div className="flex items-center gap-3 mb-4">
                  <GitBranch className="w-5 h-5 text-red-500" />
                  <h3 className="text-xl font-semibold">Information Snacks</h3>
                </div>
                <p className="text-muted-foreground">
                  A meme acts like an information snack, a small hit of meaning
                  designed to feel like knowledge. It hijacks emotions,
                  short-circuits reason, and thrives on partial context.
                </p>
                <div className="mt-4 p-3 bg-black/30 rounded-md border border-red-500/20">
                  <p className="text-sm italic text-red-400">
                    "It's the recursive media loop described in Videodrome, now
                    lived daily—the Memedrome."
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
