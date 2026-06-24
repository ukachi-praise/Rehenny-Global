import ReferralClientPage from "./ReferralClientPage";
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Referral Programme | Rhinny Global',
    description: 'Join the Rhinny Global referral programme. Refer a student and earn real money when they enrol in their school. It\'s a simple way to support our community.',
};

const ReferralPage = () => {
    return <ReferralClientPage />;
};

export default ReferralPage;
