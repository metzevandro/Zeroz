import Icon from "../Icon/Icon";
import "./Loading.scss";

interface LoadingProps {
  variant: "default" | "success" | "warning" | "large";
  message?: string;
}

const Loading: React.FC<LoadingProps> = ({ variant, message }) => {
  return (
    <>
      {variant === "default" && (
        <div className="loading-with-message">
          <span className="loading">
            <Icon size="sm" icon="progress_activity" />
          </span>
          {message && <p className="loading-message">{message}</p>}
        </div>
      )}
      {variant === "large" && (
        <span className="loading">
          <Icon size="extra-large" icon="progress_activity" />
        </span>
      )}
      {variant === "success" && (
        <div className="loading-with-message">
          <span className="success">
            <Icon size="sm" icon="check_circle" />
          </span>
          {message && <p className="loading-message">{message}</p>}{" "}
        </div>
      )}
      {variant === "warning" && (
        <div className="loading-with-message">
          <span className="warning">
            <Icon size="sm" icon="error_outline" />
          </span>
          {message && <p className="loading-message">{message}</p>}{" "}
        </div>
      )}
    </>
  );
};

export default Loading;
