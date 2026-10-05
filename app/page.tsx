import { Container } from "@/components/Common/container"
import Experience from "@/components/Home/Experience/Experience";
import { Profile } from "@/components/Home/profile/Profile";
export default function Page() {
  return (
    <Container>
      <div className="flex flex-col space-y-10 pt-8 px-4">
        <Profile />
        <Experience/>
        
      </div>
    </Container>
  )
}
