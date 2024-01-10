import Label from '@/components/ui/label';
import Select from '@/components/ui/select/select';
import { useCategoriesQuery } from '@/data/category';
import { useTypesQuery } from '@/data/type';
import cn from 'classnames';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import { ActionMeta } from 'react-select';

type Props = {
  onCategoryFilter: (newValue: any, actionMeta: ActionMeta<unknown>) => void;
  onTypeFilter: (newValue: any, actionMeta: ActionMeta<unknown>) => void;
  className?: string;
  type?: string;
};

export default function CategoryTypeFilter({
  onTypeFilter,
  onCategoryFilter,
  className,
  type,
}: Props) {
  const { locale } = useRouter();
  const { t } = useTranslation();

  const { types, loading } = useTypesQuery({ language: locale });
  const { categories, loading: categoryLoading } = useCategoriesQuery({
    limit: 999,
    language: locale,
    type,
  });

  return (
    <div
      className={cn(
        'flex w-full flex-col space-y-5 rtl:space-x-reverse md:flex-row md:items-end md:space-x-5 md:space-y-0',
        className
      )}
    >
      <div className="w-full">
        <Label>{t('common:filter-by-group')}</Label>
        <Select
          options={types}
          isLoading={loading}
          getOptionLabel={(option: any) => option.name}
          getOptionValue={(option: any) => option.slug}
          placeholder={t('common:filter-by-group-placeholder')}
          onChange={onTypeFilter}
          isClearable={true}
        />
      </div>
      <div className="w-full">
        <Label>{t('common:filter-by-category')}</Label>
        <Select
          options={categories}
          getOptionLabel={(option: any) => option.name}
          getOptionValue={(option: any) => option.slug}
          placeholder={t('common:filter-by-category-placeholder')}
          isLoading={categoryLoading}
          onChange={onCategoryFilter}
          isClearable={true}
        />
      </div>
    </div>
  );
}
