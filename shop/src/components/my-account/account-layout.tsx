import PageHeader from '@components/ui/page-header';
import Container from '@components/ui/container';
import AccountNav from '@components/my-account/account-nav';
import AccountNavMobile from '@components/my-account/account-nav-mobile';
import Subscription from '@components/common/subscription';
import { ROUTES } from '@lib/routes';

import { IoHomeOutline } from 'react-icons/io5';
import { IoCartOutline } from 'react-icons/io5';
import { IoPersonOutline } from 'react-icons/io5';
import { IoCallOutline } from 'react-icons/io5';
import { IoSettingsOutline } from 'react-icons/io5';
import { Cards } from '@components/icons/cards';
import { BiBookmark } from 'react-icons/bi';
import { HomeIcon } from '@components/icons/my-account/home';
import { OrdersIcon } from '@components/icons/my-account/orders';
import { WishlistIcon } from '@components/icons/my-account/wishlist';
import { CardsIcon } from '@components/icons/my-account/cards';
import { ProfileIcon } from '@components/icons/my-account/profile';
import { ChangePasswordIcon } from '@components/icons/my-account/change-password';

const accountMenu = [
  {
    slug: ROUTES.ACCOUNT,
    name: 'text-dashboard',
    icon: <HomeIcon className="text-lg md:text-xl" />,
  },
  {
    slug: ROUTES.ACCOUNT_ORDERS,
    name: 'text-orders',
    icon: <OrdersIcon className="text-lg md:text-xl" />,
  },
  {
    slug: ROUTES.WISHLISTS,
    name: 'text-wishlist',
    icon: <WishlistIcon className="text-lg md:text-xl" />,
  },
  {
    slug: ROUTES.ACCOUNT_CARDS,
    name: 'text-cards',
    icon: <CardsIcon className="text-lg md:text-xl" />,
  },
  {
    slug: ROUTES.ACCOUNT_ADDRESS,
    name: 'text-account-address',
    icon: <ProfileIcon className="text-lg md:text-xl" />,
  },
  {
    slug: ROUTES.ACCOUNT_CONTACT_NUMBER,
    name: 'text-contact-number',
    icon: <IoCallOutline className="text-lg md:text-xl" />,
  },
  {
    slug: ROUTES.ACCOUNT_CHANGE_PASSWORD,
    name: 'text-change-password',
    icon: <ChangePasswordIcon className="text-lg md:text-xl" />,
  },
];

const AccountLayout: React.FunctionComponent<{
  children?: React.ReactNode;
}> = ({ children }) => {
  return (
    <>
      <PageHeader pageHeader="text-page-my-account" />
      <Container className="2xl:px-20">
        <div className="flex w-full py-16 2xl:py-20 md:flex-row 2xl:min-h-[48.625rem] 2xl:h-screen relative">
          <div className="flex flex-col w-full 2xl:flex-row 2xl:gap-32">
            <div className="2xl:hidden">
              <AccountNavMobile options={accountMenu} />
            </div>
            <div className="flex-shrink-0 hidden pb-2 2xl:block 2xl:pb-0 w-[16.75rem] sticky top-0 left-0">
              <div className="relative h-full">
                <AccountNav options={accountMenu} />
                <div className="absolute top-0 -right-16 w-px h-full bg-[#E6E6E6]"></div>
              </div>
            </div>
            <div className="mt-6 2xl:mt-0 w-full h-full">{children}</div>
          </div>
        </div>

        <Subscription />
      </Container>
    </>
  );
};

export default AccountLayout;
