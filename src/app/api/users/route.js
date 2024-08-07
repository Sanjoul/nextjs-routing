import { NextResponse } from "next/server";

export function GET() {
  const users = [
    {
      name: "durgesh tiwari",
      phone: "2525",
      course: "JAVA",
    },
    {
      name: "Sanjoul Bhusal",
      phone: "2202",
      course: "Laravel",
    },
    {
      name: "Sanskar Dhungana",
      phone: "2323",
      course: "Node js",
    },
  ];

  return NextResponse.json(users);
}

export async function POST(request) {
  const body = request.body;
  console.log(body);

  const data = await request.json();
  console.log(data);
  console.log(request.headers);
  console.log(request.cookies);
  console.log(request.method);
  return NextResponse.json({
    message: "testing user data post method ",
    data: data,
  });
}

export function DELETE(request) {
  console.log("delete api called");
  return NextResponse.json(
    {
      message: "Deleted Successfully",
    },
    {
      status: 201,
      statusText: "created successfully!!",
    }
  );
}

export function PUT() {}
