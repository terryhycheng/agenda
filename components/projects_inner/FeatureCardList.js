import FeatureCard from "./FeatureCard";

const FeatureCardList = ({ project }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 justify-items-center">
      {project.features.map((feature, index) => (
        <FeatureCard project={project} feature={feature} key={index} />
      ))}
    </div>
  );
};

export default FeatureCardList;
