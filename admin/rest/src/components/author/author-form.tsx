import Input from '@/components/ui/input';
import { Controller, useForm, useFieldArray } from 'react-hook-form';
import Button from '@/components/ui/button';
import TextArea from '@/components/ui/text-area';
import Label from '@/components/ui/label';
import { DatePicker } from '@/components/ui/date-picker';
import { getErrorMessage } from '@/utils/form-error';
import Description from '@/components/ui/description';
import Card from '@/components/common/card';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
import FileInput from '@/components/ui/file-input';
import { yupResolver } from '@hookform/resolvers/yup';
import { authorValidationSchema } from './author-validation-schema';
import ValidationError from '@/components/ui/form-validation-error';
import { getIcon } from '@/utils/get-icon';
import SelectInput from '@/components/ui/select-input';
import * as socialIcons from '@/components/icons/social';
import { AttachmentInput, Author, ItemProps, ShopSocialInput } from '@/types';
import { useShopQuery } from '@/data/shop';
import { EditIcon } from '@/components/icons/edit';
import { Config } from '@/config';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { join, split } from 'lodash';
import {
  useCreateAuthorMutation,
  useUpdateAuthorMutation,
} from '@/data/author';
import { useSettingsQuery } from '@/data/settings';
import { useModalAction } from '../ui/modal/modal.context';

import OpenAIButton from '../openAI/openAI.button';
import { formatSlug } from '@/utils/use-slug';

export const chatbotAutoSuggestion = ({ name }: { name: string }) => {
  return [
    {
      id: 1,
      title: `Explore the captivating imagination of a rising literary talent, ${name}.`,
    },
    {
      id: 2,
      title: `Immerse yourself in the thought-provoking world crafted by visionary author ${name}.`,
    },
    {
      id: 3,
      title: `Discover the compelling storytelling prowess of ${name} through their debut work.`,
    },
    {
      id: 4,
      title: `Experience the unique voice and perspective of ${name} in their literary creations.`,
    },
    {
      id: 5,
      title: `Dive into the pages of ${name}'s writing and embark on a literary journey like no other.`,
    },
    {
      id: 6,
      title: `Uncover the literary genius of ${name}, captivating readers with their brilliant narratives.`,
    },
    {
      id: 7,
      title: `Indulge in the lyrical prose and evocative storytelling of acclaimed author ${name}.`,
    },
    {
      id: 8,
      title: `Get ready to be enchanted by the imaginative narratives and vivid characters brought to life by ${name}.`,
    },
    {
      id: 9,
      title: `Be captivated by the powerful storytelling and insightful observations of emerging author ${name}.`,
    },
    {
      id: 10,
      title: `Enter a world of literary brilliance with ${name}, where imagination knows no bounds.`,
    },
  ];
};

export const chatbotAutoSuggestion1 = ({ name }: { name: string }) => {
  return [
    {
      id: 1,
      title: `Create a quote about the profound insights and emotional depth found in the writings of ${name}.`,
    },
    {
      id: 2,
      title: `Craft a quote that captures the essence of ${name}'s storytelling, where imagination knows no bounds.`,
    },
    {
      id: 3,
      title: `Develop a quote that highlights the unique perspective and thought-provoking narratives of ${name}.`,
    },
    {
      id: 4,
      title: `Write a quote that celebrates the literary brilliance and captivating wordsmithing of ${name}.`,
    },
    {
      id: 5,
      title: `Design a quote that pays tribute to the transformative power of ${name}'s words and ideas.`,
    },
    {
      id: 6,
      title: `Shape a quote that encapsulates the profound impact and enduring legacy of ${name}'s literary contributions.`,
    },
    {
      id: 7,
      title: `Construct a quote that reflects the artistry and poetic beauty found within ${name}'s written works.`,
    },
    {
      id: 8,
      title: `Build a quote that invites readers to embark on a journey of self-discovery through ${name}'s insightful prose.`,
    },
    {
      id: 9,
      title: `Create a quote that captures the raw emotions and poignant storytelling of ${name}'s literary creations.`,
    },
    {
      id: 10,
      title: `Craft a quote that invites readers to explore the rich tapestry of human experiences woven by ${name}.`,
    },
  ];
};

