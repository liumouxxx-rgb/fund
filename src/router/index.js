import { jsx as _jsx } from "react/jsx-runtime";
import { Routes, Route } from 'react-router-dom';
import { routes } from './routes';
export const RouterRenderer = () => {
    return (_jsx(Routes, { children: routes.map(({ path, element: Component }) => (_jsx(Route, { path: path, element: _jsx(Component, {}) }, path))) }));
};
