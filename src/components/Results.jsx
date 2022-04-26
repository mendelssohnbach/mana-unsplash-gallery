const Results = ({ photo }) => {
  const handleSingleData = (data) => {
    console.log(`>>> ${data}`);
  };

  return (
    <div className="photo-list">
      {photo.map((singleData, index) => (
        <a
          href={singleData.links.html}
          key={index}
        >
          <img
            src={singleData.urls.regular}
            alt={singleData.alt_description}
            // onload={(data) => handleSingleData(data)}
          />
        </a>
      ))}
    </div>
  );
};

export default Results;
