import { NextRequest, NextResponse } from "next/server";
import schema from "../schema";
import { prisma } from "../../../../../prisma/client";

interface Props {
  params: { id: string };
}

export async function GET(request: NextRequest, { params }: Props) {
  const user = await prisma.user.findUnique({
    where: { id: await parseInt(params.id) },
  });
  if (!user) {
    return NextResponse.json(
      {
        error: "User not found",
      },
      { status: 404 }
    );
  }

  return NextResponse.json(user);
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

  const user = await prisma.user.findUnique({
    where: { id: await parseInt(params.id) },
  });

  if (!user) {
    return NextResponse.json({ error: "User not found" }, { status: 404 });
  }

  const updatedUser = await prisma.user.update({
    where: {
      id: user.id,
    },
    data: {
      name: body.name,
      email: body.email,
    },
  });

  //Update the user
  //Return the updated user
  return NextResponse.json(updatedUser);
}

export async function DELETE(request: NextRequest, { params }: Props) {
  const { id } = await params;

  const user = await prisma.user.findUnique({
    where: { id: await parseInt(params.id) },
  });

  if (!user) {
    return NextResponse.json({ error: "User not found" }, { status: 404 });
  }

  const deleteUser = await prisma.user.delete({
    where: {
      id: user.id,
    },
  });

  return NextResponse.json(deleteUser);
}
