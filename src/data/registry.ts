import { Section } from "./types";
import { dsaMonths } from "./dsa";
import { nextjsSections } from "./nextjs";
import { angularSections } from "./angular";
import { flutterSections } from "./flutter";
import { fastapiSections } from "./fastapi";
import { aimlSections } from "./aiml";
import { csharpSections } from "./csharp";
import { genaiSections } from "./genai";
import { tracks } from "./tracks";

// DSA uses "Month" naming but same shape as Section
const dsaSections: Section[] = dsaMonths.map((m) => ({
  id: m.id,
  title: m.title,
  icon: m.icon,
  topics: m.topics,
}));

const trackDataMap: Record<string, Section[]> = {
  dsa: dsaSections,
  nextjs: nextjsSections,
  angular: angularSections,
  flutter: flutterSections,
  fastapi: fastapiSections,
  "ai-ml": aimlSections,
  csharp: csharpSections,
  genai: genaiSections,
};

export function getTrackSections(trackId: string): Section[] | null {
  return trackDataMap[trackId] || null;
}

export function getTrackMeta(trackId: string) {
  return tracks.find((t) => t.id === trackId) || null;
}

export function getSectionLabel(trackId: string): string {
  return trackId === "dsa" ? "Month" : "Section";
}
