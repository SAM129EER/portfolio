import { SocialLinks } from "./SocialLinks"
import { ProfileHeader } from "./ProfileHeader"
import { ProfileBio } from "./ProfileBio"
import { Music } from "./Music"

export function Profile() {
  return (
    <section className="flex flex-col gap-4">
      <ProfileHeader />
      <ProfileBio />
      <Music />
      <SocialLinks />
    </section>
  )
}
