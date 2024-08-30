const Loader = () => {
  return (
    <div style={{height: "100vh", display: "flex" , justifyContent: "center",alignItems: "center"}}>
      <div className="d-flex justify-content-center">
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    </div>
  );
}

export default Loader