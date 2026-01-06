import React from "react";
import { Heading, MaxContainer, BrandsCard } from "..";
import { useTranslation } from "react-i18next";
import { useGetBrandsByDeptIdQuery } from "@/redux/api/brandsApi";
import Marquee from "react-fast-marquee";

const HomeBrands = () => {
  const { t } = useTranslation();
  const { data } = useGetBrandsByDeptIdQuery();

  return (
    <div className="relative py-20">
      <Heading variant="big">{t("home.brands")}</Heading>
      <MaxContainer className="relative">
        <Marquee
          speed={150}
          gradient={false}
          className="mx-auto max-w-[1100px]"
          pauseOnClick
          pauseOnHover
        >
          <div className="flex gap-10 px-5">
            {data?.data?.map((d) => (
              <BrandsCard brand={d} key={d?._id} />
            ))}
          </div>
        </Marquee>
      </MaxContainer>
    </div>
  );
};

export default HomeBrands;
