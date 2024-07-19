
import HeroBannerComponent from './../../src/components/HeroBannerComponent/HeroBannerComponent';
import InsuranceTypesComponent from './../../src/components/InsuranceTypesComponent/InsuranceTypesComponent';
import WhyChooseUsComponent from './../../src/components/WhyChooseUsComponent/WhyChooseUsComponent';
import ManageInsuranceComponent from './../../src/components/ManageInsuranceComponent/ManageInsuranceComponent';
import InsurerPartnersComponent from './../../src/components/InsurerPartnersComponent/InsurerPartnersComponent';
import FAQComponent from './../../src/components/FAQComponent/FAQComponent';


const HomePage = () => {
  return (
    <div>
        <HeroBannerComponent />
        <InsuranceTypesComponent />
        <WhyChooseUsComponent />
        <ManageInsuranceComponent />
        <InsurerPartnersComponent />
        <FAQComponent />
    </div>
  );
};

export default HomePage;
