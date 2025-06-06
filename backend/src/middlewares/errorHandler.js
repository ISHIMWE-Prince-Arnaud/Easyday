export default function errorHandler(err, req, res, next) {
  console.error("Error:", err.message);
  res.status(err.status || 500).json({ message: err.message || "Internal server error" });
}