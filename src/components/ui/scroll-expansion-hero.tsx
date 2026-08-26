import { useRef, type ReactNode } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { cn } from "@/lib/utils";

/**
 * ScrollExpandMedia — mídia que expande conforme o scroll.
 * Implementação baseada em scroll nativo (sticky + useScroll):
 * funciona com roda, trackpad, toque, teclado e barra de rolagem.
 */
interface ScrollExpandMediaProps {
  mediaType?: "video" | "image";
  mediaSrc: string;
  posterSrc?: string;
  bgImageSrc: string;
  title?: string;
  date?: string;
  scrollToExpand?: string;
  textBlend?: boolean;
  children?: ReactNode;
}

export function ScrollExpandMedia({
  mediaType = "image",
  mediaSrc,
  posterSrc,
  bgImageSrc,
  title,
  date,
  scrollToExpand,
  textBlend,
  children,
}: ScrollExpandMediaProps) {
  const wrapperRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: wrapperRef,
    offset: ["start start", "end start"],
  });

  // suaviza o progresso para um movimento cinematográfico
  const progress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    mass: 0.4,
    restDelta: 0.001,
  });

  const mediaWidth = useTransform(progress, [0, 1], ["min(88vw, 340px)", "100vw"]);
  const mediaHeight = useTransform(progress, [0, 1], ["min(60vh, 420px)", "100svh"]);
  const mediaRadius = useTransform(progress, [0, 1], ["14px", "0px"]);
  const veilOpacity = useTransform(progress, [0, 1], [0.62, 0.3]);
  const bgOpacity = useTransform(progress, [0, 0.9], [1, 0]);
  const titleShift = useTransform(progress, [0, 1], ["0vw", "-14vw"]);
  const subtitleShift = useTransform(progress, [0, 1], ["0vw", "14vw"]);
  const hintOpacity = useTransform(progress, [0, 0.5], [1, 0]);

  const firstWord = title ? title.split(" ")[0] : "";
  const restOfTitle = title ? title.split(" ").slice(1).join(" ") : "";

  return (
    <div className="overflow-x-hidden">
      {/* zona de scroll que controla a expansão */}
      <div ref={wrapperRef} className="relative h-[220svh]">
        <div className="sticky top-0 flex h-[100svh] items-center justify-center overflow-hidden">
          <motion.div className="absolute inset-0 z-0" style={{ opacity: bgOpacity }}>
            <img
              src={bgImageSrc}
              alt=""
              aria-hidden="true"
              className="size-full object-cover"
            />
            <div className="absolute inset-0 bg-background/72" />
          </motion.div>

          <motion.div
            className="absolute z-[1] overflow-hidden border border-border shadow-2xl"
            style={{
              width: mediaWidth,
              height: mediaHeight,
              borderRadius: mediaRadius,
              boxShadow: "0 0 60px rgba(0,0,0,0.45)",
            }}
          >
            {mediaType === "video" ? (
              <video
                src={mediaSrc}
                poster={posterSrc}
                autoPlay
                muted
                loop
                playsInline
                preload="auto"
                controls={false}
                className="size-full object-cover"
              />
            ) : (
              <img
                src={mediaSrc}
                alt={title || "Mídia"}
                decoding="async"
                className="size-full object-cover"
              />
            )}
            <motion.div
              className="absolute inset-0 bg-background"
              style={{ opacity: veilOpacity }}
            />
          </motion.div>

          <div
            className={cn(
              "relative z-10 flex w-full flex-col items-center justify-center gap-4 px-6 text-center",
              textBlend ? "mix-blend-difference" : "mix-blend-normal",
            )}
          >
            <motion.h1
              className="text-editorial text-4xl text-foreground md:text-5xl lg:text-6xl"
              style={{ x: titleShift }}
            >
              {firstWord}
            </motion.h1>
            <motion.p
              className="text-editorial text-4xl text-foreground md:text-5xl lg:text-6xl"
              style={{ x: subtitleShift }}
            >
              {restOfTitle}
            </motion.p>
            {date ? (
              <motion.p className="label-xs mt-4 text-foreground/85" style={{ x: titleShift }}>
                {date}
              </motion.p>
            ) : null}
          </div>

          {scrollToExpand ? (
            <motion.p
              className="label-xs absolute bottom-10 z-10 flex items-center gap-3 text-foreground/85"
              style={{ opacity: hintOpacity }}
            >
              {scrollToExpand}
              <span aria-hidden="true" className="animate-bounce">
                ↓
              </span>
            </motion.p>
          ) : null}
        </div>
      </div>

      {children ? (
        <section className="flex w-full flex-col px-5 py-16 md:px-16 lg:py-24">{children}</section>
      ) : null}
    </div>
  );
}
