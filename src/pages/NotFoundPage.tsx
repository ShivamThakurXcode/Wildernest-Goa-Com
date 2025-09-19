import { Link } from "react-router-dom";
import { Home } from "lucide-react";
import Button from "../components/ui/Button";
import { Helmet } from "react-helmet";

const NotFoundPage = () => {
  return (
    <>
      <Helmet>
        <title>Page Not Found | Wildernest Nature Resort</title>
      </Helmet>

      <div className="min-h-screen flex flex-col items-center justify-center px-4 text-center">
        <h1 className="text-6xl md:text-9xl font-bold text-primary-500 mb-6">
          404
        </h1>
        <h2 className="text-2xl md:text-3xl font-bold mb-4">Page Not Found</h2>
        <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-md">
          The page you're looking for doesn't exist or has been moved. Let's get
          you back to exploring our beautiful resort.
        </p>
        <Button as={Link} to="/" variant="primary">
          <Home size={18} className="mr-2" />
          Back to Home
        </Button>
      </div>
    </>
  );
};

export default NotFoundPage;
