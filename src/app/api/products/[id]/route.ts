import { getAuthSession } from "@/utils/auth";
import { prisma } from "@/utils/connect";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (
  req: NextRequest,
  { params }: { params: { id: string } }
) => {
  const { id } = params;
  try {
    const product = await prisma.product.findUnique({
      where: {
        id,
      },
    });
    return new NextResponse(JSON.stringify(product), { status: 200 });
  } catch (error) {
    return new NextResponse(
      JSON.stringify({
        message: "an error with product fetching has been occured ",
      }),
      { status: 500 }
    );
  }
};

export const Delete = async (
  req: NextRequest,
  {
    params,
  }: {
    params: { id: string };
  }
) => {
  const { id } = params;
  const session = await getAuthSession();

  if (session?.user.isAdmin) {
    try {
      await prisma.product.delete({
        where: {
          id,
        },
      });
      return new NextResponse(
        JSON.stringify({
          message: "Product has been deleted!",
        }),
        { status: 200 }
      );
    } catch (error) {
      return new NextResponse(
        JSON.stringify({
          message: "Something went wrong with delete product",
        }),
        { status: 500 }
      );
    }
  } else {
    return new NextResponse(
      JSON.stringify({
        message: "you are not allowed to delete the product",
      }),
      { status: 403 }
    );
  }
};
