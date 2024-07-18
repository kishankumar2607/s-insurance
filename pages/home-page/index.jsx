
import HeroBanner from './../../src/components/HeroBanner';
import InsuranceTypes from './../../src/components/InsuranceTypes';
import WhyChooseUs from './../../src/components/WhyChooseUs';
import ManageInsurance from './../../src/components/ManageInsurance';
import InsurerPartners from './../../src/components/InsurerPartners';
import FAQ from './../../src/components/FAQ';


const HomePage = () => {
  return (
    <div>
        <HeroBanner />
        <InsuranceTypes />
        <WhyChooseUs />
        <ManageInsurance />
        <InsurerPartners />
        <FAQ />
    </div>
  );
};

export default HomePage;
