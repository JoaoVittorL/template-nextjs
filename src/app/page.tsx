import { Notification } from "@/components/Notification";
import {X,Check, ShieldQuestion} from "lucide-react"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Notification.Root>
        <Notification.Header>
          <Notification.Icon icon={ShieldQuestion}/>
          <Notification.Content text="Tem certeza ?"/>
        </Notification.Header>
        <Notification.Footer>
          <Notification.Actions>
            <Notification.Action icon={X}/>
            <Notification.Action icon={Check}/>
          </Notification.Actions>
        </Notification.Footer>
      </Notification.Root>
    </main>
  )
}
