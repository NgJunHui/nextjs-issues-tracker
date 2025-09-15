import { NextRequest, NextResponse } from "next/server";
import schema from "../schema";

interface Props {
  params: { id: number };
}

export function GET(request: NextRequest, { params }: Props) {
  if (params.id > 10) {
    return NextResponse.json(
      {
        error: "User not found",
      },
      { status: 404 }
    );
  }

  return NextResponse.json({ id: 1, name: "Jun Hui" });
}

/**
 * PUT - to replace the entire object
 * PATCH - to update more than 1 property in the object
 */
export async function PUT(request: NextRequest, { params }: Props) {
  //validate request body
  const body = await request.json();
  const { id } = await params;
  const validation = schema.safeParse(body);

  //if invalid, return 400
  if (!validation.success) {
    return NextResponse.json(validation.error.message, { status: 400 });
  }

  //fetch user with the id
  //if doesnt exist, return 404
  if (id > 10) {
    return NextResponse.json({ error: "User not found!" }, { status: 404 });
  }

  //Update the user
  //Return the updated user
  return NextResponse.json({ id: 1, name: body.name });
}

export async function DELETE(request: NextRequest, { params }: Props) {
  const { id } = await params;
  if (id > 10) {
    return NextResponse.json({ error: "User not found!" }, { status: 404 });
  }

  return NextResponse.json({});
}
