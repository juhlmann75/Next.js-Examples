"use client";

import {Monkey} from "@/app/examples/revalidateTag/server_actions";

export default function MonkeyList(props: { monkeys: Monkey[] }) {
  return (
    <>
      <ul>
        {props.monkeys.map((monkey) => {
          return <li key={monkey.id}>
            <span>{monkey.name} has {monkey.numbananas} banana(s).</span>
          </li>
        })}
      </ul>
    </>
  )
}