function Button({ children, className, ...props }) {
  return (
    <button
      className={`px-3 py-2 bg-blue-700 rounded-md font-medium text-white hover:bg-blue-600 transition-colors duration-200 hover:ring ring-offset-1 ${className}`}
      {...props}>
      {children}
    </button>
  );
}

export default Button;
