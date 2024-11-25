import { ErrorMessageProps } from "./ErrorMessage.types";

const ErrorMessage = ({ error }: ErrorMessageProps) => {
  return (
    <div>
      <p>
        Some Error Occured <b>&quot;{error}&quot;</b>, Please Try Again
      </p>
    </div>
  );
};

export default ErrorMessage;
