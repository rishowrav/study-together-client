import Card from "../../../components/Card/Card";
// import CardExprement from "../CardExprement/CardExprement";

const FeatureSection = () => {
  return (
    <div className="space-y-10">
      <h2 className="text-6xl font-bold text-center">Feature</h2>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8">
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
      </div>
    </div>
  );
};

export default FeatureSection;
