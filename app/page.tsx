import { Container } from "@/components/Common/container"
import Blog from "@/components/Home/Blog/Blog";
import Experience from "@/components/Home/Experience/Experience";
import { Profile } from "@/components/Home/profile/Profile";
export default function Page() {
  return (
    <Container>
      <div className="flex flex-col space-y-8 pt-8 px-4">
        <Profile />
        <Experience/>
        <Blog/>
      </div>
    </Container>
  )
}
