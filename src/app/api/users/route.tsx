import { NextRequest, NextResponse } from "next/server";

export function GET(request: NextRequest) {
  // need to add request param so that data doesnt cache
  return NextResponse.json([
    {
      id: 1,
      name: "test",
      age: 13,
    },
    {
      id: 2,
      name: "test2",
      age: 13,
    },
  ]);
}

/**
 * Remember to validate a response,
 * if invalid return 400
 */
export async function POST(request: NextRequest) {
  const body = await request.json();

  if (!body.name) {
    return NextResponse.json({ error: "Name is required" }, { status: 400 });
  }
  return NextResponse.json({ id: 1, name: body.name }, { status: 201 });
}
