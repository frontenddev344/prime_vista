import { Link } from "react-router-dom";
import { Home } from "lucide-react";

function SubBanner({ title, backgroundImage, breadcrumbs = [] }) {
  return (
    <div
      className="relative h-[50vh] flex items-center justify-center text-white"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative z-10 text-center">
        <h1 className="text-4xl md:text-5xl mb-2">
          {title}
        </h1>

        {/* Breadcrumbs */}
        <div className="flex items-center justify-center gap-2 text-base md:text-lg">
          {breadcrumbs.map((crumb, index) => (
            <span key={index} className="flex items-center gap-2">
              {crumb.link ? (
                <Link
                  to={crumb.link}
                  className="flex items-center gap-1 hover:text-icon"
                >
                  {/* Show icon only for Home */}
                  {index === 0 && <Home size={16} />}

                  {crumb.label}
                </Link>
              ) : (
                <span className="text-primary">{crumb.label}</span>
              )}

              {index !== breadcrumbs.length - 1 && <span>»</span>}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SubBanner;