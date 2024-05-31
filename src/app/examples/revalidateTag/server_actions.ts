"use server";

import postgres from "postgres";
import {z} from "zod";
import {revalidatePath, revalidateTag} from "next/cache";

const sql = postgres(process.env.DATABASE_URL!);

//CREATE TABLE monkeys (
//     id SERIAL PRIMARY KEY,
//     name TEXT NOT NULL,
//     numBananas INT NOT NULL DEFAULT 0
// );

export async function addMonkey(formData: FormData): Promise<boolean> {
  const schema = z.object({
    name: z.string().min(1),
    numBananas: z.number().int()
  });
  const monkeyParse = schema.safeParse({
    name: formData.get("name"),
    numBananas: z.coerce.number().parse(formData.get("numBananas"))
  });

  if (!monkeyParse.success) {
    return false;
  }

  const data = monkeyParse.data;

  try {
    await sql`
        INSERT INTO monkeys (name, numBananas)
        VALUES (${data.name}, ${data.numBananas})
    `;

    revalidateTag("monkeys")
    return true;
  } catch (e) {
    return false;
  }

}

export interface Monkey {
  id: number,
  name: string,
  numbananas: number
}


