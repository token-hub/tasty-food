function ErrorBoundary() {
  return (
    <div className="d-flex align-items-center justify-content-center vh-100 flex-column p-3 text-center">
      <h1 className="text-primary">Oh no!</h1>
      <p>Something went wrong, please try again later. T_T </p>
    </div>
  );
}
export default ErrorBoundary;
