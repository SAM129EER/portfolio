import { Container } from "@/components/container"
import { Profile } from "@/components/profile/Profile";
export default function Page() {
  return (
    <Container>
      <div className="flex flex-col space-y-10 pt-8 px-4">
        <Profile />
      </div>
    </Container>
  )
}
