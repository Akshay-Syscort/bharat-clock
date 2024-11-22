const CurrentDateTime = () => {
  let date = Date().toLocaleLowerCase();

  return (
    <div>
      <p>This is teh current time {date}</p>
    </div>
  );
};
export default CurrentDateTime;
