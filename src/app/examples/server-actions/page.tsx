import {getMonkeys} from "@/app/examples/server-actions/server_actions";
import MonkeyForm from "@/app/examples/server-actions/monkey_form";
import MonkeyList from "@/app/examples/server-actions/monkey_list";

export default async function ServerActionsExample() {
  const monkeys = await getMonkeys();
  return (
    <main>
      <MonkeyForm />
      <MonkeyList monkeys={monkeys} />
    </main>
  );
}
