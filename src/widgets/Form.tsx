import Image from 'next/image';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

import { AncorIds } from '@/app/constants';
import Map from '@/shared/assets/img/formap.png';
import { Button } from '@/shared/ui/Button';
import { Section } from '@/shared/ui/Section';

import { FormModal } from './FormModal';

export const Form = () => {
  const { t } = useTranslation();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    field1: '',
    field2: '',
    field3: '',
    field4: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    setIsModalOpen(true);
    e.preventDefault();
  };
  return (
    <Section ancorId={AncorIds.Contacts} className="scroll-mt-20 gap-10 pb-30 md:gap-20">
      <span className="title">{t('feedBackForm.title')}</span>

      <form onSubmit={handleSubmit} className="flex w-[90%] flex-col gap-4 md:w-[50%]">
        <input
          type="text"
          name="field1"
          value={formData.field1}
          onChange={handleChange}
          placeholder={t('feedBackForm.form.name')}
          className="border border-[#585858] p-3 text-center placeholder:text-[#3F3F3F] focus:border-2 focus:border-amber-500 focus:outline-none md:p-6"
        />
        <input
          type="text"
          name="field2"
          value={formData.field2}
          onChange={handleChange}
          placeholder={t('feedBackForm.form.email')}
          className="border border-[#585858] p-3 text-center placeholder:text-[#3F3F3F] focus:border-2 focus:border-amber-500 focus:outline-none md:p-6"
        />
        <input
          type="text"
          name="field3"
          value={formData.field3}
          onChange={handleChange}
          placeholder={t('feedBackForm.form.whatsapp')}
          className="border border-[#585858] p-3 text-center placeholder:text-[#3F3F3F] focus:border-2 focus:border-amber-500 focus:outline-none md:p-6"
        />
        <input
          type="text"
          name="field4"
          value={formData.field4}
          onChange={handleChange}
          placeholder={t('feedBackForm.form.request')}
          className="border border-[#585858] p-3 text-center placeholder:text-[#3F3F3F] focus:border-2 focus:border-amber-500 focus:outline-none md:p-6"
        />
        <div className="flex w-full items-center justify-center">
          <Button variant="button" text={t('feedBackForm.form.btn')} />
        </div>
      </form>

      <FormModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <span className="text-center">{t('feedBackForm.formModal.title')}</span>
        <button onClick={() => setIsModalOpen(false)} className="bg-white p-2 text-black">
          {t('feedBackForm.formModal.btn')}
        </button>
      </FormModal>

      <div className="absolute bottom-0 -z-10 h-40 w-screen md:h-130">
        <Image src={Map} alt="map" className="absolute bottom-0 border" />
        <div className="flex">
          <div className="animate-brightness absolute bottom-[8%] left-[10%] flex h-3 w-3 items-center justify-center bg-white filter"></div>
          <div className="animate-brightness absolute top-[0%] left-[32%] flex h-3 w-3 items-center justify-center bg-white filter"></div>
          <div className="animate-brightness absolute bottom-[15%] left-[35%] flex h-3 w-3 items-center justify-center bg-white filter"></div>
          <div className="animate-brightness absolute bottom-[50%] left-[23%] flex h-3 w-3 items-center justify-center bg-white filter"></div>
          <div className="animate-brightness absolute right-[12%] bottom-[25%] flex h-3 w-3 items-center justify-center bg-white filter"></div>
          <div className="animate-brightness absolute top-[25%] right-[30%] flex h-3 w-3 items-center justify-center bg-white filter"></div>
          <div className="animate-brightness absolute right-[36%] bottom-[10%] flex h-3 w-3 items-center justify-center bg-white filter"></div>
        </div>
      </div>
    </Section>
  );
};
