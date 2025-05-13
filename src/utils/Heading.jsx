const Heading = ({ title, text }) => {
  return (
    <div className="flex text-white flex-col items-center justify-center my-6">
      <h2 className="text-4xl font-semibold  mb-6">{title}</h2>
      <p className="text-lg max-w-4xl text-center leading-relaxed mb-4">
        {text}
      </p>
    </div>
  );
};

export default Heading;
