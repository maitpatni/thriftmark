import { useSocialLogin } from '@framework/auth';
import { useEffect, useState } from 'react';
import { authorizationAtom } from '@store/authorization-atom';
import { useAtom } from 'jotai';
import Cookies from 'js-cookie';
import { AUTH_TOKEN } from '@lib/constants';
import { useTranslation } from 'next-i18next';
import { useSession } from 'next-auth/react';

const SocialLoginProvider: React.FC = () => {
  const { data: session, status: loading } = useSession();
  // const { mutate: socialLogin } = useSocialLogin({
  //   onSuccess: (data) => {
  //     if (data?.token && data?.permissions?.length) {
  //       Cookies.set(AUTH_TOKEN, data.token);
  //       authorize(true);
  //     } else {
  //       setErrorMessage(t("forms:error-credential-wrong"));
  //     }
  //   },
  // });
  const { mutate: socialLogin } = useSocialLogin();
  const [_, authorize] = useAtom(authorizationAtom);
  const [errorMessage, setErrorMessage] = useState('');
  const { t } = useTranslation('common');
  useEffect(() => {
    // is true when valid social login access token and provider is available in the session
    // but not authorize/logged in
    if (session?.access_token && session?.provider) {
      socialLogin({
        provider: session?.provider as string,
        access_token: session?.access_token as string,
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [session]);

  // When rendering client side don't display anything until loading is complete
  if (typeof window !== 'undefined' && loading) return null;

  return <div>{t(errorMessage)}</div>;
};

export default SocialLoginProvider;
