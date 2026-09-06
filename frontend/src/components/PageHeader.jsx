const PageHeader = ({ title, description }) => {
  return (
    <div className="mb-6">
      <h1 className="text-3xl font-bold text-white">{title}</h1>

      <p className="text-slate-400 mt-2">{description}</p>
    </div>
  );
};

export default PageHeader;
