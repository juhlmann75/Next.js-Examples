import {addMonkey} from "@/app/examples/revalidateTag/server_actions";

export default function MonkeyForm() {
  return (
    <>
      <h1>Add Monkey</h1>
      <form action={addMonkey}>
        <input type="text" id="name" name="name" required/>
        <input type="number" id="numBananas" name="numBananas" defaultValue={0} required/>
        <input type="submit" defaultValue="Submit"/>
      </form>
    </>
  )
}