const socialIcon = [
  {
    value: 'FacebookIcon',
    label: 'Facebook',
  },
  {
    value: 'InstagramIcon',
    label: 'Instagram',
  },
  {
    value: 'TwitterIcon',
    label: 'Twitter',
  },
  {
    value: 'YouTubeIcon',
    label: 'Youtube',
  },
];

export const updatedIcons = socialIcon.map((item: any) => {
  item.label = (
    <div className="flex items-center text-body space-s-4">
      <span className="flex h-4 w-4 items-center justify-center">
        {getIcon({
          iconList: socialIcons,
          iconName: item.value,
          className: 'w-4 h-4',
        })}
      </span>
      <span>{item.label}</span>
    </div>
  );
  return item;
});

type FormValues = {
  name: string;
  slug: string;
  bio: string;
  quote: string;
  death: string;
  socials: ShopSocialInput[];
  born: string;
  languages: string;
  shop_id: string;
  is_approved: boolean;
  image: AttachmentInput;
  cover_image?: AttachmentInput;
};

type IProps = {
  initialValues?: Author | null;
};

export default function CreateOrUpdateAuthorForm({ initialValues }: IProps) {
  const router = useRouter();
  const { locale } = useRouter();
  const { t } = useTranslation();
  const [isSlugDisable, setIsSlugDisable] = useState<boolean>(true);
  const isSlugEditable =
    router?.query?.action === 'edit' &&
    router?.locale === Config.defaultLanguage;
  const {
    query: { shop },
  } = router;
  const { data: shopData } = useShopQuery(
    {
      slug: shop as string,
    },
    { enabled: !!router.query.shop }
  );
  const shopId = shopData?.id!;
  const {
    register,
    handleSubmit,
    control,
    watch,
    setError,
    setValue,
    formState: { errors },
  } = useForm<FormValues>({
    shouldUnregister: true,
    resolver: yupResolver(authorValidationSchema),
    ...(initialValues && {
      defaultValues: {
        ...initialValues,
        socials: initialValues?.socials
          ? initialValues?.socials.map((social: any) => ({
              icon: updatedIcons?.find((icon) => icon?.value === social?.icon),
              url: social?.url,
            }))
          : [],
        born: initialValues.born ? new Date(initialValues.born!) : '',
        death: initialValues.death ? new Date(initialValues.death!) : '',
      } as any,
    }),
  });

  const { openModal } = useModalAction();
  const slugAutoSuggest = formatSlug(watch('name'));
  const {
    // @ts-ignore
    settings: { options },
  } = useSettingsQuery({
    language: locale!,
  });

  const generateName = watch('name');
  const autoSuggestionList = useMemo(() => {
    return chatbotAutoSuggestion({ name: generateName ?? '' });
  }, [generateName]);

  const handleGenerateDescription = useCallback(() => {
    openModal('GENERATE_DESCRIPTION', {
      control,
      name: generateName,
      set_value: setValue,
      key: 'bio',
      suggestion: autoSuggestionList as ItemProps[],
    });
  }, [generateName]);

  const autoSuggestionList1 = useMemo(() => {
    return chatbotAutoSuggestion1({ name: generateName ?? '' });
  }, [generateName]);
  const handleGenerateDescription1 = useCallback(() => {
    openModal('GENERATE_DESCRIPTION', {
      control,
      name: generateName,
      set_value: setValue,
      key: 'quote',
      suggestion: autoSuggestionList1 as ItemProps[],
    });
  }, [generateName]);

  const { mutate: createAuthor, isLoading: creating } =
    useCreateAuthorMutation();
  const { mutate: updateAuthor, isLoading: updating } =
    useUpdateAuthorMutation();

  const { fields, append, remove } = useFieldArray({
    control,
    name: 'socials',
  });

  const onSubmit = async (values: FormValues) => {
    const input = {
      ...values,
      language: router.locale,
      socials: values?.socials
        ? values?.socials?.map((social: any) => ({
            icon: social?.icon?.value,
            url: social?.url,
          }))
        : [],
      image: {
        thumbnail: values?.image?.thumbnail,
        original: values?.image?.original,
        id: values?.image?.id,
      },
      cover_image: {
        thumbnail: values?.image?.thumbnail,
        original: values?.image?.original,
        id: values?.image?.id,
      },
    };

    try {
      if (
        !initialValues ||
        !initialValues.translated_languages.includes(router.locale!)
      ) {
        createAuthor({
          ...input,
          shop_id: shopId,
          ...(initialValues?.slug && { slug: initialValues.slug }),
        });
      } else {
        updateAuthor({
          ...input,
          id: initialValues.id!,
          shop_id: shopId,
        });
      }
    } catch (error) {
      const serverErrors = getErrorMessage(error);
      Object.keys(serverErrors?.validation).forEach((field: any) => {
        setError(field.split('.')[1], {
          type: 'manual',
          message: serverErrors?.validation[field][0],
        });
      });
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="my-5 flex flex-wrap border-b border-dashed border-border-base pb-8 sm:my-8">
        <Description
          title={t('form:input-label-image')}
          details={t('form:author-image-helper-text')}
          className="w-full px-0 pb-5 sm:w-4/12 sm:py-8 sm:pe-4 md:w-1/3 md:pe-5"
        />

        <Card className="w-full sm:w-8/12 md:w-2/3">
          <FileInput name="image" control={control} multiple={false} />
        </Card>
      </div>
      <div className="my-5 flex flex-wrap border-b border-dashed border-border-base pb-8 sm:my-8">
        <Description
          title={t('form:input-label-cover-image')}
          details={t('form:author-cover-image-helper-text')}
          className="w-full px-0 pb-5 sm:w-4/12 sm:py-8 sm:pe-4 md:w-1/3 md:pe-5"
        />

        <Card className="w-full sm:w-8/12 md:w-2/3">
          <FileInput name="cover_image" control={control} multiple={false} />
        </Card>
      </div>

      <div className="my-5 flex flex-wrap sm:my-8">
        <Description
          title={t('form:input-label-description')}
          details={`${
            initialValues
              ? t('form:item-description-edit')
              : t('form:item-description-add')
          } ${t('form:author-form-description-details')}`}
          className="w-full px-0 pb-5 sm:w-4/12 sm:py-8 sm:pe-4 md:w-1/3 md:pe-5 "
        />

        <Card className="w-full sm:w-8/12 md:w-2/3">
          <Input
            label={t('form:input-label-name')}
            {...register('name')}
            error={t(errors.name?.message!)}
            variant="outline"
            className="mb-5"
          />

          {isSlugEditable ? (
            <div className="relative mb-5">
              <Input
                label={`${t('Slug')}`}
                {...register('slug')}
                error={t(errors.slug?.message!)}
                variant="outline"
                disabled={isSlugDisable}
              />
              <button
                className="absolute top-[27px] right-px z-10 flex h-[46px] w-11 items-center justify-center rounded-tr rounded-br border-l border-solid border-border-base bg-white px-2 text-body transition duration-200 hover:text-heading focus:outline-none"
                type="button"
                title={t('common:text-edit')}
                onClick={() => setIsSlugDisable(false)}
              >
                <EditIcon width={14} />
              </button>
            </div>
          ) : (
            <Input
              label={`${t('Slug')}`}
              {...register('slug')}
              value={slugAutoSuggest}
              variant="outline"
              className="mb-5"
              disabled
            />
          )}
          <Input
            label={t('form:input-label-languages')}
            {...register('languages')}
            error={t(errors.languages?.message!)}
            variant="outline"
            className="mb-5"
            placeholder={t('form:placeholder-add-languages-comma-separated')}
          />

          <div className="relative">
            {options?.useAi && (
              <OpenAIButton
                title="Generate Description With AI"
                onClick={handleGenerateDescription}
              />
            )}
            <TextArea
              label={t('form:input-label-bio')}
              {...register('bio')}
              variant="outline"
              className="mb-5"
            />
          </div>

          <div className="relative">
            {options?.useAi && (
              <OpenAIButton
                title="Generate Description With AI"
                onClick={handleGenerateDescription1}
              />
            )}
            <TextArea
              label={t('form:input-label-quote')}
              {...register('quote')}
              variant="outline"
              className="mb-5"
            />
          </div>

          <div className="mb-5 flex flex-col sm:flex-row">
            <div className="mb-5 w-full p-0 sm:mb-0 sm:w-1/2 sm:pe-2">
              <Label>{t('form:input-label-author-born')}</Label>
              <Controller
                control={control}
                name="born"
                render={({ field: { onChange, onBlur, value } }) => (
                  <DatePicker
                    dateFormat="dd/MM/yyyy"
                    onChange={onChange}
                    onBlur={onBlur}
                    //@ts-ignore
                    selected={value}
                    selectsStart
                    startDate={new Date()}
                    className="border border-border-base"
                  />
                )}
              />
              <ValidationError message={t(errors.born?.message!)} />
            </div>
            <div className="w-full p-0 sm:w-1/2 sm:ps-2">
              <Label>{t('form:input-label-author-death')}</Label>

              <Controller
                control={control}
                name="death"
                render={({ field: { onChange, onBlur, value } }) => (
                  <DatePicker
                    dateFormat="dd/MM/yyyy"
                    onChange={onChange}
                    onBlur={onBlur}
                    //@ts-ignore
                    selected={value}
                    selectsEnd
                    startDate={new Date()}
                    className="border border-border-base"
                  />
                )}
              />
              <ValidationError message={t(errors.death?.message!)} />
            </div>
          </div>
          {/* Social and Icon picker */}
          <div>
            {fields.map(
              (item: ShopSocialInput & { id: string }, index: number) => (
                <div
                  className="border-b border-dashed border-border-200 py-5 first:mt-5 first:border-t last:border-b-0 md:py-8 md:first:mt-10"
                  key={item.id}
                >
                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-5">
                    <div className="sm:col-span-2">
                      <Label>{t('form:input-label-select-platform')}</Label>
                      <SelectInput
                        name={`socials.${index}.icon` as const}
                        control={control}
                        options={updatedIcons}
                        isClearable={true}
                        defaultValue={item?.icon!}
                      />
                    </div>
                    {/* <Input
                        className="sm:col-span-2"
                        label={t("form:input-label-icon")}
                        variant="outline"
                        {...register(`socials.${index}.icon` as const)}
                        defaultValue={item?.icon!} // make sure to set up defaultValue
                      /> */}
                    <Input
                      className="sm:col-span-2"
                      label={t('form:input-label-social-url')}
                      variant="outline"
                      {...register(`socials.${index}.url` as const)}
                      defaultValue={item.url!} // make sure to set up defaultValue
                    />
                    <button
                      onClick={() => {
                        remove(index);
                      }}
                      type="button"
                      className="text-sm text-red-500 transition-colors duration-200 hover:text-red-700 focus:outline-none sm:col-span-1 sm:mt-4"
                    >
                      {t('form:button-label-remove')}
                    </button>
                  </div>
                </div>
              )
            )}
          </div>

          <Button
            type="button"
            onClick={() => append({ icon: '', url: '' })}
            className="w-full sm:w-auto"
          >
            {t('form:button-label-add-social')}
          </Button>
        </Card>
      </div>
      <div className="mb-4 text-end">
        {initialValues && (
          <Button
            variant="outline"
            onClick={router.back}
            className="me-4"
            type="button"
          >
            {t('form:button-label-back')}
          </Button>
        )}

        <Button loading={updating || creating}>
          {initialValues
            ? t('form:button-label-update-author')
            : t('form:button-label-add-author')}
        </Button>
      </div>
    </form>
  );
}
