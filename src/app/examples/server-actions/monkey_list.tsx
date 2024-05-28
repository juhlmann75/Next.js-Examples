"use client";

import {getMonkeyCount, Monkey, updateNumBananas} from "@/app/examples/server-actions/server_actions";
import {useEffect, useState} from "react";

export default function MonkeyList(props: { monkeys: Monkey[] }) {
  const [monkeyCount, setMonkeyCount] = useState(0);

  useEffect(() => {
    const updateMonkeyCount = async () => {
      const updatedNumMonkeys = await getMonkeyCount();
      setMonkeyCount(updatedNumMonkeys);
    }
    updateMonkeyCount();
  })

  return (
    <>
      <p>Monkeys: {monkeyCount}</p>
      <ul>
        {props.monkeys.map((monkey) => {
          return <li key={monkey.id}>
            <span>{monkey.name} has {monkey.numbananas} banana(s).</span>
            <button onClick={async () => {
              await updateNumBananas(monkey.id, monkey.numbananas + 1)
            }}>
              Increment Bananas
            </button>
          </li>
        })}
      </ul>
    </>
  )
}