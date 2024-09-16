import Heading from "./context/Heading";
import ProfileSection from "./context/ProfileSection";

export default function ProfilePage() {
  return (
    <ProfileSection>
      <Heading>My Profile</Heading>
      <RecentPosts />
    </ProfileSection>
  );
}
function RecentPosts() {
  return (
    <ProfileSection>
      <Heading>Recent Posts</Heading>
      <Post title="Flavors of Lisbon" body="...those pastéis de nata!" />
      <Post title="Buenos Aires in the rhythm of tango" body="I loved it!" />
    </ProfileSection>
  );
}
function Post({ title, body }) {
  return (
    <ProfileSection isFancy={true}>
      <Heading>{title}</Heading>
      <p>
        <i>{body}</i>
      </p>
    </ProfileSection>
  );
}
