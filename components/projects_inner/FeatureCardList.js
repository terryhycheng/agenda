import FeatureCard from "./FeatureCard";

const FeatureCardList = ({ features }) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 justify-items-center">
      {features.map((feature, index) => (
        <FeatureCard feature={feature} key={feature._key} />
      ))}
    </div>
  );
};

export default FeatureCardList;
