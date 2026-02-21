import { useEffect } from "react";
import ProfileBanner from "../components/profile/ProfileBanner";
import ProfileProjectsSection from "../components/profile/ProfileProjectsSection";

export default function ProfilePage() {

    return (
        <>
            <ProfileBanner></ProfileBanner>
            <ProfileProjectsSection />
        </>
    )
}
