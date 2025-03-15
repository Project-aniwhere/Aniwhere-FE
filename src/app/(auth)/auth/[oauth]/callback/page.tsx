import OauthCallback from '@/component/login/oauth-callback';

const oauthList = ['kakao', 'google'] as const;

export type OauthType = (typeof oauthList)[number];

export const generateStaticParams = async () => {
  return oauthList.map((oauth) => ({ params: { oauth } }));
};

const OauthCallbackPage = async ({
  params,
}: {
  params: Promise<{ oauth: OauthType }>;
}) => {
  const { oauth } = await params;
  return <OauthCallback oauth={oauth} />;
};

export default OauthCallbackPage;
