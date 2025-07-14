interface RegisterButtonProps {
  variant?: "primary" | "navbar";
  className?: string;
  onClick?: () => void;
}

const RegisterButton = ({ 
  variant = "primary", 
  className = "", 
  onClick 
}: RegisterButtonProps) => {
  const baseClasses = "bg-gradient-to-r from-[#4DE1FF] to-[#00c5f6] hover:from-[#38c6e6] hover:to-[#0099cc] text-[#181C2F] font-bold rounded-full transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105";
  
  const variantClasses = {
    primary: "py-4 px-12 text-lg",
    navbar: "py-2 px-6 text-sm"
  };

  const buttonText = variant === "navbar" ? "Register" : "Register Now";

  return (
    <button 
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
      onClick={onClick}
    >
      {buttonText}
    </button>
  );
};

export default RegisterButton;
