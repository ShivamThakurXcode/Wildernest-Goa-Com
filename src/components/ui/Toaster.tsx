import { useState, useEffect, ReactNode } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle, AlertCircle, XCircle, Info, X } from 'lucide-react';
import { createRoot } from 'react-dom/client';

export type ToastType = 'success' | 'error' | 'warning' | 'info';
export type ToastPosition = 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left';

interface ToastProps {
  id: string;
  type: ToastType;
  title: string;
  message?: string;
  duration?: number;
  position?: ToastPosition;
  onClose: (id: string) => void;
}

const Toast = ({ 
  id, 
  type, 
  title, 
  message, 
  duration = 5000, 
  position = 'bottom-right', 
  onClose 
}: ToastProps) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose(id);
    }, duration);

    return () => clearTimeout(timer);
  }, [duration, id, onClose]);

  const icons = {
    success: <CheckCircle className="h-6 w-6 text-success-500" />,
    error: <XCircle className="h-6 w-6 text-error-500" />,
    warning: <AlertCircle className="h-6 w-6 text-warning-500" />,
    info: <Info className="h-6 w-6 text-secondary-500" />
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 20, scale: 0.9 }}
      transition={{ duration: 0.2 }}
      className="w-full max-w-sm overflow-hidden rounded-lg bg-white dark:bg-gray-800 shadow-lg ring-1 ring-black ring-opacity-5 mb-3"
    >
      <div className="p-4">
        <div className="flex items-start">
          <div className="flex-shrink-0">
            {icons[type]}
          </div>
          <div className="ml-3 w-0 flex-1">
            <p className="text-sm font-medium text-gray-900 dark:text-white">{title}</p>
            {message && <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">{message}</p>}
          </div>
          <button
            type="button"
            className="ml-4 flex-shrink-0 rounded hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none p-1"
            onClick={() => onClose(id)}
          >
            <X className="h-5 w-5 text-gray-400 hover:text-gray-500" />
          </button>
        </div>
      </div>
    </motion.div>
  );
};

type ToastOptions = Omit<ToastProps, 'id' | 'onClose'>;

interface ToasterState {
  toasts: ToastProps[];
}

interface ToasterContextType {
  toast: (options: ToastOptions) => string;
  remove: (id: string) => void;
}

const toastContext: ToasterContextType = {
  toast: () => '',
  remove: () => {}
};

// Setup singleton pattern
const createToaster = () => {
  let state: ToasterState = {
    toasts: []
  };

  let subscribers: ((state: ToasterState) => void)[] = [];

  const notifySubscribers = () => {
    subscribers.forEach(subscriber => subscriber({ ...state }));
  };

  const addToast = (options: ToastOptions): string => {
    const id = Math.random().toString(36).substr(2, 9);
    state.toasts = [...state.toasts, { ...options, id, onClose: removeToast }];
    notifySubscribers();
    return id;
  };

  const removeToast = (id: string) => {
    state.toasts = state.toasts.filter(toast => toast.id !== id);
    notifySubscribers();
  };

  return {
    toast: addToast,
    remove: removeToast,
    subscribe: (callback: (state: ToasterState) => void) => {
      subscribers.push(callback);
      return () => {
        subscribers = subscribers.filter(sub => sub !== callback);
      };
    }
  };
};

const toasterInstance = createToaster();

// Update context
toastContext.toast = toasterInstance.toast;
toastContext.remove = toasterInstance.remove;

// Export simplified functions
export const toast = (options: ToastOptions) => toasterInstance.toast(options);

// The actual Toaster component
export const Toaster = () => {
  const [state, setState] = useState<ToasterState>({ toasts: [] });

  useEffect(() => {
    const unsubscribe = toasterInstance.subscribe(setState);
    return unsubscribe;
  }, []);

  const positions: Record<ToastPosition, string> = {
    'top-right': 'top-0 right-0',
    'top-left': 'top-0 left-0',
    'bottom-right': 'bottom-0 right-0', 
    'bottom-left': 'bottom-0 left-0'
  };

  // Group toasts by position
  const toastsByPosition: Record<ToastPosition, ToastProps[]> = {
    'top-right': [],
    'top-left': [],
    'bottom-right': [],
    'bottom-left': []
  };
  
  state.toasts.forEach(toast => {
    const position = toast.position || 'bottom-right';
    toastsByPosition[position].push(toast);
  });

  return (
    <div className="fixed inset-0 flex pointer-events-none z-50">
      {(Object.entries(toastsByPosition) as [ToastPosition, ToastProps[]][]).map(([position, toasts]) => (
        <div key={position} className={`p-4 ${positions[position]} flex flex-col ${position.includes('top') ? 'items-start' : 'items-end'}`}>
          <AnimatePresence>
            {toasts.map(toast => (
              <div key={toast.id} className="pointer-events-auto w-full">
                <Toast {...toast} />
              </div>
            ))}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
};

export default Toaster;