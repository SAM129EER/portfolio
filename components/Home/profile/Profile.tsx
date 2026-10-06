import { Container } from "@/components/Common/container"

import { SocialLinks } from "./SocialLinks"
import { ProfileHeader } from "./ProfileHeader"
import { ProfileBio } from "./ProfileBio"
import { Music } from "./Music"

export function Profile() {
  return (
    <Container>
      <section className="flex flex-col gap-4">
        <ProfileHeader />

        <ProfileBio />

        <Music />

        <SocialLinks />
      </section>
    </Container>
  )
}
