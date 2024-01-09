import MaintenanceMode from '@components/maintenance';
import ErrorMessage from '@components/ui/error-message';
import Spinner from '@components/ui/loaders/spinner/spinner';
import { useSettings } from '@framework/settings';
import { adminOnly, getAuthCredentials, hasAccess } from '@lib/auth-utils';
import {
  checkIsMaintenanceModeComing,
  checkIsMaintenanceModeStart,
} from '@lib/constants';
import { eachDayOfInterval, isTomorrow } from 'date-fns';
import { useAtom } from 'jotai';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

type MaintenanceProps = {
  children: React.ReactNode;
};

export const isInArray = (array: Date[], value: Date) => {
  return !!array?.find((item) => {
    return item?.getDate() == value?.getDate();
  });
};

const Maintenance = ({ children }: MaintenanceProps) => {
  const { data: settings, isLoading: settingLoading, error } = useSettings();
  const router = useRouter();
  const { locale } = router;
  const [underMaintenanceIsComing, setUnderMaintenanceIsComing] = useAtom(
    checkIsMaintenanceModeComing,
  );
  const [underMaintenanceStart, setUnderMaintenanceStart] = useAtom(
    checkIsMaintenanceModeStart,
  );

  const { permissions } = getAuthCredentials();
  const AccessAdminRoles = hasAccess(adminOnly, permissions);

  useEffect(() => {
    if (
      settings?.options?.maintenance?.start &&
      settings?.options?.maintenance?.until
    ) {
      const dateInterVal = eachDayOfInterval({
        start: new Date(settings?.options?.maintenance?.start),
        end: new Date(settings?.options?.maintenance?.until),
      });
      const beforeDay = isTomorrow(
        new Date(settings?.options?.maintenance?.start as string),
      );
      const checkIsMaintenance =
        beforeDay && settings?.options?.isUnderMaintenance;
      const checkIsMaintenanceStart =
        isInArray(dateInterVal, new Date()) &&
        settings?.options?.isUnderMaintenance;
      setUnderMaintenanceStart(checkIsMaintenanceStart);
      setUnderMaintenanceIsComing(checkIsMaintenance);
    }
  }, [
    settings?.options?.isUnderMaintenance,
    settings?.options?.maintenance?.start,
    settings?.options?.maintenance?.until,
    settingLoading,
    settings,
    locale,
  ]);

  if (settingLoading) {
    return <Spinner />;
  }

  if (error) return <ErrorMessage message={error.message} />;

  if (underMaintenanceStart && !AccessAdminRoles) {
    return <MaintenanceMode />;
  }

  return children;
};

export default Maintenance;
