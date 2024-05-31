import {Monkey} from "@/app/examples/revalidateTag/server_actions";
import MonkeyForm from "@/app/examples/revalidateTag/monkey_form";
import MonkeyList from "@/app/examples/revalidateTag/monkey_list";

export default async function RevalidateTagExample() {
  const monkeys = await getMonkeys();
  return (
    <main>
      <MonkeyForm />
      <MonkeyList monkeys={monkeys} />
    </main>
  );
}

async function getMonkeys(): Promise<Monkey[]> {
  const res = await fetch('http://localhost:3000/api/monkey', {next: {tags: ['monkeys'] } });

  if (!res.ok) {
    throw new Error("Failed");
  }

  return await res.json();}
