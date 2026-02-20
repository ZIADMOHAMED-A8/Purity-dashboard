import { useEffect } from "react";
import ProfileBanner from "../components/profile/ProfileBanner";
import ProfileProjectsSection from "../components/profile/ProfileProjectsSection";
import { useDispatch } from "react-redux";
import { removeEmail } from "../features/auth/registerSlice";

export default function ProfilePage() {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(removeEmail())
    }, [])
    return (
        <>
            <ProfileBanner></ProfileBanner>
            <ProfileProjectsSection />
        </>
    )
}
