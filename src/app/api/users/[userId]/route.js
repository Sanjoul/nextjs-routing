import { NextResponse } from "next/server";

export function DELETE(request, { params }) {
  const { userId } = params;

  return NextResponse.json({ message: "Testing ", id: userId });
}
