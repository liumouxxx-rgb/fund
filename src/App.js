import { jsx as _jsx } from "react/jsx-runtime";
import '@/index.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { RouterRenderer } from './router';
export default function App() {
    return (_jsx(Router, { children: _jsx(RouterRenderer, {}) }));
}
