import notFound from "../components/images/not_found.png";

const DataNotFound = () => {
  return (
    <div style={styles.container}>
      <img src={notFound} alt="Data Not Found" style={styles.image} />
      <p style={styles.message}>Opps! Data not found.</p>
    </div>
  );
};

const styles = {
  container: {
    textAlign: "center",
    marginTop: "30px",
  },
  image: {
    width: "auto",
  },
  message: {
    fontSize: "24px",
    fontWeight: "bold",
    color: "#555",
  },
};

export default DataNotFound;
