import {NextRequest} from "next/server";
import postgres from "postgres";
import {Monkey} from "@/app/examples/revalidateTag/server_actions";

const sql = postgres(process.env.DATABASE_URL!);

export async function GET(request: NextRequest) {
  const monkeys: Monkey[] = await sql`
    SELECT id, name, numBananas 
    FROM monkeys
    ORDER BY id;
  `;
  return Response.json(monkeys);
}
