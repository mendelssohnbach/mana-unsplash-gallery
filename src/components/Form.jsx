const Form = ({ setWord, getPhotoData }) => {
  return (
    <form>
      <input
        type="text"
        name="keyword"
        placeholder="Search keyword"
        onChange={(e) => setWord(e.target.value)}
      />
      <button
        type="submit"
        onClick={getPhotoData}
        className="btn"
      >
        Search
      </button>
    </form>
  );
};

export default Form;
