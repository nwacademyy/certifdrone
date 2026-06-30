import { NextRequest, NextResponse } from "next/server";
import { renderToBuffer } from "@react-pdf/renderer";
import React from "react";
import { ManexDocument } from "@/lib/manex-pdf";
import type { ManexData } from "@/lib/manex-types";

// @react-pdf/renderer needs React element of Document type
// We cast to avoid TS fighting with JSX types
export async function POST(req: NextRequest) {
  try {
    const data: ManexData = await req.json();
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const element = React.createElement(ManexDocument, { d: data }) as any;
    const buffer = await renderToBuffer(element);
    const filename = `MANEX_${(data.operateurNom || "operateur").replace(/\s+/g, "_")}_Rev0.pdf`;
    const uint8 = new Uint8Array(buffer);
    return new NextResponse(uint8, {
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": `attachment; filename="${filename}"`,
      },
    });
  } catch (err: unknown) {
    console.error(err);
    const message = err instanceof Error ? err.message : "Erreur inconnue";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
