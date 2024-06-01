import React from "react";
import { CardJobs } from "../../components/Fragment/CardJobs";
import { HeroVacancy } from "../../components/Fragment/HeroVacancy";
import { SearchInput } from "../../components/Fragment/SearchInput";
import { SalaryFilter } from "../../components/Fragment/SalaryFilter";
import { NavbarClient } from "../../components/Fragment/NavbarClient";
import { FooterClient } from "../../components/Fragment/FooterClient";
import { JobTenureFilter } from "../../components/Fragment/JobTenureFilter";
import { CompanyCityFilter } from "../../components/Fragment/CompanyCityFilter";

export const VacancyLayout = () => {
  return (
    <>
      <NavbarClient />
      <HeroVacancy />
      <section className="w-full bg-[#F9F9F9] py-16">
        <div className="container mx-auto px-4 md:px-8 lg:px-16">
          <div className="flex flex-col gap-4 md:flex-row md:w-full lg:w-full">
            <div className="flex flex-col gap-4 md:flex-row md:w-4/5">
              <CompanyCityFilter />
              <JobTenureFilter />
              <SalaryFilter />
            </div>
            <div className="lg:w-1/4">
              <SearchInput />
            </div>
          </div>
        </div>
      </section>
      <section className="w-full bg-[#F9F9F9] pb-16">
        <div className="container mx-auto px-4 md:px-8 lg:px-16">
          <CardJobs />
        </div>
      </section>
      <FooterClient />
    </>
  );
};
