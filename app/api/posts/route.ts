import { NextResponse } from "next/server";
import { getPosts } from "@/lib/get-posts";

export async function GET() {
  return NextResponse.json(await getPosts());
}
