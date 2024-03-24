import { prisma } from "@/utils/connect";
import { NextResponse } from "next/server";

export const PUT = async ({ params }: { params: { intentId: string } }) => {
  const { intentId } = params;

  try {
    await prisma.order.update({
      where: {
        intent_id: intentId,
      },
      data: {
        status: "being prepared",
      },
    });
    return new NextResponse(
      JSON.stringify({ message: "order has been updated" }),
      {
        status: 200,
      }
    );
  } catch (error) {
    console.log(error);
    return new NextResponse(
      JSON.stringify({
        message: "something went wrong with intentId ",
      }),
      { status: 500 }
    );
  }
};
